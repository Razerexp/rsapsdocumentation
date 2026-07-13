---
title: "5. Prime Quick Setup — Prerequisites Walkthrough"
sidebar_position: 5
---

# 5. Prime Quick Setup — Prerequisites Walkthrough


The centerpiece of the morning was a complete live installation. Before running Quick Setup, a small set of prerequisites must be gathered from the two management planes. The trainer emphasized that wherever admin APIs exist, Quick Setup automates provisioning; the manual prerequisites below exist only where APIs are missing (notably, CAS lacks admin APIs for custom policies and roles).

## 5.1 Authentication Manager Prerequisite (One Item)

The only manual AM-side task is retrieving an authentication agent API key: in the Security Console, navigate to Access → Authentication Agents → Agent Credentials, create a new key (demo name: *prime agent key*), and copy the key value. Notably, AM 8.9 exposes an API for this operation, so the Prime team intends to automate even this step in a future Quick Setup release — the team simply has not yet had time to implement it.

## 5.2 Cloud Authentication Service Prerequisites

1. Create an access policy (demo name: *Prime MFA Policy*). Select the identity sources to associate; leave primary authentication at the password default (or customize); and define a simple rule set — in the demo, target population 'all users' at 'low' assurance level, which enforces MFA for all users while permitting any authenticator that satisfies low assurance. (Full access-policy design was declared out of scope for the demo.)
2. Record the Organization (Tenant/Company) ID from the cloud admin console.
3. Record the policy name created in step 1.
4. Create two OAuth clients — Prime connects to CAS via OAuth authorization. One client is created for the Cloud Admin APIs (client type: Admin API; demo enabled all permissions, meaning MS may perform any administrative activity in CAS) and one for the Cloud Auth APIs (client type: MFA API). For each client, capture the Client ID and download the JWK key file.
5. Record the Admin API endpoint URL and the Authentication endpoint URL from the cloud console.

The two downloaded JWK files must be transferred to the Prime server (with careful attention to file permissions) before Quick Setup runs. With the agent API key, org ID, policy name, two client IDs, two JWK files, and two endpoint URLs staged in a scratch notepad, all prerequisites are complete — roughly 5–10 minutes of manual cloud console work.
