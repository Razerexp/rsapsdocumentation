---
title: "The Service Account System: Three Paths to a Session Token"
sidebar_position: 11
---

# The Service Account System: Three Paths to a Session Token


A substantial demonstration block covered the mechanisms by which an API client obtains a session token — the currency of all admin operations. AMS supports three:

## Method One: Username \+ Passcode

Standard token-credential authentication (PIN \+ tokencode), appropriate whenever a real human user with an authenticator is behind the call. This was the method used in the Section 7 validation demo.

## Method Two: The Rotating-Password Service Account System

For machine-to-machine communication — where no human holds a token — Prime provides a purpose-built service account system with automatic password rotation. The lifecycle: an administrator creates a service account user with an initial password and hands it to the application owner. On the application's first authentication, AMS validates the admin-set password and returns a new system-generated password in the response. The application stores it and authenticates with it for the configured interval (25 days in the demo; customers range from daily to annual rotation). When the interval elapses, the next authentication response again carries a fresh password. The client-side contract is simple: watch each response for the new-service-account-password tag; when present, capture and persist the new value for subsequent calls. Passwords thus rotate perpetually without administrator intervention.

### Setup Procedure (Demonstrated Live)

Configuration follows an 8–10 page procedure at the end of the Prime API Reference Guide; the trainer executed it live:

1. Create a password policy ('Service Account Password Policy') permitting only system-generated passwords.
2. Create a dedicated security domain ('Service Accounts') and attach the policy to it.
3. Create a Service Account admin role.
4. Create the Service Account Policy identity attribute definition (one of the three attributes Quick Setup pre-creates — see Section 6.4).
5. Create the service account user, set the initial password, place the user in the Service Accounts domain, and assign the admin role.

### How Rotation Is Tracked

The rotation interval is tracked via an encrypted value stored in the Service Account Policy identity attribute on the user record — the expiration date, encrypted. Every authentication, AMS validates the password and decrypts this attribute to test expiry; on expiry it issues the next password. The trainer demonstrated the internal 'hack' quality of the mechanism: corrupting the encrypted attribute makes it undecryptable, AMS treats the password as expired, and the very next authentication returns a fresh password — a useful troubleshooting lever. (A live demo hiccup — a stale 'require password change at next login' flag — was resolved on the spot, reinforcing the day's troubleshooting-is-learning theme.)

## Method Three: Static Service Accounts

A static 16-character alphanumeric header value passed on every call. Explicitly not secure and not designed for customers — it exists for Prime's internal module-to-module communication (workflow, ENS, and other modules talking to MS). A small number of customers nevertheless use it because their legacy applications cannot handle rotating passwords.

## Security Discussion: Logging Exposure and OAuth

Chandan raised the sharpest security question of the day: because many client applications log full API responses (especially at debug), the rotating password arrives in plain text inside a response body and can leak into logs. The trainer acknowledged the risk candidly: AMS itself does not log responses by default (a custom flag must be enabled), but if the *client* logs responses, the password is exposed. The mitigations discussed: prefer username\+passcode wherever a real user exists; and for machine-to-machine flows, AMS now supports OAuth — client ID \+ client secret, or private-key JWT — which is standards-based and avoids password-in-response semantics. OAuth adoption is nascent (very few customers; UPS is a recent adopter), but it is the recommended direction for security-sensitive integrations.
