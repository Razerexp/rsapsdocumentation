---
title: "Maintenance, Hardening, and Troubleshooting (Slides 56–62)"
sidebar_position: 55
---

# Maintenance, Hardening, and Troubleshooting (Slides 56–62)


*Slide 56 — Maintenance & Troubleshooting Divider*

![](/img/145.jpeg)

*Slide 57 — How to Identify AMIS Version*

![](/img/146.jpeg)

Completes Part III slide 93 with two more methods and the per-component log map.

Beyond the version scripts (Section 47.4), this slide adds: the version is logged at the top of am8.log (legacy path /local/apps/rsa/AMIS/amis/logs/am8.log; PrimeKit path /opt/rsa/primekit/logs/amis/am8.log — example line: AM8X TDS service \[1.8.4 2726.68213…\]), and a REST version call: https://`<AMIS>`:`<port>`/am8/version returning an applicationInfo XML block with build number and versions — the remote method when shell access isn't available (precious in SCIF-adjacent situations where a customer can read a browser but can't run scripts). The notes add the per-component log map: am8.log (AMIS), hdap.log (HDAP), ssp\_daily.log (SSP), with both Windows (C:\\RSA\\…) and Linux paths — the first pieces of the important-log-files map that Part III slide 92 left as a placeholder.

*Slide 58 — Managing AMIS Service (hidden)*

![](/img/147.jpeg)

The service-command reference plus the restart-after-change rule — as in Part III slide 94 and Sections 7.1/28.

*Slide 59 — AMIS Upgrade Procedure (hidden)*

![](/img/148.jpeg)

Names the four AMIS WARs — a detail Part III slide 95 lacked.

The upgrade replaces the auth, am8, rsa-endpoints, and workflow WAR files — the four internal services of Part III slide 12, finally visible as deployable artifacts — with the same discipline as Section 47.4's formal procedure: back up first, remove the four exploded directories before starting, empty the Tomcat /work directory, then start to redeploy. Legacy location noted (/local/apps/apache-tomcat-7.0.57/webapps) alongside the PrimeKit path. The slide notes add a rule every upgrade needs: copy forward any config-file customizations before upgrading — and candidly record that the deck predates the streamlined PrimeKit patches-folder workflow the live session demonstrated (Section 33.5), completing the three-generation patching story: manual WAR surgery (this slide) → formal procedure (Part III slide 95) → patches-folder automation (live Day 2).

*Slide 60 — Hardening (hidden)*

![](/img/149.jpeg)

The hardening guide's table of contents — stated nowhere else.

This slide enumerates what the RSA Prime Suite Hardening Guide actually covers: Java property settings; Tomcat SSL configuration; disabling the AJP listener and enabling the SSL listener (the AJP item pairs with the port matrix's 'TCP 8009 — disable unless used'); limiting Tomcat access and removing unneeded Tomcat Manager pages; JSESSIONID cookie settings (the same cookie of Section 30.3, hardened with secure/httponly attributes); disabling HTTP methods when Apache fronts as a proxy; IIS POODLE and RC4 remediation; and removing response headers (server-version disclosure). This inventory is the checklist preview of the hardening guide Ramesh committed to the documentation package (action \#1, Section 16.1) — and maps nearly one-to-one onto Tomcat STIG line items, reinforcing the Section 14 finding that Prime's hardening posture is largely STIG-conformant out of the box.

*Slide 61 — Troubleshooting Tips (1 of 2) (hidden)*

![](/img/150.jpeg)

The seed of the promised troubleshooting module.

Five field rules, each earning its place: (1) look first in the AM Authentication Monitor plus the auth and am8 logs for stack traces (start server-side, not at the portal); (2) for HDAP issues read hdap.log — and for admin-role problems specifically, read claimfilter.log, a log file named nowhere else in the program (when an HDAP administrator can't see or do what their role should permit, this is the file); (3) performance issues → check CPU and memory of the Prime instances and consult on vertical/horizontal scaling (the sizing chain of Section 9.2); (4) use GrepWin (freeware) to locate a string across the configuration tree — the practical answer to 'which of these hundred files contains the text I need to change'; and (5) always back up any file before changing it — the one-line policy behind Section 28's entire restart discipline.

*Slide 62 — Troubleshooting Tips (2 of 2) — The Debug Cycle*

![](/img/151.jpeg)

The formal debug procedure, generalizing the live sessions' habit (Sections 6.3, 28.4): edit the component's setenv.sh, change -Dlog.level=INFO to DEBUG, restart the services, replicate the issue, collect the logs, then revert to INFO and restart again — debug is a bounded diagnostic window, not a resting state (debug-level logging is also where the credential-exposure risk of Section 11.4 lives, a second reason to revert). The notes give the per-component setenv.sh paths and cite RSA knowledge base article 000031000 for log collection — a support-case reference worth keeping at hand.

*Slide 63 — Thank You — Credits*

![](/img/152.jpeg)

The credits slide: source material and slides from Sean Doyle, Justin Mitchell, and Nada Khaled — the provenance anchor for Section 50.1's lineage finding. Sean and Justin appear throughout the live sessions as the Prime team's architect and the PrimeKit consolidator respectively (Sections 2.3, 4.1); this deck is part of their documentary legacy.
