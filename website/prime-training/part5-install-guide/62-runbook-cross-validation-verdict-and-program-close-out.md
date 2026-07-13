---
title: "Runbook Cross-Validation Verdict and Program Close-Out"
sidebar_position: 62
---

# Runbook Cross-Validation Verdict and Program Close-Out

## [Section 22](../part1-foundations/22-reconstructed-installation-runbook.md) vs. the Official Procedure

The reconstructed runbook ([Section 22](../part1-foundations/22-reconstructed-installation-runbook.md)) was built from spoken demo narration; the official guide is the test of how well that reconstruction holds. Verdict: structurally validated — every stage and its ordering match the official procedure (tarball to /opt/rsa → symlink → scripts 1–3 → PQS on the first node → services → login tests), with the following amendments now incorporated by reference:

1. Sizing (22.1/19.1): 16 GB RAM, 60–100 GB disk per §59.1.
2. Prerequisites (22.1–22.3): add SSH/22 open to the AM primary and SMTP whitelisting (confirmed official, per [Part III](../part3-deck-companion/42-the-training-deck-overview-and-how-to-use-part-iii.md) slide 17 and the guide); use §60.4's console paths; download the OAuth private key before closing the dialog and Publish changes.
3. AD identity source (per §59.4): Domain Users \+ delegated Change and Reset Password; LDAPS 636; never the Global Catalog 3269 for password writes.
4. Multi-node (22.7): PQS runs once — clone the first instance for additional nodes; declare the extra AMIS agent IPs at the PQS prompt.
5. Validation (22.6–22.7): add the HDA-Admins role assignment before HDAP testing, verify the §60.6 Authentication Monitor chains, review the quick-setup log, and confirm AM↔Prime time sync (PQS checks it; skew breaks authentication).
6. LB engineering (22.7): hand the network team §59.2–§59.3: per-service persistence types, timeout ≥ token timeouts, SSL passthrough (or terminate-and-re-encrypt where cookie persistence demands it), and the health-monitor spec (URL, expected body, 5s polling, 3-strike marking).

## Actions Closed and Opened by [Part V](./58-the-official-guide-version-role-and-how-part-v-works.md)

| Item | Disposition |
| :--- | :--- |
| D2-8 (locate Justin's AD bind permissions guide) | CLOSED — the official guide documents it with screenshots (§59.4) |
| P4-1 (do the harnesses/ARC ship currently?) | CLOSED — both harnesses ship as PrimeKit Development Tools; ARC superseded by the official 50\+ Postman collection (§59.7) |
| P4-2 (obtain hardening guide) | Still open — the install guide references hardening only via the [Part IV](../part4-amis-deep-dive/50-the-amis-master-deck-provenance-and-how-part-iv-works.md) slide 60 inventory; the dedicated hardening guide remains the artifact to collect |
| OQ-1 (per-node connection limit) | Still open — no capacity figure appears in the install guide |
| NEW: V-1 — Confirm current-edition status of Install Guide v2.0 before each engagement; establish where the team retrieves the latest edition | Ramesh / team |
| NEW: V-2 — Flag the JKS-vs-PEM certificate documentation gap (§59.6) for the next guide revision | Ramesh / Prime team |
| NEW: V-3 — Change default keystore/trust passwords ('password') as a standing hardening step on JKS-based kits | All consultants — add to §19.4 |
| NEW: V-4 — Adopt the official Postman 50\+ collection as the standard consultant API toolkit; retire ad-hoc collections | Team |

## The Guide, Now Truly Complete

Five parts, five sources, one cross-validated whole: the two days of live training (Parts I–II), the current training master ([Part III](../part3-deck-companion/42-the-training-deck-overview-and-how-to-use-part-iii.md)), the AMIS specialist sourcebook ([Part IV](../part4-amis-deep-dive/50-the-amis-master-deck-provenance-and-how-part-iv-works.md)), and now the official installation cookbook ([Part V](./58-the-official-guide-version-role-and-how-part-v-works.md)) — spanning eight years of program history, from the 2018 AMIS deck to the June 2025 official guide to the July 2026 live sessions. The reconciliation record stands at: one hard correction (server sizing), two refinements resolved into single field positions (load-balancer engineering, health checks), one generational reconciliation (JKS/PEM certificates), one closed documentation hunt (AD bind permissions), two closed currency questions (harnesses, Postman), and a nineteen-page ENS reference imported whole. The single remaining program element is unchanged: the dedicated troubleshooting module — for which Parts IV and V have now pre-assembled the log map, version tooling, debug cycle, monitor chains, and diagnostic sequencing. One session to go.

*End of document. [Part I](../part1-foundations/2-session-logistics-participants-and-structure.md): Day 1 transcripts (June 30, 2026). [Part II](../part2-hands-on/25-day-2-session-logistics-and-structure.md): Day 2 transcripts (July 1, 2026). [Part III](../part3-deck-companion/42-the-training-deck-overview-and-how-to-use-part-iii.md): Prime Training master deck V8, 104 slides (N. Elaasy). [Part IV](../part4-amis-deep-dive/50-the-amis-master-deck-provenance-and-how-part-iv-works.md): Prime AMIS Training Master Deck, draft, 63 slides (S. Doyle, J. Mitchell, N. Khaled). [Part V](./58-the-official-guide-version-role-and-how-part-v-works.md): RSA ID Plus PrimeKit Quick Installation Guide v2.0, June 27, 2025 (canonical for installation; verify current edition before use). Still to come: the dedicated troubleshooting module.*
