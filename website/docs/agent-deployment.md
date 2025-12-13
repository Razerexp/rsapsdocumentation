---
sidebar_position: 10
---

# Agent Deployment

## Overview

When deploying a new agent, naming convention and consistency are paramount. Before starting the technical installation, you must choose a unique **Agent Key Name**.

*   **Recommendation**: Use a descriptive name of at least 5 characters (e.g., `oracle11`, `mssql02`).
*   **Consistency**: This name is used across multiple configuration points. It must match exactly in:
    *   The **Common Name (CN)** of the generated SSL certificate.
    *   The **Directory Name** on the Mastercontroller (e.g., `/agent_configs/oracle11`).

## Agent Deployment Workflow

Follow this procedure to initialize a new agent configuration on the Mastercontroller.

**Step 1: Initialize Agent Directory**

On the Mastercontroller server, create the directory structure that matches your chosen Agent Key Name (e.g., `<Agent_Name>`).

```bash
mkdir <Agent_Name>
mkdir -p /opt/rsa/datareach/mastercontroller/agent_configs/<Agent_Name>/package/config
```

**Step 2: Generate Identity Certificate**

You must generate a new, unique certificate for this agent to allow it to authenticate.

1.  Navigate to the scripts directory:
    ```bash
    cd /opt/rsa/datareach/mastercontroller/scripts/
    ```

2.  Run the generation script (replace `<Agent_Name>` with your chosen name):
    ```bash
    ./drutils.sh certs generateAgent -n <Agent_Name> -p <Password> -ca-password <CA_Password>
    ```

3.  Deploy the certificate to the agent's folder (or transfer it to the remote agent server later):
    ```bash
    cp /opt/rsa/datareach/mastercontroller/certificates/<Agent_Name>.jks /opt/rsa/datareach/<Agent_Name>/certificates
    ```

**Step 3: Configure Agent Settings**

You need to define how this agent behaves by creating its XML configuration files.

1.  **Clone Templates**: It is best practice to copy an existing working configuration (like `unix` or a template) and modify it.
    *   Copy `agent_configuration.xml` to `/opt/rsa/datareach/mastercontroller/agent_configs/<Agent_Name>/`.
    *   Copy `package.xml` to `/opt/rsa/datareach/mastercontroller/agent_configs/<Agent_Name>/package/config`.

2.  **Customize**: Edit these files to reflect the specific requirements of the new agent, such as data source paths or schedule intervals.

```bash
cd /opt/rsa/datareach/<Agent_Name>/config
vi agent_configuration.xml
```
