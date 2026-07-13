---
title: "AMIS Component Architecture (Slides 18–24)"
sidebar_position: 52
---

# AMIS Component Architecture (Slides 18–24)


*Slide 18 — Component Architecture Divider*

![](/img/123.jpeg)

*Slide 19 — Prime Integration Services — The Three Historical Services*

![](/img/124.jpeg)

The 2018 decomposition of AMIS: the AM 8.x core integration service (the abstract REST interface to AM), the Authentication Agent implemented as a web service (validating token credentials and managing web-portal session timeouts — the machinery behind Part I Section 8's session tokens), and the Workflow framework (the HTML email template system, with hooks to invoke AMIS token operations and retrieve user properties). Compare Part III slide 12's four-service model: the delta is the RSA endpoints service, added between the two decks' eras — a concrete marker of AMIS's internal evolution.

*Slide 20 — Architecture Breakdown — AM Tier and Mail*

![](/img/125.jpeg)

New operational fact: no load balancer on the agent path.

The AM-tier callouts: primary/replica servers process authentication, handle AMIS API calls, provide the user store or LDAP/AD connection, and expose token records, policies, auditing, and admin structure. The standout annotation: the agent holds addresses for both primary and replica — no load balancer required on the agent path. Agent-protocol failover is native; the load-balancer requirements of Sections 8–9 apply to the web/REST tiers, not to agent traffic. That distinction prevents over-engineering a customer's network design.

*Slide 21 — Architecture Breakdown — Prime Tier*

![](/img/126.jpeg)

The Prime-server tier: hosts self-service and help-desk services, connects to AM through AMIS APIs, with load balancers *optionally* distributing sessions across multiple Prime servers — consistent with Section 9.4's no-LB deployment options.

*Slide 22 — Architecture Breakdown — External Tier*

![](/img/127.jpeg)

The external path in this era routed public users through web-tier servers to back-end AM — the architecture the live sessions noted is fading ('most cloud-migrating customers no longer deploy web tiers,' Section 6.3), since superseded by the external-SSP-in-DMZ pattern of Part III slides 55–58. Recognize this diagram at long-tenured customers.

*Slide 23 — Logical Architecture*

![](/img/128.jpeg)

*Slide 24 — AMIS Services Topology*

![](/img/129.jpeg)

The notes carry two deck-only facts.

The topology notes enumerate the core components (agent via the Agent API SDK, core services via the AM REST API and Java SDK, workflow via SMTP and templates) and add: AMIS was designed to host on Apache Tomcat, Oracle WebLogic, or Red Hat JBoss/Wildfly application servers (PrimeKit later standardized on Tomcat — but the multi-container heritage explains some of the codebase's server-abstraction seams), and a syslog server is an optional component fed from the Log4J logging function — the concrete mechanism behind the 'full auditing capabilities via syslog' capability claim (Part III slide 7) and a checklist item for customers with SIEM-integration requirements.
