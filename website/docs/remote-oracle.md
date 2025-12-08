---
title: Remote Oracle Agent Configuration
---

# Remote Oracle Agent Configuration

## Create Agent Folder
```bash
mkdir -p /opt/rsa/datareach/AgentOracle
```

## Install Agent
Extract agent and job files into the agent directory.

## Certificate Setup
Backup and copy certificates from Mastercontroller.

## Agent Configuration
Update `agentcontroller.xml` and environment variables.

## Data Collection
```bash
./run_agent.sh
```
