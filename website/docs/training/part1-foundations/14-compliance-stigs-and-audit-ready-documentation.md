---
title: "14. Compliance, STIGs, and Audit-Ready Documentation"
sidebar_position: 14
---

# 14. Compliance, STIGs, and Audit-Ready Documentation


A consultant with a federal audit background (Christina) surfaced a recurring customer pain: annual (and multi-agency, staggered) audit cycles trigger a scramble to evidence security controls — password complexity, identity and access management controls, hardening baselines — and absent real reporting, customers settle for screenshots. RSA systems are among the systems audited, so the ability to hand a customer pre-packaged proof of control compliance would be genuinely differentiating. The discussion mapped the current state:

- Tomcat STIG — done. A Tomcat hardening/STIG document exists (the hardening guide shown earlier in the day) and Prime configurations largely conform out of the box, with residual scanner findings remediated per customer.
- Cloud Authentication Service STIG — in progress. RSA has no native CAS STIG. Ben supplied a STIG document from Optum built for Okta; the trainer ran it through Copilot to convert it for RSA, producing a draft that now requires formal approval. One customer has been waiting on this document for a stalled project.
- Prime's STIG surface is composite. Because Prime is a custom application — Java web apps on Tomcat — the relevant checklists span Java STIGs, application STIGs, and Tomcat STIGs. Spring exists in the codebase only for configuration file reading (no Spring Boot), so Spring Boot STIGs do not apply. The credential provider uses the OS-embedded browser rather than bundling Chrome.
- Code scanning — an acknowledged gap. A commercial scanning license was purchased (Mark and Jay) roughly two years ago but never successfully operationalized, a direct casualty of team size (developers alternate between firefighting and feature work). The group flagged AI-assisted DevOps pipelines as a possible path and agreed to pursue it offline, noting the internal Copilot license now available.

The consensus takeaway: even without going 'super crazy,' packaging existing hardening evidence into customer-consumable proof — 'here is everything you need, sitting there waiting for you when the audit hits' — is low-effort, high-perceived-value PS work, and the team should plant those seeds on federal engagements.

## 14.1 Sidebar: Lessons from Internal AI Tooling

An extended cautionary sidebar reviewed internal AI experiments: a Copilot Studio chatbot wired to Salesforce data proved genuinely useful (grounded in real data, credential-scoped per user) until a related connector gained access to data it should not have and was shut down; a Jira-connected bot likely suffered from an over-privileged service account. An ungrounded chatbot, by contrast, confidently invented nonexistent CLI commands (e.g., a fictitious RSA Util DB maintenance operation) — the group's conclusion being that AI on RSA subject matter is only as good as the context it is given, and that the earlier PS Assistant (which could see engineering-side content invisible to consultants) demonstrated real value when properly grounded. Plans to restore team access to such a system were affirmed ('yeah, absolutely').
