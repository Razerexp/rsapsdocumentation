---
title: "Day 2 Session Logistics and Structure"
sidebar_position: 25
---

# 25. Day 2 Session Logistics and Structure

## 25.1 Recording Segments

| Segment | Date / Start | Duration | Primary Content |
| :---- | :---- | :---- | :---- |
| Day 2 – Part 1 | July 1, 2026, 2:06 PM (UTC) / morning local | 3h 3m 30s | Certificate replacement (PEM, DH parameters, server.xml); config.sh/setenv.sh; compromised bind-password incident; restart risk discipline; SSP generate-password feature; Docker containerization; lab environment options; training materials; VTS end-to-end build; PCAP deep dive with live SAML troubleshooting; WAR-file patching and rollback |
| Day 2 – Part 2 | July 1, 2026, 5:23 PM (UTC) / end of day local | 17m 32s | Branding and customization (logos, backgrounds, CSS color schemes); email notification template system (HTML \+ properties pairs, template-to-operation mapping, global logo); open floor for requested topics |

## 25.2 Format and Participants

Day 2 ran as an in-person, hands-on workshop at the Westfield Marriott, with the same core cast: Ramesh Anand leading; Jacob (Jake), Jay, and colleagues in the room; and remote participation continuing from Day 1's attendees. **Hillis** featured prominently in Day 2's technical content as the architect of the Docker containerization effort (credited alongside Mark) and as the consultant with the most PCAP deployments — the designated escalation for both topics. The session was notably interactive: attendees drove sidebar threads on change-control practices, certificate key sizes, session behavior across node restarts, lab provisioning, and federal deployment patterns.

## 25.3 Instructional Character

The day leaned into live failure as a teaching instrument. The VTS demonstration failed twice before succeeding (username mismatch, then hardware-vs-software token mode), and the PCAP SAML integration consumed an extended debugging arc spanning certificate paths, keystore creation, issuer-ID collisions, and finally a WAR-version patch — during which the trainer demonstrated the patching workflow itself as a bonus module. Rather than editing these out, the trainer used each to model the diagnostic sequence consultants should internalize: *clear the logs, reproduce, read the stack trace to the line number, fix one variable at a time*. He also repeatedly de-pressurized the learning curve: recordings exist for every module, materials live in the shared OneDrive, and both he and Hillis are available to co-troubleshoot consultant lab builds.

## 25.4 Trainer Coverage Boundaries

A noteworthy disclosure for engagement staffing: the trainer works exclusively with enterprise and strategic customers (current majors: Truist, FHLBNY, RBC, NYITS) and, as a non-citizen, does not and cannot work federal engagements. Federal and DoD delivery questions — including PCAP-with-CAC patterns and the sovereign deployment parallel — route to Hillis and the cleared consulting team. This division of expertise should inform who the team pulls into which customer conversations.
