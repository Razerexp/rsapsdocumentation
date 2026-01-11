---
sidebar_position: 4
---

# Remote Oracle 11 Agent Configuration

## Create Agent Directory

First, create the dedicated directory where the Oracle 11 agent software will be installed.

**Procedure**
1.  Log in to the Remote Agent server.
2.  Switch to the `datareach` user.
3.  Create the directory:
    ```bash
    mkdir -p /opt/rsa/datareach/<Agent_Name>
    ```

## Install Agent Software

Extract and organize the agent software.

**Step 1: Extract and Configure**

Log in as `root` (or use `sudo`) and perform the following operations:

1.  **Extract the Agent Package**:
    Unpack the agent distribution into the directory created above:
    ```bash
    tar -zxf /opt/rsa/artifacts/Agent_Unix_<Version>.tar.gz -C /opt/rsa/datareach/<Agent_Name>
    ```

2.  **Organize Files**:
    Move the internal component directories (`agent`, `java`) to the root of the agent installation and clean up:
    ```bash
    cp -R /opt/rsa/datareach/<Agent_Name>*/datareach/agent/* /opt/rsa/datareach/<Agent_Name>
    cp -R /opt/rsa/datareach/<Agent_Name>*/datareach/java /opt/rsa/datareach/
    cd /opt/rsa/datareach/<Agent_Name>
    rm -rf datareach
    ```

3.  **Install Job Definitions**:
    Extract the database-specific job definitions:
    ```bash
    tar -zxf /opt/rsa/artifacts/Agent_Job_Database_<Version>.tar.gz -C /opt/rsa/datareach/<Agent_Name>
    ```

## Configure Certificates

The Agent requires a unique identity certificate.

**Step 1: Prepare Certificate Directory**

As the `datareach` user, navigate to the certificates folder and backup any existing default keys:

```bash
cd /opt/rsa/datareach/<Agent_Name>/certificates
mkdir -p /opt/rsa/datareach/<Agent_Name>/certificates/backup
cp *.jks /opt/rsa/datareach/<Agent_Name>/certificates/backup
```

**Step 2: Install New Certificates**

1.  **Clean Up**: Remove the default keystores.
    ```bash
    rm *.jks
    ```

2.  **Import**: Copy the certificates you generated on the Mastercontroller (specifically `<agent_name>.jks` and `DataReachRootCA.jks`).
    ```bash
    cp /opt/rsa/datareach/mastercontroller/certificates/* /opt/rsa/datareach/<Agent_Name>/certificates
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
chown -R datareach:datareach /opt/rsa/datareach/<Agent_Name>
chmod +x /opt/rsa/datareach/<Agent_Name>/scripts/setperms.sh
/opt/rsa/datareach/<Agent_Name>/scripts/setperms.sh
```

## Agent Configuration

Configure the agent to use the correct keystore and environment settings.

**Step 1: Update Agent Controller Config**

Edit `/opt/rsa/datareach/<Agent_Name>/config/agentcontroller.xml`. Update the following tags with your specific values:

```xml
<keystore>../certificates/<agent_name>.jks</keystore>
<keystore_alias><agent_name></keystore_alias>
<keystore_password><Paste_Encrypted_Password_Here></keystore_password>
<package_folder>/opt/rsa/datareach/<Agent_Name>/package</package_folder>
```

**Step 2: Update Environment Config**

Edit `/opt/rsa/datareach/<Agent_Name>/scripts/setenv.sh`. Ensure the `DR_ENV_PATH` variable matches the one generated on the Mastercontroller.

## Verification

**Start Data Collection**

To verify the agent is working, manually trigger a collection run. As `datareach`:

```bash
cd /opt/rsa/datareach/<Agent_Name>/scripts
./run_agent.sh
```

**Check Logs**

Monitor logs:
*   `/opt/rsa/datareach/<Agent_Name>/logs/datareach_agent.log`

**Verify Database**
Query the backend tables to verify data collection.
