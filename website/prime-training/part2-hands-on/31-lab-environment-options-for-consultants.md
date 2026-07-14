---
title: "Lab Environment Options for Consultants"
sidebar_position: 31
---

# 31. Lab Environment Options for Consultants

A recurring Day 2 thread — sparked by attendee questions about practicing the material — produced a clear two-option lab strategy, each suited to a different purpose:

## 31.1 Option 1: vCloud SecurID Template (Full-Stack Practice)

For practicing **installation and the full product stack**, spin up a vCloud instance using the **SecurID template** (distinct from the lighter 'SecurID Lite'). The full template provisions roughly **15–20 machines** in one shot: Active Directory plus DNS, an AM primary and replica, an IDR machine, one Prime Windows box, one Prime Linux box, and Windows 2019 machines for MFA agents. Operational notes: the environment must be **renewed every 30 days**; the maintenance team can assist with provisioning; templates are updated over time, so consultants should locate the latest version (or loop in the trainer to verify) before building. This is the environment Jacob was directed toward for onsite rehearsal.

## 31.2 Option 2: Docker (Fast Feature Testing)

For testing **features and configuration behavior** — generate-password mechanics, authentication configuration, branding, templates — Docker is the right tool: free and license-less, installable anywhere, and capable of standing up the full Prime tier **in one to two hours**. The trainer committed to uploading his Docker package (including his backups) to the shared OneDrive; Hillis or the trainer will help any consultant through first-time setup. The rule of thumb offered: Linux/vCloud when the question is 'how does installation work'; Docker when the question is 'how does this feature behave.'

## 31.3 Training Materials Inventory

The materials thread consolidated what now lives in the shared OneDrive and training chat: the **Prime Quick Setup recording** from Day 1; a **certificate replacement recording**; the **MS API Reference Guide** (all sample request/responses); **Nadine's Prime training deck** (referenced at \~70 slides, with a larger \~104-slide master also in circulation) plus a version-8-specific training deck; the **Ryan/AMS-specific training** Nadine included; and — being uploaded during the session — the **Docker image/package**. Consultants should pull from this single location rather than requesting materials individually.
