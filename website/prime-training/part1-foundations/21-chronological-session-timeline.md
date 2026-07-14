---
title: "Chronological Session Timeline"
sidebar_position: 21
---

# 21. Chronological Session Timeline

The following timeline maps the flow of both recordings to their approximate elapsed timestamps, to help locate specific moments when reviewing the recordings later. Speaker attributions in the transcript are sparse in long instructional stretches, so intermediate times are estimated from the surrounding anchors; explicitly timestamped anchor points are marked with an asterisk (\*).

## 21.1 Part 1 — Morning/Afternoon Session (3h 19m)

| Elapsed (approx.) | Segment | Content |
| :---- | :---- | :---- |
| 0:00 – 0:06\* | Audio setup | Room audio/mute troubleshooting among Ramesh, James, and Chandan (remote); session proper begins ≈0:06 |
| 0:06\* – 0:20 | Suite overview | Bulk admin tools (invite, enrollment, update); AMS REST interface as AM↔CAS bridge; Prime team org slide; PCAP; VTS; ENS; 'Why Prime' rationale; typical architecture preview; default prerequisites slide |
| 0:20 – 0:35 | Technology stack | Java 8 / Tomcat 9 baseline; Java 17 / Tomcat 10 migration status (MS ready, SSP/HDAP pending); javax→jakarta refactoring history; PQC/crypto-provider swap question; symlink maintenance model; PrimeKit consolidation history (Justin) |
| 0:35 – 0:55 | Prerequisites demo | AM agent API key creation; CAS access policy (Prime MFA Policy); org ID capture; two OAuth clients (Admin API \+ MFA API) with client IDs and JWK downloads; endpoint URLs; JWK file transfer to Prime server |
| 0:55 – 1:20 | Installation demo | Tarball extraction; primekit symlink creation; java/latest and tomcat symlink walkthrough; Scripts 1–3 (local user, systemctl registration, permission reset); Script 4 Quick Setup questionnaire (all prompts); SMTP entry fix via edit menu; Quick Setup execution and review of created objects in AM |
| 1:20 – 1:45 | Startup & validation | Manual service starts (MS/SSP/HDAP); ports 8443/8444/8445; Postman two-step flow (session token → user lookup); Activity Monitor verification; hardening guide and API reference guide discussion; documentation package commitment |
| 1:45 – 2:05 | Field interlude & clustering intro | SSP load delay (lab VM); onsite pitch strategy for suite components; SCIF troubleshooting patterns (mirror-lab, printed docs); patch turnaround praise; CAS demo tenant Jira process; Oracle/OpenJDK core-product sidebar; auth clustering concept introduced |
| 2:05 – 2:25 | Clustering & architecture | Machine IDs and mod-20 token encoding; identical config across nodes; Redis for containerized deployments; idle/lifetime timeouts; load balancer persistence interaction; reference architecture (2 internal \+ 2 DMZ); sizing (8/8 Prime, 32/8 AM, 25–30 SSP sessions); Walmart/Verizon scale; AM-primary bottleneck; internal vs. external SSP |
| 2:25 – 2:29\* | Config philosophy | No-admin-UI rationale (group-based enrollment example); PrimeKit folder structure; MS config file tour begins (authclusterconfig, am8config) |
| 2:29:00\* | Arrival | Hillis joins in person (Chandan's 'imposter' greeting); recap of service account demo in progress |
| 2:29 – 2:45 | Service account system | Three session-token methods; rotating-password lifecycle demo in Postman (policy → domain → role → attribute → user); new-password-in-response capture; encrypted expiry attribute; corruption-forces-rotation demonstration; live demo hiccup resolved |
| 2:31:45\* – 2:35 | Security exchange | Chandan challenges response-logging exposure; AMS default no-response-logging; OAuth (client secret / private-key JWT) as the standards-based alternative; UPS adoption |
| 2:35 – 2:55 | authconfig profiles & SSP | authenticateOnly / clearNextTokenCode / questionsDisabled flags; simple vs. SSPauth profile demo; SSP authentication.xml; method inventory and chaining; /invite independent configuration; entitlement gating and time limits |
| 2:55 – 3:08\* | SCIF & WPI discussion | Enrollment protection without email/phone/smart card; trusted agent, challenge-group exclusion, credential provider; WPI mechanics ('fancy password injection'); rotation failure mode; Bulk Update \+ SSP password-checkout solution; Dave Allison origin story; SOCOM primary-use-case strategy |
| 3:08\* – 3:15 | Compliance & AI sidebar | Audit-evidence scramble (Christina); Tomcat STIG complete; CAS STIG from Okta/Optum template via Copilot; composite STIG surface; code-scanning gap; internal AI chatbot lessons (grounded vs. ungrounded); PS Assistant |
| 3:10:42\* – 3:19 | Logistics & close | SOCOM trip scheduling (July 27; Aug 10/17); read-on timing; paperwork; evening plans; agreement to reconvene for a 30-minute Bulk Update session |

## 21.2 Part 2 — End-of-Day Session (26m)

| Elapsed (approx.) | Segment | Content |
| :---- | :---- | :---- |
| 0:00\* – 1:40\* | Framing | Troubleshooting-is-learning preamble; Bulk Update positioning among the additional tools; group-based AD password rotation with WPI cache sync; deployment flexibility (any Windows machine or the Prime server); screen share begins |
| 1:40 – 6:00 | Properties file | Line-by-line walkthrough: logging, AM FQDN and credentials, command client credentials via RSA util on the appliance, AD bind account, user/group base and search strings; demo OU with PS demo group (two users) |
| 6:00 – 10:00 | Encryption | Template Builder utility; plain-text-first-run guidance; symmetric key that resembles a file path (Windows-style reformatting demo); encrypting AM, AD, and command client credentials |
| 10:00 – 15:00 | Profile & execution | Rotation frequency; tracking attribute; password generation rules (pattern, length, character/type repetition, special characters); AD-policy-compliance principle; java \-jar run; both-users-skipped teaching moment; attribute clear and re-run (one success, one skipped) |
| 15:00 – 19:30\* | Verification & modes | Summary, output CSV, and audit files; .bat \+ Task Scheduler / shell \+ cron scheduling; SSP password-generation button preview (deferred to Day 2); alias-addition CSV mode (Ben's customer); Confluence documentation availability |
| 19:30\* – 26:25 | Close | Day 2 start time set (9:30 AM for West Coast attendees); session end |

*Timestamps marked (\*) are explicit in the transcript; all other boundaries are best-estimate interpolations.*
