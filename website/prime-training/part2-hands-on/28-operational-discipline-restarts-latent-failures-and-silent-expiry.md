---
title: "Operational Discipline: Restarts, Latent Failures, and Silent Expiry"
sidebar_position: 28
---

# 28. Operational Discipline: Restarts, Latent Failures, and Silent Expiry

## 28.1 Why a One-Line Change Can Take Down an Application

A change-management thread emerged from the room's questions and produced one of the day's most valuable field lessons. Any service restart forces a **full re-read of the entire configuration surface** — so a trivial intended change (the demo example: adding one keyword to enable the generate-password button, a 20-second edit) can surface an unrelated latent failure that has been silently waiting: an expired certificate, a malformed XML edit from weeks earlier, a path broken by a file move. The operator experiences 'I made one small change and the whole application broke,' when in fact the restart merely revealed pre-existing damage.

## 28.2 Silent Certificate Expiry

The highest-probability latent failure is certificate expiry — and not the visible kind. Application SSL certificates announce themselves in the browser. But **internal certificates — trust store certs and SAML signing certs — expire with no notification whatsoever**, because no notification system watches them. They fail only on the next restart or the next operation that exercises them.

## 28.3 The Two-Step Restart Pattern

An attendee synthesized the mitigation, which the trainer endorsed: before making any planned change on a long-running system, **restart first with no changes**. Any errors that appear belong to latent conditions — triage them cleanly, in isolation. Only then apply the intended change and restart again. This separates 'what was already broken' from 'what my change broke,' collapsing diagnostic ambiguity. Combined with the change-control expectations of Section 27.3, the pattern should be standard practice on every production Prime touch.

## 28.4 XML Discipline and Log-First Troubleshooting

The most common self-inflicted restart failure is XML syntax — a missed start or end tag introduced during a config edit, even when instructions were followed. The logs identify the offending **file and line number** directly. The trainer's standing guidance, repeated throughout the day: gather the log files first and read them before hypothesizing; a dedicated troubleshooting module (mapping error classes to their log files) was promised for a later session. His personal habit, demonstrated repeatedly during the VTS and PCAP debugging: **clear existing logs before reproducing an issue** so the resulting capture is clean.
