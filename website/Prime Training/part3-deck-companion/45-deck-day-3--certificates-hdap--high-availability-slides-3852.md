---
title: "Deck Day 3 — Certificates, HDAP & High Availability (Slides 38–52)"
sidebar_position: 45
---

# Deck Day 3 — Certificates, HDAP & High Availability (Slides 38–52)


*Slide 38 — Day 3 Divider*

![](/img/39.jpeg)

*Slide 39 — Certificates Divider*

![](/img/40.jpeg)

## Certificates, Formalized (Slides 40–43)

*Slide 40 — Certificates — File Inventory*

![](/img/41.jpeg)

The canonical naming: per application, `<app>`\_cert.pem, `<app>`\_key.pem, `<app>`\_chain.pem (amis/ssp/hdap), all under /opt/rsa/primekit/certificates — matching Section 26.1. Deck-only addition: the slide documents what truststore.jks contains — the AM root, the CAS root, and the LDAP root (the latter for AMIS-to-LDAP direct connections, Section 29.5's bypass path). That inventory answers a recurring field question: which roots must be re-imported when any of those three back ends rotates its CA.

*Slide 41 — amis\_cert.pem and the DH Parameters*

![](/img/42.jpeg)

The formal statement of Section 26.2's rule, with an ordering detail the live session omitted: within the cert file, the CERTIFICATE block must come before the DH PARAMETERS block (BEGIN/END CERTIFICATE first, then BEGIN/END DH PARAMETERS). A replacement that pastes the DH block above the certificate fails — add this ordering check to the runbook and R-9's mitigation.

*Slide 42 — amis\_chain.pem — Chain Ordering*

![](/img/43.jpeg)

The chain rule with its clearest visual: leaf to root, ascending — the intermediate that issued the server cert first, further intermediates next, root CA last — and the explicit warning do not include the server certificate itself in the chain file (a mistake the live session's Section 26.3 didn't call out). 

*Slide 43 — amis\_key.pem*

![](/img/44.jpeg)

The private key file for the corresponding server certificate — completing the three-file set per application.

## HDAP Configuration (Slides 44–49)

Deck-only module. The live sessions demonstrated HDAP running but never opened its configuration; the deck supplies the file family:

*Slide 44 — HDAP Overview & Configurations Divider*

![](/img/45.jpeg)

*Slide 45 — HDAP Configuration — lap.properties*

![](/img/46.jpeg)

HDAP's master configuration file is lap.properties — the HDAP analogue of ssp.properties, controlling the portal's features. (The 'lap/LapProto' naming is a legacy artifact of the portal's original 'Help Desk/LAP' lineage.)

*Slide 46 — HDAP Configuration — LapProto.xml and Admin Roles*

![](/img/47.jpeg)

LapProto.xml defines the tiered help-desk admin roles: HDA-Admins, HDA-HelpDesk1, HDA-HelpDesk2 — the delegation model that lets a customer grant different help-desk tiers different operation sets (the operations inventory of slide 15). Designing a customer's delegated-administration model means mapping their support tiers onto these roles.

*Slide 47 — HDAP Configuration — Device Types*

![](/img/48.jpeg)

HDAP's own device-family file governing which authenticator types help-desk staff can distribute — the HDAP counterpart of SSP's devices.xml (slide 33).

*Slide 48 — HDAP Live*

![](/img/49.jpeg)

Demo placeholder; the slide's notes flag hardware token activation as the featured demo scenario.

*Slide 49 — Tasks for the HDAP Configuration*

![](/img/50.jpeg)

## Redundancy, High Availability, and Health Checks (Slides 50–52)

*Slide 50 — Redundancy & High Availability Divider*

![](/img/51.jpeg)

*Slide 51 — Redundancy & High Availability*

![](/img/52.jpeg)

The deck's formal statement of the reference architecture: at least two internal Prime nodes plus two external SSP servers, scaled per requirement, fronted by F5 / Citrix NetScaler / HAProxy — matching Section 9.1 exactly (down to the load-balancer brand list).

*Slide 52 — Load Balancer Configuration*

![](/img/53.jpeg)

Deck-only material — the load-balancer engineering spec.

Three facts the live session's LB discussion (Section 8.5) lacked in written form. First, the persistence rule quantified: source-IP or cookie-based session persistence with a timeout of no less than 60 minutes — a concrete floor to hand the customer's network team (satisfying the 'LB persistence ≥ token timeouts' rule for typical 15/30 and 15/60 configurations). Second and most valuable, the health-check URLs for node probing: AMIS /auth/mid (expect HTTP 200), SSP /ssp/info/status and HDAP /hdap/info/status (expect the text startup\_time in the response). Every F5/NetScaler configuration session needs these three URLs; they also double as quick manual liveness probes during troubleshooting. This slide should be attached to R-1's mitigation (engage the LB team early — now with the exact spec to hand them).
