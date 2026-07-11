---
sidebar_position: 1
---

# Initial Configuration

## DataReach User Creation

To ensure proper security isolation and file permission management, the DataReach application should be owned and executed by a dedicated service account. This prevents the application from running with unnecessary root privileges.

**Step 1: Create the Service Account and group**

Establish a secure shell (SSH) connection to the **Mastercontroller Server** (the server you have chosen to host the Mastercontroller application). You must perform the following actions with `root` privileges.

Execute the `useradd` command to create a unique user (e.g., `datareach`). The following command creates the user, assigns a home directory, and adds a descriptive comment:

```bash
useradd -d /home/datareach -c "Service Account for DataReach - DO NOT DELETE" datareach
```
Create a password for the new user

```bash
passwd datareach
```
You will be prompted to enter and confirm a password for the `datareach` user.

Create the datareach group

```bash
groupadd -g 1009 datareach
```
Add the user to the group:

```bash
usermod -aG datareach datareach
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

*Note: Please contact your network administrator or security team to ensure these firewall rules are applied correctly.*

## Hostname Resolution (Hosts File Configuration)

To ensure the application functions correctly, the **Mastercontroller server** (the host where you are installing the Mastercontroller application) must be added to the local hosts file. This ensures the application can resolve its own hostname correctly for internal processes.

Additionally, the Mastercontroller is called using `https://mastercontroller:10443/` by the agent. Therefore, both the Mastercontroller server and all Remote Agent hosts must be configured to resolve the `mastercontroller` hostname to the Mastercontroller's IP address.

**Configuration Steps:**

1. Open the hosts file on the Mastercontroller server and each Remote Agent server:
   * **Linux/Unix**: `/etc/hosts`
   * **Windows**: `C:\Windows\System32\drivers\etc\hosts`
2. Add the mapping for the Mastercontroller:
   ```text
   <Mastercontroller_IP> mastercontroller
   ```
   *(Replace `<Mastercontroller_IP>` with the actual IP address of the Mastercontroller server.)*

## DataReach Packages and License

Before proceeding with the installation, you must stage the necessary installation artifacts on the Mastercontroller server.

**Step 1: Stage Binary Packages**

Create a temporary directory `/tmp/DRbinaries/` and upload the following DataReach packages to it. These files are typically provided by RSA Professional Services:

*   `MasterController_<Version>.zip` (Mastercontroller Unix Installer)
*   `MasterController_Docker_<Version>.tar.gz` (Mastercontroller Docker Installer)
*   `HostList_Provider_JDBC_<Version>.zip` (HostList Provider JDBC)
*   `Credential_Provider_Local_<Version>.zip` (Credential Provider Local)
*   `Credential_Provider_CyberArkREST_<Version>.zip` (Credential Provider CyberArkREST)
*   `Agent_<Platform>_<Version>.<extension>` (The agent distribution package matching your target platform, e.g., `Agent_Windows_<Version>.zip`, `Agent_Linux_<Version>.tar.gz`, or `Agent_Docker_<Version>.tar.gz`)
*   `Agent_Job_<Type>_<Version>.tar.gz` (The job definition package for your target host type, e.g., `Agent_Job_Windows_<Version>.tar.gz`, `Agent_Job_UNIX_<Version>.tar.gz`, `Agent_Job_Database_<Version>.tar.gz`, or `Agent_Job_Rest_<Version>.tar.gz`)

**Step 2: Stage License File**

Ensure you have the valid license file required to run the application. Upload the `license.properties` file to the server as well. You will need to move this to the installation directory in later steps.
