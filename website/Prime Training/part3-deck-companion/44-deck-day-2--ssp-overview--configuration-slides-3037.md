---
title: "Deck Day 2 — SSP Overview & Configuration (Slides 30–37)"
sidebar_position: 44
---

# Deck Day 2 — SSP Overview & Configuration (Slides 30–37)


The deck's SSP day maps onto live-session Sections 12 (authentication methods), 29 (password generation), and 34 (branding) — but its central contribution is naming the complete SSP configuration file family, three members of which the live sessions never opened: devices.xml, rules.xml, and spring-context.xml.

*Slide 30 — Day 2 Divider — SSP Overview & Configurations*

![](/img/31.jpeg)

*Slide 31 — SSP Configuration — ssp.properties*

![](/img/32.jpeg)

The deck crowns ssp.properties as the 'Master Config File' controlling all SSP features — the same file carrying the allowedUserProfileOperations line (Section 29.3), the badge configuration, the password-pattern settings, and the template-to-operation mapping (Section 35.1). When hunting for where an SSP behavior is governed, start here.

*Slide 32 — SSP Configuration — authentication.xml*

![](/img/33.jpeg)

The login-method file, treated in depth in Section 12.1: homepage and /invite methods, chaining, and the commented-out method inventory.

*Slide 33 — SSP Configuration — devices.xml*

![](/img/34.jpeg)

Deck-only file.

devices.xml defines the authenticator types and device families SSP presents — which token/authenticator options a user can request or manage. When a customer asks 'why can't users request hardware tokens in the portal' (or wants to add or remove an authenticator family), this is the file. It pairs with the deck's Day 2 timetable topic 'Device Types' (slide 4).

*Slide 34 — SSP Configuration — rules.xml*

![](/img/35.jpeg)

Deck-only file.

rules.xml holds the Prime-side PIN and password policies — the composition constraints SSP enforces during PIN set/change and password operations. Note the layering: AM has its own token policy (Quick Setup creates an 8-digit PIN policy, Section 6.4), AD has its own password policy (Sections 15.3, 29.5), and rules.xml is Prime's front-end enforcement of matching constraints. Misalignment among the three layers produces the classic 'portal accepted it, back end rejected it' ticket.

*Slide 35 — SSP Configuration — spring-context.xml*

![](/img/36.jpeg)

Deck-only file.

spring-context.xml is the enforcement wiring for the rules.xml policies — the Spring configuration that binds the PIN/password rules into the application. This is also the concrete instance of Day 1's compliance-discussion aside (Section 14): Spring exists in Prime purely for configuration reading, not Spring Boot. Consultants rarely edit this file, but knowing rules.xml declares and spring-context.xml enforces explains why a rules change may require touching both.

*Slide 36 — Prime SSP Live*

![](/img/37.jpeg)

Live-demo placeholder — delivered across the live sessions' SSP demos (portal login, invite flow, generate-password).

*Slide 37 — Tasks for the SSP Configuration*

![](/img/38.jpeg)

Hands-on lab marker. The equivalent exercises in our program: the consultant readiness checklist Section 19.4 items covering authentication.xml and the SSP properties, plus the Docker feature-testing lab (Section 31.2).
