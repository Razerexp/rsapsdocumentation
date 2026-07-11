---
sidebar_position: 10
---

# Agent Deployment

## Overview

When deploying a new agent, naming convention and consistency are paramount. Before starting the technical installation, you must choose a unique **Agent Key Name**.

*   **Recommendation**: Use a descriptive name of at least 5 characters and at most 8 characters (e.g., `oracle11`, `mssql02`).
*   **Consistency**: This name is used across multiple configuration points. It must match exactly in:
    *   The **Directory Name** on the Mastercontroller (e.g., `/agent_configs/oracle11`).
    *   The **Common Name (CN)** of the generated SSL certificate (if custom certificates are generated).

---

## Agent Deployment Workflow

Follow this repeated procedure on the Mastercontroller every time you deploy a new agent.

### Step 1: Initialize Agent Configuration Directory

Create the directory structure that matches your chosen Agent Key Name (e.g., `<Agent_Name>`) under the `agent_configs` folder on the Mastercontroller:

```bash
cd /opt/rsa/datareach/mastercontroller/agent_configs
mkdir -p <Agent_Name>/package/config
```

### Step 2: Populate Configuration from Templates

Copy the default configuration templates (e.g., `unix` or `oracle`) to your new agent folder to use as a starting point:

```bash
cp -R /opt/rsa/datareach/mastercontroller/agent_configs/<Template_Name>/* /opt/rsa/datareach/mastercontroller/agent_configs/<Agent_Name>/
```
*(Replace `<Template_Name>` with the directory name of the matching configuration template, such as `unix` or `oracle`).*

### Step 3: Configure Agent Settings

You need to define how this agent behaves by editing its XML configuration files:

1.  Open and modify `/opt/rsa/datareach/mastercontroller/agent_configs/<Agent_Name>/agent_configuration.xml`.
2.  Open and modify `/opt/rsa/datareach/mastercontroller/agent_configs/<Agent_Name>/package/config/package.xml`.

*Update these files to reflect specific requirements of the new agent, such as target directories or collection schedule intervals.*

### Step 4: Register Agent in Host Plugin Configuration

You must register the new agent in the host plugin's `config.xml` file on the Mastercontroller so the service knows which hosts belong to this agent's scope.

1.  Navigate to the JDBC hostlist provider directory and edit `config.xml`:
    ```bash
    cd /opt/rsa/datareach/mastercontroller/plugins/hostlist-provider-jdbc
    vi config.xml
    ```
2.  Add a new XML block under the `<agents>` tag for your new agent. The `<query>` tag uses an HXTT SQL query to fetch the list of hosts from the CSV files in the data folder.

    **Example Configuration Block:**
    ```xml
    <oracle11>
        <query>
            select host_type, alias_type, host_name, connection_string,
            credential_alias, connection_string as cust_attr_1 from
            customer_dboracle_hosts where db_type='oracle'
        </query>
    </oracle11>
    ```
    *(Note: Replace `customer_dboracle_hosts` with your actual CSV file name initialized in the Mastercontroller Host List Setup, omitting the `.csv` extension as the HXTT JDBC driver treats filenames as database table names).*

### Step 5: Generate Agent Identity Certificate (Optional)

> **Note:** This step is optional. New builds of DataReach ship with pre-generated certificates. You only need to generate a new agent certificate if you are not using the pre-generated ones, or if your organization's security policy requires custom certificates.

If generating custom certificates:

1.  Navigate to the scripts directory:
    ```bash
    cd /opt/rsa/datareach/mastercontroller/scripts/
    ```
2.  Run the generation script (replace `<Agent_Name>` with your key name and passwords with your actual values):
    ```bash
    ./drutils.sh certs generateAgent -n <Agent_Name> -p <Password> -ca-password <CA_Password>
    ```
3.  Deploy/stage the generated certificate file (e.g. `<Agent_Name>.jks`) in the agent's staging certificates directory (so it can be transferred to the remote agent host later):
    ```bash
    mkdir -p /opt/rsa/datareach/<Agent_Name>/certificates
    cp /opt/rsa/datareach/mastercontroller/certificates/<Agent_Name>.jks /opt/rsa/datareach/<Agent_Name>/certificates/
    ```

### Step 6: Proceed with Remote Agent Installation

Once configuration preparation is done on the Mastercontroller, download/stage the correct binary packages:
- **Agent Distribution**: `Agent_<Platform>_<Version>.<extension>` (e.g. `Agent_Linux_<Version>.tar.gz` or `Agent_Windows_<Version>.zip`)
- **Job Definitions**: `Agent_Job_<Type>_<Version>.tar.gz` (e.g. `Agent_Job_UNIX_<Version>.tar.gz` or `Agent_Job_Database_<Version>.tar.gz`)

Transfer these files to the target remote agent host and complete the installation using the appropriate platform guide:
- [Remote Unix Agent Configuration](./remote-agents/remote-linux.md)
- [Remote Oracle Agent Configuration](./remote-agents/remote-oracle.md)
- [Remote Oracle 11g Agent Configuration](./remote-agents/remote-oracle11.md)
- [Remote MSSQL Agent Configuration](./remote-agents/remote-mssql.md)
