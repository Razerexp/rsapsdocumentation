---
title: "34. Branding and Customization (Part 2)"
sidebar_position: 34
---

# 34. Branding and Customization (Part 2)


## 34.1 Where Branding Lives

The Part 2 session opened with the branding system. All customizable assets sit under configs/SSP/config/assets/default/brandings — image files and CSS files. The governing rule: if an asset is in this folder, it is customizable; if it only exists embedded in the WAR file, it cannot be changed. HTAP and PCAP follow the same model with their own asset folders.

## 34.2 Logos, Backgrounds, and the No-Restart Property

Changing the login-page logo or background image is a two-move task: place the customer's image file in the brandings folder, and reference it in the CSS (the demo uncommented the logo section and pointed the background at a new file). The standout operational property: branding changes are instantaneous — no service restart required. A browser refresh shows the new logo immediately, which makes branding iteration safe and fast even on live systems (and pleasantly exempt from the restart-risk discipline of Section 28).

## 34.3 Colors and Layout: Two Files, Trial and Error

Every color, font, size, and positioning decision routes through exactly two files: common.css and style.css. The demonstrated workflow for matching customer colors: use browser developer tools (inspect) on a reference page — or the customer's brand hex codes if provided — to identify the target color; search both CSS files for the current hex value; replace-all; refresh. The trainer's candid method note: for non-front-end developers, positioning is honest *trial and error* — nudge the margin, adjust the size, refresh, repeat — and 'you can go as crazy as the customer wants' within those two files (his all-white button experiment briefly made buttons invisible, itself a lesson in changing foreground and background together). Dave has delivered nontrivial customizations on this system, including customer-mandated colored warning text on the login page.
