---
title: "51. Prime Positioning and Component Differentiators (Slides 1–17)"
sidebar_position: 51
---

# 51. Prime Positioning and Component Differentiators (Slides 1–17)


*Slide 1 — Title — AMIS Training Introduction*

![](/img/106.jpeg)

Title slide; the notes carry the formal Dell/RSA trademark and disclaimer block with the 2018 copyright and the course code ED AMPRIMEIMP\_A0 — the artifact's provenance stamp.

*Slide 2 — Introduction Divider*

![](/img/107.jpeg)

*Slide 3 — Course Outline (1 of 3)*

![](/img/108.jpeg)

The formal module structure: Suite Overview (ecosystem topology, components, capabilities, use cases) and AMIS Component Architecture (the design pattern, internals, and deployment decision points including load balancing and security). This learning-objectives framing — absent from both live sessions and the V8 deck — is directly reusable for onboarding plans: it defines what a consultant should be able to answer after each module.

*Slide 4 — Course Outline (2 of 3)*

![](/img/109.jpeg)

Modules three and four: AMIS Installation & Configuration (prerequisites, Linux install, Java/Tomcat, Template Builder, hardening, verification, lab) and — the deck's distinctive module — AMIS Application Integration for Developers: using AMIS to integrate applications for token lifecycle management and strong authentication, with REST service harnesses, developer considerations, and worked integrations naming provisioning systems, workflow engines, and ServiceNow. No other program artifact frames AMIS as a developer platform this explicitly.

*Slide 5 — Course Outline (3 of 3)*

![](/img/110.jpeg)

The troubleshooting module (logs and tools, approach, common causes, engaging RSA support, software updates, lab) plus wrap-up — the syllabus for Chapter 55's content and a preview of the still-owed live troubleshooting session (Section 41.2).

*Slide 6 — Prime Overview Divider*

![](/img/111.jpeg)

*Slide 7 — Why Does Prime Exist?*

![](/img/112.jpeg)

A third articulation of the 'why' (after Section 3.4's spoken version and Part III slide 7's twelve-capability list), and the most business-shaped: large-scale deployment facilitation, token lifecycle and provisioning efficiency, simplified 2FA/MFA application integration, deeper audit/security/UX control, and an extensible framework customers or RSA PS can tailor — summarized in the slide's two banner phrases, 'Speed Deployment at Lower Cost' and 'Deployment Options.' This is the executive-summary version for customer stakeholders.

*Slide 8 — What Is Prime?*

![](/img/113.jpeg)

The 2018 component inventory: AMIS (with Auth Services, Admin Services, and the workflow/email-template/notification utilities), SSP, and HDAP — a three-component suite. Reading this against Part I Section 3's modern inventory (adding PCAP, VTS, ENS, and the bulk tool family) measures exactly how much the suite has grown since this deck was authored: the 'continues to evolve' promise on this slide, kept.

*Slide 9 — Prime Package Structure*

![](/img/114.jpeg)

The layered view: the three Prime components atop supporting components — Oracle Java JRE 8\+ and Apache Tomcat 9\+. Note the era marker: Oracle JRE, since replaced by Eclipse Adoptium OpenJDK (Part III slide 11) — the very transition the AM 9.10 Oracle-removal discussion (Section 4.4, OQ-2) continues on the core-product side.

*Slide 10 — Component Descriptions — AMIS Differentiators*

![](/img/115.jpeg)

New material: the differentiator column.

Beyond the description (business-logic-level REST services plus supporting utilities), the Key Differentiators column states AMIS's architectural value proposition more sharply than any other artifact: simple, stateless REST calls covering all RSA authentication methods; fat-client and web applications can integrate authentication without maintaining individual agent records or sdconf.rec files (AMIS holds the one agent identity; integrating apps just call REST); support for central, load-balanced, redundant authentication-hub architectures; and support for external authentication systems such as third-party challenge-question providers. The no-agent-record point is the single best sentence for explaining AMIS's value to a customer architect.

*Slide 11 — Component Descriptions — HDAP Differentiators*

![](/img/116.jpeg)

HDAP's differentiators, three of which no other artifact states: help-desk staff get token lookup and troubleshooting without extending AM Security Console access to hundreds of globally distributed agents (the security case for HDAP in one line); HDAP is deliberately single-user — no bulk operations (bulk work belongs to the bulk tools, Part I Section 3.2); and it supports multi-tenant deployment alongside branding and localization. The single-user boundary is worth quoting when customers ask why HDAP can't mass-update.

*Slide 12 — Component Descriptions — SSP Differentiators*

![](/img/117.jpeg)

SSP's differentiator column adds security controls the live sessions demonstrated only piecemeal: step-up authentication challenges, white-lists, group controls, and end-user notifications — plus the familiar full-method login support, branding, bulk onboarding via invitation, and PS extensibility (the password-checkout button of Section 29 being a live example of that last point). The operations list here also carries a dating artifact: 'Authenticate Enrollment (Sept)' — a feature annotated with its ship month, frozen in the draft.

*Slide 13 — AMIS Topology*

![](/img/118.jpeg)

The AMIS-centric topology diagram — the deck's first of five architecture views, each at a different zoom level. Cross-reference: Part I Section 9 and Part III slides 8–9.

*Slide 14 — Overall Prime Architecture*

![](/img/119.jpeg)

*Slide 15 — Logical Prime Architecture*

![](/img/120.jpeg)

New architectural facts in the annotations.

This diagram's callouts state three connection facts no live session articulated: internal Prime Self-Service connects directly to AD, while external Prime Self-Service authentication routes through AMIS services (the DMZ tier never touches the directory — a security property worth citing in external-SSP design reviews, complementing Section 9.3); the AMIS Agent connects to AM as a standard authentication agent (the agent record Quick Setup creates, Section 6.4, and the UDP/5500 path in the port matrix); and the workflow engine consumes SMTP services while the AM web tier routes directly to AM.

*Slide 16 — Prime Portal User Interfaces*

![](/img/121.jpeg)

Side-by-side screenshots of the 2018-era HDAP and SSP interfaces — useful today mainly as a before picture against the branded portals of Sections 34 and Part III slides 14/16.

*Slide 17 — Sample Use Cases*

![](/img/122.jpeg)

Seven use cases — a subset of the twelve-item list in Part III slide 7's notes (which extended this list with forgot-password, bulk onboarding, branding, syslog auditing, and the REST/ServiceNow/SailPoint/IGL integrations). The lineage is visible: Nadine's deck grew this slide.
