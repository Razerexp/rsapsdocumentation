---
title: "43. Deck Day 1 — Introduction, Architecture & Quick Setup (Slides 1–29)"
sidebar_position: 43
---

# 43. Deck Day 1 — Introduction, Architecture & Quick Setup (Slides 1–29)


## 43.1 Framing and Curriculum (Slides 1–5)

*Slide 1 — Title — RSA SecurID Access Prime Training*

![](/img/2.jpeg)

The master title slide, crediting authorship (Nadine Elaasy; supervision Sean P. Doyle and Ramesh Anand). This is the ~104-slide 'training master' referenced in the Day 2 materials discussion (Section 31.3).

*Slide 2 — High-Level Training Plan (1 of 2)*

![](/img/3.jpeg)

Modules 1–5 of the deck's ten-module plan: Prime introduction (functionality, benefits, target audience), architecture deep dive, installation via Quick Setup, certificate management, and configuration files including logs. All five received live coverage: Parts I–II Sections 3–10 and 26–28.

*Slide 3 — High-Level Training Plan (2 of 2)*

![](/img/4.jpeg)

Modules 6–10: External Prime installation, PrimeKit tools (ENS and the SSP Bulk Enrollment/Invite utility), daily administrative tasks, hands-on labs throughout, and Q&A. Modules 6 and 7 are the largest deck-only gaps in our live delivery — covered below in Chapters 46 (External SSP, Bulk Invite) and 47 (ENS).

*Slide 4 — Timetable — The Five-Day Plan*

![](/img/5.jpeg)

The deck's intended pacing: Day 1 introduction/architecture/quick setup; Day 2 SSP configuration (authentication methods, device types, PIN/password policies, AD password reset, branding, language support); Day 3 certificates and HDAP; Day 4 External SSP and Bulk Invite; Day 5 AMIS APIs, ENS, and troubleshooting/logging. Comparing this against the two-day live delivery (Section 41.1's curriculum map) shows exactly what was compressed and what was deferred — this timetable is effectively the syllabus for the material Part III restores.

*Slide 5 — Day 1 Divider — Prime Introduction, Architecture & Quick Setup*

![](/img/6.jpeg)

## 43.2 What Prime Is and Why It Exists (Slides 6–7)

*Slide 6 — What is RSA SecurID Access Prime?*

![](/img/7.jpeg)

Section divider for the introduction. The live treatment of this question is Part I Section 3 — Prime as a continuously evolving suite atop AM and CAS.

*Slide 7 — Why Does Prime Exist?*

![](/img/8.jpeg)

The slide's speaker notes carry the deck's most complete capability inventory — twelve items worth preserving verbatim in field vocabulary: integration with existing IT portals, SSO frameworks and lifecycle tools; RSA authenticator activation and self-service workflows; automation of soft-token provisioning; self-registration for hardware token deployment; secure 2FA/MFA onboarding via email invitation; multi-tenancy and delegated help desk support; authentication-hub architecture deployment; optional forgot/reset password features; bulk onboarding; brandable and configurable portals; full auditing via syslog; and a REST API with custom authentication extensions and authenticator lifecycle controls, commonly consumed by ServiceNow, SailPoint, RSA IGL, and custom portals. Cross-reference: Section 3.4 ('Why Prime Exists') gives the trainer's spoken version; this list is the formal statement — useful nearly verbatim in customer-facing scoping documents.

## 43.3 Architecture Diagrams and the Network Matrix (Slides 8–11)

*Slide 8 — Hybrid Prime Architecture*

![](/img/9.jpeg)

The reference diagram for hybrid (AM \+ CAS) deployments. The notes give the two canonical flows: end users traverse SSP → AMIS → AM/Cloud; the IT team traverses HDAP → AMIS → AM/Cloud — everything through AMIS, never direct. Cross-reference: Sections 3.1 and 9.1. This is the diagram to reuse in customer design documents.

*Slide 9 — On-Prem Only Prime Architecture*

![](/img/10.jpeg)

The same component flow without the cloud leg — the shape of every classified and cloud-restricted deployment discussed in the SCIF threads (Sections 12.3, 33.1). Same AMIS-centric flows apply.

*Slide 10 — Network and Infrastructure — Port Matrix*

![](/img/11.jpeg)

Deck-only material — the definitive firewall reference.

The live sessions covered application listener ports (8443/8444/8445, Section 7.2) but never the full inter-component matrix. The deck supplies it. External/DMZ: external LB → AM web tier HTTPS/443; web tier → AM servers TLS/7022; external SSP → AMIS SSL/443. Internal: internal LB → AMIS HTTP(S)/443; AMIS → AM servers HTTPS/7002; AMIS workflow → mail MTA SMTP/25; AMIS agent → AM servers RSA agent protocol UDP/5500; AMIS → CAS HTTPS/443; AMIS → Postgres HTTPS/7050. Internal AMIS Tomcat ports: TCP 8080, 8005, 8009 (disable unless used) and SSL 8443. Every firewall-request spreadsheet for a Prime engagement starts from this slide — note the UDP/5500 agent path and the 7002/7022 AM ports, which are the ones customers most often miss.

*Slide 11 — Adoptium Java & Apache Tomcat*

![](/img/12.jpeg)

Deck-only depth on the runtime stack.

Beyond Part I's Java/Tomcat versioning story (Section 4.2), this slide records three facts the live sessions never mentioned: Prime uses Eclipse Adoptium OpenJDK specifically; PS Engineering builds Tomcat from source with the TCNative OpenSSL integration, offloading TLS and TCP socket handling from Java; and that build supports TLS 1.3 and HTTP/2. The TCNative detail matters in two field contexts: security questionnaires (the TLS stack is OpenSSL-backed, not pure-Java JSSE) and the DH-parameters requirement (Section 26.2), which lives precisely in that OpenSSL TLS layer. The slide also gives the one-paragraph servlet primer useful for customers unfamiliar with Java web applications.

## 43.4 The Three Components, Formally (Slides 12–16)

*Slide 12 — Internal Prime Components — AMIS, the Engine*

![](/img/13.jpeg)

Deck-only detail: AMIS's internal service model.

The live sessions treated AMIS/MS as a single REST engine; the deck decomposes it into four internal services: AM8 (administration REST APIs for AM 8.x and CAS, including low-level LDAP/AD identity-source access for password resets — the very path Section 29.5 rides — and multi-tenancy via AM security domains); Auth (authentication services: SecurID OTP, Cloud MFA, password, IWA, traditional web SSO, SAML, email, SMS, and more); Workflow (the notification system behind one-time invites and the fully customizable, optionally multi-lingual HTML email templates of Section 35); and RSA endpoints (the internal endpoint service other Prime components consume — the same rsa-endpoints URL that appears in the ENS2 configuration, Chapter 47). Knowing which internal service owns a behavior speeds both log reading and Jira filing.

*Slide 13 — Internal Prime Components — SSP*

![](/img/14.jpeg)

The formal SSP definition: port 8444, highly configurable, CSS-driven with all text externalized, optional multi-lingual support (customer supplies translations), authentication chaining of two events — and the canonical operation list: authenticate enrollment, request/replace/resync SecurID token, change/set PIN, clear security questions, test authenticator, report lost/found authenticator, and reset AD password. Cross-reference: Sections 12 (configuration) and 29 (the AD password reset operation in depth).

*Slide 14 — Prime SSP Live*

![](/img/15.jpeg)

Screenshot placeholder for the live SSP demonstration — delivered in our sessions via the working portal demos of Days 1–2.

*Slide 15 — Internal Prime Components — HDAP*

![](/img/16.jpeg)

The Help Desk Admin Portal formally: port 8445, for administrators holding the HDA Admin role in the Security Console. Operation inventory — user: unlock, search, deep search, register, enable, disable, create, invite, on-demand enablement; token: assign/unassign, clear PIN, delete, enable/disable, replace, search, emergency access. This is the fullest statement of HDAP capability anywhere in the program; the live sessions never enumerated it. (Deck 'HDAP' = transcript 'HTAP' — see Section 42.2.)

*Slide 16 — Prime HDAP Live*

![](/img/17.jpeg)

## 43.5 Installation: Requirements and the Manual Path (Slides 17–23)

*Slide 17 — Quick Setup Requirements*

![](/img/18.jpeg)

The deck's prerequisites checklist aligns with Sections 5 and 22.1–22.3, and adds two items the live sessions implied but never stated: SSH must be enabled on the AM Primary with TCP port 22 open from the internal PrimeKit servers (Quick Setup's back-end credential retrieval, Section 6.4, depends on it), and the internal Prime servers must be whitelisted on the SMTP relay or notifications will silently fail. Both belong on the pre-engagement checklist — add them to Section 19.2's prerequisites day.

*Slide 18 — Quick Setup — Obtaining and Extracting the Kit*

![](/img/19.jpeg)

The command-level version of Section 6.1: WinSCP the tarball to /tmp, create /opt/rsa, move and extract (tar -zxvf primekit\_nix\_internal\_`<build>`.tar.gz), and create the symlink (ln -s kit\_nix\_int\_`<build>`/ primekit). The deck confirms /opt/rsa as the standard installation root — a detail the runbook (Section 22.4) can now state explicitly.

*Slide 19 — Setup Scripts in Order*

![](/img/20.jpeg)

The four scripts with their actual filenames: 1\_create\_primekit\_service\_account.sh, 2\_register\_daemon\_scripts.sh, 3\_reset\_perms.sh, 4\_run\_prime\_quick\_setup.sh — matching Section 6.2's functional description one-for-one.

*Slide 20 — Running the PQS — Core Prompts*

![](/img/21.jpeg)

A worked example of the Quick Setup questionnaire with sample values: AM primary address, scadmin/ocadmin credentials, OS password, bind account IDs (amisbind/sspbind — the deck's names for Section 6.3's AMS Bind/SSP Bind), SMTP from-address and relay, DEBUG log level, web-tier hostname, SSP endpoint URL, and the AMIS agent IP plus additional node IPs. The multi-node agent IP prompt is a detail Section 6.3 didn't capture: additional AMIS nodes are declared here at setup time.

*Slide 21 — Running the PQS — Cloud Integration Prompts*

![](/img/22.jpeg)

The cloud block with sample values: integration enabled, mobile admin key file, admin endpoint (tenant URL), auth policy name, auth API endpoint (…/mfa/v1\_1), company/tenant ID, activation API endpoint (…/selfservice/api/v1), and API key. Note the deck's key names (mobile admin key, mobile API key) — these are the setenv.sh variable names that appear again on slides 26–27, connecting the questionnaire answers to their persisted form (the pattern Section 27.1 teaches).

*Slide 22 — PQS Screenshot*

![](/img/23.jpeg)

*Slide 23 — Starting Prime Services*

![](/img/24.jpeg)

The service-command form: service tomcat-amis|ssp|hdap start|stop|restart|status — the 'older customer' pattern from Section 37.2's Q&A, here as the deck's primary form (the deck predates universal systemctl units). Also reiterates re-running 3\_reset\_perms.sh before first start.

## 43.6 Legacy Manual Configuration Reference (Slides 24–29)

Slides 24–29 document the pre-automation manual configuration of each application's config.sh — the weeks-long process Quick Setup replaced (Section 6.4's history). They remain operationally relevant for two reasons: legacy customers still carry hand-built config.sh files in exactly this form, and every variable shown is the *persisted* version of a Quick Setup answer — the file consultants edit post-install (Section 27). Key variables per application:

*Slide 24 — AMIS Configuration — Bind Account and Service Account*

![](/img/25.jpeg)

Copy config.sh.example → config.sh; set -Damis.bind.account and -Damis.bind.account.password; then generate the static service-account pair with the PrimeKit Tools RunServiceAccountGenTool.bat, populating -DServiceAccount (the encrypted token) and -Damis.service.account (the 16-character ID). This is the generation procedure behind Section 11.3's static service accounts — the deck shows where those values actually live.

*Slide 25 — AMIS Configuration — AM, Command Client, SMTP, Logging*

![](/img/26.jpeg)

The remaining core variables: -Dam.server (AM primary), -Dam.command.client.user.id / -Dam.command.client.password (the same command-client credentials Bulk Update retrieves via RSA util, Section 15.1), -Dsmtp.server, -Dlog.level, and -Dam.webtier.server.

*Slide 26 — AMIS Configuration — Cloud Variables (1 of 2)*

![](/img/27.jpeg)

The CAS wiring: -Dmobile.api.key (created in CAS under My Account → Company Settings → API Key, then publish), -Dmobile.companyID, -Dmobile.auth.policy, -Dmobile.admin.endpoint, and -Dmobile.admin.key (a super-admin API key downloaded from CAS Platform → API Key Management, stored as mfa-admin-key1.key under configs/amis). The slide's CAS-console navigation notes are the missing 'where do I click' companion to Section 5.2.

*Slide 27 — AMIS Configuration — Cloud Variables (2 of 2)*

![](/img/28.jpeg)

Completes the set: -Dmobile.auth.api.endpoint (…/mfa/v1\_1) and -Dmobile.auth.admin.integration.enabled=true — the master switch that appears in all three applications' files.

*Slide 28 — SSP Configuration*

![](/img/29.jpeg)

SSP's config.sh essentials: log level, -Dssp.endpoint (the portal URL with :8444), and the SSP bind pair — -Dssp.service.account.userid / -Dssp.service.account.passcode — the credential SSP uses to reach AMIS (Section 6.3's SSP Bind), plus the cloud-integration switch.

*Slide 29 — HDAP Configuration*

![](/img/30.jpeg)

HDAP's minimal set: the SSP endpoint reference, log level, and the cloud-integration switch — the lightest of the three files, consistent with HDAP's role as a pure front-end to AMIS.
