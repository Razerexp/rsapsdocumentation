---
title: "19. Consultant Readiness Checklist (Derived from Day 1)"
sidebar_position: 19
---

# 19. Consultant Readiness Checklist (Derived from Day 1)


The following operational checklist consolidates every do-this-before-you-go item stated or implied during Day 1, organized by engagement phase. It is intended as a working aid for consultants preparing Prime deployments — particularly the upcoming cleared federal onsite.

## 19.1 Before the Engagement

1. Obtain the consolidated documentation package (hardening guide, API reference guide, Postman collection) from the team OneDrive; print required materials if the site prohibits electronics.
2. Request a CAS sandbox tenant via Jira to SaaS Ops (Ben's ticket template) and rehearse the full install in a personal lab until the primary use case is automatic.
3. Confirm which PrimeKit bundle applies (internal-only vs. internal \+ external SSP) and download the current kit, JDK, and Tomcat binaries (Sean's OneDrive) in advance.
4. Collect customer environment facts: AM version and FQDN, CAS availability, identity sources (AD OUs, contractor populations), load balancer make and persistence capability, OS standards, SMTP relay, port constraints.
5. For WPI engagements: obtain the AD team's password complexity specification in writing — the Bulk Update profile must mirror it exactly.
6. For classified sites: pre-stage the mirror-lab troubleshooting plan; identify the trusted agent for enrollment; expect multiple visits and plan the question-relay protocol for SCIF days.

## 19.2 Prerequisites Day (≤ 30 minutes of console work)

1. AM Security Console: create and copy the authentication agent API key.
2. CAS admin console: create the access policy; record org ID, policy name, admin and auth endpoint URLs.
3. Create the two OAuth clients (Admin API, MFA API); capture both client IDs; download both JWK files; move them to the Prime server with correct permissions.

## 19.3 Installation Day

1. Extract the tarball; create the primekit symlink; verify the java/latest and tomcat symlinks.
2. Run scripts 1 → 3 (and 2 at any point); then Script 4 (Quick Setup) with all prerequisite values at hand; set log level DEBUG.
3. Verify Quick Setup output in AM: three identity attributes, two bind users with roles, custom password/token policies, security domains, agent host record.
4. Start MS/SSP/HTAP; confirm ports 8443/8444/8445; validate with the two-step Postman flow (authenticate → user lookup); confirm the event in the AM Activity Monitor.

## 19.4 Configuration Phase

1. Decide clustering strategy: LB stickiness vs. authclusterconfig machine IDs (identical file on all nodes) vs. Redis (containerized).
2. Set authconfig.xml idle/lifetime timeouts and confirm LB persistence ≥ both values with the customer's network team — early.
3. Configure authentication.xml for the homepage and /invite independently; enable chaining/OTP/certificate methods per site policy.
4. If machine-to-machine API access is needed: stand up the service account system per the reference guide (policy → domain → role → attribute → user), or scope OAuth for security-sensitive integrations.
5. For WPI: configure bulkupdate.properties (AM, command client via RSA util, AD scoping) and the profile (frequency, tracking attribute, generation rules); encrypt all credentials with Template Builder — remembering the key is a key, not a path; test run, then schedule (Task Scheduler / cron).
6. Dial log level down from DEBUG once stable; capture the summary/output/audit file locations for the customer's operations team.

## 19.5 Value-Expansion Phase

1. Demonstrate one adjacent suite capability the customer does not know it owns (HTAP delegation, ENS notifications, bulk invite).
2. Offer the hardening/STIG evidence package as audit-readiness collateral; log any missing compliance artifacts back to the Prime team.
3. Record every gap the customer articulates — the Prime team's development model runs on exactly these requests.
