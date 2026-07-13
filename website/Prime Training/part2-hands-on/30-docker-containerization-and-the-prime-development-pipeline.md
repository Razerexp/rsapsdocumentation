---
title: "Docker Containerization and the Prime Development Pipeline"
sidebar_position: 30
---

# Docker Containerization and the Prime Development Pipeline


## Context: Why Now, and For Whom

Mid-morning, the trainer powered down his slow Linux VM ('I was using Linux just to show you how installation and quick setup are done') and switched to his Docker environment for the rest of the day — turning the environment change itself into a module. Prime containerization is new: it existed for years only as a possibility with no customer demand, and Wells Fargo is the first customer deployment, now in progress. Hillis architected the container infrastructure with Mark ('our first customer that will be using Docker containers… with the help of Hillis'), and is the team's Docker knowledge center — formal Docker installation/configuration was declared out of scope for this training, with Hillis flagged as the resource for a dedicated walkthrough. Helm charts are not used for Prime (the team has begun using Helm elsewhere, post-Prime).

## The Container Topology

- MS, SSP, and HTAP containers — one per application, independently restartable.
- Setup container — a run-once container that executes Prime Quick Setup, then exits; installation becomes a disposable step rather than a resident process.
- HAProxy — load balancing across application containers. Scaling is a one-file edit: modify the compose configuration, restart, and additional MS/SSP/HTAP nodes spin up (or down) 'in no time.'
- Redis — session caching. Demonstrated live: the trainer restarted SSP mid-session and remained logged in, because session state lives in Redis rather than Tomcat memory.
- MailHog — an open-source mail-capture container standing in for a real SMTP relay, so email flows can be tested without external infrastructure. (It misbehaved during the Part 2 email demo — even the lab tooling provided a troubleshooting moment.)

## Session Architecture Clarified: Two Token Systems

The Redis demonstration prompted an important clarification that refines Day 1's Section 8. Prime runs two distinct session systems: the RSA authentication/session token (Day 1's 8-digit, machine-ID-encoded token) belongs to *AMS only* and governs REST API admin operations; SSP and HTAP are ordinary web applications using JSESSIONID browser cookies, with server-side references historically held in Tomcat memory. In the Docker architecture, those web-session references move to Redis — which is what makes the restart-without-relogin behavior possible and removes web-tier node affinity in the same way Redis-backed auth clustering does for AMS.

## The Build-Deploy-Restart Development Loop

The trainer showed his development pipeline: a code change plus a single build command automatically copies the resulting artifacts into the patches folder and restarts MS/SSP/HTAP; the restart process ingests the patches and replaces the WAR files. One click from code change to running test. A recent quality-of-life addition: the team can now attach a live IDE debugger to the running application — for years every change required a full deploy-and-test cycle, and live debugging 'saves a lot' of iteration time. (This applies to Prime development; consultants benefit indirectly through faster patch turnaround.)

## Environment Boundaries

Two constraints frame what containers can and cannot yet do: Authentication Manager is not yet available on Docker — an AM container exists within engineering but is not official and not available to PS — so the trainer's AM and Active Directory run on VMware alongside the Docker host (one AM, one AD; more requires vCloud), and no AD container image exists either. Net for consultants: Docker covers the Prime tier for feature testing; the AM/AD substrate still needs VMs.
