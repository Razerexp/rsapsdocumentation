---
title: "Reference Production Architecture and Sizing"
sidebar_position: 9
---

# 9. Reference Production Architecture and Sizing

## 9.1 The Typical Deployment Pattern

The typical architecture for a standard-scale customer (\~50,000 users) comprises: two Authentication Manager instances (primary \+ replica) at the back; **two internal Prime servers** in the intranet zone, each running all three components (MS, SSP, HDAP); and, where internet-facing self-service is required, **two additional internet-facing SSP servers** in the DMZ. Internal users traverse an internal load balancer; external users an external one. Customers most commonly deploy F5 or Citrix NetScaler (HAProxy appears occasionally). PrimeKit itself is OS-agnostic — any Linux distribution (SUSE, Red Hat, etc.) or any Windows version is supported.

The two internal nodes provide both redundancy and load distribution — each node has finite capacity for authentication and admin requests. At the high end, Walmart and Verizon run up to 18 nodes; Verizon (MS/REST-only, no SSP or HDAP) deploys six boxes per data center across two data centers, with three AMS Tomcat instances per box — illustrating that multiple Tomcat instances per host is a supported scaling pattern.

## 9.2 Sizing Guidance

| Component | Minimum Specification | Sizing Notes |
| :---- | :---- | :---- |
| Prime server (MS/SSP/HDAP) | 8 vCPU / 8 GB RAM (as stated in session — official Install Guide v2.0 specifies 16 GB RAM, 60+ GB disk; see §59) | Field experience cited a customer growing 8 GB → 16 GB → 30 GB under load. |
| Authentication Manager | 8 vCPU / 32 GB RAM | Core product requirement. |
| SSP concurrency | ≈25–30 concurrent self-service sessions per node | Size by estimating simultaneous SSP logins: assume \~5 minutes per user session and compute hourly throughput per node. |

**The real scaling ceiling is Authentication Manager, not Prime.** Regardless of how many MS nodes are deployed, all admin (write) activity funnels to a single AM primary — replicas serve authentication and redundancy only (one may be promoted to primary, but only one read-write database exists at a time). Spinning up a hundred MS nodes therefore does not resolve performance problems rooted in the AM tier; sizing must consider the whole chain, scaled horizontally in most cases (vertical scaling is possible). An open question was taken as an action item: whether a hard connection limit (\~200) exists per MS node before performance degrades — the trainer committed to verify.

## 9.3 Internal vs. External SSP

Separate internal and external SSP tiers exist to permit differentiated policy: different authentication and step-up methods, different permitted devices, and different branding depending on network of origin — all governed via configuration files. In practice, most customers run identical configuration and branding on both tiers and stand up the DMZ boxes simply to avoid exposing intranet servers directly (reverse proxy is an alternative). High-security customers, however, exploit the split: e.g., allowing emergency access code generation and IWA/password-only authentication internally while blocking those features and enforcing MFA on the internet-facing portal.

## 9.4 Operating Without a Load Balancer

MS itself does not require a load balancer (auth clustering solves its session problem), but **SSP and HDAP are session-dependent web applications that genuinely require one** — without persistence, a user's second request landing on a different node arrives session-blind. Customers without a load balancer are limited to a single box or an **active-standby** configuration using an Active Directory DNS virtual name pointed at the production data center, with a manual DNS switch to fail over to DR.
