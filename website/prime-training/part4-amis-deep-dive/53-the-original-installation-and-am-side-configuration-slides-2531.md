---
title: "The Original Installation and AM-Side Configuration (Slides 25–31)"
sidebar_position: 53
---

# The Original Installation and AM-Side Configuration (Slides 25–31)


Hidden-slide module. All seven slides in this chapter are hidden in the source deck ([Section 50.2](./50-the-amis-master-deck-provenance-and-how-part-iv-works.md)) — the manual era Quick Setup replaced. They remain the best documentation of what Quick Setup actually does on the AM side and of the pre-PrimeKit layouts still running at legacy customers.

*Slide 25 — Installation & Configuration Divider (hidden)*

![](/img/130.jpeg)

*Slide 26 — Installation Overview (hidden)*

![](/img/131.jpeg)

The original nine-step arc: configure AM; obtain command-client credentials via rsautil (the same procedure Bulk Update still uses, [Section 15.1](../part1-foundations/15-part-2-deep-dive-the-bulk-update-tool.md)); create /opt/rsa; extract the kit; import the AM root cert with keytool and copy the agent config file sdconf.rec; run the install scripts; apply core configuration via template; authenticate and test; configure ENS if used. The keytool and sdconf.rec steps are the manual ancestors of Quick Setup's automated certificate bootstrap and agent-record creation ([Section 6.4](../part1-foundations/6-installation-walkthrough-tarball-scripts-and-quick-setup.md)) — and remain live procedures on any pre-PrimeKit installation.

*Slide 27 — Configure RSA Authentication Manager (hidden)*

![](/img/132.jpeg)

The most valuable hidden slide: the AM-side checklist.

Everything Quick Setup provisions in AM, as the manual checklist it replaced. Operations Console: set 'User password is optional' on the internal DB/identity source (a prerequisite nothing else in the program mentions), enable OS access/SSH (formalizing [Part III](../part3-deck-companion/42-the-training-deck-overview-and-how-to-use-part-iii.md) slide 17's SSH requirement), download the root CA cert (Certificates → Application Trust Certs — the exact console path). Security Console: add authentication methods, identity attributes, token and password policies, security domains, admin roles, role assignments, set fixed passcode (the test-authentication device from the [Section 7.3](../part1-foundations/7-service-startup-ports-and-api-validation.md) demo), and add the AMIS server as an authentication agent with sdconf.rec generation. The slide also cites the RSA Prime Kit Install Guide for object naming standards — the documentation lineage behind today's guides. When Quick Setup fails partway, this checklist is the audit list for what did and didn't get created.

*Slide 28 — AMIS Core Configuration — Service Account Generation (hidden)*

![](/img/133.jpeg)

The service-account credential generator in its original form: java -jar svcaccountgen.jar from RSA-PrimeKit-Tools/RSA-svcacct, producing the service-account token and its encrypted value for Template Builder — the generation step behind the static service accounts of [Section 11.3](../part1-foundations/11-the-service-account-system-three-paths-to-a-session-token.md) and the -DServiceAccount variables of [Part III](../part3-deck-companion/42-the-training-deck-overview-and-how-to-use-part-iii.md) slide 24 (which shows the same tool's .bat wrapper).

*Slide 29 — AMIS Core Configuration — Template Builder (hidden)*

![](/img/134.jpeg)

Template Builder's original role: load prime-kit-configuration.apt and supply the mandatory values — AMIS bind account and password, service account and password, AM server, SMTP server, and command-client credentials. The tool the live sessions met encrypting Bulk Update files ([Section 15.2](../part1-foundations/15-part-2-deep-dive-the-bulk-update-tool.md)) began life as the *primary installer configuration mechanism* — its fourth appearance in this guide (Bulk Update, Bulk Invite, ENS2, and here at its origin).

*Slide 30 — AMIS Core Configuration — The amisdebugvar UUID (hidden)*

![](/img/135.jpeg)

Origin story for the 'MS debug war' key.

The instruction: use a UUID generator (the slide suggests uuidgenerator.net) to create a unique value for amisdebugvar, generate the parameter file, and copy it into tomcat-amis setenv.sh. This is the birth record of the mysterious symmetric key from [Section 27.2](../part2-hands-on/27-runtime-configuration-configsh-and-setenvsh.md) — the 'MS debug war' value that encrypts every ENC2 credential in config.sh. It is, and always was, a per-installation UUID — which is why it resembles no path and must never be treated as one (R-4's trap, finally explained at the root).

*Slide 31 — Network and Infrastructure (hidden)*

![](/img/136.jpeg)

Verbatim identical to [Part III](../part3-deck-companion/42-the-training-deck-overview-and-how-to-use-part-iii.md) slide 10 — the port matrix Nadine's deck inherited from here. See [Section 43.3](../part3-deck-companion/43-deck-day-1--introduction-architecture--quick-setup-slides-129.md)'s full annotation (UDP/5500 agent path, 7002/7022, internal Tomcat ports); not re-annotated to avoid duplication.
