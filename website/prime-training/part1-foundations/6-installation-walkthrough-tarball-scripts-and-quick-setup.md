---
title: "Installation Walkthrough: Tarball, Scripts, and Quick Setup"
sidebar_position: 6
---

# Installation Walkthrough: Tarball, Scripts, and Quick Setup


## Extracting the Bundle and Creating Symlinks

Installation begins with the customer-shipped tarball (the demo used the intranet client application bundle). After extraction, the installer creates the primekit symlink pointing at the extracted kit folder, per the maintenance model described in [Section 4.3](./4-primekit-packaging-and-the-technology-stack.md). From this point forward, every internal reference resolves through the symlink, so future kit upgrades never disturb configuration.

## The Four Setup Scripts

Under scripts/tools the kit provides numbered setup scripts to be executed one at a time (the trainer noted scripts 1–3 could plausibly be merged in a future release):

1. Script 1 — Create the local Linux user and group. Creates a primekit user and primeadmins group so the application need not run as root (important for customers without root access).
2. Script 2 — Register startup scripts as OS services. Registers systemctl units for starting/stopping the applications. Registration succeeds even before services exist; services are simply not started yet.
3. Script 3 — Reset permissions. Applies ownership and permissions (mode 770) across all files and folders under the primekit symlink to the user/group from Script 1 — necessary because extraction as root leaves root ownership everywhere.
4. Script 4 — Prime Quick Setup. The interactive provisioning engine described below.

Ordering nuance clarified during Q&A: Scripts 1 and 3 must precede Quick Setup (permissions must be correct), but Script 2 is independent and may be run after Script 4 if desired.

## Quick Setup: The Interactive Questionnaire

Script 4 prompts for a series of values, then connects AMS to both Authentication Manager and the Cloud Authentication Service. The prompts, in order:

- FQDN of the primary Authentication Manager instance.
- Super Admin username/password (Security Console) and OC Admin username/password (Operations Console).
- The AM appliance OS password (rsaadmin default user) — used to SSH to the AM back end.
- Bind account names — two service accounts to be created in AM. Defaults may be kept or renamed to customer conventions: AMS Bind, a Super Admin account through which every REST API operation (add user, assign token, create security domain, etc.) is executed; and SSP Bind, used by the Self-Service Portal to communicate with AMS.
- From-address for Prime email notifications, and the SMTP server IP/hostname. (The trainer deliberately demonstrated recovering from a mistyped SMTP entry: the setup menu's edit option allows fixing any answer before executing.)
- Log level — the trainer's standing recommendation: always start new installs at DEBUG for troubleshooting richness, then dial down to info once stable, per customer preference.
- Web tier virtual hostname (skippable — most cloud-migrating customers no longer deploy web tiers since they don't use software tokens the same way).
- SSP URL — the fully qualified hostname or load balancer virtual host for the self-service portal.
- The authentication agent API key from [Section 5.1](./5-prime-quick-setup--prerequisites-walkthrough.md), then the cloud integration block (optional for customers without CAS): tenant/company ID, policy name, cloud admin endpoint URL, cloud auth endpoint URL, and for each OAuth client the client ID and JWK key file path.

## What Quick Setup Actually Does

Selecting option 3 (begin quick setup) after reviewing settings triggers the automated provisioning sequence. The trainer enumerated the actions performed:

- Certificate trust bootstrap. The tool programmatically connects to AM ports 7002 and 5555, downloads the root certificate, and imports it into the application keystore to enable SSL connections.
- Back-end credential retrieval. It SSHes to the AM instance as rsaadmin and runs a command to retrieve internal credentials, then establishes the API connection.
- Identity attribute creation. Three admin identity attributes are created automatically: *One Time*, *User Logs*, and *Service Account Policy* (their runtime purposes were deferred to later modules — Service Account Policy resurfaces in [Section 10](./10-configuration-philosophy-file-structure-and-ms-deep-dive.md)).
- Service accounts and roles. The two bind users are created (AMS Bind with Super Admin role; SSP Bind with its scoped role), along with additional admin roles such as HD Admins.
- Policies and domains. A custom password policy exempts the bind accounts from the default 90-day rotation (otherwise the AMS Bind password would expire and break integration); a token policy enforcing 8-digit PIN lengths is created; and a pair of security domains is created with policies applied.
- Agent host record. An authentication agent record is created in AM.

This is precisely the provisioning that consultants performed by hand prior to 2019 — an error-prone, weeks-long effort (the trainer noted he personally drove the 2019 automation). The group observed that much legacy training documentation predates this automation, which explains why earlier document-based training sessions 'weren't making sense' — the manual steps they describe are now largely obsolete, apart from details like changing port numbers to avoid conflicts.

## Identity Source Notes

In response to a question on user population: Prime supports both linked identity sources and the internal database. Customers with Active Directory simply integrate it as an identity source with a bind account — no user creation required. Organizations without AD, or with populations outside AD (a common pattern: contractors excluded from corporate AD), end up with two identity sources, and internal-database users (e.g., contractors) must be created manually unless a system like Entra is in play.
