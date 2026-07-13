---
title: "Appendix: Quick Technical Reference"
sidebar_position: 17
---

# Appendix: Quick Technical Reference


## A. Component and Port Summary

Component

Function

Port / Interface

MS / AMS

REST services engine; AM & CAS bridge; hub for all Prime components

8443 (default)

SSP

End-user self-service portal (enrollment, token mgmt, password checkout)

8444 (default)

HTAP

Help desk / delegated admin portal

8445 (default)

PCAP

On-prem IdP (SAML/OIDC) backed by AM

Web portal

VTS

Desktop virtual token / tokencode generator (VDI use case)

Local desktop service

ENS / ENS2

Expiry & event email notifications from AM report data

CLI scheduler

Bulk Update

AD password rotation \+ WPI cache sync; alias addition; role deletion

CLI (java -jar), standalone

Bulk Invite / Bulk Enrollment

Mass invitation / cloud enrollment links

CLI tools

## B. Key Configuration Files

File

Component

Governs

authclusterconfig

MS

Auth clustering machine IDs (1–20); identical across nodes

am8config.xml

MS

Bind accounts; service account authentication section (rotation)

authconfig.xml

MS

Auth profiles (authenticateOnly, clearNextTokenCode, questionsDisabled); idle & lifetime session timeouts

authentication.xml

SSP

Homepage & /invite authentication methods; chaining; OTP/certificate/SAML/RBA enablement

bulkupdate.properties

Bulk Update

Logging; AM FQDN & credentials; command client credentials; AD bind & search scoping

Profile (Bulk Update)

Bulk Update

Rotation frequency; tracking attribute; password generation rules; WPI sync

## C. Sizing and Scale Reference

- Prime server minimum: 8 vCPU / 8 GB RAM as stated in session — official Install Guide v2.0: 16 GB RAM, 60\+ GB disk (§59); field growth to 30 GB observed under load.
- Authentication Manager: 8 vCPU / 32 GB RAM.
- SSP capacity: ~25–30 concurrent sessions per node; size from expected simultaneous logins at ~5 minutes per session.
- Auth clustering ceiling: machine IDs 1–20; largest observed deployment 18 nodes (Walmart, Verizon).
- All admin writes funnel to the single AM primary — MS horizontal scale cannot compensate for AM-tier saturation.
- Session token timeouts (authconfig.xml): idle \+ lifetime (max 8h typical ceiling); load balancer persistence must be ≥ these values.

## D. Session Token Acquisition Methods

1. Username \+ passcode (PIN \+ tokencode) — for human users with authenticators.
2. Rotating-password service account — machine-to-machine; new password returned in response every N days; expiry tracked in encrypted identity attribute.
3. Static service account — 16-char static header; internal-module use; not recommended for customers.

*Emerging alternative: OAuth (client ID/secret or private-key JWT) — standards-based, recommended for security-sensitive machine-to-machine integrations; limited adoption to date (e.g., UPS).*
