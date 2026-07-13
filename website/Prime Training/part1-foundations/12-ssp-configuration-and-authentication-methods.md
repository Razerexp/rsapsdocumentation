---
title: "SSP Configuration and Authentication Methods"
sidebar_position: 12
---

# SSP Configuration and Authentication Methods


## authentication.xml

Of SSP's many configuration files, consultants routinely touch two or three, and the most important is authentication.xml — the file that dictates which authentication methods the Self-Service Portal presents. The default homepage configuration enables three methods via three active lines: AD (password) authentication, token authentication, and cloud/MFA authentication. Below them sits a long commented-out inventory of additional authenticators awaiting activation, including:

- Method chaining — AD \+ token, AD \+ MFA, token \+ MFA, and similar combinations.
- SAML and risk-based authentication.
- Security questions, SMS OTP, and email OTP.
- Certificate authentication — a recent addition, enabling smart-card presentation.

## The /invite Page and Enrollment Entitlements

The invitation page (/invite) is configured independently of the homepage in the same file and defaults to AD username/password. Two properties of the invitation flow matter for security design:

- Entitlement-gated. A user cannot use /invite at all without an invitation entitlement, granted by a help desk administrator or via the bulk invite tool. This is not open enrollment.
- Time-limited. The entitlement/link is one-time and time-sensitive (e.g., enroll within two to three days), after which /invite stops working for that user.

Users arriving via the emailed invitation link get their user ID auto-populated (the link carries an encrypted user ID); users navigating directly to /invite must authenticate with the configured method.

## Field Problem: Protecting Self-Service Enrollment in a SCIF

Jake framed the enduring chicken-and-egg problem of classified environments: how do you protect self-service enrollment when the user has no email access, no phone, and no smart card — i.e., none of the out-of-band factors the method inventory assumes? The group worked the problem collaboratively:

- Trusted agent pattern — a designated person performs the invite and conveys the passcode/challenge out-of-band (e.g., verbally), optionally with a challenge-response element.
- Challenge-group exclusion — where email exists but sits behind Windows MFA (creating circular dependency), temporarily exclude the user from the MFA challenge group for enrollment, with a self-enrollment parameter that automatically returns them to the challenged population afterward.
- Credential provider — the Windows credential provider with embedded SecurID/HMAC authentication solves the problem elegantly once working, but attendees with field experience characterized implementation as difficult ('loaded'); it uses the system's embedded browser component.
- Entitlement \+ password as a floor — the trainer's synthesis: because /invite requires a time-sensitive, one-time entitlement *plus* authentication, entitlement \+ password is a defensible baseline; whether it satisfies a specific SCIF's requirements is a site-by-site determination.

The meta-lesson, voiced by Jake: Prime is sometimes sold as a silver bullet, but in closed, constraint-heavy environments the consultant's job is precisely to tailor the solution around what the environment forbids — and that is where engagement difficulty (and PS value) concentrates. For the imminent onsite specifically, the customer is not currently interested in self-service or HTAP; the primary use case is WPI with on-demand password generation, covered next.
