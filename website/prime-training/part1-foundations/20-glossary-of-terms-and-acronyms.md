---
title: "Glossary of Terms and Acronyms"
sidebar_position: 20
---

# 20. Glossary of Terms and Acronyms

| Term | Definition (as used in this training) |
| :---- | :---- |
| AM / Authentication Manager | RSA's core on-premises authentication product; primary (read-write) plus replica instances; the back end for all Prime operations |
| AMS / MS | Authentication Manager Services — Prime's REST services engine and integration hub; 'MS' used interchangeably in session |
| CAS | Cloud Authentication Service — RSA's cloud MFA/IdP platform; integrated with Prime via OAuth clients |
| SSP | Self-Service Portal — Prime's end-user web application for enrollment and credential management |
| HDAP | Help desk / delegated administration portal (third core Prime web application) |
| PCAP | Prime Central Authentication Portal — on-premises IdP (SAML/OIDC) backed by AM, for customers unable to use CAS |
| VTS | Virtual Token Service — desktop tokencode generator for users who cannot carry tokens (VDI use case) |
| ENS / ENS2 | Expiry/Event Notification Service — scheduled email notifications for token/PIN expiry from AM report data |
| PrimeKit | Self-contained delivery bundle (apps \+ bundled Java \+ bundled Tomcat) replacing separately shipped components |
| Prime Quick Setup | Interactive provisioning tool (Script 4\) that automates AM/CAS back-end configuration; install in \<30 minutes |
| WPI / WPA | Windows Password Integration — AM caches the AD password after first login and injects it on subsequent passcode-only logins ('fancy password injection') |
| Bulk Update | Standalone Java CLI tool: scheduled AD password rotation with WPI cache sync; alias addition; role deletion; CSV-driven modes |
| Template Builder | Utility that encrypts credentials in Bulk Update configuration files using a symmetric key (which visually resembles a file path) |
| Auth clustering | Prime mechanism embedding node machine IDs (1–20, mod-20) into session tokens so any node can route validation to the issuer |
| Session token | In-memory, node-specific 8-digit token required for all admin REST operations; obtained by authenticating first |
| Service account system | Rotating-password machine-to-machine authentication: new password returned in API response every N days; expiry tracked in an encrypted identity attribute |
| Static service account | 16-character static header credential; internal module use; discouraged for customers |
| Bind account (AMS Bind / SSP Bind) | Service accounts created by Quick Setup; AMS Bind (super admin) executes all REST operations; SSP Bind connects SSP to AMS |
| Identity attribute | Custom AM user-record field; Quick Setup creates One Time, User Logs, and Service Account Policy; Bulk Update adds a password-expiry tracking attribute |
| /invite | SSP invitation page; entitlement-gated and time-limited; independently configured authentication methods |
| Entitlement | One-time, time-boxed (2–3 day) grant permitting a user to use /invite; issued by help desk or bulk invite |
| Credential provider | Windows logon component with embedded SecurID/HMAC authentication; solves SCIF enrollment circularity but is difficult to implement |
| STIG | Security Technical Implementation Guide — DoD hardening checklist; Tomcat STIG complete, CAS STIG in approval, composite Java/app/Tomcat STIGs apply to Prime |
| SCIF | Sensitive Compartmented Information Facility — classified environment with no phones/laptops, constraining troubleshooting and enrollment design |
| JWK | JSON Web Key — key file downloaded per OAuth client during CAS prerequisites |
| Command client credentials | AM-internal credentials retrieved via the RSA util CLI on the appliance; required by Bulk Update |
| Web tier | Optional AM front-end component; increasingly skipped by cloud-migrating customers |
| Redis clustering | Session-token storage in a Redis cache for containerized (Docker) Prime deployments, replacing in-memory node affinity |
