---
title: "42. The Training Deck: Overview and How to Use Part III"
sidebar_position: 42
---

# 42. The Training Deck: Overview and How to Use Part III


Part III integrates the official Prime Training master deck (V8, 104 slides) — authored by Nadine Elaasy under the supervision of Sean P. Doyle and Ramesh Anand — into this field guide. This is the deck referenced repeatedly during the live sessions (Day 2, Section 31.3) as the canonical training master. Every slide is reproduced below in order, each with commentary that does three things: explains the slide's content in field terms, cross-references the live-session chapter in Parts I–II where the topic was taught (so reader can move between the deck's formal treatment and the trainer's spoken depth), and — most valuably — flags and expands deck-only material: procedures and reference content present in the deck that the two live days never reached. Chapter 49 closes Part III with a complete slide-to-chapter reconciliation map.

## 42.1 The Deck's Structure vs. Our Delivery

The deck is organized as a five-day curriculum: Day 1 (Introduction, Architecture & Quick Setup), Day 2 (SSP Overview & Configuration), Day 3 (Certificates, HDAP & High Availability), Day 4 (External SSP & Bulk Invite), and Day 5 (AMIS API, ENS, Troubleshooting & Logging), plus an Extras module on SSP SAML integration with CAS. Our live engagement compressed this into two intensive days, reordering by field priority (Bulk Update and WPI moved forward; External SSP and ENS deferred) and substituting live builds for several lecture modules. The consequence: roughly a third of the deck is material the live sessions summarized in a sentence or skipped entirely — the network/port matrix, the AMIS internal component model, the SSP/HDAP configuration file families, load-balancer health checks, the External SSP installation, the Bulk Invite utility, the sixteen-slide API call reference, the ENS2 configuration procedure, the formal WAR patching procedure, and the SSP-SAML-with-CAS integration. Part III restores all of it.

## 42.2 Terminology Note: AMIS/HDAP vs. MS/HTAP

The deck uses the formal component names: AMIS (AM Integration Services) for what the live sessions called MS/AMS, and HDAP (Help Desk Admin Portal) for what the transcripts rendered as HTAP. They are the same components; Part III follows the deck's spelling when discussing slides and preserves Parts I–II as delivered. Likewise the deck's service tomcat-amis command form matches the 'older customers' pattern noted in Day 2 Q&A (Section 37.2) alongside the modern systemctl units.
