---
title: "The RSA Prime Solution Suite"
sidebar_position: 3
---

# 3. The RSA Prime Solution Suite

The opening block of instruction established that Prime is best understood as a continuously evolving **suite of applications** layered on top of RSA Authentication Manager (AM) and the RSA Cloud Authentication Service (CAS), built and extended by a small dedicated team in direct response to customer gaps. As the trainer put it, engineering did not support many of these capabilities from day one; the Prime team saw the gaps because they work closely with customers, and built the bridges themselves. In several cases (for example, user synchronization between AM and CAS) capabilities pioneered in Prime were later absorbed into the core product.

## 3.1 Core Web Applications

* **AMIS (the REST services engine).** The core of Prime. AMS exposes a REST interface that talks to both Authentication Manager and the Cloud Authentication Service, and acts as the integration hub for every other Prime component. All admin operations — user lookup, unlock, enable/disable, token assignment, security domain creation — flow through AMS REST APIs. AMS also serves as the synchronization bridge between AM and CAS (e.g., auto-creating a user in one product when it exists only in the other).

* **SSP (Self-Service Portal).** The end-user-facing web portal for credential enrollment, token management, and (in customized deployments) on-demand password generation. Supports internal and internet-facing deployments with independently configurable authentication methods and branding.

* **HDAP (Help Desk / Admin Portal).** The delegated administration portal for help desk staff, referenced throughout the day alongside MS and SSP as the third core Tomcat application (ports and startup scripts are provisioned for all three).

## 3.2 Bulk Administration Tools

* **Bulk Invitation Tool** — sends enrollment invitations to multiple users at once.

* **Bulk Enrollment Tool** — the CAS analogue of bulk invitation; sends enrollment links for cloud authentication users. Scheduled for hands-on coverage on Day 2\.

* **Bulk Update Tool** — a recently developed, rapidly evolving Java command-line utility for bulk operations: assigning aliases, rotating user passwords in Active Directory (with WPI cache synchronization), and — added on customer request — deleting admin roles via CSV input, which the core product cannot do. This tool received its own dedicated deep-dive session (Part 2, Section 12 of this document).

## 3.3 Additional Suite Components

* **PCAP (Prime Central Authentication Portal).** An on-premises identity provider for customers who cannot use the Cloud Authentication Service as an IdP — typically state/government or restricted environments. PCAP currently supports SAML and OIDC, uses Authentication Manager as the source of truth, presents a configurable multi-method login portal, and provides a user application launcher ('My Page'-style) that displays applications based on group membership.

* **VTS (Virtual Token Service).** A small desktop application that generates token codes for users who cannot carry a software or hardware token — particularly useful for VDI/VDA-based Windows environments. Functionally, an authenticator that runs as a local desktop service.

* **ENS (Expiry / Event Notification Service).** A command-line scheduler that taps the Authentication Manager database via report downloads and emails users about expiring tokens, expiring PINs, and other lifecycle events, using brandable and customizable email templates.

## 3.4 Why Prime Exists

The 'Why Prime' slide consolidated the rationale threaded through the morning: the core products leave operational gaps (self-service, delegated help desk, bulk operations, AM↔CAS synchronization, on-prem IdP, notification automation), and Prime fills them faster than core engineering can because the Prime team ships configuration-driven features without UI overhead. The suite framing also carries a commercial implication that surfaced later in the field discussion: customers frequently buy Prime for one narrow use case (e.g., WPI password rotation) while remaining unaware of the rest of the suite — creating natural expansion conversations for PS consultants who can demonstrate adjacent capabilities once the primary use case is delivered.
