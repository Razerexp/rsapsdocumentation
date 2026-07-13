---
title: "Part 2 Deep Dive: The Bulk Update Tool"
sidebar_position: 15
---

# Part 2 Deep Dive: The Bulk Update Tool


The end-of-day session (26 minutes) was devoted entirely to Bulk Update — the tool the team will use at the upcoming onsite. Bulk Update is a standalone, Java-based command-line tool: it does not route through MS at all, may run on the Prime server or any Windows machine, and is driven by exactly two files — a properties file and a profile.

## The Properties File

Configuration items walked line-by-line in the demo:

- Logging — log level, log config file, log location.
- Authentication Manager connection — FQDN of the AM primary; Super Admin (or any Security Console user with rights to update the WPI cache) username and password.
- Command client credentials — retrieved from the AM appliance itself: SSH to the primary, go to /opt/rsa/am/utils, and run the RSA util command, which prompts for OC admin credentials and prints the command client username and password.
- Active Directory connection — bind account username/password, AD server IP/hostname, and four scoping values consultants change per site: user base, user search string, group base, and group search string. In the demo, users and groups lived in a 'demo' OU, and the target group was 'PS demo group' containing two users.

## Credential Encryption with Template Builder

Plain-text credentials are acceptable only for first-run validation. For production, the Template Builder utility (distributed via OneDrive) encrypts any credential in the file: open the properties/APT file in the tool, supply the plain-text value and the encryption key, and paste the resulting ciphertext back. A crucial gotcha received emphasis: the encryption key value in the file looks like a filesystem path but is actually a symmetric key — the slash-delimited string is not a path (it can even be reformatted to look Windows-style), and misreading it as a location is a predictable field error. Every credential in the file can be encrypted this way except the AMS debug value.

## The Profile: Rotation Policy and Password Generation Rules

The profile file governs *what the tool does and how passwords are built*:

- Rotation frequency — how often each user's AD password is reset (the demo skip-window was 30 days).
- Tracking attribute — the AM identity attribute (password expiry) the tool stamps on each successful rotation so it knows when each user is next due — the same pattern as the service account system's encrypted expiry attribute.
- Password generation rules — pattern, length, character repetition limits (e.g., no more than two identical characters adjacent), type repetition limits (e.g., no runs of digits), and the permitted special character set. Critically, these settings do not override AD policy: the AD team supplies the complexity requirements from their own configuration, and the tool generates passwords that comply — the profile is an expression of the customer's AD policy, not a competitor to it.
- WPI synchronization flag — whether the WPI cache in AM is updated alongside the AD change.

## Running the Tool — Live Demo

Execution: java -jar bulkupdate.jar -p `<profile>` with the mode (*rotate passwords*) and an output file location. The demo run produced an instructive teaching moment: both users were skipped, because their passwords had changed within the 30-day window. The trainer then cleared the password-expiry tracking attribute for one user in AM and re-ran: one success, one skipped — exactly the expected differential. Result verification uses three artifacts:

- Summary file (logs folder) — per-run counts of updated vs. skipped users with modification dates.
- Output CSV — successful updates written to the configured output file (format adaptable to customer requirements).
- Audit file — per-user attempt records with success/failure status.

## Scheduling and Additional Modes

Production operation is fire-and-forget: on Windows, wrap the command in a .bat file and schedule it daily via Task Scheduler; on Linux, a shell script under cron. Each run evaluates every group member's expiry stamp — rotating the due, skipping the rest. Beyond password rotation, the tool's other demonstrated mode is alias addition (built for a recent customer of Ben's): CSV-driven input listing users, aliases to add, and required group membership; the tool adds each user to the group and updates the alias record, scaling to hundreds of users per run. Additional modes continue to accrue as customers request them (admin-role deletion, per [Section 3.2](./3-the-rsa-prime-solution-suite.md)). Confluence articles and usage guides exist for all Bulk Update features; the trainer offered to fill any documentation gaps on request. The complementary SSP-side password-generation button configuration was deferred to Day 2. The end-user self-service password generation surface — the SSP homepage button — was noted as configurable and queued for the Day 2 SSP file walkthrough.
