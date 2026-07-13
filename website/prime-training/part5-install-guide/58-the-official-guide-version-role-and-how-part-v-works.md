---
title: "The Official Guide: Version, Role, and How [Part V](./58-the-official-guide-version-role-and-how-part-v-works.md) Works"
sidebar_position: 58
---

# The Official Guide: Version, Role, and How [Part V](./58-the-official-guide-version-role-and-how-part-v-works.md) Works

## Canonical Source Declaration

[Part V](./58-the-official-guide-version-role-and-how-part-v-works.md) integrates the RSA ID Plus PrimeKit Quick Installation Guide, Version 2.0, dated June 27, 2025 (80 pages, © 2017–2025 RSA Security LLC) — the official, RSA-published installation cookbook, complete with screenshots and worked console output. One rule governs everything in this Part: the official guide is the canonical source for installation procedure, and it is a living, versioned document. This field guide's copy of its facts is frozen at v2.0; before executing any install, consultants must confirm they hold the current edition, and where a newer edition disagrees with anything written here — including this Part — the current official guide wins. Everything below is dated against v2.0 / June 2025.

## Why [Part V](./58-the-official-guide-version-role-and-how-part-v-works.md) Is a Companion, Not a Copy

The guide is not reproduced wholesale, for two deliberate reasons. First, an embedded copy silently goes stale and risks a consultant executing outdated steps from this document instead of the current official procedure. Second, this field guide already carries three treatments of installation — the transcript-reconstructed runbook ([Section 22](../part1-foundations/22-reconstructed-installation-runbook.md)), the training master's install module ([Part III](../part3-deck-companion/42-the-training-deck-overview-and-how-to-use-part-iii.md), slides 17–23), and the legacy manual procedure ([Part IV](../part4-amis-deep-dive/50-the-amis-master-deck-provenance-and-how-part-iv-works.md), slides 25–31) — and a verbatim fourth adds pages, not knowledge. Instead, [Part V](./58-the-official-guide-version-role-and-how-part-v-works.md) does the four things only a cross-validation can do: [Chapter 59](./59-corrections-refinements-and-conflicts--the-reconciliation-chapter.md) catalogs every point where the official guide corrects, refines, or conflicts with material elsewhere in this guide (with verdicts); [Chapter 60](./60-new-reference-material-from-the-official-guide.md) extracts the reference material that exists nowhere else in the program; [Chapter 61](./61-the-complete-ens2-event-reference-imported-from-the-official-guide.md) imports the guide's largest gift — nineteen pages of complete ENS2 event-configuration reference; and [Chapter 62](./62-runbook-cross-validation-verdict-and-program-close-out.md) renders the cross-validation verdict on [Section 22](../part1-foundations/22-reconstructed-installation-runbook.md)'s runbook and closes out the affected open actions. Selected figures from the guide — its three architecture diagrams, the AD delegation screenshots' substance, and the ENS component diagram — are embedded where they earn their place.

## What the Guide Contains (Orientation Map)

| Guide Section (v2.0 pages) | Content | Field Guide Treatment |
| :--- | :--- | :--- |
| Prerequisites (2–3) | Server specs; LB VIPs, persistence, health monitors | §59.1–59.3 corrections and deltas |
| Optional Tool Packages (4–5) | Template Builder (4 templates), Bulk Invite, svcaccountgen, harnesses, Postman 50\+ collection | §59.7 (closes P4-1); §60.5 |
| Architecture Diagrams (6–8) | HA\+AM; \+CAS high-level; \+CAS detailed with full port labels | Figures in §60.1 |
| AD Bind Requirements (9–10) | Domain Users \+ delegated Change/Reset Password; LDAPS; Global Catalog warning | §59.4 — resolves D2-8 |
| Linux/Windows Internal Config (13–26) | Full install procedure, PQS prompts and output, service management | §60.2–60.4; §62 runbook validation |
| Login Tests (27–28, 47–48) | HDA-Admins setup; Authentication Monitor verification chains | §60.6 |
| External SSP (29–32) | External kit install; config.sh must-match parameters | §60.7 |
| Server Resources (33–36) | Specs table; full port matrix; LB VIPs/persistence/health URLs; SSL certs | §59.1–59.3, §60.3 |
| Windows PQS \+ CAS Prereqs (37–48) | Console navigation paths for every prerequisite; PQS v2.0 prompt set | §60.4 |
| ENS2 Setup \+ Event Reference (49–67) | Complete installation and per-event configuration reference | [Chapter 61](./61-the-complete-ens2-event-reference-imported-from-the-official-guide.md) (imported in full) |
| Certificate Update Procedure (68–79) | JKS keystore-based replacement, internal \+ external | §59.6 — JKS/PEM reconciliation |