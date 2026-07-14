---
title: "Day 2 Notable Q&A and Discussion Highlights"
sidebar_position: 37
---

# 37. Day 2 Notable Q\&A and Discussion Highlights

## 37.1 Certificates and Cryptography

* **Q: Is the DH parameters block only in the AMS cert?** A: No — it appears in every application's cert file (MS, SSP, HDAP), though not in the key or chain files. Copy it forward on every replacement.

* **Q: Must we keep the exact same DH value?** A: No — the existing value may be copied, or the site may generate its own DH parameters; the requirement is presence, not a specific value. It configures the parameters for DH key exchange in the service TLS configuration.

* **Q: Any issues with the RSA 2048-bit standard at higher-assurance customers?** A: None encountered by the trainer; Hillis or Ben are the check for customer-specific key-size requirements.

## 37.2 Configuration and Operations

* **Q: How do you restart services in the field?** A: systemctl (tomcat-amis/ssp/hdap start|stop) on modern kits; older customers without systemctl units use the service command form instead — recognize both.

* **Q: What happens to logged-in users when a node restarts?** A: In multi-node deployments, users on the restarted node must re-log in; users on surviving nodes are unaffected. (In the Docker/Redis architecture, even the restarted node's sessions survive.)

* **Q: How long do change windows take with customers?** A: The edit itself may take 20 seconds; the governance around it (UAT first, change control) is what consumes time — and the restart may surface unrelated latent failures, so budget accordingly.

* **Q (attendee synthesis): Should we restart before making changes?** A: Endorsed — restart first to flush latent errors (expired internal certs, old syntax mistakes), triage those in isolation, then apply the intended change.

## 37.3 Password Generation and WPI

* **Q: The generated password is shown in plain text — is that the design?** A: Yes, deliberately: it exists so the user can transcribe it into a printer or similar prompt, and it is short-lived by configuration, destroyed at the next scheduled Bulk Update pass.

* **Q: Can we restrict which special characters appear in generated passwords?** A: Yes — the S symbol draws from a restrictable allowed-set precisely because some customers prohibit certain specials; unspecified means any special character.

* **Q: Do the bind account permissions live in AM or AD?** A: In Active Directory — a dedicated AD bind account (not the OC/SC admin) granted directory-side password-reset rights per Justin's permissions guide, used by AM's identity-source integration over a mandatory LDAPS connection.

* **Q (Jake): My customer has none of these profile options — why?** A: Check their SSP properties allowedUserProfileOperations line; features are deliberately enabled or hidden there, and his customer has them shut off by configuration.

## 37.4 Docker and Sessions

* **Q: Why Redis in the stack?** A: Web-session caching — demonstrated by restarting SSP without losing the login. It moves JSESSIONID-referenced session state out of Tomcat memory.

* **Q: So what was yesterday's session token discussion about?** A: Different system — the RSA authentication/session token is AMS-only (REST admin operations); SSP/HDAP ride ordinary JSESSIONID browser cookies. Redis now backs both patterns in containerized deployments.

* **Q: Do you use Helm charts?** A: Not for Prime — the team began working with Helm only after the Prime containerization effort.

* **Q: Does this need VMware too?** A: Yes — AM and AD are not containerized (AM's container exists in engineering but is unofficial and unavailable to PS), so the substrate runs on VMware; Docker covers the Prime tier only.

## 37.5 VTS and PCAP

* **Q: Must the builder be installed on every machine?** A: No — the builder goes on one admin machine; only the built MSI goes to end users, pushed via SCCM or equivalent.

* **Q: Why two-way SSL for VTS?** A: Server trust alone would let anyone who installed the tool request codes; the client certificate embedded in the administrator-built MSI proves provenance. Server must trust client and client must trust server.

* **Q: What's the advantage of PCAP over just trusting cloud?** A: None if cloud is available — integrate SAML/OIDC apps to CAS and done. PCAP exists for customers who cannot use cloud: on-prem AM has no SAML/OIDC, so PCAP supplies the SSO/IdP layer — the sovereign pattern, dominant in federal/DoD with CAC front ends.

* **Q: Does non-PCAP work require all this configuration?** A: No — the central authentication section and pcapconfig.xml matter only for PCAP customers; skip entirely otherwise.

* **Q: Is there versioning when patching WARs?** A: Yes — pre-patch files land automatically in the backups folder; rollback is copy-back, rename to .war, restart.

* **Q: SOC reports for customer assurance?** A: SOC 3 is available to anyone; SOC 2 via engineering, typically under customer NDA.
