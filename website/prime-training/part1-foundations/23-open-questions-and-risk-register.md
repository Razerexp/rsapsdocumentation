---
title: "Open Questions and Risk Register"
sidebar_position: 23
---

# Open Questions and Risk Register

Day 1 surfaced a number of unresolved questions, dependencies, and delivery risks. This register consolidates them with suggested owners and the engagement or decision each one affects, so nothing raised in the room is lost between sessions.

## Open Technical Questions

| \# | Question | Raised By / Context | Status at Close |
| :--- | :--- | :--- | :--- |
| OQ-1 | Is there a hard per-node MS connection limit (~200) before performance degrades? | Sizing discussion ([Section 9](./9-reference-production-architecture-and-sizing.md)) | Trainer to verify with engineering |
| OQ-2 | Does the core product's planned Oracle JDK / licensed-component removal (AM 9.10) impact Prime compatibility? | Steve Small sidebar ([Section 4.4](./4-primekit-packaging-and-the-technology-stack.md)) | Email to engineering via referral; contact TBD |
| OQ-3 | What SCIF-acceptable authentication methods can protect /invite where users lack email, phone, and smart card? | Jake, SSP discussion ([Section 12.3](./12-ssp-configuration-and-authentication-methods.md)) | Options identified (trusted agent, challenge-group exclusion, credential provider, entitlement\+password); site-policy determination pending onsite |
| OQ-4 | SSP/HTAP Java 17 timeline — when do third-party library refactors land? | Stack discussion ([Section 4.2](./4-primekit-packaging-and-the-technology-stack.md)) | MS ~2 weeks (Wells Fargo driver); SSP/HTAP unscheduled |
| OQ-5 | Redis clustering configuration specifics for containerized Prime | Clustering discussion ([Section 8.4](./8-auth-clustering-and-session-token-architecture.md)) | Declared out of scope Day 1; supported, details deferred |

## Delivery Risks and Mitigations

| \# | Risk | Impact | Mitigation Discussed |
| :--- | :--- | :--- | :--- |
| R-1 | Load balancer coordination (customer-owned, separate team) delays onsite work | Schedule slip; repeat visits | Engage LB team early; verify persistence capability and timeout ≥ token timeouts before install day |
| R-2 | SCIF constraints prevent standard troubleshooting (no log export, no screen share) | Extended resolution time | Mirror-lab reproduction; printed documentation; question-relay protocol during SCIF days; plan for multiple visits |
| R-3 | Client applications logging API responses expose rotating service-account passwords | Credential leakage | Default AMS response-logging off; customer guidance on client-side logging; migrate sensitive integrations to OAuth |
| R-4 | Template Builder encryption key mistaken for a file path during Bulk Update configuration | Failed tool runs; confusion | Explicit training callout ([Section 15.2](./15-part-2-deep-dive-the-bulk-update-tool.md)); include in runbook and customer handoff notes |
| R-5 | Missing CAS STIG blocks a customer project awaiting compliance evidence | Stalled deployment | Okta/Optum-derived draft complete; route for formal approval (action \#8) |
| R-6 | Legacy training documentation predates Quick Setup automation | Consultant confusion; wasted effort | Treat pre-2019 manual provisioning steps as historical; rely on current guides and this summary |
| R-7 | Prime purchased for one use case; broader suite value unrealized | Missed expansion; customer churn risk | Deliver primary use case first, then structured suite walkthrough; PS-led expansion conversations ([Section 13.2](./13-windows-password-integration-wpi-and-the-password-rotation-solution.md)) |
| R-8 | Single AM primary is the true scaling bottleneck regardless of MS node count | Performance disappointment after scale-out | Size the full chain; set expectations that MS horizontal scale cannot offset AM-tier saturation |

## Dependencies for Day 2 and the Onsite

- Documentation package (hardening guide, API reference, Postman collection, Template Builder, CAS materials) delivered to OneDrive — prerequisite for consultant lab rehearsal.
- CAS sandbox tenant provisioned via Jira (Ben's template) — prerequisite for cloud-integration practice.
- SSP password-generation button configuration — scheduled for Day 2; required knowledge for the SOCOM primary use case.
- Bulk enrollment hands-on — scheduled for Day 2 at 9:30 AM.
- SOCOM paperwork — to be sent ahead of the July 27 trip; second-trip staffing (Aug 10/17) contingent on Ben's availability after Aug 15.

*End of [Part I](./2-session-logistics-participants-and-structure.md). Prepared from the Day 1 meeting recording transcripts (Parts 1 and 2), June 30, 2026. [Part II](../part2-hands-on/25-day-2-session-logistics-and-structure.md) — Day 2 — follows.*
