---
sidebar_position: 3
---

# Remote MSSQL Agent Configuration

## Create Agent Directory

First, create the dedicated directory where the MSSQL agent software will be installed.

**Procedure**
1.  Log in to the Remote Agent server.
2.  Switch to the `datareach` user.
3.  Create the directory:
    ```bash
    mkdir -p /opt/rsa/datareach/AgentMSSQL
    ```

## Install Agent Software

The agent software is distributed as a tarball. You must extract it and structure the directories correctly.

**Step 1: Extract and Configure**

Log in as `root` (or use `sudo`) and perform the following operations:

1.  **Extract the Agent Package**:
    Unpack the Unix agent distribution (compatible with cross-platform) into the directory created for MSSQL:
    ```bash
    tar -zxf /opt/rsa/artifacts/Agent_Unix_<Version>.tar.gz -C /opt/rsa/datareach/AgentMSSQL
    ```

2.  **Organize Files**:
    Move the internal component directories (`agent`, `java`) to the root of the agent installation and cleanup:
    ```bash
    cp -R /opt/rsa/datareach/AgentMSSQL/datareach/agent/* /opt/rsa/datareach/AgentMSSQL
    cp -R /opt/rsa/datareach/AgentMSSQL/datareach/java /opt/rsa/datareach/
    cd /opt/rsa/datareach/AgentMSSQL
    rm -rf datareach
    ```

3.  **Install Job Definitions**:
    Extract the database-specific job definitions package:
    ```bash
    tar -zxf /opt/rsa/artifacts/Agent_Job_Database_1.4.v28072021110909.tar.gz -C /opt/rsa/datareach/AgentMSSQL
    ```

## Configure Certificates

The Agent requires a unique identity certificate and trust store.

**Step 1: Prepare Certificate Directory**

As the `datareach` user, navigate to the certificates folder and backup any existing default keys:

```bash
cd /opt/rsa/datareach/AgentMSSQL/certificates
mkdir -p /opt/rsa/datareach/AgentMSSQL/certificates/backup
cp *.jks /opt/rsa/datareach/AgentMSSQL/certificates/backup
```

**Step 2: Install New Certificates**

1.  **Clean Up**: Remove the default keystores.
    ```bash
    rm *.jks
    ```

2.  **Import**: Copy the certificates you generated on the Mastercontroller (specifically `mssql1.jks` and `DataReachRootCA.jks`).
    ```bash
    cp /opt/rsa/datareach/mastercontroller/certificates/* /opt/rsa/datareach/AgentMSSQL/certificates
    ```
    *(Note: Ensure you are copying the files from the location where you transferred them to this server)*

3.  **Filter**: Remove irrelevant certificates.
    ```bash
    rm DataReachRootCA.jks
    rm mastercontroller.jks
    ```

## Setup Permissions

Set the correct ownership and execution rights. As `root`:

```bash
chown -R datareach:datareach /opt/rsa/datareach/AgentMSSQL
chmod +x /opt/rsa/datareach/AgentMSSQL/scripts/setperms.sh
/opt/rsa/datareach/AgentMSSQL/scripts/setperms.sh
```

## Agent Configuration

Configure the agent to use the correct keystore and environment settings.

**Step 1: Update Agent Controller Config**

Edit `/opt/rsa/datareach/AgentMSSQL/config/agentcontroller.xml`. Update the following tags with your specific values:

```xml
<keystore>../certificates/mssql1.jks</keystore>
<keystore_alias>MSSQL</keystore_alias>
<keystore_password><Paste_Encrypted_Password_Here></keystore_password>
<package_folder>/opt/rsa/datareach/AgentMSSQL/package</package_folder>
```

**Step 2: Update Environment Config**

Edit `/opt/rsa/datareach/AgentMSSQL/scripts/setenv.sh`. Ensure the `DR_ENV_PATH` variable matches the one generated on the Mastercontroller.

## Verification

**Start Data Collection**

To verify the agent is working, manually trigger a collection run. As `datareach`:

```bash
cd /opt/rsa/datareach/AgentMSSQL/scripts
./run_agent.sh
```

**Check Logs**

Monitor logs:
*   `/opt/rsa/datareach/<Agent_Name>/logs/datareach_agent.log`

**Verify Database**
Query the backend tables to verify MSSQL data collection.
