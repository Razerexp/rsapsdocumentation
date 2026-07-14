---
title: "Two-Day Curriculum Map and Program Status"
sidebar_position: 41
---

# 41. Two-Day Curriculum Map and Program Status

## 41.1 What the Two Days Covered

| Competency Area | Day 1 | Day 2 | Depth Achieved |
| :---- | :---- | :---- | :---- |
| Suite knowledge (components & positioning) | ● | ● | Complete — all components introduced; VTS and PCAP built end-to-end |
| Installation (PrimeKit \+ Quick Setup) | ● |  | Complete with runbook (Section 22\) |
| Architecture, clustering & sizing | ● | ◐ | Complete; Docker/Redis extends the session model |
| Certificates & TLS |  | ● | Complete — replacement, DH rule, server.xml, JKS legacy |
| Runtime configuration (config files) | ● | ● | Complete — XML surface (Day 1\) \+ config.sh/setenv.sh (Day 2\) |
| WPI / password rotation feature chain | ● | ● | Complete end-to-end — Bulk Update \+ SSP generation \+ AD/LDAPS path |
| Service accounts & API security | ● | ◐ | Complete; OAuth adoption evolving |
| Containerization & labs | ◐ | ● | Working knowledge; Hillis is the deep resource |
| Branding & email templates |  | ● | Complete — two-file CSS model \+ template pairs |
| Patching & rollback | ◐ | ● | Complete — WAR/patches/backups workflow |
| Troubleshooting methodology | ◐ | ● | Modeled extensively; dedicated module still to come |
| Federal/SCIF delivery patterns | ● | ◐ | Strong discussion coverage; PCAP/CAC routes to Hillis |
| Compliance evidence (STIG, SOC) | ● | ◐ | In progress — CAS STIG in approval; SOC 2/3 identified |

*● full module    ◐ partial / discussion coverage*

## 41.2 Remaining Program Elements

* **Dedicated troubleshooting module** — promised by the trainer: error classes mapped to their log files, diagnostic sequences, and common failure signatures.

* **Docker lab enablement** — package delivery to OneDrive plus assisted first builds (Hillis/Ramesh).

* **PCAP-in-Docker resolution** — root cause and a clean recorded walkthrough of the working configuration.

* **Slide-deck reconciliation** — delivered: Part III of this guide integrates Nadine's 104-slide training master with full annotation and a slide-to-chapter map (Chapter 49). The \~140-slide engagement deck remains available for a future pass.

* **Field application** — the July 27 SOCOM onsite is the first live proving ground for the WPI/password-generation chain rehearsed across both days.

## 41.3 Closing Note

Across two days and roughly six and a half hours of recorded instruction, the program moved the team from suite orientation to genuine operational readiness: every file a consultant will touch in a standard engagement has now been opened, edited, broken, and repaired on camera. The recordings, the OneDrive materials library, the lab options, and this reference document together form a self-service enablement kit — and the recurring lesson threading every module, from the first mis-set SMTP entry to the last downed MailHog container, is the one worth carrying onsite: *read the logs first; the answer is almost always in a small number of known files.*

*End of Part II. Part III — The Training Deck Companion — follows.*

**PART III**

**The Training Deck Companion**

An Annotated Walkthrough of the 104-Slide Prime Training Master (V8)

*Prepared by Nadine Elaasy  ·  Supervised by Sean P. Doyle and Ramesh Anand*
