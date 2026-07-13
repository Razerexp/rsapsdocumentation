---
title: "47. Deck Day 5 — AMIS API, ENS, Troubleshooting & Logging (Slides 62–96)"
sidebar_position: 47
---

# 47. Deck Day 5 — AMIS API, ENS, Troubleshooting & Logging (Slides 62–96)


*Slide 62 — Day 5 Divider — AMIS API, ENS, Troubleshooting & Logging*

![](/img/63.jpeg)

## 47.1 The AMIS API, Formally (Slides 63–69)

*Slide 63 — AMIS API Divider*

![](/img/64.jpeg)

*Slide 64 — AMIS API Calls — Overview*

![](/img/65.jpeg)

The formal statement of the API model demonstrated in Sections 7.3 and 11: authentication is an HTTP POST to /auth/authn; each authentication type (RBA, token, SSO, questions…) carries a distinct POST body; multiple authentication profiles are supported with a default when unspecified (Section 10.3.2's profiles). Deck-only precision — the header names: session-token calls carry RSA\_AUTHENTICATION\_TOKEN:`<value>`; service-account token calls carry RSA\_SERVICE\_TOKEN=`<svctoken>`. The live Postman demos used these headers implicitly; the deck names them for anyone building an integration from scratch.

*Slide 65 — Username and Passcode Example*

![](/img/66.jpeg)

The worked request/response pair behind Section 7.3's demo. The XML response anatomy worth memorizing: authenticated (true/false), authenticationToken (the 8-digit session token — Section 8.2's machine-ID-encoded value), code/failed/message (ACCESS\_OK on success), and publicID.

*Slide 66 — Username and Passcode Example, Continued*

![](/img/67.jpeg)

Decodes publicID — userID / authentication method / session-specific GUID — and states the usage contract: include the returned token as the RSA\_AUTHENTICATION\_TOKEN header on every subsequent AMIS call (the example given: setting a new PIN for a user).

*Slide 67 — Service Account Example*

![](/img/68.jpeg)

The service-account request (type="serviceAccount" against profile sspauth) and its response — showing the newServiceAccountPassword tag in the wild: the rotating password arriving in the response body, exactly as taught in Section 11.2 and security-debated in Section 11.4. This slide is the client developer's contract: watch for this tag, persist the value, use it next time.

*Slide 68 — Service Account Example, Continued*

![](/img/69.jpeg)

Completes the lifecycle narrative: initial admin-set password → system-generated replacement in the response → policy block visible in the designated custom identity attribute in the Security Console (Section 11.2.2's encrypted expiry attribute, seen from the console side).

*Slide 69 — AMIS API with the CAS*

![](/img/70.jpeg)

The checklist for enabling cloud authentication through AMIS: tenant ID, platform API key, one or more cloud auth policies, tenant auth API URL, and optional outbound proxy details — wired via the setenv.sh mobile.\* variables of slides 26–27. The proxy note is deck-only: environments requiring an egress proxy for AMIS→cloud traffic must configure it here.

## 47.2 API Call Reference (Slides 70–85)

Deck-only reference module. Sixteen slides forming a request-by-request API cookbook — the visual companion to the API Reference Guide (Section 7.3). Each slide pairs the request format with its response; the commentary below extracts the operational facts. Common conventions across the user/token calls: UserSearchString is wildcard-searchable on the userID, and SearchType scopes matching as Equals, Begins With, Ends With, or Contains.

*Slide 70 — User/Token Authentication*

![](/img/71.jpeg)

Passcode authentication establishing the AMIS session; session length governed by the idle and maximum lifetime settings of Section 8.5.

*Slide 71 — Service Account Authentication*

![](/img/72.jpeg)

The service-account variant of session establishment — same token usage downstream.

*Slide 72 — Auth Session Validation*

![](/img/73.jpeg)

Validates whether a session token is still live — and, deck-only detail: a successful validation also refreshes the idle-timeout counter. Integrations can therefore use periodic validation as a keep-alive; conversely, a monitoring probe that validates tokens will keep sessions alive unintentionally.

*Slide 73 — Search User*

![](/img/74.jpeg)

User lookup with optional sd= security-domain scoping — the multi-tenancy lever from slide 12 in API form.

*Slide 74 — Enable User*

![](/img/75.jpeg)

*Slide 75 — Disable User*

![](/img/76.jpeg)

*Slide 76 — Create User*

![](/img/77.jpeg)

User creation (enabled or disabled) with the optional custom-attribute set: activation code, alternate email, phone, SMS email provider, VPN certification, default shell, UserAliasAuthenticationType (ALIAS/DEFAULT), and RADIUS profile name. Email and password are optional. This is the API behind programmatic onboarding integrations (ServiceNow/SailPoint flows from slide 7's capability list).

*Slide 77 — Create User with a Custom Attribute*

![](/img/78.jpeg)

The worked example combining custom attribute, default shell, alias, and RADIUS profile values in one create call.

*Slide 78 — Clear PIN*

![](/img/79.jpeg)

Removes the PIN from a token record; next token use enters new-PIN mode.

*Slide 79 — Disable / Enable Token*

![](/img/80.jpeg)

*Slide 80 — Token Search by Serial Number*

![](/img/81.jpeg)

*Slide 81 — Token Search by UserID*

![](/img/82.jpeg)

Returns users with all their tokens at high-level detail — the roster call; pair with slide 82 for depth on a specific token.

*Slide 82 — Token Info by Serial Number*

![](/img/83.jpeg)

Full token detail — more fields than the search calls return.

*Slide 83 — Replace Token — Specific Serial Number*

![](/img/84.jpeg)

Replaces the current token with a named serial and puts the new token in new-PIN mode; the user completes replacement by authenticating with their existing PIN.

*Slide 84 — Emergency Access*

![](/img/85.jpeg)

Deck-only parameters worth memorizing.

Sets a fixed passcode for emergency access with a duration in minutes — the API behind both HDAP's emergency-access operation (slide 15) and VTS's code generation (Section 32.1). The lostMode parameter controls concurrent token behavior: tokenauthdisablesea (token authentication allowed at any time and disables the emergency code), denytokenauth (token authentication refused for the emergency code's duration), and tokenonlyafterexpire (token authentication only after the emergency code expires). Choosing among these is a real security-design decision: deny-token is the strict-custody option; disable-on-token-use is the user-friendly one.

*Slide 85 — Move Token to Security Domain*

![](/img/86.jpeg)

Relocates a token between security domains — the API form of the domain organization Quick Setup establishes (Section 6.4).

## 47.3 ENS2 — Expiry Notification Service Configuration (Slides 86–89)

Deck-only procedure. ENS was introduced in one sentence on Day 1 (Section 3.3); the deck supplies the full installation, which is nontrivial because ENS reads the AM database directly through a purpose-created read-only account:

*Slide 86 — ENS Divider*

![](/img/87.jpeg)

*Slide 87 — ENS2 — Setup, Part 1*

![](/img/88.jpeg)

ENS2 rides the AMIS workflow notification framework, sending individual end-user alerts plus post-run summary reports to an admin alias. Setup begins on the AM primary: SCP ens-grants.sql and grant-ens.sh from ens2/config to the AM primary, place them in /home/rsaadmin/dbgrants, chmod 755 the script, and navigate to /opt/rsa/am/utils.

*Slide 88 — ENS2 — Setup, Part 2: The Read-Only Database User*

![](/img/89.jpeg)

Create the read-only DB account with rsautil manage-readonly-dbusers -a create -o `<ocadmin>` -u ensreadonly -i &lt;AMIS\_IP&gt; (2–3 minutes; prompts for the OC password and a password for the new account), retrieve the DBA password via rsautil manage-secrets -a listall, then run ./grant-ens.sh from the dbgrants directory, pasting the DBA password when prompted. This grants the notification queries their read path into the AM database — the 'taps the AM database via report downloads' mechanism from Section 3.3, now concrete.

*Slide 89 — ENS2 — Setup, Part 3: Template Builder and Test Mode*

![](/img/90.jpeg)

Client-side configuration follows the family pattern: load ens2-configuration.apt in Template Builder (third appearance: Bulk Update, Bulk Invite, now ENS), supplying db.server (AM primary IP), db.user.id/db.password (the new read-only account), the unencrypted amis.service.token, and amis.endpoint.url = http://localhost:8080/rsa-endpoints (slide 12's RSA endpoints service). Generate, back up, and replace ens2.properties; back up and edit ens2-config.xml — set a real administrator email and, critically, keep testMode enabled="true" until the configuration is proven (test mode prevents accidental mass-mailing an entire user population — the deck's most important ENS safety note). Run with ../java/latest/bin/java -jar Main.jar from the ens2 directory; schedule via cron once validated.

## 47.4 Logging, Versions, and the Formal Patch Procedure (Slides 90–96)

*Slide 90 — Logging & Troubleshooting Divider*

![](/img/91.jpeg)

*Slide 91 — Troubleshooting Tips*

![](/img/92.jpeg)

Section marker for the troubleshooting module — the deck's counterpart to the dedicated live module still owed (Sections 28.4, 41.2). The methodology delivered live: clear logs, reproduce, read to the line number, change one variable.

*Slide 92 — Important Log Files*

![](/img/93.jpeg)

Placeholder for the log-file map — the exact content the promised troubleshooting session will supply (error classes mapped to their log files, per the trainer's commitment).

*Slide 93 — How to Identify AMIS Version*

![](/img/94.jpeg)

Deck-only tooling.

Two bundled scripts report the Prime application versions plus the JRE and Tomcat binary versions: ./java\_tomcat\_prime\_versions.sh and ./gather\_logs.sh (the latter doubles as the log-collection tool from Section 10.2's scripts folder). 'What version are you running' is the first question on every support engagement — this is the one-command answer, and gather\_logs.sh is the artifact to request from customers who can export files.

*Slide 94 — Managing Prime Services*

![](/img/95.jpeg)

The service-command reference repeated (see slide 23), with the standing rule: restart the corresponding service after any configuration change — which is precisely where Section 28's restart-discipline pattern applies.

*Slide 95 — Applying Patches / Prime WAR Files — The Formal Procedure*

![](/img/96.jpeg)

Deck-only detail that completes Section 33.5.

The Day 2 live session showed the streamlined patches-folder workflow; the deck documents the underlying manual procedure — necessary knowledge when the automation isn't present or misbehaves. Steps: back up the old WARs first; replace WARs in tomcat/tomcat-`<app>`/webapps/; remove the exploded WAR directories in webapps before starting the service; empty (do not delete) the Tomcat work directory; start the service and monitor Tomcat CPU to confirm deployment completion. Two gotchas the live session never surfaced: skipping the exploded-directory removal leaves stale classes serving old code after a 'successful' patch, and SSP and HDAP require a second service restart after the WAR deploys. Add both to the patching entry in the reconciliation with Section 33.5.

*Slide 96 — Common Prime Issues — All Users Fail to Authenticate to the SSP*

![](/img/97.jpeg)

The deck's marquee failure scenario. The field diagnostic sequence for it assembles from this guide: expired AMS Bind password or compromised credentials (Section 27.3), an expired internal certificate surfacing after restart (Section 28.2), the SSP bind passcode mismatch (slide 28), or the LB health check pulling nodes (slide 52). A universal 'all users' failure almost always means a shared dependency — bind account, certificate, or AMIS reachability — rather than user data.
