---
sidebar_position: 3
---

# Mastercontroller Configuration

These are the steps that need to be followed everytime a new agent is deployed or hosts are added/removed from the collection scope.

## Host List Setup

The Host List files define the inventory of target endpoints that DataReach will connect to. An modification to these files requires a mastercontroller restart.

**Step 1: Initialize Configuration Files**

Log in to the Mastercontroller server as the `datareach` user. Navigate to the data directory and initialize the host lists by copying the templates:

```bash
cd /opt/rsa/datareach/mastercontroller/data
cp common_windows_hosts.csv customer_windows_hosts.csv
cp common_unix_hosts.csv customer_unix_hosts.csv
cp common_unix_hosts.csv customer_solaris_hosts.csv
cp common_db_hosts.csv customer_dboracle_hosts.csv
cp common_db_hosts.csv customer_dbmysql_hosts.csv
```

**Step 2: Populate Host Information**

Edit each of the newly created CSV files (`customer_*.csv`) to populate your target system details using the following columns:

| Column | Meaning | Example |
| :--- | :--- | :--- |
| **host_type** | Type of target system | `unix`, `oracle`, `rest` |
| **host_name** | Unique name/identifier for the target host within DataReach | `prod_oracle_01` |
| **connection_string** | Connection details (protocol, address, port) to reach the host | `ssh://192.168.1.50` |
| **credential_alias** | Label/key that maps to the stored credentials in the credential provider | `oracle_admin` |
| **alias_type** | Specifies if the alias refers to a single username or a profile | `USERNAME` or `PROFILE` |

> **Note:** The quantity, naming conventions, and specific contents of these host list CSV files should be customized according to your organization's needs. We recommend determining how to segregate these files based on your network topology and the various types of hosts that need to be collected from. The segregation shown above (e.g., by operating system or database type) is simply a baseline recommendation.

## Host Plugin Set Up

You must configure the XML files that tell the Mastercontroller which host lists to load.

**Step 1: Edit the Configuration File**

As the `datareach` user, navigate to the JDBC hostlist provider directory and open `config.xml` for editing:

```bash
cd /opt/rsa/datareach/mastercontroller/plugins/hostlist-provider-jdbc
vi config.xml
```

**Step 2: Configure Agent Query Blocks**

The `config.xml` file contains XML blocks for each defined agent. The `<query>` tag uses an HXTT SQL query to retrieve the list of hosts from the CSV files in the data folder (from the previous section).

Every time a new agent is deployed, a new XML block must be added to this file with the appropriate HXTT query.

**Example Query Configuration:**

```xml
<oracle>
    <query>
        select host_type, alias_type, host_name, connection_string,
        credential_alias, connection_string as cust_attr_1 from
        common_db_hosts_5 where db_type='oracle'
    </query>
</oracle>
```
> **Note:** In the example query, `common_db_hosts_5` represents the CSV file name. You must update this to match the actual CSV file name initialized in the **Host List Setup** section (e.g., `customer_dboracle_hosts` or `customer_dbmysql_hosts`), omitting the `.csv` extension as the HXTT JDBC driver treats filenames as database table names.

## Agent Configuration Preparation

You need to prepare configuration folders for any new agents you are deploying.

**Step 1: Create Directory Structure**

For example, to configure an `oracle11` agent:

```bash
cd /opt/rsa/datareach/mastercontroller/agent_configs
mkdir -p oracle11/package/config
```

**Step 2: Populate Configuration**

Copy the default configuration templates as a starting point:

```bash
cp -R /opt/rsa/datareach/mastercontroller/agent_configs/oracle/* /opt/rsa/datareach/mastercontroller/agent_configs/oracle11
```

## Service Management

**Starting the Service**

To start the DataReach Mastercontroller, execute the startup script as the `datareach` user:

```bash
cd /opt/rsa/datareach/mastercontroller/scripts
./datareach_startup.sh
```

**Stopping the Service**

To stop the service, use the shutdown script:

```bash
cd /opt/rsa/datareach/mastercontroller/scripts
./datareach_shutdown.sh
```

## Backup Management

It is critical to maintain backups of your certificates and configurations.

**Create Backup Directory**

SSH to the server as `root` and create a dedicated backup location:

```bash
mkdir -p /opt/rsa/backup
```
*Regularly copy your `/opt/rsa/datareach/` configuration files and certificates to this location.*

## Generate DataReach Certificates (Optional)

> **Note:** This section is optional. New builds of DataReach ship with pre-generated certificates, so you do not need to generate new ones unless explicitly required by your organization's security policy. If new certificates are generated, the KEYSTORE and TRUSTSTORE passwords must be updated in the framework/config with the password used during keystore generation (refer to the [Update Configuration Files](./mastercontroller-install.md#update-configuration-files) section in the installation guide).

Secure communication between the Mastercontroller and Agents relies on mutual TLS authentication using Java Keystores (JKS). If you choose to generate custom certificates, follow the steps below:

**Step 1: Backup Default Certificates**

Before generating new certificates, archive the existing defaults:

```bash
cd /opt/rsa/datareach/mastercontroller/scripts/
mkdir -p /opt/rsa/datareach/backupcert
mv /opt/rsa/datareach/mastercontroller/certificates/mastercontroller.jks /opt/rsa/datareach/backupcert
```

**Step 2: Generate New Certificates**

Run the certificate generation commands for the Root CA, Mastercontroller, and all required Agents.
*Ensure to use the same keystore password encrypted in the previous step (default example: `init1234`).*

```bash
./drutils.sh certs generateRoot -p init1234

# Mastercontroller Identity
./drutils.sh certs generateAgent -n mastercontroller -p init1234 -ca-password init1234

# Remote Agent Identities
./drutils.sh certs generateAgent -n aix -p init1234 -ca-password init1234
./drutils.sh certs generateAgent -n unix -p init1234 -ca-password init1234
./drutils.sh certs generateAgent -n windows -p init1234 -ca-password init1234
# ... (repeat for all other agents as listed below)
./drutils.sh certs generateAgent -n oracle -p init1234 -ca-password init1234
./drutils.sh certs generateAgent -n mssql1 -p init1234 -ca-password init1234
# ...
```

**Step 3: Secure Certificate Permissions**

Ensure that only the `datareach` user can read these sensitive files:

```bash
chmod -R 744 /opt/rsa/datareach/mastercontroller/certificates
```