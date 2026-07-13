---
title: "SSP On-Demand Password Generation (Completing the WPI Story)"
sidebar_position: 29
---

# SSP On-Demand Password Generation (Completing the WPI Story)


## Recap and User Experience

Day 2 opened its feature work by closing the loop begun in Day 1 Sections 13 and 15: Bulk Update rotates AD passwords and synchronizes the WPI cache on schedule, so users never know their password — until the moment they need one (the canonical printer scenario from Dave's customer). The SSP-side answer, demonstrated live: the user logs into the Self-Service Portal with any allowed method (including MFA), and a Generate Password button on the homepage resets their AD password and displays the new value in plain text. The password is deliberately short-lived — a configurable window (e.g., 15 or 30 minutes), after which the next scheduled Bulk Update run rotates it away.

## The Two-Tool Contract

The feature only works as a pair of properly configured tools. Bulk Update is independent of Prime and must be *scheduled* (every 15 minutes, hourly, or daily per design) — run once manually, it changes passwords once and stops, leaving generated passwords alive indefinitely. The demo made the dependency concrete: a password generated in SSP works immediately, and dies at the next scheduled Bulk Update pass. One AD-side caveat to check during design: Active Directory's own minimum password age setting can forbid rapid successive changes (e.g., no changes within an hour or a day); as long as AD policy permits the cadence, the tooling supports very frequent rotation.

## Enabling the Feature: allowedUserProfileOperations

The button is governed by one line in the SSP properties file (configs/SSP): the allowedUserProfileOperations property. Adding the keyword generatePassword reveals the button; removing it hides the feature entirely. The same property gates the other user-profile operations — the trainer demonstrated removing both generate-password and test-AD-authentication, restarting, and showing both options vanish from the user profile. A companion configuration in the same file controls which badges display in SSP. Field note for Jake: his customer has the feature deliberately shut off — the properties file shows exactly which operations they permit.

## Password Pattern Syntax

Generated-password composition mirrors the Bulk Update profile controls, expressed in a compact pattern syntax in the SSP properties:

Symbol

Meaning

A

Uppercase alphabetic character

a

Lowercase alphabetic character

N

Numeric character

S

Symbol / special character (drawn from a restrictable allowed-set, because some customers prohibit specific specials)

The pattern specifies minimum composition, not literal layout: with length 20 and a pattern demanding (say) three uppercase, three lowercase, three numerics, and one symbol, the generator guarantees those minimums, fills the remainder freely, and applies a shuffle operation so the output never exposes the pattern's ordering. If no special-character set is specified, any special character may be used; specifying the set restricts generation to customer-permitted symbols.

## The AD Write Path: AM as Proxy, LDAPS Mandatory

Architecturally, the password write does not flow from AMS/SSP directly to Active Directory. Authentication Manager acts as the proxy: AM's identity-source bind account performs the AD password reset. (Direct AMS-to-AD is technically supported — a section of am8config.xml enables bypassing AM, and some customers run it — but the proxy path is the default and the one demonstrated.) Two hard requirements on the AM side, verified live in the Operations Console AD integration:

- The connection must be LDAPS — a plain LDAP connection cannot perform password updates; secure LDAP is mandatory.
- The bind account must hold AD-side reset permissions — this is a dedicated bind account in Active Directory (not the OC or SC admin), granted password-reset rights in the directory itself. A guide by Justin documents the exact required permissions; a regular user account cannot change other users' passwords.
