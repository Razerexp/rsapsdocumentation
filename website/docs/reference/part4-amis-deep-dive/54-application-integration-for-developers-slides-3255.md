---
title: "54. Application Integration for Developers (Slides 32–55)"
sidebar_position: 54
---

# 54. Application Integration for Developers (Slides 32–55)


*Slide 32 — Application Integration Divider*

![](/img/137.jpeg)

*Slide 33 — Topics*

![](/img/138.jpeg)

The developer module's scope: authentication, administration, and token methods; the Auth and Admin REST service harnesses; the Advanced REST Client; and API examples. The harnesses and ARC toolkit (slides 37–39) exist nowhere else in the program.

## 54.1 The Complete Method Inventory (Slides 34–36)

*Slide 34 — Authentication Methods*

![](/img/139.jpeg)

Deeper than any other inventory: the context distinction.

Five authentication methods, distinguishing super-admin context from user context for both user/token and service-account authentication (plus session validation). The context distinction — absent from Part III and the live sessions — matters for least-privilege integration design: a self-service application authenticating a user in *user context* receives a session scoped to that user's own operations, while an orchestration platform in *super-admin context* (via the AMS Bind pattern, Section 6.3) can administer anyone. Choosing user context wherever the use case allows is the API-level expression of least privilege — and a security-review answer worth having ready.

*Slide 35 — Administration Methods*

![](/img/140.jpeg)

The user-administration inventory: version info, unlock, search, deep search, register, enable, disable, create, and On-Demand enablement (SMTP) — the last being a method Part III's cookbook never covered (enabling on-demand tokencode delivery over email for a user), though HDAP exposes it (Part III slide 15's operations list).

*Slide 36 — Token Methods — The Full Twenty*

![](/img/141.jpeg)

The most complete token-operation inventory in the program.

Twenty operations, of which Part III's cookbook illustrated roughly half. New to this guide: assign next available and assign by serial number, unassign, CT-KIP token distribution (over-the-wire software-token seed provisioning — the mechanism behind the web-tier/CT-KIP hostname prompt in Quick Setup, Section 6.3), delete, display available token device types (enumerating software-token profiles — how an integration knows what it can issue), token info by UserID, replace with next available (vs. the specific-serial replace of Part III slide 83), and the three pre-parameterized 24-hour Emergency Access variants corresponding to the lostMode parameters annotated at Part III slide 84. For anyone scoping a provisioning integration, this slide is the capability contract.

## 54.2 The Developer Toolkit: Harnesses and ARC (Slides 37–39)

Entirely new to the program. Three testing tools that predate — and complement — the Postman collection used in the live sessions (Section 7.3):

*Slide 37 — AMIS Auth Harness (tdsauthenticate)*

![](/img/142.jpeg)

A bundled interface for driving and simulating authentication transactions — user/token, security question, and service account — without writing a client. Ships with Prime. For validating an install's auth path (or reproducing a customer's auth failure in isolation), the harness is faster than assembling raw REST calls.

*Slide 38 — AMIS REST Harness (amserviceharness)*

![](/img/143.jpeg)

The administration counterpart: a bundled interface for exercising user and token administrative functions. Together the two harnesses cover the same ground as the Postman collection with zero setup — worth locating in the kit and adding to the consultant lab workflow (Section 19).

*Slide 39 — Advanced REST Client (ARC)*

![](/img/144.jpeg)

The third-party freeware ARC, for which RSA PS ships a developer toolkit of 34\+ templates covering the most common authentication and administrative calls — the 2018-era equivalent of today's Postman collection JSON (Section 7.3's documentation package). If a customer's developers already live in ARC, the template pack meets them there; otherwise the Postman collection is the modern default. Action-item note: worth confirming with Ramesh whether the ARC template pack and the two harnesses ship in current PrimeKit builds — added to Chapter 57's follow-ups.

## 54.3 The API Cookbook (Slides 40–55) — Consolidated Cross-Reference

Slides 40 through 55 — user/token authentication, service-account authentication, session validation, search/enable/disable/create user (with custom attributes), clear PIN, token enable/disable, the three token searches, token info, replace by serial, Emergency Access with lostMode parameters, and move-to-security-domain — are verbatim the source of Part III slides 70–85, inherited by Nadine's deck without modification. Rather than embed and annotate them twice, this guide's single treatment stands at Section 47.2, including the deck-only details already captured there (the session-validation idle-timer refresh, the create-user custom-attribute set, and the lostMode security-design choice). Chapter 56's reconciliation table maps each of the sixteen slides to its Part III twin. The only additive observation: the duplication itself confirms these sixteen request/response patterns have been stable across the product's entire modern history — integrations built on them age well.
