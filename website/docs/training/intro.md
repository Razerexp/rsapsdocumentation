---
title: "Welcome to PrimeTime"
sidebar_position: 1
slug: /
---

RSA PROFESSIONAL SERVICES

Welcome to “PrimeTime”

*A Pretty Good Field Guide to RSA PRIME (2026)*

![](/img/1.png)

Part I: Day 1 Live Training (3h 46m) — Suite, Installation, Architecture, Configuration & Bulk Update

Part II: Day 2 Live Training (3h 21m) — Certificates, Runtime Config, Docker, VTS, PCAP, Branding & Templates

Part III: The Training Deck Companion — All 104 Slides, Annotated (N. Elaasy, V8)

Part IV: The AMIS Deep-Dive Companion — 63 Slides, Annotated (Doyle / Mitchell / Khaled)

Part V: The Official Install Guide Companion — Corrections, Reconciliation & ENS2 Reference (v2.0, June 2025)

*Sessions: June 30 – July 1, 2026  |  Trainer: Ramesh Anand  |  Prepared from transcripts, decks, and the official guide*

Internal Use — RSA Professional Services

Table of Contents

PART I — Day 1: Prime Foundations (June 30, 2026)

1. Executive Summary9

2. Session Logistics, Participants, and Structure10

2.1 Recording Segments10

2.2 Participants and Roles10

2.3 The Prime Team (as presented)10

2.4 Instructional Approach10

3. The RSA Prime Solution Suite11

3.1 Core Web Applications11

3.2 Bulk Administration Tools11

3.3 Additional Suite Components11

3.4 Why Prime Exists12

4. PrimeKit Packaging and the Technology Stack13

4.1 From Component Chaos to PrimeKit13

4.2 Java and Tomcat Versions13

4.3 The Symlink Maintenance Model13

4.4 Related Core-Product Direction13

5. Prime Quick Setup — Prerequisites Walkthrough14

5.1 Authentication Manager Prerequisite (One Item)14

5.2 Cloud Authentication Service Prerequisites14

6. Installation Walkthrough: Tarball, Scripts, and Quick Setup15

6.1 Extracting the Bundle and Creating Symlinks15

6.2 The Four Setup Scripts15

6.3 Quick Setup: The Interactive Questionnaire15

6.4 What Quick Setup Actually Does16

6.5 Identity Source Notes16

7. Service Startup, Ports, and API Validation17

7.1 Starting the Services17

7.2 Default Ports17

7.3 API Validation in Postman17

7.4 Demo Environment and CAS Sandbox Access17

8. Auth Clustering and Session Token Architecture18

8.1 The Problem: In-Memory, Node-Specific Session Tokens18

8.2 The Solution: Machine IDs and Mod-20 Encoding18

8.3 Configuration18

8.4 When Clustering Is Unnecessary — and the Redis Future18

8.5 Session Timeouts and the Load Balancer Interaction18

9. Reference Production Architecture and Sizing19

9.1 The Typical Deployment Pattern19

9.2 Sizing Guidance19

9.3 Internal vs. External SSP19

9.4 Operating Without a Load Balancer20

10. Configuration Philosophy, File Structure, and MS Deep Dive21

10.1 Why There Is No Admin UI21

10.2 PrimeKit Directory Structure21

10.3 MS Configuration Files — The Three That Matter21

11. The Service Account System: Three Paths to a Session Token23

11.1 Method One: Username \+ Passcode23

11.2 Method Two: The Rotating-Password Service Account System23

11.3 Method Three: Static Service Accounts23

11.4 Security Discussion: Logging Exposure and OAuth24

12. SSP Configuration and Authentication Methods25

12.1 authentication.xml25

12.2 The /invite Page and Enrollment Entitlements25

12.3 Field Problem: Protecting Self-Service Enrollment in a SCIF25

13. Windows Password Integration (WPI) and the Password Rotation Solution26

13.1 How WPI Works26

13.2 Why Rotation Breaks It — and the Bulk Update Answer26

14. Compliance, STIGs, and Audit-Ready Documentation27

14.1 Sidebar: Lessons from Internal AI Tooling27

15. Part 2 Deep Dive: The Bulk Update Tool28

15.1 The Properties File28

15.2 Credential Encryption with Template Builder28

15.3 The Profile: Rotation Policy and Password Generation Rules28

15.4 Running the Tool — Live Demo28

15.5 Scheduling and Additional Modes29

16. Action Items, Follow-Ups, and Scheduling30

16.1 Documentation and Enablement Actions30

16.2 Engagement Scheduling (SOCOM and Related)30

16.3 Day 2 Agenda (as set at close)30

17. Appendix: Quick Technical Reference31

A. Component and Port Summary31

B. Key Configuration Files31

C. Sizing and Scale Reference31

D. Session Token Acquisition Methods32

18. Notable Q&A and Discussion Highlights33

18.1 Product and Platform33

18.2 Sessions, Clustering, and Load Balancers33

18.3 Security33

18.4 Federal / Classified Delivery34

18.5 Commercial and Engagement Strategy34

19. Consultant Readiness Checklist (Derived from Day 1)35

19.1 Before the Engagement35

19.2 Prerequisites Day (≤ 30 minutes of console work)35

19.3 Installation Day35

19.4 Configuration Phase35

19.5 Value-Expansion Phase36

20. Glossary of Terms and Acronyms37

21. Chronological Session Timeline39

21.1 Part 1 — Morning/Afternoon Session (3h 19m)39

21.2 Part 2 — End-of-Day Session (26m)40

22. Reconstructed Installation Runbook41

22.1 Stage 0 — Information Gathering (before touching any console)41

22.2 Stage 1 — Authentication Manager Prerequisite41

22.3 Stage 2 — Cloud Authentication Service Prerequisites41

22.4 Stage 3 — Kit Extraction and Symlinks41

22.5 Stage 4 — Setup Scripts41

22.6 Stage 5 — Post-Setup Verification in AM42

22.7 Stage 6 — Start and Validate42

22.8 Stage 7 — Common Next Configurations (per engagement scope)42

23. Open Questions and Risk Register43

23.1 Open Technical Questions43

23.2 Delivery Risks and Mitigations43

23.3 Dependencies for Day 2 and the Onsite44

PART II — Day 2: Hands-On In-Person Training (July 1, 2026)

24. Day 2 Executive Summary46

25. Day 2 Session Logistics and Structure48

25.1 Recording Segments48

25.2 Format and Participants48

25.3 Instructional Character48

25.4 Trainer Coverage Boundaries48

26. Certificate Management and Replacement49

26.1 The Certificates Directory49

26.2 The Diffie-Hellman Parameters Requirement49

26.3 Chain Ordering49

26.4 Replacement Procedure (Demonstrated Live)49

26.5 Where the Certificates Are Wired: server.xml49

27. Runtime Configuration: config.sh and setenv.sh51

27.1 What Lives in These Files51

27.2 The Encryption Key (MS Debug War)51

27.3 Changing the AMS Bind Password — Procedure and a Live Incident51

28. Operational Discipline: Restarts, Latent Failures, and Silent Expiry52

28.1 Why a One-Line Change Can Take Down an Application52

28.2 Silent Certificate Expiry52

28.3 The Two-Step Restart Pattern52

28.4 XML Discipline and Log-First Troubleshooting52

29. SSP On-Demand Password Generation (Completing the WPI Story)53

29.1 Recap and User Experience53

29.2 The Two-Tool Contract53

29.3 Enabling the Feature: allowedUserProfileOperations53

29.4 Password Pattern Syntax53

29.5 The AD Write Path: AM as Proxy, LDAPS Mandatory54

30. Docker Containerization and the Prime Development Pipeline55

30.1 Context: Why Now, and For Whom55

30.2 The Container Topology55

30.3 Session Architecture Clarified: Two Token Systems55

30.4 The Build-Deploy-Restart Development Loop55

30.5 Environment Boundaries55

31. Lab Environment Options for Consultants57

31.1 Option 1: vCloud SecurID Template (Full-Stack Practice)57

31.2 Option 2: Docker (Fast Feature Testing)57

31.3 Training Materials Inventory57

32. Virtual Token Service (VTS) — End-to-End Build58

32.1 The Problem VTS Solves58

32.2 Server Side: Already Deployed58

32.3 Client Side: The Two-Step Builder Workflow58

32.4 Mutual TLS (MTLS) Trust58

32.5 The Live Troubleshoot — A Diagnostic Case Study58

33. PCAP Deep Dive: The On-Premises Identity Portal60

33.1 Positioning: The Sovereign CAS60

33.2 Capabilities and Configuration Surface60

33.3 SAML Application Integration (Demonstrated)60

33.4 The Extended Live Debug — and What It Taught60

33.5 Patching and Rollback via WAR Files (Bonus Module)61

33.6 Compliance Sidebar: SOC Reports61

34. Branding and Customization (Part 2)62

34.1 Where Branding Lives62

34.2 Logos, Backgrounds, and the No-Restart Property62

34.3 Colors and Layout: Two Files, Trial and Error62

35. Email Notification Templates63

35.1 The Template System63

35.2 Anatomy of a Template63

35.3 The Demo and the Day's Last Lesson63

35.4 Session Close63

36. Day 2 Chronological Session Timeline64

36.1 Part 1 — Main Session (3h 3m)64

36.2 Part 2 — Branding and Templates (17m)65

37. Day 2 Notable Q&A and Discussion Highlights66

37.1 Certificates and Cryptography66

37.2 Configuration and Operations66

37.3 Password Generation and WPI66

37.4 Docker and Sessions66

37.5 VTS and PCAP67

38. Day 2 Action Items and Follow-Ups68

39. Day 2 Additions to the Open Questions and Risk Register69

39.1 Open Technical Questions (continued)69

39.2 Delivery Risks and Mitigations (continued)69

40. Glossary Additions from Day 271

41. Two-Day Curriculum Map and Program Status73

41.1 What the Two Days Covered73

41.2 Remaining Program Elements73

41.3 Closing Note73

PART III — The Training Deck Companion (104 Slides, Annotated)

42. The Training Deck: Overview and How to Use Part III76

42.1 The Deck's Structure vs. Our Delivery76

42.2 Terminology Note: AMIS/HDAP vs. MS/HTAP76

43. Deck Day 1 — Introduction, Architecture & Quick Setup (Slides 1–29)77

43.1 Framing and Curriculum (Slides 1–5)77

43.2 What Prime Is and Why It Exists (Slides 6–7)79

43.3 Architecture Diagrams and the Network Matrix (Slides 8–11)81

43.4 The Three Components, Formally (Slides 12–16)83

43.5 Installation: Requirements and the Manual Path (Slides 17–23)86

43.6 Legacy Manual Configuration Reference (Slides 24–29)89

44. Deck Day 2 — SSP Overview & Configuration (Slides 30–37)93

45. Deck Day 3 — Certificates, HDAP & High Availability (Slides 38–52)97

45.1 Certificates, Formalized (Slides 40–43)97

45.2 HDAP Configuration (Slides 44–49)99

45.3 Redundancy, High Availability, and Health Checks (Slides 50–52)102

46. Deck Day 4 — External SSP & Bulk Invite (Slides 53–61)104

47. Deck Day 5 — AMIS API, ENS, Troubleshooting & Logging (Slides 62–96)109

47.1 The AMIS API, Formally (Slides 63–69)109

47.2 API Call Reference (Slides 70–85)113

47.3 ENS2 — Expiry Notification Service Configuration (Slides 86–89)119

47.4 Logging, Versions, and the Formal Patch Procedure (Slides 90–96)121

48. Deck Extras — SSP SAML Integration with CAS (Slides 97–104)126

49. Slide-to-Chapter Reconciliation Map130

49.1 What This Map Shows132

PART IV — The AMIS Deep-Dive Companion (63 Slides, Annotated)

50. The AMIS Master Deck: Provenance and How Part IV Works134

50.1 What This Deck Is134

50.2 The Hidden-Slide Discovery134

50.3 Integration Policy for Part IV134

51. Prime Positioning and Component Differentiators (Slides 1–17)135

52. AMIS Component Architecture (Slides 18–24)144

53. The Original Installation and AM-Side Configuration (Slides 25–31)148

54. Application Integration for Developers (Slides 32–55)152

54.1 The Complete Method Inventory (Slides 34–36)153

54.2 The Developer Toolkit: Harnesses and ARC (Slides 37–39)155

54.3 The API Cookbook (Slides 40–55) — Consolidated Cross-Reference157

55. Maintenance, Hardening, and Troubleshooting (Slides 56–62)158

56. AMIS Deck Reconciliation Map163

57. Updated Program Status and Closing165

57.1 What Part IV Added165

57.2 Follow-Ups Arising from Part IV165

57.3 The Guide, Complete165

PART V — The Official Install Guide Companion (v2.0, June 2025)

58. The Official Guide: Version, Role, and How Part V Works167

58.1 Canonical Source Declaration167

58.2 Why Part V Is a Companion, Not a Copy167

58.3 What the Guide Contains (Orientation Map)167

59. Corrections, Refinements, and Conflicts — The Reconciliation Chapter169

59.1 CORRECTION — Prime Server Sizing169

59.2 REFINEMENT — Load Balancer Persistence: Three Sources Reconciled169

59.3 REFINEMENT — Health-Check URLs: The Authoritative Set169

59.4 NEW AUTHORITY — AD Bind Account Requirements (Resolves Action D2-8)169

59.5 CONFIRMATION — PQS v2.0 Prompt Set Matches the Training170

59.6 RECONCILIATION — Certificates: The JKS Procedure vs. the PEM Model170

59.7 CONFIRMATION — Developer Tooling Ships Today (Closes Action P4-1)170

59.8 Minor Deltas Worth Recording171

60. New Reference Material from the Official Guide172

60.1 The Architecture Diagrams172

60.2 The PQS Output Log: Exact Object Inventory174

60.3 Default HTTP Configuration and Sample URLs175

60.4 Console Navigation Paths for Every Prerequisite175

60.5 Windows Installation Path175

60.6 Login Tests and Authentication-Monitor Verification Chains175

60.7 External SSP: The Must-Match Parameter List176

61. The Complete ENS2 Event Reference (Imported from the Official Guide)177

61.1 Event Catalog and Architecture177

61.2 Installation Essentials (Confirming and Completing Section 47.3)178

61.3 The Window Semantics (-W)179

61.4 Global Elements: testMode, send-to, whitelist179

61.5 Per-Event Reference179

61.6 Testing and Execution Recommendations (Verbatim Policy)180

62. Runbook Cross-Validation Verdict and Program Close-Out181

62.1 Section 22 vs. the Official Procedure181

62.2 Actions Closed and Opened by Part V181

62.3 The Guide, Now Truly Complete182
