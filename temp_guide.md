Prepared for:

![](./media/image1.png){width="2.1145833333333335in"
height="0.3770833333333333in"}

Version: 1.1

Issuance Date: January 13, 2022

# Revision History

  -----------------------------------------------------------------------------
  Rev.   Date         Author(s)          Approver(s)    Description
  ------ ------------ ------------------ -------------- -----------------------
  1      January 04,  Rakesh                            Document creation
         2022         LakshamanaMurthy                  

  2      January 13,  Chandan Reddy                     Update formatting and
         2022                                           Review

  3                                                     

  4                                                     
  -----------------------------------------------------------------------------

# Contents

[Revision History [2](#revision-history)](#revision-history)

[Contents [3](#_Toc92998984)](#_Toc92998984)

[1. Introduction [5](#introduction)](#introduction)

[1.1 *Document Scope* [5](#document-scope)](#document-scope)

[1.2 *Intended Audience* [5](#intended-audience)](#intended-audience)

[*1.3* *Acronyms* [5](#acronyms)](#acronyms)

[2. DataReach Server Information
[5](#datareach-server-information)](#datareach-server-information)

[3. Mastercontroller [6](#mastercontroller)](#mastercontroller)

[*3.1* *Initial Configuration*
[6](#initial-configuration)](#initial-configuration)

[*3.1.1* *DataReach User Creation*
[6](#datareach-user-creation)](#datareach-user-creation)

[*3.1.2* *Firewall Setup* [6](#firewall-setup)](#firewall-setup)

[*3.1.3* *DataReach Packages and License*
[6](#datareach-packages-and-license)](#datareach-packages-and-license)

[*3.2* *Mastercontroller Installation*
[7](#mastercontroller-installation)](#mastercontroller-installation)

[*3.2.1* *Install DataReach DDL*
[7](#install-datareach-ddl)](#install-datareach-ddl)

[*3.2.2* *Install Mastercontroller*
[7](#install-mastercontroller)](#install-mastercontroller)

[*3.3* *Mastercontroller Configuration*
[8](#mastercontroller-configuration)](#mastercontroller-configuration)

[*3.3.1* *Host List Setup* [8](#host-list-setup)](#host-list-setup)

[*3.3.2* *Host Plugin Set Up*
[8](#host-plugin-set-up)](#host-plugin-set-up)

[*3.3.3* *Generate DR Environment Path*
[9](#generate-dr-environment-path)](#generate-dr-environment-path)

[*3.3.4* *Encrypt Passwords*
[9](#encrypt-passwords)](#encrypt-passwords)

[*3.3.5* *Generate DataReach Certificates*
[10](#generate-datareach-certificates)](#generate-datareach-certificates)

[*3.3.6* *Agent Configuration*
[11](#agent-configuration)](#agent-configuration)

[*3.3.7* *Start DataReach Server*
[11](#start-datareach-server)](#start-datareach-server)

[*3.3.8* *Place DataReach Packages in the Agent Server*
[11](#place-datareach-packages-in-the-agent-server)](#place-datareach-packages-in-the-agent-server)

[*3.3.9* *Backup Management*
[11](#backup-management)](#backup-management)

[*3.3.10* *Start and Stop of DataReach*
[12](#start-and-stop-of-datareach)](#start-and-stop-of-datareach)

[4. Remote Agent Configuration
[13](#remote-agent-configuration)](#remote-agent-configuration)

[*4.1* *Remote Oracle Agent Configuration*
[13](#remote-oracle-agent-configuration)](#remote-oracle-agent-configuration)

[*4.1.1* *Create Agent Folder*
[13](#create-agent-folder)](#create-agent-folder)

[*4.1.2* *Install Agent* [13](#install-agent)](#install-agent)

[*4.1.3* *Copy Certificate from Mastercontroller to Agent*
[13](#copy-certificate-from-mastercontroller-to-agent)](#copy-certificate-from-mastercontroller-to-agent)

[*4.1.4* *Remove Existing Certificates*
[14](#remove-existing-certificates)](#remove-existing-certificates)

[*4.1.5* *Setup Permissions*
[14](#setup-permissions)](#setup-permissions)

[*4.1.6* *Agent Configuration*
[14](#agent-configuration-1)](#agent-configuration-1)

[*4.1.7* *Data Collection* [15](#data-collection)](#data-collection)

[*4.1.8* *Database Verification*
[15](#database-verification)](#database-verification)

[*4.2* *Remote Linux Agent Configuration*
[16](#remote-linux-agent-configuration)](#remote-linux-agent-configuration)

[*4.2.1* *Create Agent Folder*
[16](#create-agent-folder-1)](#create-agent-folder-1)

[4.2.2 *Install Agent* [16](#install-agent-1)](#install-agent-1)

[*4.2.3* *Copy Certificate from Mastercontroller to Agent*
[16](#copy-certificate-from-mastercontroller-to-agent-1)](#copy-certificate-from-mastercontroller-to-agent-1)

[*4.2.4* *Remove Existing Certificates*
[17](#remove-existing-certificates-1)](#remove-existing-certificates-1)

[*4.2.5* *Setup Permissions*
[17](#setup-permissions-1)](#setup-permissions-1)

[*4.2.6* *Agent Configuration*
[17](#agent-configuration-2)](#agent-configuration-2)

[*4.2.7* *Data Collection* [18](#data-collection-1)](#data-collection-1)

[*4.2.8* *Database Verification*
[18](#database-verification-1)](#database-verification-1)

[*4.3* *Remote MSSQL Agent Configuration*
[19](#remote-mssql-agent-configuration)](#remote-mssql-agent-configuration)

[*4.3.1* *Create Agent Folder*
[19](#create-agent-folder-2)](#create-agent-folder-2)

[*4.3.2* *Install Agent* [19](#install-agent-2)](#install-agent-2)

[*4.3.3* *Copy Certificate from Mastercontroller to Agent*
[19](#copy-certificate-from-mastercontroller-to-agent-2)](#copy-certificate-from-mastercontroller-to-agent-2)

[*4.3.4* *Remove Existing Certificates*
[20](#remove-existing-certificates-2)](#remove-existing-certificates-2)

[*4.3.5* *Permission Set Up*
[20](#permission-set-up)](#permission-set-up)

[*4.3.6* *Agent Configuration*
[20](#agent-configuration-3)](#agent-configuration-3)

[*4.3.7* *Data Collection* [21](#data-collection-2)](#data-collection-2)

[*4.3.8* *Database Verification*
[21](#database-verification-2)](#database-verification-2)

[*4.4* *Remote Oracle11 Agent Configuration*
[22](#remote-oracle11-agent-configuration)](#remote-oracle11-agent-configuration)

[*4.4.1* *Create Agent Folder*
[22](#create-agent-folder-3)](#create-agent-folder-3)

[*4.4.2* *Install Agent* [22](#install-agent-3)](#install-agent-3)

[*4.4.3* *Copy Certificate from Mastercontroller to Agent*
[22](#copy-certificate-from-mastercontroller-to-agent-3)](#copy-certificate-from-mastercontroller-to-agent-3)

[*4.4.4* *Remove Existing Certificates*
[23](#remove-existing-certificates-3)](#remove-existing-certificates-3)

[*4.4.5* *Permission Set Up*
[23](#permission-set-up-1)](#permission-set-up-1)

[*4.4.6* *Agent Configuration*
[23](#agent-configuration-4)](#agent-configuration-4)

[*4.4.7* *Data Collection* [24](#data-collection-3)](#data-collection-3)

[*4.4.8* *Database Verification*
[24](#database-verification-3)](#database-verification-3)

[5. Agent Deployment [25](#agent-deployment)](#agent-deployment)

[*5.1* *Agent Configuration Steps:*
[25](#agent-configuration-steps)](#agent-configuration-steps)

[6. Host File Management
[26](#host-file-management)](#host-file-management)

[*6.1* *Host Plugin Changes*
[26](#host-plugin-changes)](#host-plugin-changes)

[*6.2* *Host File Changes:*
[26](#host-file-changes)](#host-file-changes)

# Introduction

# *Document Scope*

DataReach is an RSA Professional Services developed add on to the RSA
SecurID Identity Governance & Lifecycle product to facilitate collection
of user and access information from multiple endpoints of the same type.

This document outlines the steps that need to be performed to install
all the components of DataReach.

# *Intended Audience*

This document is intended to be used by the SecurID IG&L Administrators
at ePLDT, SMART PLDT as a refence guide to install DataReach.

# *Acronyms* 

  -----------------------------------------------------------------------
  Acronym          Definition
  ---------------- ------------------------------------------------------
  **SecurID IG&L** SecurID Identity Governance & Lifecycle

                   

                   
  -----------------------------------------------------------------------

## 

# DataReach Server Information

Please update the following table to include the information about the
various servers that DataReach components are installed on.

  ------------------------------------------------------------------------
  **Server Type**        **Host Name**              IP Address
  ---------------------- -------------------------- ----------------------
  Mastercontroller       XXXX                       XXX.XXX.XXX.XXX

  Remote DataReach Agent XXXX                       XXX.XXX.XXX.XXX
  1                                                 

  Remote DataReach Agent XXXX                       XXX.XXX.XXX.XXX
  2                                                 
  ------------------------------------------------------------------------

# Mastercontroller

# *Initial Configuration*

# *DataReach User Creation*

Create a unique user to own and run DataReach (e.g., datareach)

SSH to the server and perform the below step as root user

> *useradd -d /home/datareach -c \"Service Account for DataReach - DO
> NOT DELETE\" datareach*

Create DataReach folder and copy the installers to the server

SSH to the application server and run the below command as root user

> *mkdir -p /opt/rsa/datareach*

# *Firewall Setup*

> Firewall rule to allow outbound traffic from the host where agent is
> installed to Mastercontroller port. Contact network team to open the
> below ports 

a.  10443

b.  22

# *DataReach Packages and License*

Place DataReach packages and license files to the Mastercontroller
server

Place the following packages and files in /tmp/DRbinaries/

> *MasterController_1.4.v13082021095902*
>
> *Credential_Provider_CyberArkREST_0.1.v02032021123656*
>
> *Agent_Windows_1.4.v02032021123716*
>
> *Agent_Linux_1.4.v02032021123716.tar*
>
> *Agent_Job_Windows_1.4.v02032021123546.tar*
>
> *Agent_Job_UNIX_1.4.v02032021123540.tar*
>
> *Agent_Job_Database_1.4.v02032021123542.tar*
>
> *Place the license file received from RSA also on the server*
>
> *license.properties*

# *Mastercontroller Installation*

# *Install DataReach DDL*

Install the SQL steps which will create the schema on the database
server

Obtain the 000_DataReach_Database.sql file from RSA professional
services.

Login to the target database as SYSDBA (a DBA from your organization may
be required to do this on your behalf).

Execute the given SQL script on the database.

Reset the RSA_DATAREACH user password as desired.

SSH to the AWS server and run the below command as root user. Install
latest DataReach Master Controller

# *Install Mastercontroller*

Run the following commands on the Mastercontroller server.

> *cd /opt/rsa*
>
> *unzip /tmp/DRbinaries/MasterController_1.4.v13082021095902.zip*
>
> Copy the *license.properties* file to
> */opt/rsa/datareach/mastercontroller/license*
>
> Set Up Permissions for the scripts
>
> *chown -R datareach:datareach /opt/rsa/datareach*
>
> *chmod +x /opt/rsa/datareach/mastercontroller/scripts/setperms.sh*
>
> */opt/rsa/datareach/mastercontroller/scripts/setperms.sh*

# *Mastercontroller Configuration*

# *Host List Setup*

SSH to the AWS server as datareach user and set up the host files

Create one host list CSV per agent with endpoint details of all the
different target systems. The CSV needs to have the following columns
with headers. The sample files will be present in the folder for each
type agent.

> *cd /opt/rsa/datareach/mastercontroller/data*
>
> *cp common_windows_hosts.csv smart_windows_hosts.csv*
>
> *cp common_unix_hosts.csv smart_unix_hosts.csv*
>
> *cp common_unix_hosts.csv smart_solaris_hosts.csv*
>
> *cp common_db_hosts.csv smart_dboracle_hosts.csv*
>
> *cp common_db_hosts.csv smart_dbmysql_hosts.csv*

Update each of the files with the list of servers

host_type, host_name, connection_string, credential_alias, alias_type

- host_type: Contains the type of the host e.g.: Unix/oracle

- host_name: Contains a unique identifier for the host

- connection_string: Contains the protocol and port details (if any) to
  connect to target system.

- credential_alias: Used to retrieve the credentials from the provider

- alias_type: USERNAME or PROFILE indicating what is the type of value
  credential_alias column

# *Host Plugin Set Up*

SSH to the AWS server as datareach user and set up the host files

> *cd
> /opt/rsa/datareach/mastercontroller/plugins/hostlist-provider-jdbc*
>
> *vi config.xml*

Navigate to the xml file \<agents\> -\> \<oracle\> -\> \<query\>

Change the file name within the query tag from common_db_hosts_5 to
smart_oracle_hosts

Update the same file to include a new section for oracle 11 server

Navigate to the xml tags within the file \<agents\> -\> \<unix\> -\>
\<query\>

Change the file name within the query tag from common_unix_hosts to
smart_unix_hosts

Navigate to the xml tags within the file \<agents\> -\> \<mysql\> -\>
\<query\>

Change the file name within the query tag from common_db_hosts_5 to
smart_mysql_hosts

# *Generate DR Environment Path*

SSH to the AWS server as datareach user

> *cd /opt/rsa/datareach/mastercontroller/scripts/*
>
> *./drutils.sh envpath generate*

Set this value in the
/opt/rsa/datareach/mastercontroller/scripts/framework

> *vi config.sh*
>
> *export DR_ENV_PATH="VALUE_HERE"*

# *Encrypt Passwords*

SSH to the AWS server as datareach user

> *cd /opt/rsa/datareach/mastercontroller/scripts/*
>
> *./drutils.sh encrypt string init1234*
>
> *./drutils.sh encrypt string \<\<datareach database password\>\>*

Copy the encrypted passwords to a secure location as this will be
updated in separate locations. The certificate password for agent and
mastercontroller "init1234" must be updated in the following locations:

> */opt/rsa/datareach/mastercontroller/scripts/framework/config.sh for
> mastercontroller*
>
> */opt/rsa/datareach/\<\<AgentName\>\>/config/agent_controller.xml for
> agent*
>
> *cd /opt/rsa/datareach/mastercontroller/scripts/framework/*
>
> *vi config.sh*

Set the value of encrypted password init1234 for the export value

> *DR_MASTER_CONTROLLER_KEYSTORE_PASSWORD = \<\<ENCRYPTED password\>\>*

# *Generate DataReach Certificates*

SSH to the AWS server as datareach user and generate certificates

> *cd /opt/rsa/datareach/mastercontroller/scripts/*

Backup Existing Certificates

> *mkdir -p /opt/rsa/datareach/backupcert*
>
> *mv
> /opt/rsa/datareach/mastercontroller/certificates/mastercontroller.jks
> /opt/rsa/datareach/backupcert*

Generate Root CA certificates

> *./drutils.sh certs generateRoot -p init1234*

Generate Mastercontroller certificates

> *./drutils.sh certs generateAgent -n mastercontroller -p init1234
> -ca-password init1234*

Generate Agent certificates

> *./drutils.sh certs generateAgent -n aix -p init1234 -ca-password
> init1234*
>
> *./drutils.sh certs generateAgent -n unix -p init1234 -ca-password
> init1234*
>
> *./drutils.sh certs generateAgent -n windows -p init1234 -ca-password
> init1234*
>
> *./drutils.sh certs generateAgent -n oracle -p init1234 -ca-password
> init1234*
>
> *./drutils.sh certs generateAgent -n mssql1 -p init1234 -ca-password
> init1234*
>
> *./drutils.sh certs generateAgent -n mysql -p init1234 -ca-password
> init1234*
>
> *./drutils.sh certs generateAgent -n sybase -p init1234 -ca-password
> init1234*
>
> *./drutils.sh certs generateAgent -n postgresql -p init1234
> -ca-password init1234*
>
> *./drutils.sh certs generateAgent -n db2 -p init1234 -ca-password
> init1234*
>
> *./drutils.sh certs generateAgent -n mongodb -p init1234 -ca-password
> init1234*
>
> *./drutils.sh certs generateAgent -n solaris -p init1234 -ca-password
> init1234*
>
> *./drutils.sh certs generateAgent -n aws -p init1234 -ca-password
> init1234*
>
> *./drutils.sh certs generateAgent -n oracle11 -p init1234 -ca-password
> init1234*

Update Permissions

> *chmod -R 744 /opt/rsa/datareach/mastercontroller/certificates*

# *Agent Configuration*

SSH to the AWS server as datareach user and set up agent files

Create Agent Config Directory

> *cd /opt/rsa/datareach/mastercontroller/agent_configs*
>
> *mkdir -p oracle11/package/config*

Copy Agent Configuration Files

> *cp -R /opt/rsa/datareach/mastercontroller/agent_configs/unix/\*
> /opt/rsa/datareach/mastercontroller/agent_configs/oracle11*

# *Start DataReach Server*

This step must be performed as datareach user.

The datareach server can be started using the scripts

> *cd /opt/rsa/datareach/mastercontroller/scripts*
>
> *./datareach_startup.sh*

# *Place DataReach Packages in the Agent Server*

SSH to the application server and run the below command as **root** user

> *mkdir -p /opt/rsa/artifacts*

Copy the latest agent installers onto Agent server under the folder

> *cd /opt/rsa/artifacts*

unzip the /opt/rsa/artifacts/archive\<latest version\>.zip

# *Backup Management*

SSH to the application server and run the below command as root user

> *mkdir -p /opt/rsa/backup*

This folder will be used to backup any agent, certificates or
configurations.

# *Start and Stop of DataReach*

To start DataReach, login as **datareach** user

> */opt/rsa/datareach/mastercontroller/scripts/datareach_startup.sh*

To stop DataReach, login as **datareach** user

> */opt/rsa/datareach/mastercontroller/scripts/datareach_shutdown.sh*

# Remote Agent Configuration

# *Remote Oracle Agent Configuration*

# *Create Agent Folder*

4.  

    1.  
    2.  

SSH to the server and login as datareach

Create the folder with the agent name in the path

> *mkdir -p /opt/rsa/datareach/AgentOracle*

# *Install Agent*

Login as **root**

Obtain the latest Agent\_\<os\>\_\<version\>.zip and job file from RSA
professional services.

Untar the Agent File

> *tar -zxf /opt/rsa/artifacts/Agent_Linux_1.4.v28072021111103.tar.gz
> -C* /opt/rsa/datareach/AgentOracle
>
> *cp -R* /opt/rsa/datareach/AgentOracle*/datareach/agent/\**
> /opt/rsa/datareach/AgentOracle
>
> *cp -R* /opt/rsa/datareach/AgentOracle*/datareach/java
>  */opt/rsa/datareach/
>
> *cd* /opt/rsa/datareach/AgentOracle
>
> *rm -rf datareach*

Untar the Job File

> * tar -zxf
> /opt/rsa/artifacts/Agent_Job_Database_1.4.v28072021110909.tar.gz -C*
> /opt/rsa/datareach/AgentOracle

# *Copy Certificate from Mastercontroller to Agent*

SSH to the server and login as datareach

> *cd /*opt/rsa/*datareach/*AgentOracle*/certificates*

Backup the existing certificates

> *mkdir -p /opt/rsa/datareach/AgentOracle/certificates/backup*
>
> *cp \*.jks /opt/rsa/datareach/AgentOracle/certificates/backup*

# *Remove Existing Certificates*

> *rm \*.jks*
>
> *cp /*opt/rsa/*datareach/mastercontroller/certificates/\*
> /*opt/rsa/*datareach/*AgentOracle*/certificates*

Remove Certificates

> *rm DataReachRootCA.jks*
>
> *rm mastercontroller.jks*

# *Setup Permissions* 

Ownership and permissions

> *chown -R datareach:datareach /*opt/rsa/*datareach/*AgentOracle
>
> *chmod +x /*opt/rsa/*datareach/*AgentOracle*/scripts/setperms.sh*
>
> */*opt/rsa/*datareach/*AgentOracle*/scripts/setperms.sh*

# *Agent Configuration*

SSH to the server and login as datareach and update the keystore
password with the encrypted string that was generated in
mastercontroller configuration

> *cd /*opt/rsa/*datareach/*AgentOracle*/config*
>
> *vi agentcontroller.xml*

Update the below tags

> *\<keystore\>../certificates/oracle.jks\</keystore\>*
>
> *\<keystore_alias\>oracle\</keystore_alias\>*
>
> *\<keystore_password\>\</keystore_password\>*
>
> *\<package_folder\>/*opt/rsa/*datareach/*AgentOracle*/package\</package_folder\>*

Update the value for the parameter DR_ENV_PATH with the value of path
generated in mastercontroller

> *cd /*opt/rsa/*datareach/*AgentOracle*/scripts*
>
> *vi setenv.sh*

# *Data Collection*

**Agent Collection Run**

SSH to the server and login as datareach to start the data collection.
For the first run of the agent, we would need to run the same script
twice.

> *cd /*opt/rsa/*datareach/*AgentOracle*/scripts*
>
> *./run_agent.sh*

**Agent Logs Location**

The agent collection logs are written at the location below

> */opt/rsa/datareach/AgentOracle/logs/datareach_agent.log*

Verify from the logs if the data files were generated successfully

# *Database Verification*

Database tables must be verified to check for the data format and count
of each object.

Login to the SQL tools to verify these counts.

# *Remote Linux Agent Configuration*

# *Create Agent Folder*

SSH to the server and login as datareach

Create the folder with the agent name in the path

> *mkdir -p /opt/rsa/datareach/AgentUnix*

# *Install Agent*

Login as **root**

Obtain the latest Agent\_\<os\>\_\<version\>.zip and job file from RSA
professional services.

Untar the Agent File

> *tar -zxf /opt/rsa/artifacts/Agent_Linux_1.4.v28072021111103.tar.gz -C
> /opt/rsa/datareach/AgentUnix*
>
> *cp -R* /opt/rsa/datareach/AgentUnix*/datareach/agent/\**
> /opt/rsa/datareach/AgentUnix
>
> *cp -R* /opt/rsa/datareach/AgentUnix*/datareach/java
>  */opt/rsa/datareach/
>
> *cd* /opt/rsa/datareach/AgentUnix
>
> *rm -rf datareach*

Untar the Job File

> * tar -zxf
> /opt/rsa/artifacts/Agent_Job_UNIX_1.4.v28072021110908.tar.gz -C
> /opt/rsa/datareach/AgentUnix*

# *Copy Certificate from Mastercontroller to Agent*

SSH to the server and login as datareach

> *cd* /opt/rsa/datareach/AgentUnix*/certificates*

Backup the existing certificates

> *mkdir -p /*opt/rsa/*datareach/*AgentUnix*/certificates/backup*
>
> *cp \*.jks /*opt/rsa/*datareach/*AgentUnix*/certificates/backup*

# *Remove Existing Certificates*

> *rm \*.jks*
>
> *cp /*opt/rsa/*datareach/mastercontroller/certificates/\*
> /*opt/rsa/*datareach/*AgentUnix*/certificates*

Remove Certificates

> *rm DataReachRootCA.jks*
>
> *rm mastercontroller.jks*

# *Setup Permissions* 

Ownership and permissions

> *chown -R datareach:datareach /*opt/rsa/*datareach/*AgentUnix
>
> *chmod +x /*opt/rsa/*datareach/*AgentUnix*/scripts/setperms.sh*
>
> */*opt/rsa/*datareach/*AgentUnix*/scripts/setperms.sh*

# *Agent Configuration*

SSH to the server and login as datareach and update the keystore
password with the encrypted string that was generated in
mastercontroller configuration

> *cd /*opt/rsa/*datareach/*AgentUnix*/config*
>
> *vi agentcontroller.xml*

Update the below tags

> *\<keystore\>../certificates/unix.jks\</keystore\>*
>
> *\<keystore_alias\>unix\</keystore_alias\>*
>
> *\<keystore_password\>\</keystore_password\>*
>
> *\<package_folder\>/*opt/rsa/*datareach/*AgentUnix*/package\</package_folder\>*

Update the value for the parameter DR_ENV_PATH with the value of path
generated in mastercontroller

> *cd /*opt/rsa/*datareach/*AgentUnix*/scripts*
>
> *vi setenv.sh*

# *Data Collection*

**Agent Collection Run**

SSH to the server and login as datareach to start the data collection.
For the first run of the agent, we would need to run the same script
twice.

> *cd /*opt/rsa/*datareach/*AgentUnix*/scripts*
>
> *./run_agent.sh*

**Agent Logs Location**

The agent collection logs are written at the location below

> */*opt/rsa/*datareach/*AgentUnix*/logs/datareach_agent.log*

Verify from the logs if the data files were generated successfully

# *Database Verification*

Database tables must be verified to check for the data format and count
of each object.

Login to the SQL tools to verify these counts.

# *Remote MSSQL Agent Configuration*

# *Create Agent Folder*

SSH to the server and login as datareach

Create the folder with the agent name in the path

> *mkdir -p /opt/rsa/datareach/AgentMSSQL*

# *Install Agent*

Login as **root**

Obtain the latest Agent\_\<os\>\_\<version\>.zip and job file from RSA
professional services.

Untar the Agent File

> *tar -zxf /opt/rsa/artifacts/Agent_Linux_1.4.v28072021111103.tar.gz
> -/opt/rsa/datareach/AgentMSSQL*
>
> *cp -R /opt/rsa/datareach/AgentMSSQL/datareach/agent/\*
> /opt/rsa/datareach/AgentMSSQL*
>
> *cp -R /opt/rsa/datareach/AgentMSSQL/datareach/java
> /opt/rsa/datareach/*
>
> *cd /opt/rsa/datareach/AgentMSSQL*
>
> *rm -rf datareach*

Untar the Job File

> *tar -zxf
> /opt/rsa/artifacts/Agent_Job_Database_1.4.v28072021110909.tar.gz -C
> /opt/rsa/datareach/AgentMSSQL*

# *Copy Certificate from Mastercontroller to Agent*

SSH to the server and login as datareach

> *cd /opt/rsa/datareach/AgentMSSQL/certificates*

Backup the existing certificates

> *mkdir -p /opt/rsa/datareach/AgentMSSQL/certificates/backup*
>
> *cp \*.jks /opt/rsa/datareach/AgentMSSQL/certificates/backup*

# *Remove Existing Certificates*

> *rm \*.jks*
>
> *cp /opt/rsa/datareach/mastercontroller/certificates/\*
> /opt/rsa/datareach/AgentMSSQL/certificates*

Remove Certificates

> *rm DataReachRootCA.jks*
>
> *rm mastercontroller.jks*

# *Permission Set Up* 

Ownership and permissions

> *chown -R datareach:datareach /opt/rsa/datareach/AgentMSSQL*
>
> *chmod +x /opt/rsa/datareach/AgentMSSQL/scripts/setperms.sh*
>
> */opt/rsa/datareach/AgentMSSQL/scripts/setperms.sh*

# *Agent Configuration*

SSH to the server and login as datareach and update the keystore
password with the encrypted string that was generated in
mastercontroller configuration

> *cd /opt/rsa/datareach/AgentMSSQL/config*
>
> *vi agentcontroller.xml*

Update the below tags

> *\<keystore\>../certificates/mssql1.jks\</keystore\>*
>
> *\<keystore_alias\>MSSQL\</keystore_alias\>*
>
> *\<keystore_password\>\</keystore_password\>*
>
> *\<package_folder\>/opt/rsa/datareach/AgentMSSQL/package\</package_folder\>*

Update the value for the parameter DR_ENV_PATH with the value of path
generated in mastercontroller

> *cd /opt/rsa/datareach/AgentMSSQL/scripts*
>
> *vi setenv.sh*

# *Data Collection*

**Agent Collection Run**

SSH to the server and login as datareach to start the data collection.
For the first run of the agent, we would need to run the same script
twice.

> *cd /opt/rsa/datareach/AgentMSSQL/scripts*
>
> *./run_agent.sh*

**Agent Logs Location**

The agent collection logs are written at the location below

> */opt/rsa/datareach/AgentMSSQL/logs/datareach_agent.log*

Verify from the logs if the data files were generated successfully

# *Database Verification*

Database tables must be verified to check for the data format and count
of each object.Login to the SQL tools to verify these counts.

# *Remote Oracle11 Agent Configuration*

# *Create Agent Folder*

SSH to the server and login as datareach

Create the folder with the agent name in the path

> *mkdir -p /opt/rsa/datareach/AgentOracle11*

# *Install Agent*

Login as **root**

Obtain the latest Agent\_\<os\>\_\<version\>.zip and job file from RSA
professional services.

Untar the Agent File

> *tar -zxf /opt/rsa/artifacts/Agent_Linux_1.4.v28072021111103.tar.gz -C
> /opt/rsa/datareach/AgentOracle11*
>
> *cp -R /opt/rsa/datareach/AgentOracle11/datareach/agent/\*
> /opt/rsa/datareach/AgentOracle11*
>
> *cp -R /opt/rsa/datareach/AgentOracle11/datareach/java
> /opt/rsa/datareach/*
>
> *cd /opt/rsa/datareach/AgentOracle11*
>
> *rm -rf datareach*

Untar the Job File

> *tar -zxf
> /opt/rsa/artifacts/Agent_Job_Database_1.4.v28072021110909.tar.gz -C
> /opt/rsa/datareach/AgentOracle11*

# *Copy Certificate from Mastercontroller to Agent*

SSH to the server and login as datareach

> *cd /opt/rsa/datareach/AgentOracle11/certificates*

Backup the existing certificates

> *mkdir -p /opt/rsa/datareach/AgentOracle11/certificates/backup*
>
> *cp \*.jks /opt/rsa/datareach/AgentOracle11/certificates/backup*

# *Remove Existing Certificates*

> *rm \*.jks*
>
> *cp /opt/rsa/datareach/mastercontroller/certificates/\*
> /opt/rsa/datareach/AgentOracle11/certificates*

Remove Certificates

> *rm DataReachRootCA.jks*
>
> *rm mastercontroller.jks*

# *Permission Set Up* 

Ownership and permissions

> *chown -R datareach:datareach /opt/rsa/datareach/AgentOracle11*
>
> *chmod +x /opt/rsa/datareach/AgentOracle11/scripts/setperms.sh*
>
> */opt/rsa/datareach/AgentOracle11/scripts/setperms.sh*

# *Agent Configuration*

SSH to the server and login as datareach and update the keystore
password with the encrypted string that was generated in
mastercontroller configuration

> *cd /opt/rsa/datareach/AgentOracle11/config*
>
> *vi agentcontroller.xml*

Update the below tags

> *\<keystore\>../certificates/oracle11.jks\</keystore\>*
>
> *\<keystore_alias\>oracle11\</keystore_alias\>*
>
> *\<keystore_password\>\</keystore_password\>*
>
> *\<package_folder\>/opt/rsa/datareach/AgentOracle11/package\</package_folder\>*

Update the value for the parameter DR_ENV_PATH with the value of path
generated in mastercontroller

> *cd /opt/rsa/datareach/AgentOracle11/scripts*
>
> *vi setenv.sh*

# *Data Collection*

**Agent Collection Run**

SSH to the server and login as datareach to start the data collection.
For the first run of the agent, we would need to run the same script
twice.

> *cd /opt/rsa/datareach/AgentOracle11/scripts*
>
> *./run_agent.sh*

**Agent Logs Location**

The agent collection logs are written at the location below

> */opt/rsa/datareach/AgentOracle11/logs/datareach_agent.log*

Verify from the logs if the data files were generated successfully

# *Database Verification*

Database tables must be verified to check for the data format and count
of each object.

Login to the SQL tools to verify these counts.

# Agent Deployment

Before an agent can be used, a unique name (agent key name) must be
chosen for the agent. It is recommended that this name must be 5
characters or long. This name must match in the following locations (for
e.g.: we are using oracle11 as agent name):

The CN of the agent certificate (for e.g.: cn=oracle11,ou=sample,ou=org)

The name of the agent configuration folder on the Mastercontroller (for
e.g.: /opt/rsa/datareach/mastercontroller/agent_configs/oracle11)

# *Agent Configuration Steps:*

Create a folder with name and perform the steps to install agent within
it

Update the agent_configuration file and make sure we follow

> *cd /opt/rsa/datareach/AgentOracle11/config*
>
> *vi agent_configuration.xml*

Generate a new certificate for the agent using drutils.sh script

Navigate to the path /opt/rsa/datareach/mastercontroller/scripts/ and
run the below script

> *./drutils.sh certs generateAgent -n oracle11 -p init1234 -ca-password
> init1234*

Copy the certificate that is generated in the folder

> *cp /opt/rsa/datareach/mastercontroller/certificates/oracle11.jks
> /opt/rsa/datareach/AgentOracle11/certificates*

Make sure a folder is created at
/opt/rsa/datareach/mastercontroller/agent_configs/oracle11

> *mkdir oracle11*

Create subfolders within it

> *mkdir -p
> /opt/rsa/datareach/mastercontroller/agent_configs/oracle11/package/config*

Update the agent configuration file (take existing sample and update it
as per requirement)

Make a copy of existing agent_configuration.xml and place it in
/opt/rsa/datareach/mastercontroller/agent_configs/oracle11/

Make a copy of package.xml and place it in
/opt/rsa/datareach/mastercontroller/agent_configs/oracle11/package/config

# Host File Management

# *Host Plugin Changes*

Update the hostlist config files to allow data collection for new agent

> *cd
> /opt/rsa/datareach/mastercontroller/plugins/hostlist-provider-jdbc/*

Update the file "config.xml"

# *Host File Changes:*

The agent key name is the unique identifier which helps us differentiate
between agents (e.g.: oracle11 and oracle). It is important to know the
agent key name for each type of target.

**[END OF DOCUMENT]{.underline}**
