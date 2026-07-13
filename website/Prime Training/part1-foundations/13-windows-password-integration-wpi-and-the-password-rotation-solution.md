---
title: "Windows Password Integration (WPI) and the Password Rotation Solution"
sidebar_position: 13
---

# Windows Password Integration (WPI) and the Password Rotation Solution


## How WPI Works

WPI is a core Authentication Manager / MFA agent capability — not Prime code — but it is the foundation of the flagship federal use case. Mechanics: the MFA agent enforces passcode authentication at Windows logon. On first login the user enters passcode *plus* AD password; AM caches the password. On every subsequent login the user enters only the passcode, and AM injects the cached password to the agent, which validates it against AD internally. The trainer's shorthand: 'fancy password injection.' The user experience is effectively passwordless after day one.

## Why Rotation Breaks It — and the Bulk Update Answer

The failure mode arrives with password policy: environments that mandate rotation (e.g., every 60 days) force a password change on an account whose owner has not typed — and has therefore forgotten — the password. The result is a help desk call cycle. The origin story came from Dave Allison's engagement: a site whose only administrator lived 30 minutes away and had to drive in on weekends for every reset. The Prime answer is two-part:

- Automated rotation. The Bulk Update tool (Section 15) rotates the AD password for every member of a configured group on schedule *and simultaneously updates the WPI cache in AM*. AD and AM never diverge; the user never needs to know the password at all.
- On-demand password checkout. For the occasional moment a real password is required (the canonical example: authenticating to a printer), a custom SSP feature adds a button that generates and displays a brand-new password with a bounded lifetime (15 minutes to one day, per configuration). The next scheduled rotation sweeps it away. Configuration of this SSP button was queued for Day 2's SSP configuration file walkthrough.

Strategic framing from the room: this exact capability — 'check out or generate the password on the fly' — is what the upcoming SOCOM customer explicitly asked for, and it should be the entire focus of the first onsite. The engagement guidance discussed: rehearse the primary use case in a lab until it is automatic, deliver it cleanly, and only then seed conversations about the broader suite ('you already own Prime — here is what else it can do'), recognizing that budget cuts and personnel turnover have thinned the customer's institutional relationships and PS consultants increasingly carry the expansion conversation themselves.
