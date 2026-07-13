---
title: "Certificate Management and Replacement"
sidebar_position: 26
---

# Certificate Management and Replacement


## The Certificates Directory

The certificates folder is the one-stop shop for every certificate PrimeKit uses — application certificates, trust store certificates, and supporting material. Three applications require certificate replacement (MS, SSP, HTAP), and each carries three files: the certificate itself, the chain (the approving authority path), and the private key. The kit historically used Java KeyStore (JKS) format; modern PrimeKit uses PEM format — unencrypted, plain-text, base64-encoded files (the key file in RSA private key format).

## The Diffie-Hellman Parameters Requirement

The most important — and least obvious — rule of Prime certificate management: each application's cert file contains a Diffie-Hellman (DH) parameters block that must never be removed. When procuring a new certificate, the DH parameters section from the existing cert file must be copied into the replacement. Per Justin's cheat sheet (stored alongside the certs), the block addresses vulnerabilities previously reported by a customer and governs the parameters used for DH key exchange in the service TLS configuration. Key facts established in Q&A: the block appears in every application's cert file (MS, SSP, and HTAP alike — not the key or chain files); the existing value may simply be copied forward; and a site may alternatively generate its own DH parameters — the requirement is that *a* DH params block be present, not that it be a specific value. The trainer flagged the deeper 'why' for optional research, noting Justin holds the full context.

## Chain Ordering

Chain files must be assembled lowest-level first: begin with the immediate intermediate CA, proceed through any further intermediates, and end with the root. Justin's cheat sheet in the certificates folder documents the full assembly pattern.

## Replacement Procedure (Demonstrated Live)

1. Obtain the new certificate through the customer's standard CSR/approval process. (The demo used an internal test utility issuing from an RSA demo root; the standard key strength is RSA 2048-bit — no field issues reported, with Hillis/Ben flagged as the check for any customer-specific exceptions.)
2. Ensure the certificate CN matches the application URL (demo: replacing the out-of-box ssp.company.com default with a cert matching the deployment's actual FQDN). In production, customers typically carry individual VIPs per application (ssp/ms/htap.company.com) defined at the load balancer; the demo's single-node lab reused one cert across all three.
3. Prepare the three files per application: rename the private key to the expected \_key filename; convert the certificate to base64; assemble the chain (intermediates first, then root).
4. Copy the DH parameters block from the existing cert file into the new cert file and save.
5. Copy all files to the PrimeKit server's certificates folder, replacing the defaults.
6. Restart the services; confirm in a fresh browser session that the certificate error is gone and the new issuer appears.

## Where the Certificates Are Wired: server.xml

Each application's Tomcat SSL connector binds the three files in tomcat/tomcat-`<app>`/conf/server.xml — the SSL configuration section passes the certificate file, chain file, and key file paths. The same structure applies to MS, SSP, and HTAP (each under its own tomcat-`<app>`/conf path). Legacy-customer note: older deployments still carry JKS-based configuration in this file. Consultants encountering it either replace certificates in JKS format or convert the deployment to PEM — server.xml is where that switch is made — and this transition is the most common stumbling point for support engineers on certificate work.
