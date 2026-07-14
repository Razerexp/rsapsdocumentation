---
title: "Runtime Configuration: config.sh and setenv.sh"
sidebar_position: 27
---

# 27. Runtime Configuration: config.sh and setenv.sh

## 27.1 What Lives in These Files

Under configs/\<app\>/ each application carries two files — config.sh and setenv.sh — that together hold **every hard-coded runtime value**: the application port (MS 8443, SSP 8444, HDAP 8445), references to all certificates, the trust store, SAML keystores, and IdP keystores, the encrypted bind account credentials, and the SMTP configuration. Critically, these files are where **every answer given during Prime Quick Setup is persisted** (encrypted where sensitive) — meaning post-install changes to any Quick Setup decision are made here, never by re-running setup and never inside the application. Most custom configuration work never touches individual application internals; it happens in these two files plus the configs folder XML files covered on Day 1\.

## 27.2 The Encryption Key (MS Debug War)

Reinforcing Day 1's Template Builder lesson: within config.sh, the *MS debug war* line holds the **symmetric key used to encrypt every other value in the file** (all entries prefixed ENC2). The key string begins with 'opt' and ends with 'cd' and visually resembles a filesystem path — it is not one. This is the same key concept used by Bulk Update's Template Builder, now seen in its second home.

## 27.3 Changing the AMS Bind Password — Procedure and a Live Incident

The canonical config.sh task is rotating the AMS Bind password. The procedure: (1) change the password in the Security Console; (2) encrypt the new password with the encryption tool from Day 1; (3) replace the encrypted text in the first lines of config.sh; (4) restart the service. Two scenarios force this task: the bind account landing in a security domain whose policy enforces 90-day expiry (i.e., the Quick Setup exemption policy was not applied or was later broken), and **compromise**.

The trainer illustrated with a customer incident from the week prior: the AMS Bind password — written down on paper — was obtained and used internally to create unauthorized accounts. Remediation was an emergency call executing exactly the four-step procedure above. The instructive coda was organizational rather than technical: even a 20-second fix moved through the customer's **change-control regime** — UAT validation before production — and consultants should expect and plan for that governance overhead on any production-touching change, however trivial.
