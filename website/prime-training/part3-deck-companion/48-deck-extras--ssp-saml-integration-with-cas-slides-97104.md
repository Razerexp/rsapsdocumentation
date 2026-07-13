---
title: "Deck Extras — SSP SAML Integration with CAS (Slides 97–104)"
sidebar_position: 48
---

# Deck Extras — SSP SAML Integration with CAS (Slides 97–104)


Deck-only procedure. Distinct from Day 2's PCAP-as-IdP experiment ([Section 33.3](../part2-hands-on/33-pcap-deep-dive-the-on-premises-identity-portal.md)), this module federates the Prime SSP directly to the Cloud Authentication Service as the SAML IdP — the pattern for customers who want cloud MFA in front of the self-service portal itself. It is also the configuration behind the SAML method line in authentication.xml ([Section 12.1](../part1-foundations/12-ssp-configuration-and-authentication-methods.md)).

*Slide 97 — Extras Divider — SSP SAML Integration with CAS*

![](/img/98.jpeg)

*Slide 98 — Cloud Side, Part 1 — Create the Application*

![](/img/99.jpeg)

In the Cloud Administration Console: Applications → My Applications → Add → Create from Template → SAML Direct, choosing Cloud for basic information.

*Slide 99 — Cloud Side, Part 2 — Connection Profile*

![](/img/100.jpeg)

Configure the service-provider endpoints: ACS URL https://&lt;SSP\_FQDN&gt;:8444/acs.jsp and Entity ID https://&lt;SSP\_FQDN&gt;:8444/; select IdP signs the entire SAML response; generate the certificate bundle and import the private key and cert from it. The signing-scope selection matters: Prime's validation expects the whole response signed, not assertion-only.

*Slide 100 — Prime Side, Part 1 — authconfig.xml*

![](/img/101.jpeg)

In configs/amis/authconfig.xml (the same file carrying profiles and timeouts, [Section 10.3](../part1-foundations/10-configuration-philosophy-file-structure-and-ms-deep-dive.md).2), paste the CAS-issued IdP URL (the tenant's /sso/saml/`<id>` endpoint) plus the matching ACS URL and Issuer URL from slide 99.

*Slide 101 — Prime Side, Part 2 — The SAML Keystore*

![](/img/102.jpeg)

Within the `<saml>` block, three values govern trust: samlJavaKeyStore (path to the keystore that will hold the IdP's signing certificate — resolvable via setenv.sh's -Dsaml.keystore variable, typically certificates/saml\_keystore.jks), samlJavaKeyStorePassword, and assertionSignatureValidationCertificateAlias (the alias under which the CAS signing cert must be imported). This is the same saml\_keystore machinery the PCAP debug wrestled with live ([Section 33.4](../part2-hands-on/33-pcap-deep-dive-the-on-premises-identity-portal.md), step 2) — the deck documents it cleanly.

*Slide 102 — Prime Side, Part 3 — Import, Restart, Test*

![](/img/103.jpeg)

Import the CAS SAML response certificate with keytool (keytool -import -alias `<alias>` -file `<cert>` -keystore `<samlJavaKeyStore>`), restart AMIS then SSP (service tomcat-amis restart, service tomcat-ssp restart — the SSP double-restart rule of slide 95 applies), and test SSP login via the SAML identity provider.

*Slide 103 — Thank You*

![](/img/104.jpeg)

*Slide 104 — Closing Slide*

![](/img/105.jpeg)

End of deck. [Chapter 49](./49-slide-to-chapter-reconciliation-map.md) reconciles all 104 slides against the live-session chapters.
