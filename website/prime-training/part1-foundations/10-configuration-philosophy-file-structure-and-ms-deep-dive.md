---
title: "Configuration Philosophy, File Structure, and MS Deep Dive"
sidebar_position: 10
---

# 10. Configuration Philosophy, File Structure, and MS Deep Dive

## 10.1 Why There Is No Admin UI

Prime's configuration surface is deliberately **all XML and properties files — nothing in a UI**. The trainer illustrated the rationale with the group-based enrollment feature: when a customer requests, say, authenticator enrollment restricted by AD group membership, the team ships an XML inclusion/exclusion configuration section and back-end logic quickly; building an administrative UI around every such feature would add substantial time per feature. The team invests UI effort where end users live (the self-service portal), not where administrators configure. The consequence for PS: *running Prime is trivial; configuration is where consultants spend their time* — group-based enrollment, step-up rules, default authentication methods, branding, and every customer-specific behavior lives in the files below.

## 10.2 PrimeKit Directory Structure

| Folder | Contents / Purpose |
| :---- | :---- |
| certificates | PEM, JKS, and all certificate material |
| configs | All configuration for MS, SSP, and HDAP (subfolder per component) |
| ens2 | Event Notification System module (expiry notifications) |
| java | Bundled Java binaries (with 'latest' symlink) |
| logs | All troubleshooting output |
| scripts | Start/stop shell scripts, log gathering, config gathering, setup tools |
| tomcat | Bundled Tomcat binaries (symlinked) |
| update | Patching mechanism for the services |
| bulkupdate / bulkinvite | Bulk tools (covered in Part 2 and Day 2\) |

## 10.3 MS Configuration Files — The Three That Matter

The MS configs folder contains many files, but day-to-day work touches three: authclusterconfig (Section 8), am8config.xml, and authconfig.xml.

### 10.3.1 am8config.xml

Holds the bind account definitions created by Quick Setup; most lines are defaults never touched. The one section consultants configure is **service account authentication** — the configuration backing the rotating-password mechanism detailed in Section 11\. The trainer's guidance: this is essentially the only section of the file you will ever edit.

### 10.3.2 authconfig.xml — Profiles

Defines **authentication profiles** — named configurations governing how API clients authenticate to AMS. Most customers use one or two, but the design intent is one profile per API client (ServiceNow, SailPoint, and other integrating applications can each have distinct behavior). Notable per-profile flags:

* **authenticateOnly=true** — the response validates credentials (true/false) but returns **no session token**, making the profile usable for authentication checks only, never for admin operations. Demonstrated live: the 'simple' profile returns no token, while 'SSPauth' returns one.

* **clearNextTokenCode** — on failed authentication, automatically clears the next-tokencode state so users don't spiral into lockout.

* **questionsDisabled** — skips the security-questions enrollment lookup during authentication. Added after a customer's performance investigation revealed the per-auth profile lookup was costly and the feature was unused — a representative example of how custom flags enter the product.

The session idle/lifetime timeouts (Section 8.5) also live in this file.
