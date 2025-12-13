---
sidebar_position: 1
---

# Introduction

DataReach is an RSA Professional Services developed add on to the **RSA Governance & Lifecycle** product to facilitate collection of user and access information from multiple endpoints of the same type. This document outlines the steps that need to be performed to install all the components of DataReach.

## Installation Scenarios

DataReach consists of three core components:
*   **Mastercontroller**: Central configuration point and data pipe.
*   **Agent**: Endpoint data collector.
*   **Database**: Stores collected data and metadata.

The location of these components depends on your requirements:

### Single Server
All 3 components installed directly on your G&L application server.

![Single Server Scenario](/img/scenario_single_server_1765616975918.png)

### Agent, Local Database
Mastercontroller and Database on G&L server; Agents deployed remotely.

![Agent, Local Database Scenario](/img/scenario_agent_local_db_1765616994761.png)

### Agent, Dedicated Database
Agents deployed remotely; Dedicated Oracle database provided by org; Mastercontroller on any system.

![Agent, Dedicated Database Scenario](/img/scenario_agent_dedicated_db_1765617011195.png)

## Installation Pre-Requisites

### Operating System
*   **Master Controller**: Virtual or physical **Linux** host. Can be the G&L server.
*   **Agent**: Virtual or physical **Linux** or **Windows** host.

### Hardware Requirements

| Resource | Database | Master Controller / Agent |
| :--- | :--- | :--- |
| **RAM** | Min 32 GB | 4 GB (MC) / 2 GB (Agent) dedicated |
| **CPU** | Min 2 quad-core | Dual core processor |
| **Disk** | Min 500 GB | 1 GB (MC) / 200 MB (Agent) |

### Port Requirements

*   **21 (FTP)**: FTP connections.
*   **22 (SSH)**: SSH connections.
*   **10443 (HTTPS)**: Agent to Master Controller communication.

## Intended Audience

This document is intended to be used by the **G&L** Administrators at Client Organization as a refence guide to install DataReach.

## Acronyms

| Acronym | Definition |
| :--- | :--- |
| **G&L** | RSA Governance & Lifecycle |

---
### Document Details
**Version**: 1.2 *Latest*
**Last Updated**: December 13, 2025
