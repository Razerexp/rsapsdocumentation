---
sidebar_position: 11
---

# Host File Management

## Host Plugin Configuration

The Host List Provider integration requires specific configuration files on the Mastercontroller to map agents to the hosts they will collect from. This is managed through the host list configuration.

**Step 1: Access Plugin Configuration**

Navigate to the JDBC hostlist provider directory on the Mastercontroller:

```bash
cd /opt/rsa/datareach/mastercontroller/plugins/hostlist-provider-jdbc/
```

**Step 2: Register New Agent**

Edit the `config.xml` file. You must add a new entry or update existing queries to include the new agent's scope. This ensures that when the DataReach service runs, it knows to pull data from the new source.

## Host File Maintenance

The **Agent Key Name** acts as the primary key for linking configuration files.

*   **Mapping**: Ensure that the name used in your `config.xml` (e.g., `oracle11`) corresponds exactly to the folder names and certificate CNs created during deployment.
*   **Verification**: If a new agent is not collecting data, the first place to check is this `config.xml` to ensure the Host List CSV for that agent is correctly referenced.
