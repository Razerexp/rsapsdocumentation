---
sidebar_position: 2
---

# Mastercontroller Installation

These are one time steps that need to be performed to install mastercontroller.

## Install DataReach DDL

The DataReach Mastercontroller requires an oracle database backend to store its configuration and state. You must initialize the database schema before installing the application. 

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
cp /tmp/DRbinaries/license.properties /opt/rsa/datareach/mastercontroller/license
```

**Step 3: Configure File Permissions**

Proper file ownership and execution permissions are critical. The entire `datareach` directory structure must be owned by the `datareach` service account.

1.  Change ownership of the directory recursively:
    ```bash
    chown -R datareach:datareach /opt/rsa/datareach
    ```
2. Create Java symlink:
    ```bash
    ln -s /opt/rsa/datareach/java/jdk-<version>-jre /opt/rsa/datareach/java/latest
    ```
3. Create Tomcat symlink:
    ```bash
    ln -s /opt/rsa/datareach/mastercontroller/tomcat/binaries/apache-tomcat-<version> /opt/rsa/datareach/mastercontroller/tomcat/binaries/latest
    ```
4.  Grant execution permissions to the setup script:
    ```bash
    chmod +x /opt/rsa/datareach/mastercontroller/scripts/setperms.sh
    ```

5.  Execute the permissions script to finalize the setup:
    ```bash
    /opt/rsa/datareach/mastercontroller/scripts/setperms.sh
    ```
## Generate DR Environment Path

The `DR_ENV_PATH` variable is critical for the application framework to locate its components generally.

**Step 1: Generate the Path Value**

Run the `drutils.sh` utility to calculate the correct environment path string:

```bash
cd /opt/rsa/datareach/mastercontroller/scripts/
./drutils.sh envpath generate
```
*Copy the output value from this command.*

**Step 2: Update Framework Config**

Edit the framework configuration file and paste the generated value:

```bash
vi /opt/rsa/datareach/mastercontroller/scripts/framework/config.sh
```

Find the `export DR_ENV_PATH` line and update it:
```bash
export DR_ENV_PATH="<PASTE_GENERATED_VALUE_HERE>"
```

## Update Configuration Files

DataReach requires sensitive passwords (like the Keystore password and Database password) to be encrypted before being stored in configuration files.

**Step 1: Encrypt the Strings**

The encryption utility is used to generate secure strings. Replace `<<password>>` with the actual password you are attempting to encrypt:

```bash
cd /opt/rsa/datareach/mastercontroller/scripts/
./drutils.sh encrypt string <<password>>
```
> The passwords must be re-encrypted if the DR_ENV_PATH is changed

**Step 2: Update Configuration Files**

Use the **encrypted output string** (not the plain text password) to update the following files:

*   **Mastercontroller Config**:
    Edit `/opt/rsa/datareach/mastercontroller/scripts/framework/config.sh`:
    ```bash
    DR_MASTER_CONTROLLER_KEYSTORE_PASSWORD = "\<Encrypted_Default_Keystore_Password>"
    DR_MASTER_CONTROLLER_TRUSTSTORE_PASSWORD = "\<Encrypted_Default_Truststore_Password>"
    ```
> The \ is critical to escape the $ in the $ENC string that is generated post encryption. The default password can be obtained from RSA Professional Services helping with the install. 