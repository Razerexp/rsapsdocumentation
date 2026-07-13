---
title: "33. PCAP Deep Dive: The On-Premises Identity Portal"
sidebar_position: 33
---

# 33. PCAP Deep Dive: The On-Premises Identity Portal


## 33.1 Positioning: The Sovereign CAS

PCAP received its full treatment as the answer to a specific gap: on-prem Authentication Manager does not speak SAML or OIDC — only its native SecurID protocols, REST MFA, and RADIUS. Customers who want MFA-protected single sign-on but cannot use the Cloud Authentication Service therefore have no core-product path. PCAP is that path: 'pretty much similar to what CAS is doing' as a user portal and identity provider, run entirely on-premises against AM as the source of truth. The trainer drew the strategic parallel explicitly: PCAP is functionally *'your sovereign CAS deployment'* — the same shape as the sovereign offering engineering is building. Routing guidance was equally explicit: enterprise and strategic customers should be pushed to cloud CAS ('you already have all these capabilities — just integrate any SAML 2.0 or OIDC application to cloud'); PCAP is for the environments that cannot get there — heavily federal and DoD, including CAC smart-card front ends. Hillis has deployed PCAP more than any other consultant and is the delivery escalation.

## 33.2 Capabilities and Configuration Surface

- User portal: authenticated users see the applications they are entitled to — SAML 2.0 integrations, OIDC integrations, and bookmarks — driven by group membership or user attributes, configured via XML.
- Front-end authentication: SAML, OIDC, token, certificate (smart card/CAC), and password — with chaining supported across methods. No automation exists yet for portal configuration.
- IdP and SP duality: PCAP can act as an identity provider (asserting into downstream apps like Salesforce, ServiceNow, SailPoint, Office 365 — anything SAML 2.0) and as a service provider (accepting assertions from an upstream IdP such as Okta), simultaneously.
- Two configuration files: pcapconfig.xml (in configs/AMS) governs which front-end authentication methods appear — the out-of-box file shows everything, and consultants comment out what the customer doesn't want (demonstrated live: reducing the login page to token-only, with a lesson en route: the change didn't take until the file was actually saved). am8config.xml holds the central authentication section where applications are integrated — the IdP configuration page in file form.

## 33.3 SAML Application Integration (Demonstrated)

The integration pattern, shown against an RSA-internal test SP supporting IdP-initiated flow: download the application's SAML metadata; in the central authentication section of am8config.xml, configure the application entry — ACS URL, issuer/entity ID, keystore reference — save, restart, and the application appears on the user's portal. The trainer then attempted the inverse pattern — PCAP as IdP with the Prime SSP itself as the SP — so SSP's login page offers a SAML method that redirects to PCAP for authentication and returns the user to SSP on success.

## 33.4 The Extended Live Debug — and What It Taught

The PCAP demos fought back for a substantial stretch, and the debugging arc was itself a masterclass in the layered failure modes of SAML configuration:

1. Certificate path illusion. Config files edited in Windows Notepad while the application runs in a Linux container — the certificate path that looked right in the editor didn't exist at the Linux runtime path. Fixed by correcting the path; the 'cannot find certificate' error vanished.
2. Missing SAML keystore. The referenced IdP keystore lacked the needed entry; a SAML signing keystore was generated on the spot ('pretty standard SAML configuration — nothing product-specific') and wired in.
3. Issuer-ID collision hypothesis. With the app still failing, suspected duplicate issuer IDs/application names were tested (renaming with a suffix), and the working HTAP/SSP entries were used as reference templates — an underrated technique: *when a new integration fails, clone a known-good one and change one thing at a time*.
4. WAR version mismatch — the actual fix. The root cause was the version of the AM8/PCAP WAR files in the Docker environment; patching to the latest WARs (Section 33.5) resolved it, and when Docker still misbehaved, the trainer fell back to his slower Linux VM where the identical configuration worked end-to-end — both the IdP-initiated portal launch and the SP-initiated SSP→PCAP→SSP round trip. Where logs fell short during this debug, the trainer opened a Jira on the spot to get the missing diagnostic information added to the product — a live example of how field friction becomes product improvement.

## 33.5 Patching and Rollback via WAR Files (Bonus Module)

The mid-debug patch became its own lesson, delivered directly to Jacob for onsite use. Prime fixes are distributed as WAR files via Sean's OneDrive. The workflow: download the WARs → drop them into the patches folder wherever the kit runs → restart the service. The restart auto-ingests the patches (the files visibly disappear from the folder as they're copied in) and replaces the running WARs. Rollback is symmetrical: the pre-patch files are automatically preserved in the backups folder; to revert, copy the backup into patches, strip the suffix so the file ends in .war, restart — 'back in business.' This is the same mechanism behind the day-or-two patch turnaround praised in Day 1's field discussion.

## 33.6 Compliance Sidebar: SOC Reports

A customer-assurance question surfaced a useful fact: RSA holds SOC 2 and SOC 3 reports, available through engineering on request — SOC 3 is publicly shareable, while SOC 2 typically requires the customer to sign an NDA. This complements the STIG evidence thread from Day 1 Section 14 in the audit-readiness toolkit.
