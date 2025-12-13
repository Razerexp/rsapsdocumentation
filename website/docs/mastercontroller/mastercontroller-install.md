---
sidebar_position: 2
---

# Mastercontroller Installation

## Install DataReach DDL

The DataReach Mastercontroller requires a database backend to store its configuration and state. You must initialize the database schema before installing the application.

**Prerequisites**:
*   Obtain the `000_DataReach_Database.sql` script from the RSA Professional Services team.
*   Ensure you have connectivity to the target database server.

**Procedures**:
1.  **Log in to the Database**: Connect to your target database using a user with `SYSDBA` privileges. *Note: You may need assistance from your organization's Database Administrator (DBA) to perform this step.*
2.  **Execute the Schema Script**: Run the provided `000_DataReach_Database.sql` script against the database. This will create the necessary tables, views, and indexes.
3.  **Configure Service User**: After the schema creation, verify the `RSA_DATAREACH` user account. It is recommended to reset the password for this user to a strong, secure value of your choice.

## Install Mastercontroller Application

Once the database is ready, proceed with the application installation on the Mastercontroller server.

**Step 1: Extract the Binaries**

Establish a secure shell (SSH) connection to the **Mastercontroller Server** (the server chosen to host the Mastercontroller) as the `root` user. Navigate to the installation directory and unzip the Mastercontroller distributions staged in `/tmp` (or your chosen staging location):

```bash
cd /opt/rsa
unzip /tmp/DRbinaries/MasterController_<Version>.zip
```

**Step 2: Install the License**

Copy the valid license file to the configuration directory. This file is required for the Mastercontroller services to start successfully:

```bash
cp /path/to/license.properties /opt/rsa/datareach/mastercontroller/license
```
*(Replace `/path/to/license.properties` with the actual path where you staged the license file)*

**Step 3: Configure File Permissions**

Proper file ownership and execution permissions are critical. The entire `datareach` directory structure must be owned by the `datareach` service account.

1.  Change ownership of the directory recursively:
    ```bash
    chown -R datareach:datareach /opt/rsa/datareach
    ```

2.  Grant execution permissions to the setup script:
    ```bash
    chmod +x /opt/rsa/datareach/mastercontroller/scripts/setperms.sh
    ```

3.  Execute the permissions script to finalize the setup:
    ```bash
    /opt/rsa/datareach/mastercontroller/scripts/setperms.sh
    ```
