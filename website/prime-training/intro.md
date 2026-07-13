---
title: "Welcome to PrimeTime"
sidebar_position: 1
slug: /
---

RSA PROFESSIONAL SERVICES

Welcome to “PrimeTime”

*A Pretty Good Field Guide to RSA PRIME (2026)*



[Part I](./part1-foundations/2-session-logistics-participants-and-structure.md): Day 1 Live Training (3h 46m) — Suite, Installation, Architecture, Configuration & Bulk Update

[Part II](./part2-hands-on/25-day-2-session-logistics-and-structure.md): Day 2 Live Training (3h 21m) — Certificates, Runtime Config, Docker, VTS, PCAP, Branding & Templates

[Part III](./part3-deck-companion/42-the-training-deck-overview-and-how-to-use-part-iii.md): The Training Deck Companion — All 104 Slides, Annotated (N. Elaasy, V8)

[Part IV](./part4-amis-deep-dive/50-the-amis-master-deck-provenance-and-how-part-iv-works.md): The AMIS Deep-Dive Companion — 63 Slides, Annotated (Doyle / Mitchell / Khaled)

[Part V](./part5-install-guide/58-the-official-guide-version-role-and-how-part-v-works.md): The Official Install Guide Companion — Corrections, Reconciliation & ENS2 Reference (v2.0, June 2025)

*Sessions: June 30 – July 1, 2026  |  Trainer: Ramesh Anand  |  Prepared from transcripts, decks, and the official guide*

On June 30, 2026, the RSA Professional Services team conducted Day 1 of a multi-day technical enablement session on the RSA Prime solution suite. The day was delivered in two recorded segments: a morning-through-afternoon session of approximately 3 hours 19 minutes (Part 1) and a 26-minute end-of-day continuation (Part 2) focused on the Bulk Update tool.

The overarching objective of Day 1 was to bring the consulting team from conceptual familiarity with Prime to genuine operational fluency: understanding what the Prime application suite contains, how it is packaged and installed via PrimeKit and Prime Quick Setup, how it is architected in production, how it is configured through its XML and properties files, and how its most consequential field capabilities — the rotating-password service account system, self-service enrollment protection, and Windows Password Integration (WPI) automation — actually work under the hood. The session blended slide-driven instruction with an extensive live demonstration in which a complete Prime environment was installed, connected to both RSA Authentication Manager and the Cloud Authentication Service, and exercised end-to-end via REST API calls in Postman.

A defining feature of the day was its practitioner orientation. Throughout the session the trainer and attendees repeatedly connected the material to live federal engagements — including an upcoming SOCOM onsite where WPI-driven password rotation is the customer's primary use case — and to the unique operational constraints of classified (SCIF) environments, where standard troubleshooting workflows (log export, screen sharing, remote support) are unavailable and consultants must rely on parallel lab reproduction, printed documentation, and iterative site visits.

Key outcomes and themes from Day 1 include:

- Prime is a suite, not a product. Beyond the three core web applications (MS/AMS, SSP, HTAP), Prime encompasses bulk administration tools, the Prime Central Authentication Portal (PCAP), the Virtual Token Service (VTS), and the Expiry Notification Service (ENS) — all of which evolve rapidly in response to specific customer requests.
- Installation has been radically compressed. What historically took weeks to months of manual configuration now takes under 30 minutes with PrimeKit and Prime Quick Setup, provided the Authentication Manager and Cloud prerequisites are prepared in advance.
- Configuration is where the real work lives. Prime deliberately has no administrative UI; all behavior is governed by XML and properties files. This design choice accelerates feature delivery but means consultant value is concentrated in configuration, customization, and troubleshooting.
- Session token architecture drives clustering design. Because MS session tokens are in-memory and node-specific, multi-node deployments require either load-balancer session persistence or Prime's auth clustering mechanism (machine IDs with a mod-20 encoding), with Redis-backed clustering now supported for containerized deployments.
- The service account system solves machine-to-machine credential rotation. A purpose-built mechanism issues a new password in the API response every configurable interval (25 days in the demo), tracked via an encrypted identity attribute in Authentication Manager.
- Bulk Update is the linchpin of the federal WPI use case. The standalone Java command-line tool rotates Active Directory passwords for group members on a schedule and synchronizes the Windows Password Integration cache in Authentication Manager, enabling effectively passwordless operation in environments with mandatory password rotation policies.
- Compliance documentation is an emerging gap and opportunity. The team identified STIG-style hardening evidence and audit-ready reporting as areas where PS can add differentiated value for federal customers.
