---
title: "49. Slide-to-Chapter Reconciliation Map"
sidebar_position: 49
---

# 49. Slide-to-Chapter Reconciliation Map


The complete accounting of the deck against the live program. Live coverage cites the Part I–II section where the topic was taught; Deck-only marks material available only through the deck and Part III's commentary. Contiguous slides sharing a mapping are grouped.

Slides

Topic

Live Coverage

Status

1–4

Title, training plan, five-day timetable

§2 (program structure)

Framing

5–6

Day 1 / intro dividers

—

Divider

7

Why Prime — 12-item capability inventory (notes)

§3.4 (spoken version)

Deck adds formal list

8–9

Hybrid & on-prem architecture diagrams

§3.1, §9.1

Covered \+ reusable diagrams

10

Network & port matrix (DMZ, internal, UDP 5500, 7002/7022)

§7.2 (listener ports only)

Deck-only

11

Adoptium OpenJDK; Tomcat from source w/ TCNative, TLS 1.3, HTTP/2

§4.2 (versions only)

Deck-only depth

12

AMIS internal services: AM8, Auth, Workflow, RSA endpoints

§3.1 (as one engine)

Deck-only model

13–16

SSP & HDAP formal definitions \+ operation inventories

§3.1, §12

Deck adds operation lists

17

PQS requirements incl. SSH/22 and SMTP whitelist

§5, §22.1–22.3

Deck adds 2 prerequisites

18–19

Kit extraction commands, /opt/rsa root, script filenames

§6.1–6.2, §22.4

Covered \+ exact commands

20–21

PQS questionnaire worked example (core \+ cloud)

§6.3

Covered \+ multi-node agent IPs

22

PQS screenshot

§6

Illustration

23

Starting services (service command form)

§7.1, §37.2

Covered

24–29

Manual config.sh reference (AMIS/SSP/HDAP CATALINA\_OPTS)

§6.4 (history), §27

Deck-only reference (legacy & external installs)

30

Day 2 divider

—

Divider

31–32

ssp.properties master file; authentication.xml

§29.3, §12.1

Covered

33–35

devices.xml; rules.xml; spring-context.xml

—

Deck-only files

36–37

SSP live demo; SSP lab tasks

Live demos; §19.4

Delivered live

38–39

Day 3 / certificates dividers

—

Divider

40

Cert file naming \+ truststore.jks contents (AM/CAS/LDAP roots)

§26.1

Deck adds truststore inventory

41–43

DH params w/ block ordering; chain leaf→root, no server cert; key file

§26.2–26.3

Deck adds 2 rules

44–49

HDAP configuration: lap.properties, LapProto.xml roles, devices

— (HDAP demoed only)

Deck-only module

50–51

Redundancy & HA reference architecture

§9.1

Covered

52

LB config: ≥60-min persistence; health-check URLs

§8.5 (rule only)

Deck-only spec

53–56

Day 4 / external SSP dividers \+ DMZ architecture diagram

§9.3

Covered \+ diagram

57–58

External SSP installation (external kit, keytool trust, manual setenv.sh)

— (architecture only)

Deck-only procedure

59–61

Bulk Invite utility: role, endpoint, WAR, properties, 3 profiles, CSV

§3.2 (one line), §16.3 (planned)

Deck-only procedure

62–63

Day 5 / API dividers

—

Divider

64

API model \+ RSA\_AUTHENTICATION\_TOKEN / RSA\_SERVICE\_TOKEN headers

§7.3, §10.3.2

Deck adds header names

65–68

Worked examples: passcode auth; service account (newServiceAccountPassword)

§7.3, §11.2

Covered \+ response anatomy

69

AMIS-CAS enablement checklist incl. outbound proxy

§5.2, §6.3

Deck adds proxy note

70–71

Session establishment (passcode / service account)

§7.3, §11

Covered

72

Session validation refreshes idle timer

§8.5 (timeouts only)

Deck-only behavior

73–83

User & token API cookbook (search/enable/disable/create/PIN/replace…)

§7.3 (pattern only)

Deck-only reference

84

Emergency Access \+ lostMode parameters (3 modes)

§32.1 (VTS uses EAC)

Deck-only parameters

85

Move token to security domain

—

Deck-only reference

86–89

ENS2 full configuration (read-only DB user, grants, Template Builder, test mode)

§3.3 (one paragraph)

Deck-only procedure

90–92

Troubleshooting dividers; important log files (placeholder)

§28.4; module owed (§41.2)

Pending live module

93

Version identification scripts (java\_tomcat\_prime\_versions.sh, gather\_logs.sh)

§10.2 (scripts folder)

Deck-only tooling

94

Service management \+ restart-after-change rule

§7.1, §28

Covered

95

Formal WAR patch procedure (exploded dirs, work dir, double restart)

§33.5 (patches-folder method)

Deck-only manual procedure

96

Common issue: all users fail SSP authentication

§27.3, §28.2 (causes)

Deck scenario \+ guide diagnosis

97–102

SSP SAML SSO with CAS (cloud app, ACS/Entity ID, saml\_keystore, import)

§12.1 (method exists), §33.4 (keystore machinery)

Deck-only procedure

103–104

Thank you / closing

—

Divider

## 49.1 What This Map Shows

Of the deck's 104 slides, roughly 35 carry material the live sessions never taught — concentrated in six clusters: the network/port matrix and runtime-stack detail (10–11), the SSP/HDAP configuration file families (33–35, 44–49), the load-balancer engineering spec (52), the External SSP and Bulk Invite procedures (57–61), the API cookbook with the ENS2 build (72–89), and the formal patch and SAML-federation procedures (95, 97–102). Every one of those clusters is now documented in Chapters 43–48 with field commentary. The remaining slides confirm, illustrate, or formalize what Parts I–II teach — and the two bodies of material cross-validate each other cleanly, with no contradictions found beyond naming conventions (AMIS/MS, HDAP/HTAP) and the deck's older service-command syntax.

*End of Part III. Part IV — The AMIS Deep-Dive Companion — follows.*
