---
title: "Auth Clustering and Session Token Architecture"
sidebar_position: 8
---

# 8. Auth Clustering and Session Token Architecture

## 8.1 The Problem: In-Memory, Node-Specific Session Tokens

The two-step API pattern (authenticate → session token → admin call) creates a distributed-systems problem in production. Session tokens are **in-memory, application-specific artifacts stored only on the node that issued them**. With four MS nodes behind a load balancer, a client may authenticate against node 1 (receiving node 1's session token) and then have its admin call routed to node 2 — which has no knowledge of that token and cannot validate it.

## 8.2 The Solution: Machine IDs and Mod-20 Encoding

Prime's **auth clustering** assigns each participating node a machine ID from 1 to 20 (20 is a practical ceiling; the largest real deployment observed is 18 nodes). When a node generates a session token, the machine ID is **embedded into the token via a mod-20 operation** — meaning any node can determine, just by inspecting the 8-digit token, which node issued it. When an admin call lands on a different node, MS internally forwards the token to the issuing node for validation; if the issuer confirms validity, the receiving node performs the requested activity. Only the issuing node can validate its own tokens, because the token state lives solely in that node's memory.

## 8.3 Configuration

Auth clustering is configured in authclusterconfig and is disabled out of the box (single localhost entry). Enabling it means uncommenting the machine entries (M01, M02, …), assigning each node's FQDN a unique machine ID, and — critically — keeping the **configuration identical across every node** (if a server is machine 1 in one file, it is machine 1 in all of them). Restart the services and the nodes become cluster-aware.

## 8.4 When Clustering Is Unnecessary — and the Redis Future

If the customer's load balancer supports sticky sessions (e.g., source-IP persistence), requests within a session always reach the issuing node and auth clustering is unneeded. Clustering exists for customers with no load balancer or without persistence capability. Separately, Prime now supports **containerized (Docker) deployment**, and for that model the team supports **Redis-backed session clustering**: session tokens are written to a Redis cache rather than node memory, and validation reads from Redis — removing the node-affinity problem entirely. Redis configuration details were declared out of scope for Day 1\.

## 8.5 Session Timeouts and the Load Balancer Interaction

Token lifetimes are configured near the end of authconfig.xml via two values: an **idle timeout** (expiry when unused) and a **lifetime timeout** (absolute maximum — e.g., 8 hours regardless of activity). Common customer configurations include 15/30 and 15/60 minutes. A subtle field gotcha received emphasis: the **load balancer's own persistence timeout must be greater than or equal to the authconfig timeouts**. If the LB persistence window (say, 15 minutes) is shorter than the token lifetime, the LB forgets which node owns the session and effectively overrides Prime's configuration. The load balancer is customer-owned infrastructure outside Prime's control — and, as attendees noted from field experience, coordinating changes with customer network teams is frequently the largest source of onsite delay.
