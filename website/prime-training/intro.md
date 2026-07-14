---
title: "Welcome to PrimeTime"
sidebar_position: 1
slug: /
---

**RSA PROFESSIONAL SERVICES**

**Welcome to “PrimeTime”**

*A Pretty Good Field Guide to RSA PRIME (2026)*

![](./img/1.png)

Part I: Day 1 Live Training (3h 46m) — Suite, Installation, Architecture, Configuration & Bulk Update

Part II: Day 2 Live Training (3h 21m) — Certificates, Runtime Config, Docker, VTS, PCAP, Branding & Templates

Part III: The Training Deck Companion — All 104 Slides, Annotated (N. Elaasy, V8)

Part IV: The AMIS Deep-Dive Companion — 63 Slides, Annotated (Doyle / Mitchell / Khaled)

Part V: The Official Install Guide Companion — Corrections, Reconciliation & ENS2 Reference (v2.0, June 2025\)

*Sessions: June 30 – July 1, 2026  |  Trainer: Ramesh Anand  |  Prepared from transcripts, decks, and the official guide*

**Internal Use — RSA Professional Services**

**Table of Contents**

**PART I — Day 1: Prime Foundations (June 30, 2026\)**

**1\. Executive Summary9**

**2\. Session Logistics, Participants, and Structure11**

2.1 Recording Segments11

2.2 Participants and Roles11

2.3 The Prime Team (as presented)11

2.4 Instructional Approach11

**3\. The RSA Prime Solution Suite12**

3.1 Core Web Applications12

3.2 Bulk Administration Tools12

3.3 Additional Suite Components12

3.4 Why Prime Exists13

**4\. PrimeKit Packaging and the Technology Stack14**

4.1 From Component Chaos to PrimeKit14

4.2 Java and Tomcat Versions14

4.3 The Symlink Maintenance Model14

4.4 Related Core-Product Direction14

**5\. Prime Quick Setup — Prerequisites Walkthrough16**

5.1 Authentication Manager Prerequisite (One Item)16

5.2 Cloud Authentication Service Prerequisites16

**6\. Installation Walkthrough: Tarball, Scripts, and Quick Setup17**

6.1 Extracting the Bundle and Creating Symlinks17

6.2 The Four Setup Scripts17

6.3 Quick Setup: The Interactive Questionnaire17

6.4 What Quick Setup Actually Does18

6.5 Identity Source Notes18

**7\. Service Startup, Ports, and API Validation19**

7.1 Starting the Services19

7.2 Default Ports19

7.3 API Validation in Postman19

7.4 Demo Environment and CAS Sandbox Access19

**8\. Auth Clustering and Session Token Architecture20**

8.1 The Problem: In-Memory, Node-Specific Session Tokens20

8.2 The Solution: Machine IDs and Mod-20 Encoding20

8.3 Configuration20

8.4 When Clustering Is Unnecessary — and the Redis Future20

8.5 Session Timeouts and the Load Balancer Interaction20

**9\. Reference Production Architecture and Sizing21**

9.1 The Typical Deployment Pattern21

9.2 Sizing Guidance21

9.3 Internal vs. External SSP21

9.4 Operating Without a Load Balancer22

**10\. Configuration Philosophy, File Structure, and MS Deep Dive23**

10.1 Why There Is No Admin UI23

10.2 PrimeKit Directory Structure23

10.3 MS Configuration Files — The Three That Matter23

**11\. The Service Account System: Three Paths to a Session Token25**

11.1 Method One: Username \+ Passcode25

11.2 Method Two: The Rotating-Password Service Account System25

11.3 Method Three: Static Service Accounts25

11.4 Security Discussion: Logging Exposure and OAuth26

**12\. SSP Configuration and Authentication Methods27**

12.1 authentication.xml27

12.2 The /invite Page and Enrollment Entitlements27

12.3 Field Problem: Protecting Self-Service Enrollment in a SCIF27

**13\. Windows Password Integration (WPI) and the Password Rotation Solution29**

13.1 How WPI Works29

13.2 Why Rotation Breaks It — and the Bulk Update Answer29

**14\. Compliance, STIGs, and Audit-Ready Documentation30**

14.1 Sidebar: Lessons from Internal AI Tooling30

**15\. Part 2 Deep Dive: The Bulk Update Tool31**

15.1 The Properties File31

15.2 Credential Encryption with Template Builder31

15.3 The Profile: Rotation Policy and Password Generation Rules31

15.4 Running the Tool — Live Demo32

15.5 Scheduling and Additional Modes32

**16\. Action Items, Follow-Ups, and Scheduling33**

16.1 Documentation and Enablement Actions33

16.2 Engagement Scheduling (SOCOM and Related)33

16.3 Day 2 Agenda (as set at close)33

**17\. Appendix: Quick Technical Reference35**

A. Component and Port Summary35

B. Key Configuration Files35

C. Sizing and Scale Reference35

D. Session Token Acquisition Methods36

**18\. Notable Q\&A and Discussion Highlights37**

18.1 Product and Platform37

18.2 Sessions, Clustering, and Load Balancers37

18.3 Security37

18.4 Federal / Classified Delivery38

18.5 Commercial and Engagement Strategy38

**19\. Consultant Readiness Checklist (Derived from Day 1)39**

19.1 Before the Engagement39

19.2 Prerequisites Day (≤ 30 minutes of console work)39

19.3 Installation Day39

19.4 Configuration Phase39

19.5 Value-Expansion Phase40

**20\. Glossary of Terms and Acronyms41**

**21\. Chronological Session Timeline43**

21.1 Part 1 — Morning/Afternoon Session (3h 19m)43

21.2 Part 2 — End-of-Day Session (26m)44

**22\. Reconstructed Installation Runbook46**

22.1 Stage 0 — Information Gathering (before touching any console)46

22.2 Stage 1 — Authentication Manager Prerequisite46

22.3 Stage 2 — Cloud Authentication Service Prerequisites46

22.4 Stage 3 — Kit Extraction and Symlinks46

22.5 Stage 4 — Setup Scripts46

22.6 Stage 5 — Post-Setup Verification in AM47

22.7 Stage 6 — Start and Validate47

22.8 Stage 7 — Common Next Configurations (per engagement scope)47

**23\. Open Questions and Risk Register48**

23.1 Open Technical Questions48

23.2 Delivery Risks and Mitigations48

23.3 Dependencies for Day 2 and the Onsite49

**PART II — Day 2: Hands-On In-Person Training (July 1, 2026\)**

**24\. Day 2 Executive Summary51**

**25\. Day 2 Session Logistics and Structure53**

25.1 Recording Segments53

25.2 Format and Participants53

25.3 Instructional Character53

25.4 Trainer Coverage Boundaries53

**26\. Certificate Management and Replacement54**

26.1 The Certificates Directory54

26.2 The Diffie-Hellman Parameters Requirement54

26.3 Chain Ordering54

26.4 Replacement Procedure (Demonstrated Live)54

26.5 Where the Certificates Are Wired: server.xml54

**27\. Runtime Configuration: config.sh and setenv.sh56**

27.1 What Lives in These Files56

27.2 The Encryption Key (MS Debug War)56

27.3 Changing the AMS Bind Password — Procedure and a Live Incident56

**28\. Operational Discipline: Restarts, Latent Failures, and Silent Expiry57**

28.1 Why a One-Line Change Can Take Down an Application57

28.2 Silent Certificate Expiry57

28.3 The Two-Step Restart Pattern57

28.4 XML Discipline and Log-First Troubleshooting57

**29\. SSP On-Demand Password Generation (Completing the WPI Story)58**

29.1 Recap and User Experience58

29.2 The Two-Tool Contract58

29.3 Enabling the Feature: allowedUserProfileOperations58

29.4 Password Pattern Syntax58

29.5 The AD Write Path: AM as Proxy, LDAPS Mandatory59

**30\. Docker Containerization and the Prime Development Pipeline60**

30.1 Context: Why Now, and For Whom60

30.2 The Container Topology60

30.3 Session Architecture Clarified: Two Token Systems60

30.4 The Build-Deploy-Restart Development Loop60

30.5 Environment Boundaries60

**31\. Lab Environment Options for Consultants62**

31.1 Option 1: vCloud SecurID Template (Full-Stack Practice)62

31.2 Option 2: Docker (Fast Feature Testing)62

31.3 Training Materials Inventory62

**32\. Virtual Token Service (VTS) — End-to-End Build63**

32.1 The Problem VTS Solves63

32.2 Server Side: Already Deployed63

32.3 Client Side: The Two-Step Builder Workflow63

32.4 Mutual TLS (MTLS) Trust63

32.5 The Live Troubleshoot — A Diagnostic Case Study63

**33\. PCAP Deep Dive: The On-Premises Identity Portal65**

33.1 Positioning: The Sovereign CAS65

33.2 Capabilities and Configuration Surface65

33.3 SAML Application Integration (Demonstrated)65

33.4 The Extended Live Debug — and What It Taught65

33.5 Patching and Rollback via WAR Files (Bonus Module)66

33.6 Compliance Sidebar: SOC Reports66

**34\. Branding and Customization (Part 2)67**

34.1 Where Branding Lives67

34.2 Logos, Backgrounds, and the No-Restart Property67

34.3 Colors and Layout: Two Files, Trial and Error67

**35\. Email Notification Templates68**

35.1 The Template System68

35.2 Anatomy of a Template68

35.3 The Demo and the Day's Last Lesson68

35.4 Session Close68

**36\. Day 2 Chronological Session Timeline69**

36.1 Part 1 — Main Session (3h 3m)69

36.2 Part 2 — Branding and Templates (17m)70

**37\. Day 2 Notable Q\&A and Discussion Highlights71**

37.1 Certificates and Cryptography71

37.2 Configuration and Operations71

37.3 Password Generation and WPI71

37.4 Docker and Sessions71

37.5 VTS and PCAP72

**38\. Day 2 Action Items and Follow-Ups73**

**39\. Day 2 Additions to the Open Questions and Risk Register74**

39.1 Open Technical Questions (continued)74

39.2 Delivery Risks and Mitigations (continued)74

**40\. Glossary Additions from Day 76**

**41\. Two-Day Curriculum Map and Program Status78**

41.1 What the Two Days Covered78

41.2 Remaining Program Elements78

41.3 Closing Note78

**PART III — The Training Deck Companion (104 Slides, Annotated)**

**42\. The Training Deck: Overview and How to Use Part III81**

42.1 The Deck's Structure vs. Our Delivery81

42.2 Terminology Note: AMIS/HDAP vs. MS/HTAP81

**43\. Deck Day 1 — Introduction, Architecture & Quick Setup (Slides 1–29)82**

43.1 Framing and Curriculum (Slides 1–5)82

43.2 What Prime Is and Why It Exists (Slides 6–7)84

43.3 Architecture Diagrams and the Network Matrix (Slides 8–11)85

43.4 The Three Components, Formally (Slides 12–16)88

43.5 Installation: Requirements and the Manual Path (Slides 17–23)91

43.6 Legacy Manual Configuration Reference (Slides 24–29)95

**44\. Deck Day 2 — SSP Overview & Configuration (Slides 30–37)99**

**45\. Deck Day 3 — Certificates, HDAP & High Availability (Slides 38–52)103**

45.1 Certificates, Formalized (Slides 40–43)103

45.2 HDAP Configuration (Slides 44–49)105

45.3 Redundancy, High Availability, and Health Checks (Slides 50–52)108

**46\. Deck Day 4 — External SSP & Bulk Invite (Slides 53–61)111**

**47\. Deck Day 5 — AMIS API, ENS, Troubleshooting & Logging (Slides 62–96)116**

47.1 The AMIS API, Formally (Slides 63–69)116

47.2 API Call Reference (Slides 70–85)120

47.3 ENS2 — Expiry Notification Service Configuration (Slides 86–89)126

47.4 Logging, Versions, and the Formal Patch Procedure (Slides 90–96)128

**48\. Deck Extras — SSP SAML Integration with CAS (Slides 97–104)133**

**49\. Slide-to-Chapter Reconciliation Map137**

49.1 What This Map Shows138

**PART IV — The AMIS Deep-Dive Companion (63 Slides, Annotated)**

**50\. The AMIS Master Deck: Provenance and How Part IV Works141**

50.1 What This Deck Is141

50.2 The Hidden-Slide Discovery141

50.3 Integration Policy for Part IV141

**51\. Prime Positioning and Component Differentiators (Slides 1–17)142**

**52\. AMIS Component Architecture (Slides 18–24)151**

**53\. The Original Installation and AM-Side Configuration (Slides 25–31)155**

**54\. Application Integration for Developers (Slides 32–55)159**

54.1 The Complete Method Inventory (Slides 34–36)159

54.2 The Developer Toolkit: Harnesses and ARC (Slides 37–39)161

54.3 The API Cookbook (Slides 40–55) — Consolidated Cross-Reference163

**55\. Maintenance, Hardening, and Troubleshooting (Slides 56–62)164**

**56\. AMIS Deck Reconciliation Map169**

**57\. Updated Program Status and Closing171**

57.1 What Part IV Added171

57.2 Follow-Ups Arising from Part IV171

57.3 The Guide, Complete171

**PART V — The Official Install Guide Companion (v2.0, June 2025\)**

**58\. The Official Guide: Version, Role, and How Part V Works174**

58.1 Canonical Source Declaration174

58.2 Why Part V Is a Companion, Not a Copy174

58.3 What the Guide Contains (Orientation Map)174

**59\. Corrections, Refinements, and Conflicts — The Reconciliation Chapter176**

59.1 CORRECTION — Prime Server Sizing176

59.2 REFINEMENT — Load Balancer Persistence: Three Sources Reconciled176

59.3 REFINEMENT — Health-Check URLs: The Authoritative Set176

59.4 NEW AUTHORITY — AD Bind Account Requirements (Resolves Action D2-8)176

59.5 CONFIRMATION — PQS v2.0 Prompt Set Matches the Training177

59.6 RECONCILIATION — Certificates: The JKS Procedure vs. the PEM Model177

59.7 CONFIRMATION — Developer Tooling Ships Today (Closes Action P4-1)177

59.8 Minor Deltas Worth Recording178

**60\. New Reference Material from the Official Guide179**

60.1 The Architecture Diagrams179

60.2 The PQS Output Log: Exact Object Inventory181

60.3 Default HTTP Configuration and Sample URLs182

60.4 Console Navigation Paths for Every Prerequisite182

60.5 Windows Installation Path182

60.6 Login Tests and Authentication-Monitor Verification Chains182

60.7 External SSP: The Must-Match Parameter List183

**61\. The Complete ENS2 Event Reference (Imported from the Official Guide)184**

61.1 Event Catalog and Architecture184

61.2 Installation Essentials (Confirming and Completing Section 47.3)185

61.3 The Window Semantics (-W)186

61.4 Global Elements: testMode, send-to, whitelist186

61.5 Per-Event Reference186

61.6 Testing and Execution Recommendations (Verbatim Policy)187

**62\. Runbook Cross-Validation Verdict and Program Close-Out188**

62.1 Section 22 vs. the Official Procedure188

62.2 Actions Closed and Opened by Part V188

62.3 The Guide, Now Truly Complete189

**PART I**

**Day 1 — Prime Foundations**

June 30, 2026

*Suite Overview  ·  PrimeKit & Quick Setup  ·  Clustering & Architecture  ·  Configuration  ·  Service Accounts  ·  Bulk Update*

# 1. Executive Summary

On June 30, 2026, the RSA Professional Services team conducted Day 1 of a multi-day technical enablement session on the **RSA Prime** solution suite. The day was delivered in two recorded segments: a morning-through-afternoon session of approximately 3 hours 19 minutes (Part 1\) and a 26-minute end-of-day continuation (Part 2\) focused on the Bulk Update tool.

The overarching objective of Day 1 was to bring the consulting team from conceptual familiarity with Prime to genuine operational fluency: understanding what the Prime application suite contains, how it is packaged and installed via **PrimeKit** and **Prime Quick Setup**, how it is architected in production, how it is configured through its XML and properties files, and how its most consequential field capabilities — the rotating-password service account system, self-service enrollment protection, and Windows Password Integration (WPI) automation — actually work under the hood. The session blended slide-driven instruction with an extensive live demonstration in which a complete Prime environment was installed, connected to both RSA Authentication Manager and the Cloud Authentication Service, and exercised end-to-end via REST API calls in Postman.

A defining feature of the day was its practitioner orientation. Throughout the session the trainer and attendees repeatedly connected the material to live federal engagements — including an upcoming SOCOM onsite where WPI-driven password rotation is the customer's primary use case — and to the unique operational constraints of classified (SCIF) environments, where standard troubleshooting workflows (log export, screen sharing, remote support) are unavailable and consultants must rely on parallel lab reproduction, printed documentation, and iterative site visits.

Key outcomes and themes from Day 1 include:

* **Prime is a suite, not a product.** Beyond the three core web applications (MS/AMS, SSP, HDAP), Prime encompasses bulk administration tools, the Prime Central Authentication Portal (PCAP), the Virtual Token Service (VTS), and the Expiry Notification Service (ENS) — all of which evolve rapidly in response to specific customer requests.

* **Installation has been radically compressed.** What historically took weeks to months of manual configuration now takes under 30 minutes with PrimeKit and Prime Quick Setup, provided the Authentication Manager and Cloud prerequisites are prepared in advance.

* **Configuration is where the real work lives.** Prime deliberately has no administrative UI; all behavior is governed by XML and properties files. This design choice accelerates feature delivery but means consultant value is concentrated in configuration, customization, and troubleshooting.

* **Session token architecture drives clustering design.** Because MS session tokens are in-memory and node-specific, multi-node deployments require either load-balancer session persistence or Prime's auth clustering mechanism (machine IDs with a mod-20 encoding), with Redis-backed clustering now supported for containerized deployments.

* **The service account system solves machine-to-machine credential rotation.** A purpose-built mechanism issues a new password in the API response every configurable interval (25 days in the demo), tracked via an encrypted identity attribute in Authentication Manager.

* **Bulk Update is the linchpin of the federal WPI use case.** The standalone Java command-line tool rotates Active Directory passwords for group members on a schedule and synchronizes the Windows Password Integration cache in Authentication Manager, enabling effectively passwordless operation in environments with mandatory password rotation policies.

* **Compliance documentation is an emerging gap and opportunity.** The team identified STIG-style hardening evidence and audit-ready reporting as areas where PS can add differentiated value for federal customers.
