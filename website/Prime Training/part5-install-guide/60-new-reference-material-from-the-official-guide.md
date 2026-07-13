---
title: "New Reference Material from the Official Guide"
sidebar_position: 60
---

# New Reference Material from the Official Guide


## The Architecture Diagrams

The guide's three diagrams are the best in the program — current, port-labeled, and legend-keyed (AM Admin APIs, SecurID token auth protocol, REST, HTTPS/HTTP, SMTP, DNS, CT-KIP SOAP, LDAPS). They should be the default artwork for customer design documents, superseding the older diagrams of Parts III–IV:

*Figure V-1 — SecurID Access Prime High-Availability \+ Authentication Manager (Install Guide v2.0, p.6)*

![](/img/153.jpeg)

*Figure V-2 — Prime \+ AM \+ Cloud Authentication Service/MFA, High-Level (p.7)*

![](/img/154.jpeg)

*Figure V-3 — Prime \+ AM \+ CAS/MFA, Detailed with Port Labels (p.8)*

![](/img/155.jpeg)

Figure V-3 deserves special note: it labels every path — 8443/8444/8445 behind the 3-VIP internal LTM, UDP 5500 (rsa auth) and TCP 7002 (rsa api) to AM, TCP 7022 (ct-kip) through the web tier, LDAPS 636 to AD, SMTP 25, and the named cloud endpoints — making it a one-page answer to nearly every firewall and data-flow question a customer security review can ask.

## The PQS Output Log: Exact Object Inventory

The guide reproduces Quick Setup's full console output, giving the exact names of every object PQS creates — upgrading Section 6.4's functional list and slide 27's checklist into an audit script: identity attributes onetime, userlogs, serviceAccountPolicy; Prime Service Password Policy and Prime Service Token Policy; security domains service-accounts and amis-bind-accounts (with the policies attached to each); administrative roles authimpersonate, HDA-Admins, and service-accountrole1; the agent host record; the sdconf.rec download, extracted to configs/amis/auth/; user amisbind with SuperAdminRole and user sspbind with authimpersonate; the SSP bind passcode update; and the three application config-file updates. The output also shows PQS validating time synchronization between AM and the Prime server (UTC-converted comparison) and closing with three recommended next steps: review the quick-setup log, verify time sync, start services. Two diagnostic notes visible in the sample runs: a pre-existing object produces a non-fatal 'already exist' error and PQS continues (idempotent-ish re-runs are tolerated), and clock skew is checked because it breaks token authentication — a first-hour troubleshooting item the training never mentioned.

## Default HTTP Configuration and Sample URLs

The guide states the out-of-box TLS identity of each service — AMIS 8443 (self-signed CN amis.company.com, alias 'amis'), SSP 8444 (ssp.company.com, 'ssp'), HDAP 8445 (hdap.company.com, 'hdap') — plus sample validation URLs (https://`<fqdn>`:8443/auth/statistics, :8444, :8445). It even includes a vi cheat sheet (dd, x, o, i, Esc, /search, n, :x, :q\!, :w) — a small kindness acknowledging that Prime configuration is a vi-driven life, and worth printing for SCIF trips where no reference material can be carried in.

## Console Navigation Paths for Every Prerequisite

The Windows PQS prerequisites section supplies the click-paths Sections 5 and 22 described from memory: AM Authentication API key at Setup → System Settings → RSA SecurID Authentication API (enable the API, copy the Access Key, note communication port 5555); CAS Organization ID at My Account → Company Settings → Company Information; access-policy creation at Access → Policies (Add a Policy → name → identity sources → leave primary authentication disabled → All Users → Additional Authentication Required at assurance level LOW → Save and Finish); and OAuth client creation at Platform → API Access Management (Add API Client → name → Client ID → Generate Key Pair (RSA) → Autofill public key → Download the private key before closing the window → enable permissions → Save and Finish → Publish Changes). The two easy-to-miss steps the guide makes explicit: the private-key download is only offered once, and nothing takes effect until Publish.

## Windows Installation Path

The guide gives Windows parity for everything Linux: install root C:\\RSA, extract the Windows kit, run RunPrimeQuickSetup.bat from scripts\\tools; services register as Windows services (Apache Tomcat 9.x: tomcat-amis/ssp/hdap) managed via the Services console or net start|stop tomcat-`<svc>`; the sample output shows the kit's bundled versions (JDK 8u442, Tomcat 9.0.104) and the symlink-equivalent 'latest' pointers being created. One artifact in the sample log worth recognizing: a first-run 'service does not exist' deletion error during service registration is normal noise, not a failure.

## Login Tests and Authentication-Monitor Verification Chains

The guide's validation procedure adds a step Section 22's runbook lacked: before testing, add at least one administrator to the HDA-Admins role (HDAP logins require it). It then documents the expected Authentication Monitor event chains — for an SSP login: (1) the user attempts SSP login, (2) amis-bind authenticates to AM via RSA\_Password, (3) sspbind authenticates via AMIS — and for HDAP: the user attempt followed by the amis-bind authentication. Knowing the healthy chain shape makes the monitor diagnostic: a missing sspbind event isolates the SSP→AMIS leg; a missing amis-bind event isolates the AMIS→AM leg — a triage rule that belongs beside slide 96's 'all users fail' scenario.

## External SSP: The Must-Match Parameter List

The external-SSP module confirms Part III slides 57–58 and adds the guide's most operationally precise table: after scripts 1–3 and cloning config.sh.example, the external node's config.sh takes -Damis.remote.port=8443, -Damis.remote.vip (the internal AMIS VIP), -Damis.remote.protocol=https — and then a highlighted set that must match the internal-facing SSP's config.sh identically: webtier.rba.url, ssp.endpoint, the ssp.service.account.userid and passcode ENC values, amisdebugvar, and mobile.auth.admin.integration.enabled. The amisdebugvar entry matters most: because it is the encryption key (Sections 27.2, Part IV slide 30), the external node can only decrypt the shared ENC credentials if it carries the *same* key as the internal node — the guide's highlighting is the field-error vaccine. It also lists the business case for external SSP verbatim (new-joiner enablement before token/network access; off-VPN PIN reset, token request/replacement/test, lost-token reporting, and emergency access) — ready-made scoping language.
