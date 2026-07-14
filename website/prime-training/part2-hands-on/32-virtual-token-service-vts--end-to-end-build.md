---
title: "Virtual Token Service (VTS) — End-to-End Build"
sidebar_position: 32
---

# 32. Virtual Token Service (VTS) — End-to-End Build

## 32.1 The Problem VTS Solves

Day 1 introduced VTS in a paragraph; Day 2 built it. The use case: **non-persistent VDI environments**. A software token requires a seed record distributed to the device — but a virtual desktop is re-imaged at every login, so nothing persists; pre-seeding is impossible. VTS sidesteps the seed entirely with an **online distribution model**: each time the user requests a code, the VTS client asks the AMS server, which **places the user's token in lost mode, generates an emergency access code (EAC), and displays it in the client**. The user authenticates with PIN \+ EAC. Every request is a fresh server round-trip — no persistent state on the desktop at all.

## 32.2 Server Side: Already Deployed

VTS server capability ships inside AMS — Prime Quick Setup deploys it automatically. The only server artifact is vtsconfig.xml, specifying code duration and the number of codes displayed; it is almost never modified. One setting matters operationally: **softwareOnly mode** — when true (as in the demo, matching a real customer requirement), VTS refuses hardware tokens and serves only software-token holders.

## 32.3 Client Side: The Two-Step Builder Workflow

1. **Install the VTS Builder (admin tool) on one administrator machine.** The builder is a configuration studio, not the end-user app: set the mode (virtual token), the MS URL (host without :8443 in the demo), the window title, prompt text (e.g., 'Enter SecurID PIN'), whether the PIN field displays, the help message (customers can point it at their own hosted article), and every error message — full white-label control.

2. **Build and distribute the end-user MSI.** Clicking Build Now emits the final MSI package for end-user machines, pushed at scale via SCCM or the customer's standard software-distribution tooling. The build also emits a **secret file** that must be copied to the PrimeKit server under configs/MS/VTS packages (multiple secret files may coexist) — a server-side shared secret complementing the TLS trust.

## 32.4 Mutual TLS (MTLS) Trust

VTS client-server communication uses **two-way SSL**: the client validates the server certificate (standard), and the server validates a client certificate embedded in the MSI — because 'anybody can install this tool and request a certificate,' the client-side cert is what proves the request comes from an administrator-built package. Setup demonstrated with Keystore Explorer: generate a PFX (any CN — it exists purely for application trust), reference it in the builder, export the certificate chain, and **import it into the MS trust store (**truststore.jks**)** so the server trusts the client. Restart MS after placing the secret file and trust cert.

## 32.5 The Live Troubleshoot — A Diagnostic Case Study

The first end-to-end test failed ('rejecting my PIN'), and the trainer worked it exactly as he teaches:

1. Checked the client-side view — nothing useful. Moved to the MS logs; the VTS log said 'no tokens found.'

2. **Root cause \#1 — identity mismatch.** The VTS client does not prompt for a username; it **reads the user ID from the Windows session automatically**. The trainer was logged into Windows as one account while the token was assigned to the demo user. Fix: ensure the AM account matches the Windows session identity, with a token assigned and PIN set.

3. **Root cause \#2 — token type.** Still failing after the identity fix; cleared logs, reproduced, and read again: the assigned token was hardware, and softwareOnly=true in vtsconfig.xml excludes it. Fix: assign and distribute a software token, set its PIN — success; the EAC rendered in the client.

Operational details confirmed on success: the displayed code is valid for approximately **three minutes** per request (the user copies it into the authentication prompt), and prerequisites for any user are simply **an assigned token and a pre-set PIN** (set via self-service in advance). The trainer's closing frame doubled as reassurance: VTS is easy to deploy with several classic failure points, all of which announce themselves in the logs — and recordings of this exact build exist for reference when consultants hit them in the field.
