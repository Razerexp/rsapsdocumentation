---
title: "Notable Q&A and Discussion Highlights"
sidebar_position: 18
---

# Notable Q&A and Discussion Highlights


Beyond the structured instruction, Day 1 generated a rich stream of question-and-answer exchanges that captured field wisdom, product direction, and open issues. The most consequential are recorded here in thematic order, paraphrased for clarity.

## Product and Platform

- Q: How hard is it to swap Java versions later — e.g., to a quantum-safe crypto provider in Java 24/27? A: Low effort. Java is backward compatible and PrimeKit references its runtime only through symlinks; historically the pain came from Tomcat's javax→jakarta namespace migration, not the JDK. Deployments 5–8 years in place can be moved with a symlink repoint and validation pass.
- Q: Do we import users, or use an identity source? A: Both are supported. AD (or another directory) links as an identity source with a bind account — no manual creation. Populations outside AD (commonly contractors) live in the internal database and are created manually unless a directory like Entra covers them; two-identity-source deployments are routine.
- Q: Is there a specific order to setup scripts 1–4? A: Scripts 1 and 3 (local user creation and permission reset) must precede Quick Setup because Quick Setup depends on correct permissions; Script 2 (systemctl registration) is order-independent and may follow Script 4.
- Q: Can services be started with systemctl instead of the shell scripts? A: Yes — that is the production norm, run as the primekit local user rather than root; systemctl requires Script 2's registration. The trainer's root-based manual start was a lab-VM workaround only.
- Q: Is there a hard per-node connection limit (~200) before performance degrades? A: Unknown at session time; taken as an action item for the trainer to verify with engineering.
- Q: Word is the core product is dropping Oracle components in 9.10 — does that hit Prime? A: Plausible. The core product uses licensed Oracle JDK; a move to OpenJDK and open-source replacements would matter to Prime. Follow-up email to engineering (via Steve Small's referral) was agreed.

## Sessions, Clustering, and Load Balancers

- Q: Does every node issue session tokens? A: Yes — every node issues tokens and embeds its machine ID; only the issuing node can validate its own tokens because token state is in that node's memory. Any node receiving a token it did not issue forwards it to the issuer for validation before acting.
- Q: When can auth clustering be skipped? A: When the load balancer provides session persistence (e.g., source-IP stickiness) — the LB then guarantees the session returns to the issuing node. Clustering exists for customers without an LB or without persistence support.
- Q: Are token timeouts purely a Prime setting? A: No — the LB persistence window interacts with them. If the LB forgets the session before the token expires, the LB effectively wins. Rule of thumb: LB persistence ≥ authconfig.xml idle/lifetime timeouts.
- Field observation: attendees agreed the load balancer — customer-owned, separately administered, often controlled by yet another team — is the single most common source of onsite schedule slip ('we run into the load balancer and have to come back the next day').

## Security

- Q (Chandan): Is the rotating-password response really the most secure design, given clients commonly log API responses (passwords land in plain text in logs)? A: The risk is real and acknowledged. AMS does not log responses unless a custom flag is enabled, but client-side logging is outside RSA's control. Mitigations: prefer username\+passcode where a human exists; for machine-to-machine, move to OAuth (client ID/secret or private-key JWT), now supported — standards-based and free of password-in-response semantics. Adoption is early (UPS among the first).
- Q: What happens if the encrypted expiry attribute is corrupted? A: AMS can no longer decrypt it, treats the password as expired, and issues a fresh password on the next authentication — which doubles as a troubleshooting lever for stuck service accounts.
- Q: Direct CAS API callers — anything special? A: Yes — multi-step authentication flows require echoing the server-generated message ID across calls. AMS handles this internally, so AMS consumers never see it.

## Federal / Classified Delivery

- Q (Jake): How do you protect self-service enrollment in a SCIF with no email, no phone, no smart card? A: Layered answers — trusted-agent out-of-band invite delivery; temporary challenge-group exclusion with automatic re-inclusion on self-enrollment; the credential provider (powerful once working, hard to implement); and the structural floor that /invite requires a time-limited, one-time entitlement plus authentication, making entitlement\+password a defensible baseline subject to site policy.
- Q: Can anyone hit /invite without the entitlement? A: No. The entitlement must be granted (help desk or bulk invite) and is time-boxed (typically 2–3 days); afterward /invite refuses the user.
- Field pattern for restricted-environment troubleshooting: customers who cannot share screens or export logs are debugged by mirror-labbing — the consultant runs each command in his own lab on a shared screen, the customer runs the identical command on theirs, and outputs are compared verbally. Slow, but it works; log export remains the preferred path wherever policy allows.
- Patch turnaround: attendees credited the Prime team with day-or-two patch cycles when the customer's own engineers cannot crack an issue — the consultant burns a DVD/medium and the customer deploys — a responsiveness the core AM product cannot match.

## Commercial and Engagement Strategy

- On scoping the first SOCOM visit: the customer knows only SSP exists; the team's plan is to install the full suite, deliver the WPI/password-checkout primary use case flawlessly, and then walk the customer through the other components ('are you interested in this, or HTAP, or…') — they own it all already; they simply don't have to use it yet.
- On the consultant-as-seller reality: budget cuts and retirements have severed many customer relationships on both sides; PS consultants increasingly are the expansion channel. 'You don't have to be the sales guy for Prime — they already bought it.'
- On audit evidence (Christina): customers scramble every audit cycle to prove controls (password complexity, IAM controls) and settle for screenshots; pre-packaged compliance proof for RSA components would be immediately valuable and is largely an assembly exercise given existing hardening work.
