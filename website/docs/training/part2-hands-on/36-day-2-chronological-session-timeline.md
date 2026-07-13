---
title: "36. Day 2 Chronological Session Timeline"
sidebar_position: 36
---

# 36. Day 2 Chronological Session Timeline


As with Day 1 (Section 21), the timeline below maps both Day 2 recordings to approximate elapsed timestamps for later recording review. Explicit transcript timestamps are marked (\*); other boundaries are best-estimate interpolations.

## 36.1 Part 1 — Main Session (3h 3m)

Elapsed (approx.)

Segment

Content

0:00\* – 0:20

Certificates

Certificates directory tour; three files per app; JKS→PEM history; DH parameters rule and Justin's cheat sheet; chain ordering; Q&A on which files carry DH params and customer-generated params

0:20 – 0:40

Cert replacement demo

Test utility cert generation; CN matching (per-app VIPs vs single-node reuse); RSA 2048 standard; file prep and DH copy; copy to server; restart; browser verification; server.xml SSL connector; legacy JKS conversion options

0:40 – 1:00

config.sh / setenv.sh

Ports, cert references, keystores, encrypted bind creds, SMTP; ENC2 values and the symmetric key; bind-password change procedure; compromised-password incident war story; change control / UAT expectations

1:00 – 1:15

Restart discipline

One-line-change restart risk; silent expiry of trust and SAML signing certs; two-step restart pattern; XML syntax errors and log line numbers; troubleshooting module promised

1:15 – 1:35

SSP password generation

Day 1 recap; generate-password button demo; short-lived password window; two-tool scheduling contract; AD minimum password age caveat; allowedUserProfileOperations; pattern syntax (A/a/N/S) and shuffle; AM-as-proxy; LDAPS requirement; bind account AD permissions (Justin's guide)

1:35 – 2:00

Docker environment

Switch from Linux VM to Docker; container topology (MS/SSP/HTAP, setup, HAProxy, Redis, MailHog); restart-without-relogin demo; JSESSIONID vs RSA token clarification; build-deploy-restart loop; live debugger; Wells Fargo first customer; AM/AD not containerized (VMware)

2:00 – 2:15

Labs & materials

vCloud SecurID template (15–20 machines, 30-day renewal) vs Docker (free, 1–2 hours); Docker package to OneDrive; training materials inventory (Nadine's decks, recordings, API guide)

2:15 – 2:40

VTS build

VDI/non-persistent use case; lost-mode \+ EAC mechanism; vtsconfig.xml and softwareOnly; VTS Builder configuration; MTLS with Keystore Explorer; secret file placement; MSI build and SCCM distribution; live troubleshoot (username mismatch → software token) to success; ~3-minute code validity

2:40 – 3:03

PCAP & patching

Sovereign-CAS positioning; federal/DoD routing (Hillis); enterprise→cloud guidance; pcapconfig.xml method filtering; am8config.xml central authentication; SAML metadata integration; extended debug (cert path, keystore, issuer IDs, WAR versions); WAR patching and backups-folder rollback; Linux fallback success; SOC 2/3 reports; trainer coverage boundaries; engineering laptop sidebar; Guacamole aside

## 36.2 Part 2 — Branding and Templates (17m)

Elapsed (approx.)

Segment

Content

0:00\* – 8:00

Branding

Brandings folder tour; logo and background swap (instantaneous, no restart); common.css and style.css; dev-tools color discovery; search-replace hex workflow; trial-and-error positioning; white-button cautionary demo; HTAP same model; Dave's custom warning-text example

8:00 – 15:00

Email templates

workflow/mail folder-per-operation; SSP properties mapping section; HTML \+ properties pair anatomy; global logo folder; lost-token demo attempt (MailHog down; forgotten auto-generated password); prior test notifications as exhibit; channel-uniformity clarification

15:00 – 17:32

Close

Planned topics complete; open floor for attendee-requested content

*Timestamps marked (\*) are explicit in the transcript; all other boundaries are best-estimate interpolations.*
