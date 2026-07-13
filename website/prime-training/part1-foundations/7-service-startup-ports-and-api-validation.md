---
title: "Service Startup, Ports, and API Validation"
sidebar_position: 7
---

# Service Startup, Ports, and API Validation

## Starting the Services

With Quick Setup complete, the three applications are started either via the provided shell scripts (MS\_startup.sh, SSP\_startup.sh, HTAP\_startup.sh — any order) or via systemctl start commands (which require Script 2's registration). In production, customers switch to the primekit local user and use systemctl rather than running as root (the trainer ran as root only due to a local VM quirk). Standard Linux process checks confirm each service.

## Default Ports

| Application | Default Port | Notes |
| :--- | :--- | :--- |
| MS (AMS REST services) | 8443 | Core REST engine; all other components communicate through MS |
| SSP (Self-Service Portal) | 8444 | End-user portal; internal and/or internet-facing |
| HTAP (Help Desk Portal) | 8445 | Delegated administration |

Ports are out-of-the-box defaults, customizable in a single configuration file when customers require alternate ports.

## API Validation in Postman

The trainer validated the install with the standard two-step admin API pattern, using the sample request/response formats from the Prime API Reference Guide (available in Confluence; the Postman collection JSON is typically distributed from Sean's OneDrive):

1. Authenticate to obtain a session token. An authentication request posts the user ID and token credentials (the demo used a fixed passcode for test purposes); a successful response contains the session token, and the AM Activity Monitor shows the successful authentication for the demo user.
2. Perform the admin operation with the token. The session token is passed in the header of the admin call — the demo performed a simple user lookup (GET to the user search URL) but the same pattern applies to unlock, enable/disable, token linking, and every other admin operation.

A clarification for consultants integrating directly with cloud APIs: when calling CAS APIs directly (rather than through AMS), multi-step authentication flows require carrying forward the server-generated message ID across calls. AMS handles this internally, so AMS API consumers never see it.

The trainer committed to assembling a consolidated documentation package — hardening guide, API reference guide, and Postman collection JSON — into OneDrive for the whole team. He also confirmed that a customer-facing Prime hardening guide exists (recently written for another customer as a Confluence article); most Prime configuration files already conform to it, with residual findings addressed when customer scanners run.

## Demo Environment and CAS Sandbox Access

Because the entire environment (AM, AD, Prime, IDEs) ran in VMs on the trainer's laptop, SSP page loads were slow — a lab artifact, not a product characteristic. For consultants wanting their own CAS playground tied to demo units, the process is a Jira ticket to the SaaS Ops team, which provisions a dedicated tenant; Ben's ticket template was offered as a starting point, and training materials were promised to a shared OneDrive.
