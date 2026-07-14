---
title: "PrimeKit Packaging and the Technology Stack"
sidebar_position: 4
---

# 4. PrimeKit Packaging and the Technology Stack

## 4.1 From Component Chaos to PrimeKit

Historically, SSP, HDAP, and MS were sold and delivered as separate components. Customers downloaded their own Java and Tomcat, received configuration files and WAR files from RSA, and assembled the environment themselves — a process that routinely took **weeks to months** just to get the applications running. Justin (Prime team) consolidated everything into **PrimeKit**: a single self-contained bundle that ships with its own Java runtime and its own Tomcat, delivered as a tarball. Layered on top is **Prime Quick Setup**, which automates the back-end provisioning (service accounts, identity attributes, agents, policies, admin roles) that previously consumed most of the installation time. The combined result: with prerequisites met, a working Prime environment in **under 30 minutes**.

## 4.2 Java and Tomcat Versions

MS, SSP, and HDAP all run on Apache Tomcat with OpenJDK. The currently supported baseline is **Java 8 with Tomcat 9.0**. RSA engineering recently began supporting Java 17, and the Prime team is actively migrating: **MS can already be deployed on Java 17 / Tomcat 10** (driven by a Wells Fargo request, targeted for availability within roughly two weeks of the session), while **SSP and HDAP remain Java 8** pending refactoring of third-party library dependencies. The primary migration friction was not Java itself — Java is largely backward compatible — but Tomcat's namespace migration from javax.\* to jakarta.\*, which forced significant code refactoring.

A forward-looking question from the room connected the Java version story to **post-quantum cryptography readiness**: for long-lived Prime deployments (5–8 years in place), how difficult is it to swap the crypto provider — e.g., moving from Java 17 to a future Java 24/27 with quantum-safe providers? The trainer's answer: because Java is backward compatible and PrimeKit references its runtime exclusively through symlinks, swapping Java binaries is low-effort — delete and recreate the pointer. The constraint historically has been Tomcat API churn, not the JDK.

## 4.3 The Symlink Maintenance Model

PrimeKit's most operationally important design convention is its use of **symbolic links** at every version boundary:

* The deployed kit directory is referenced through a primekit symlink pointing at the actual versioned kit folder. Upgrading to a new kit version means copying the new kit alongside the old, deleting the symlink, and recreating it against the new folder — all internal references resolve through the pointer.

* Inside the kit, a latest symlink points at the active JDK (e.g., JDK 8u482). When 8u483 ships, the binaries (typically distributed via Sean's OneDrive) are copied in, the symlink is repointed, and the upgrade is done.

* Tomcat follows the identical pattern (e.g., 9.0.118 → 9.0.119).

Rollback is equally trivial: repoint the symlink to the previous version — the model that makes patching, Java upgrades, and eventual crypto-provider swaps low-risk field operations.

## 4.4 Related Core-Product Direction

A sidebar noted that per Steve Small, the core Authentication Manager product (v9.10 timeframe) is evaluating removal of Oracle-licensed components — Oracle JDK in favor of OpenJDK, and replacement of other licensed third-party elements with open source. The room flagged the potential downstream impact on Prime and agreed to follow up with engineering by email to identify the right contact.
