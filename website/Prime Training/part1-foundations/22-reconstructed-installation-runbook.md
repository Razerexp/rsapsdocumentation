---
title: "Reconstructed Installation Runbook"
sidebar_position: 22
---

# Reconstructed Installation Runbook


This runbook converts the live demonstration narrative into an executable, command-sequence procedure for a standard single-node PrimeKit installation integrated with both Authentication Manager and the Cloud Authentication Service. It reflects the session as delivered; always defer to the current official installation guide and the Confluence hardening article where they differ. Items in angle brackets are environment-specific values.

## Stage 0 — Information Gathering (before touching any console)

1. Record the AM primary FQDN, Security Console super admin credentials, Operations Console (OC) admin credentials, and the appliance OS password for the rsaadmin user.
2. Record the SMTP relay IP/hostname and the desired from-address for Prime notifications.
3. Record the SSP FQDN (or load balancer virtual hostname) end users will reach.
4. Confirm target server meets minimums: 8 vCPU / 8 GB RAM; any Linux distribution or Windows version.
5. Decide bind account names (defaults: AMS Bind, SSP Bind) or customer-convention equivalents.

## Stage 1 — Authentication Manager Prerequisite

1. Security Console → Access → Authentication Agents → Agent Credentials → create key (e.g., *prime agent key*).
2. Copy the generated agent API key value to your working notes.

## Stage 2 — Cloud Authentication Service Prerequisites

1. Create access policy (e.g., *Prime MFA Policy*): select identity sources; leave primary auth at password default; rule set targeting all users at low assurance (adjust per customer).
2. Record the organization (tenant/company) ID and the policy name.
3. Create OAuth client \#1 — type Admin API; enable required permissions; record the Client ID; download the JWK key file.
4. Create OAuth client \#2 — type MFA API; record the Client ID; download the JWK key file.
5. Record the Cloud Admin API endpoint URL and the Cloud Authentication endpoint URL.
6. Transfer both JWK files to the Prime server; verify restrictive file permissions.

## Stage 3 — Kit Extraction and Symlinks

1. Copy the PrimeKit tarball to the server and extract: tar -xvf `<primekit-bundle>`.tar
2. Create the kit symlink: ln -s `<extracted-kit-folder>` primekit
3. Verify runtime symlinks resolve: ls -l primekit/java/latest primekit/tomcat (JDK 'latest' → current 8u4xx build; Tomcat → current 9.0.x build).

## Stage 4 — Setup Scripts

1. From primekit/scripts/tools, run Script 1 — creates local user primekit and group primeadmins.
2. Run Script 2 — registers systemctl start/stop units (order-independent; may follow Script 4).
3. Run Script 3 — resets ownership/permissions (mode 770) across the kit to the Script 1 user/group.
4. Run Script 4 — Prime Quick Setup. Answer prompts in order: AM FQDN; super admin; OC admin; rsaadmin OS password; bind account names; from-address; SMTP host; log level DEBUG; web tier (skip unless used); SSP URL; agent API key; then the cloud block — tenant ID, policy name, both endpoint URLs, and per-client the Client ID and JWK path.
5. Review settings (menu option to view/edit — fix any mistyped value now), then select option 3 to execute.

## Stage 5 — Post-Setup Verification in AM

1. Identity attributes present: One Time, User Logs, Service Account Policy.
2. Users present: AMS Bind (Super Admin role), SSP Bind (scoped role); admin roles created (e.g., HD Admins).
3. Custom password policy (bind accounts exempt from 90-day rotation) and token policy (8-digit PIN) present.
4. Security domains created with policies applied; agent host record present.

## Stage 6 — Start and Validate

1. Start services (as the primekit user in production): systemctl start &lt;tomcat-ams|ssp|htap&gt; — or the \*\_startup.sh scripts, any order.
2. Confirm listeners: MS 8443, SSP 8444, HTAP 8445 (customize in the port configuration file only if required).
3. Postman: POST an authentication request (user ID \+ token credentials) → capture the session token from the response.
4. Postman: GET the user-lookup URL with the session token in the header → confirm the user record returns.
5. Confirm both events in the AM Activity Monitor; on success, schedule the log-level reduction from DEBUG for post-stabilization.

## Stage 7 — Common Next Configurations (per engagement scope)

- Multi-node: either confirm LB source-IP persistence with timeout ≥ authconfig.xml idle/lifetime values, or enable authclusterconfig machine IDs identically on every node and restart.
- SSP methods: edit authentication.xml for homepage and /invite independently; enable chaining/OTP/certificate methods per site policy.
- Machine-to-machine API: stand up the service account system per the reference guide's closing procedure (password policy → security domain → admin role → identity attribute → user), or scope OAuth for security-sensitive clients.
- WPI rotation: configure bulkupdate.properties and profile per Section 15; encrypt credentials with Template Builder; test manually; schedule via Task Scheduler or cron.
