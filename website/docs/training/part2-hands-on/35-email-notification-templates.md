---
title: "35. Email Notification Templates"
sidebar_position: 35
---

# 35. Email Notification Templates


## 35.1 The Template System

Every email Prime sends — across SSP, HTAP, MS, and ENS operations — originates from a template folder under configs/MS/workflow/mail, one folder per operation, named for the operation it serves (hardware token request, lost token, and so on). The SSP properties file contains the mapping section that binds each operation to its template — usually guessable from the name, but authoritative when in doubt.

## 35.2 Anatomy of a Template

Each template is a pair: an HTML file (the full markup of the email body) and a properties file (key-value pairs holding the text strings). Customizing content — different wording, a help desk phone number appended to every notification, customer-specific instructions — means editing those two files for the relevant operation. The logo embedded in all outgoing emails lives separately in the templates/global folder; replace it once and every notification carries the customer's mark. Template content is uniform per operation — it does not vary by the user's access channel (cloud vs. web), a clarification raised and settled in Q&A.

## 35.3 The Demo and the Day's Last Lesson

The live demonstration — putting a token into lost mode to trigger its notification — was foiled by the lab itself: the MailHog container was down, so the send failed (and an earlier self-inflicted casualty surfaced: the trainer had auto-generated his own AD password that morning via the Section 29 feature and no longer knew it). Prior test notifications in the MailHog inbox served as the exhibit instead, showing the workflow-generated emails with their customizable logos and text. A fitting close for a day whose deepest lesson was that things break, logs tell you why, and the fix is always one of a small number of files.

## 35.4 Session Close

The trainer ended Part 2 by opening the floor: the planned topic list was complete, and remaining time belonged to attendee requests — signaling that the core curriculum (installation, configuration, certificates, the WPI feature chain, VTS, PCAP, branding, and templates) had been delivered, with troubleshooting promised as a dedicated future module.
