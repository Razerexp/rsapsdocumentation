---
title: "56. AMIS Deck Reconciliation Map"
sidebar_position: 56
---

# 56. AMIS Deck Reconciliation Map


All 63 slides accounted for against the rest of the guide. (H) marks slides hidden in the source file (Section 50.2).

Slides

Topic

Relationship to Guide

Status

1–2

Title (2018 Dell/RSA provenance block), intro divider

§50.1

Provenance

3–5

Formal course outline: modules, objectives, topics

Program framing; §41 curriculum map

New — reusable onboarding syllabus

6

Overview divider

—

Divider

7

Why Prime — business framing (speed/cost, deployment options)

§3.4; Part III slide 7

New articulation (executive version)

8–9

2018 component inventory; Oracle JRE 8 / Tomcat 9 stack

§3; Part III slide 11 (Adoptium successor)

Historical baseline

10–12

Component descriptions with Key Differentiators columns

§3.1 (descriptions only)

New — differentiator arguments (no agent records; no SC access extension; single-user HDAP; step-up/white-lists)

13–14

AMIS topology; overall architecture diagrams

§9; Part III slides 8–9

Covered \+ additional diagrams

15

Logical architecture: internal SSP→AD direct; external via AMIS; agent as standard AM agent

§9.3 (partial)

New — connection-path facts

16–17

2018 portal UIs; seven sample use cases

§34 (modern branding); Part III slide 7 (12-item list)

Historical / superset exists

18–19

AMIS three-service model (AM8, Agent-as-web-service, Workflow)

Part III slide 12 (four services)

Historical — predates RSA endpoints

20

AM tier breakdown; agent holds primary\+replica addresses (no LB on agent path)

§8–9 (web-tier LB rules)

New — agent-path failover fact

21–23

Prime tier, external web-tier era, logical architecture

§9.4; §6.3 (web-tier fade)

Covered / historical

24

Services topology notes: Tomcat/WebLogic/JBoss heritage; syslog via Log4J

Part III slide 7 (syslog claim)

New — SIEM path and container heritage

25–26 (H)

Legacy install overview: rsautil, keytool root cert, sdconf.rec

§6.4, §15.1, §22

New — pre-PrimeKit procedure (legacy sites)

27 (H)

AM-side manual configuration checklist ('user password optional', SSH, root CA path, fixed passcode, agent \+ sdconf.rec)

§6.4 (what Quick Setup automates)

New — Quick Setup audit checklist

28–29 (H)

svcaccountgen.jar; Template Builder as original installer (prime-kit-configuration.apt)

§11.3; §15.2; Part III slide 24

New — tool origins

30 (H)

amisdebugvar = generated UUID → setenv.sh

§27.2 ('MS debug war'); R-4

New — origin of the encryption key

31 (H)

Network/port matrix

Part III slide 10 (verbatim twin); §43.3

Duplicate — cross-referenced

32–33

Developer module divider and topics

§54

Framing

34

Auth methods with super-admin vs. user context

§7.3, §11 (no context split)

New — least-privilege design lever

35

Admin methods incl. On-Demand enablement (SMTP)

Part III slides 73–77 (subset)

New — ODA enablement method

36

Complete 20-operation token inventory (assign, unassign, CT-KIP, delete, device types, replace-next, 24h EA variants)

Part III slides 78–85 (subset)

New — full capability contract

37–38

Auth harness (tdsauthenticate); REST harness (amserviceharness)

§7.3 (Postman as modern analogue)

New — bundled test tooling

39

Advanced REST Client \+ 34-template developer toolkit

§7.3

New — legacy developer kit (verify currency)

40–55

API cookbook (16 slides)

Part III slides 70–85 — verbatim twins; annotated at §47.2

Duplicate — cross-referenced, not re-embedded

56

Maintenance divider

—

Divider

57

Version via am8.log header and /am8/version REST call; per-component log map (am8/hdap/ssp\_daily)

Part III slide 93 (scripts only)

New — remote method \+ first log map entries

58 (H)

Service management

§7.1, §28; Part III slide 94

Duplicate

59 (H)

Upgrade: the four AMIS WARs (auth, am8, rsa-endpoints, workflow); copy customizations forward

§33.5; Part III slide 95

New — WAR names \+ customization rule

60 (H)

Hardening guide contents (AJP, Tomcat Manager, JSESSIONID, headers, POODLE/RC4)

§14; §16.1 action \#1

New — hardening checklist preview

61 (H)

Troubleshooting: Auth Monitor first; claimfilter.log; CPU/memory; GrepWin; backup rule

§28.4; §41.2 (module owed)

New — seed of the troubleshooting module

62

Debug enable/replicate/collect/revert cycle; KB 000031000

§6.3, §11.4, §28.4

New — formal debug procedure

63

Credits: Doyle, Mitchell, Khaled

§50.1

Provenance
