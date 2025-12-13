---
sidebar_position: 2
---

# Remote Unix Agent Configuration

## Create Agent Directory

First, create the dedicated directory where the Unix agent software will be installed.

**Procedure**
1.  Log in to the Remote Agent server using SSH.
2.  Switch to the `datareach` service user.
3.  Create the installation directory:
    ```bash
    mkdir -p /opt/rsa/datareach/<Agent_Name>
    ```

## Install Agent Software

The agent software is distributed as a tarball. You must extract it and structure the directories correctly.

**Step 1: Extract and Configure**

Log in as `root` (or use `sudo`) and perform the following operations:

1.  **Extract the Agent Package**:
    Unpack the Unix agent distribution into the destination directory:
    ```bash
    tar -zxf /opt/rsa/artifacts/Agent_Unix_<Version>.tar.gz -C /opt/rsa/datareach/<Agent_Name>
    ```

2.  **Organize Files**:
    Move the internal component directories (`agent`, `java`) to the root of the agent installation path and cleanup the extraction artifacts:
    ```bash
    cp -R /opt/rsa/datareach/<Agent_Name>*/datareach/agent/* /opt/rsa/datareach/<Agent_Name>
    cp -R /opt/rsa/datareach/<Agent_Name>*/datareach/java /opt/rsa/datareach/
    cd /opt/rsa/datareach/<Agent_Name>
    rm -rf datareach
    ```

3.  **Install Job Definitions**:
    Extract the Unix-specific job definitions:
    ```bash
    tar -zxf /opt/rsa/artifacts/Agent_Job_UNIX_<Version>.tar.gz -C /opt/rsa/datareach/<Agent_Name>
    ```

## Configure Certificates

The Agent requires a unique identity certificate and trust store to communicate securely with the Mastercontroller.

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

3.  **Filter**: Remove irrelevant certificates to clean up the directory.
    ```bash
    rm DataReachRootCA.jks
    rm mastercontroller.jks
    ```

## Setup Permissions

Set the correct ownership and execution rights to ensure the agent runs securely. As `root`:

```bash
chown -R datareach:datareach /opt/rsa/datareach/<Agent_Name>
chmod +x /opt/rsa/datareach/<Agent_Name>/scripts/setperms.sh
/opt/rsa/datareach/<Agent_Name>/scripts/setperms.sh
```

## Agent Configuration

Configure the agent to use the correct keystore and environment settings.

**Step 1: Update Agent Controller Config**

Edit `/opt/rsa/datareach/<Agent_Name>/config/agentcontroller.xml`. Update the following tags with your specific values (including the encrypted password generated earlier):

```xml
<keystore>../certificates/<agent_name>.jks</keystore>
<keystore_alias><agent_name></keystore_alias>
<keystore_password><Paste_Encrypted_Password_Here></keystore_password>
<package_folder>/opt/rsa/datareach/<Agent_Name>/package</package_folder>
```

**Step 2: Update Environment Config**

Edit `/opt/rsa/datareach/AgentUnix/scripts/setenv.sh`. Ensure the `DR_ENV_PATH` variable matches the one generated on the Mastercontroller.

## Verification

**Start Data Collection**

To verify the agent is working, manually trigger a collection run. As `datareach`:

```bash
cd /opt/rsa/datareach/<Agent_Name>/scripts
./run_agent.sh
```

**Check Logs**

Monitor the logs for success messages or connectivity errors:
*   `/opt/rsa/datareach/<Agent_Name>/logs/datareach_agent.log`

**Verify Database**
Log in to your backend database and query the tables to ensure data from this Unix agent is being populated correctly.
