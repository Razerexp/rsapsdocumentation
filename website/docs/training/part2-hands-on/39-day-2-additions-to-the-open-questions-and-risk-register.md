---
title: "39. Day 2 Additions to the Open Questions and Risk Register"
sidebar_position: 39
---

# 39. Day 2 Additions to the Open Questions and Risk Register


The following entries extend the Day 1 register (Section 23) with items surfaced on Day 2, numbered continuously.

## 39.1 Open Technical Questions (continued)

\#

Question

Raised By / Context

Status at Close

OQ-6

Root cause of the PCAP SAML failure in the Docker environment (identical config works on Linux)

PCAP debug (Section 33.4)

Under investigation; WAR versions patched; Jira filed for missing diagnostics

OQ-7

Timeline for an official, PS-available Authentication Manager container image

Docker discussion (Section 30.5)

Exists in engineering; unofficial; no PS availability date

OQ-8

Any customer requirements beyond RSA 2048-bit certificate keys (e.g., higher-assurance environments)?

Certificate Q&A (Section 26.4)

No issues known to trainer; check with Hillis/Ben per customer

OQ-9

Full rationale and vulnerability references for the DH parameters requirement

Certificate discussion (Section 26.2)

Justin holds context; optional research item

OQ-10

Notification/monitoring approach for internal (trust, SAML signing) certificate expiry

Restart discussion (Section 28.2)

No mechanism exists today; candidate product enhancement / PS value-add

## 39.2 Delivery Risks and Mitigations (continued)

\#

Risk

Impact

Mitigation Discussed

R-9

DH parameters block dropped during certificate replacement

Reintroduced TLS vulnerabilities

Hard rule in runbook: copy DH block on every cert replacement; cheat sheet lives beside the certs

R-10

Restart surfaces latent failures (expired internal certs, old syntax errors) during a planned change window

Outage misattributed to the change; extended windows

Two-step restart pattern: restart clean first, triage, then change

R-11

Silent expiry of trust / SAML signing certificates

Unpredictable auth failures with no warning

Track internal cert expiry dates per engagement; see OQ-10 for a durable fix

R-12

Bulk Update left unscheduled after SSP password generation is enabled

Generated 'temporary' passwords live forever

Two-tool contract in handoff docs: scheduler cadence verified before feature go-live

R-13

AD minimum password age blocks the generation feature's rapid rotation

Feature intermittently fails

Check AD minimum-age policy during design; align generation window and rotation cadence

R-14

LDAP (non-secure) identity-source connection configured where password writes are needed

Password updates silently impossible

LDAPS mandatory; verify in OC AD integration during install; bind account AD permissions per Justin's guide

R-15

Editing configs in Windows tools for Linux-hosted runtimes (path mismatches)

'File not found' classes of failure

Always express paths for the runtime OS; validated live in the PCAP debug

R-16

Federal/DoD questions routed to non-cleared or non-federal resources

Delivery and compliance gaps

Route federal/PCAP/CAC work to Hillis and the cleared team; trainer covers enterprise/strategic only
