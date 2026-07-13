---
title: "The AMIS Master Deck: Provenance and How Part IV Works"
sidebar_position: 50
---

# The AMIS Master Deck: Provenance and How Part IV Works


## What This Deck Is

Part IV integrates the Prime AMIS Training Master Deck (draft, 63 slides) — the AMIS-specific training referenced during Day 2's materials discussion (Section 31.3: 'the Ryan AMIS training… it's very specific'). Its closing slide credits Sean Doyle, Justin Mitchell, and Nada Khaled for source material, and its copyright block dates the core content to the 2018 Dell/RSA era — making this the oldest artifact in the program and, in effect, its ancestor: comparison shows Nadine's V8 master (Part III) inherited entire modules from this deck verbatim, including the network/port matrix and the sixteen-slide API cookbook. Where Part III's deck is the current curriculum, this deck is the specialist's sourcebook — deeper on AMIS internals, developer integration tooling, and troubleshooting than anything else in the program.

## The Hidden-Slide Discovery

A structural finding worth recording: eleven of the deck's 63 slides are marked hidden in the file — slides 25–31 (the manual installation and configuration module: rsautil, keytool, Template Builder, the AM-side configuration checklist, and the network matrix) and slides 58–61 (the legacy service-management, upgrade, hardening, and first troubleshooting slides). The pattern is unmistakable: the hidden slides are precisely the material Prime Quick Setup and PrimeKit obsoleted — independent confirmation of the Day 1 history (Section 6.4: 'much legacy training documentation predates this automation'). Part IV restores and annotates them anyway, for two reasons: legacy customers still run pre-PrimeKit layouts these slides describe, and several hidden slides (notably 27's AM-side checklist and 60's hardening inventory) document things no current material states explicitly. Hidden slides are flagged as such in their commentary.

## Integration Policy for Part IV

Because this deck overlaps its descendants, Part IV applies a stricter economy than Part III: slides carrying new or deeper material get full annotation; slides that are verbatim duplicates of Part III content — chiefly the API cookbook (slides 40–55, identical to Part III slides 70–85) and the network matrix (slide 31 = Part III slide 10) — are cross-referenced in a consolidated note rather than re-embedded, so the guide never teaches the same slide twice. Chapter 56 reconciles all 63 slides. Legacy path note: this deck predates PrimeKit's standard layout, so its examples use paths like /local/apps/… and C:\\RSA\\… alongside the modern /opt/rsa/primekit — both forms are preserved in commentary because consultants meet both in the field.
