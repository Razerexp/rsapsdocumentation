---
sidebar_position: 1
---

# Initial Configuration

## DataReach User Creation

To ensure proper security isolation and file permission management, the DataReach application should be owned and executed by a dedicated service account. This prevents the application from running with unnecessary root privileges.

**Step 1: Create the Service Account**

Establish a secure shell (SSH) connection to the **Mastercontroller Server** (the server you have chosen to host the Mastercontroller application). You must perform the following actions with `root` privileges.

Execute the `useradd` command to create a unique user (e.g., `datareach`). The following command creates the user, assigns a home directory, and adds a descriptive comment:

```bash
useradd -d /home/datareach -c "Service Account for DataReach - DO NOT DELETE" datareach
```

**Step 2: Create Application Directory**

Create the dedicated directory where the DataReach application and its components will reside. Run the following command as the `root` user:

```bash
mkdir -p /opt/rsa/datareach
```

This directory `/opt/rsa/datareach` will serve as the base installation path.

## Firewall Setup

For the components to communicate effectively, specific network ports must be open. The Remote Agents need to communicate with the Mastercontroller.

**Required Outbound Rules**

Configure your firewall to allow **outbound traffic** from the host where the Agent is installed to the Mastercontroller server on the following ports:

*   **Port 10443**: Used for secure HTTPS communication between the Agent and Mastercontroller.
*   **Port 22**: Standard SSH port for secure file transfers and management access.

*Note: Please contact your network administrator or security team to ensure these firewall rules are applied correctly.*

## DataReach Packages and License

Before proceeding with the installation, you must stage the necessary installation artifacts on the Mastercontroller server.

**Step 1: Stage Binary Packages**

Create a temporary directory `/tmp/DRbinaries/` and upload the following DataReach packages to it. These files are typically provided by RSA Professional Services:

*   `MasterController_<Version>.zip` (Master Controller Installer)
*   `Credential_Provider_CyberArkREST_<Version>.zip` (Credential Provider Plugin)
*   `Agent_Windows_<Version>.zip` (Windows Agent)
*   `Agent_Unix_<Version>.tar` (Unix Agent)
*   `Agent_Job_Windows_<Version>.tar` (Windows Job Definitions)
*   `Agent_Job_UNIX_<Version>.tar` (Unix Job Definitions)
*   `Agent_Job_Database_<Version>.tar` (Database Job Definitions)

**Step 2: Stage License File**

Ensure you have the valid license file required to run the application. Upload the `license.properties` file to the server as well. You will need to move this to the installation directory in later steps.
