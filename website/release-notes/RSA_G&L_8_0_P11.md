---
title: RSA G&L 8.0 P11
sidebar_label: v8.0 P11
sidebar_position: 1
---

<div className="text--justify">

# RSA Governance & Lifecycle 8.0 Patch 11

**Release Date:** 2026-07-14  
**Version:** 8.0.0 P11

## Executive Summary
RSA Governance & Lifecycle version 8.0.0 P11 introduces features designed to enhance system efficiency, automate key tasks, and improve visibility. With updates like Joiner Mover Advisor (JMA), New User Interface (Home page and Reviews), Oracle Database 19c Multitenant, and Workflow Rollback, this release reduces manual intervention, optimizes performance, and bolsters security.

## Highlighted Features

This section highlights the most significant and vital features introduced in RSA Governance & Lifecycle 8.0.0 Patch 11 Release.

### Joiner Mover Advisor (JMA)
The AI-powered Joiner Mover Advisor (JMA) feature provides visibility into users with enhanced access patterns and groups users based on their entitlements or access. This feature organizes/groups users into Clusters, helping manage the large number of users, entitlements, roles, and groups handled in RSA Governance & Lifecycle.

JMA enables the user to identify both Global Anomalies and Local Anomalies through the created clusters, which enhances Role distribution and application among the system users with less time and effort.

### New User Interface
The new user interface introduced earlier to RSA Governance & Lifecycle is now a standard supported feature of RSA G&L effective Patch 11. For issues and/or questions, please contact RSA Technical Support by opening a Support Case.

#### Home Page
Once you log into RSA G&L, there are two tabs displayed for the Homepage details:
* **Home:** displays the data in the new UI.
* **Home Classic:** displays data in the old UI.

There is no custom flag to configure in order to display the UI you want. Both are introduced on your landing page by default under two different tabs.

#### Reviews
A slight change in behaviour is introduced; the Reviews are displayed in old UI by default, and the Enhanced UI toggle is also displayed by default for all users so that the users can switch between the old and the new UI. RSA Governance & Lifecycle is configured, by default, to set the custom flag `FeatureFlag.UseEnhancedUIForReviews` to `true`.

You can completely disable the new UI, if needed, by setting the custom flag to `false` under **Admin > System > Settings tab > Edit > Custom**.

### Oracle Database 19c Multitenant
RSA G&L application now supports Oracle Database 19c Multitenant architecture, including Container Databases (CDBs) and Pluggable Databases (PDBs), in the following deployment scenarios:

#### RSA-Provided Local Databases (Patch-Based Upgrade)
The existing `patch.sh` utility is enhanced to support Oracle Database 19c Multitenant environments. The patch upgrade process performs the following:
* Creates an Oracle 19c Container Database (CDB)
* Migrates the existing standalone (non-CDB) database to a Pluggable Database (PDB) within the CDB architecture

#### RSA-Provided Databases on Remote Hosts
Support is added for Oracle Database 19c Multitenant (CDB/PDB) in RSA-provided remote database configurations. A dedicated installer is available to facilitate the migration from a standalone database to the Oracle 19c Multitenant architecture.

#### Customer-Supplied Databases
Starting from Patch 11, RSA certifies the use of Oracle Database 19c Multitenant architecture for customer-supplied database deployments. Customers managing their own Oracle databases can deploy RSA G&L on CDB/PDB environments without requiring additional application changes.

### Workflow Rollback
The Workflow Rollback feature enables users to restore a workflow to a previously saved version. This capability allows safe recovery from unintended changes, validation of historical configurations, and continuation of work from a stable version.

Rollback allows users to select a prior version of a workflow and restore it as the current working version. Upon execution, the system replaces the existing workflow configuration with the selected version.

> [!NOTE]
> See the Known Issues section for workarounds related to known issues in the Workflow Rollback feature.

## New Features

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | [ACM-137423](https://rsa.atlassian.net/browse/ACM-137423) | **AFX Server Details Tab:** A new tab, AFX Server Details, is added to the AFX Server configuration page on the UI, that displays information about the AFX and the system where AFX is running. The following details are displayed under the new tab:<br/>• Operating System details<br/>• Hardware details<br/>• AFX Server details. |
| - | [ACM-137207](https://rsa.atlassian.net/browse/ACM-137207) | **Connector Inactive Status:** An option is added in the UI to mark a connector as Inactive. When set to Inactive, the connector’s settings and capability execution are disabled and connectors will not be deployed on the AFX Server. |
| - | [ACM-136974](https://rsa.atlassian.net/browse/ACM-136974) | **Web Services APIs for Roles:** Four new Web Services APIs are added under **Admin > Web Services > Roles**. These new APIs are: `createRole`, `editRole`, `deleteRole`, `getRoleVersion`. |
| - | [ACM-136840](https://rsa.atlassian.net/browse/ACM-136840) | **Home Dashboard Components:** New components are added for the new Home page in the Dashboard Components tab under **Admin > Dashboards**. These components are:<br/>• Activities<br/>• Approvals<br/>• Reviews<br/>• Violations<br/>• Access<br/>• My Profile & Team. |
| - | [ACM-136826](https://rsa.atlassian.net/browse/ACM-136826) | **Token Encryption:** Security is enhanced to store all the tokens generated for Trusted Applications in RSA G&L in an encrypted format. <br/>All existing tokens for Trusted Applications will be removed upon applying the patch. After the patch is applied, a new login by a Trusted Application will generate a new token that will be stored in an encrypted format. Ensure that the Token inactivity timeout, and Token lifetime timeout parameters are properly configured. |
| - | [ACM-136599](https://rsa.atlassian.net/browse/ACM-136599),<br/>[ACM-135707](https://rsa.atlassian.net/browse/ACM-135707) | **Reviews New UI:** The Reviews is displayed in the new UI by default as the custom flag `FeatureFlag.UseEnhancedUIForReviews` is set to `true` by default; as well as the Enhanced UI toggle is shown on the UI as enabled by default. <br/>Data Access Review and Ownership Review types are newly included to the new Reviews UI enhancements. |
| - | [ACM-134502](https://rsa.atlassian.net/browse/ACM-134502),<br/>[ACM-136501](https://rsa.atlassian.net/browse/ACM-136501) | **Oracle 19c Multitenant:** RSAG&L now supports Oracle Database 19c Multi-tenant model. Customers can operate and manage databases using the Container Database (CDB) and Pluggable Database (PDB) architecture after implementation. This ensures compatibility with applications deployed in Oracle 19c multitenant environments and facilitates smoother database operations. |
| - | [ACM-136476](https://rsa.atlassian.net/browse/ACM-136476) | **Password Vault:** The process to transfer password vault JAR to a remote agent has been optimized. Also, a previously uploaded Password Vault JAR can be replaced with an updated JAR file. |
| - | [ACM-135893](https://rsa.atlassian.net/browse/ACM-135893) | **AFX Auto-upgrade Indicator:** During the AFX auto-upgrade process, the upgrade indicator is now displayed on the UI as "Auto-upgrade in progress", reflecting the current AFX server state. |
| - | [ACM-135890](https://rsa.atlassian.net/browse/ACM-135890) | **AFX Logs property:** A new property `afx.config.send.afxlogs.toACM` is implemented to enable or disable sending AFX Logs to ACM. <br/>When this property is set to `true` (default), logs are sent to ACM; when set to `false`, logs transfer is stopped. This results in reducing the amount of data/logs pushed to the G&L database and hence reducing disk space utilization. |
| - | [ACM-134532](https://rsa.atlassian.net/browse/ACM-134532) | **Agent Status Validation:** Validation is added to check whether the Agent is running (status Connected) before running the Collector. The system now immediately reflects agent shutdown status as not running (status Disconnected) and prevents collector execution when the agent is unavailable. |
| - | [ACM-133584](https://rsa.atlassian.net/browse/ACM-133584) | **Risk Column in Reviews:** A new column Risk is introduced in the new User Access Review screen. For each user, Entitlement risk score is displayed in the form of gauge meter icon. On hovering on the icon, individual Risk and the score metrics are displayed. Risk score is calculated from the Risk data processing. |
| - | [ACM-128457](https://rsa.atlassian.net/browse/ACM-128457) | **Load Balancer Support for SAP Connector:** Load Balancer configuration is now supported for the SAP Connector. |
| - | [ACM-127061](https://rsa.atlassian.net/browse/ACM-127061) | **Workflow Rollback:** This feature allows users to select a prior version of a workflow and restore it as the current working version. Upon execution, RSA G&L replaces the existing workflow configuration with the selected version. <br/>*Note: See the Known Issues section for workarounds related to known issues in the Workflow Rollback feature.* |

## Enhancements

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | [ACM-138565](https://rsa.atlassian.net/browse/ACM-138565) | **One-Way SSL and Base URL defaults:** The order of Registration URL and Registration Code fields has been interchanged. The field SSL Authentication is set to One-Way SSL by default, and the option Use Base URL for all APIs is enabled by default, to simplify the setup and ensure consistent API behavior. |
| - | [ACM-138440](https://rsa.atlassian.net/browse/ACM-138440) | **Timeframe to retain detailed risk result data:** A new setting, Timeframe to retain detailed risk result data, is added under **Admin > System > Settings > Advanced Dashboards**. This allows the user to set the timeframe to retain detailed risk result data. The new setting is used in combination with Runs to retain detailed risk result data to determine the data that needs to be kept and the data that needs to be purged for the risk runs. For example, 6 runs over 180 days means that any data older than 180 days will all be deleted. And if there are still more than 6 runs of data left, additional runs will be deleted till 6 are retained by spacing them out as evenly as possible. Latest run will always be retained. |
| - | [ACM-137625](https://rsa.atlassian.net/browse/ACM-137625) | **Segment Advisor tables:** The Segment Advisor now includes additional tables for defragmentation. Also, incompatible indexes from Segment Advisor Defragmentation lists are now removed. |
| - | [ACM-137615](https://rsa.atlassian.net/browse/ACM-137615) | **AWR Report retention period:** AWR Report retention period in G&L Cloud is increased to 90 days (instead of 8) to ensure availability of historical data for extended troubleshooting and analysis. |
| - | [ACM-137327](https://rsa.atlassian.net/browse/ACM-137327) | **Collector metadata import warning:** A warning message is displayed after importing any Collector metadata file, in case there are no matching security key files. |
| - | [ACM-137238](https://rsa.atlassian.net/browse/ACM-137238) | **Remote Agent version/build fields:** Two new fields, version and build, have been added to the Remote Agent's `conf/config.properties` file to show the version and build of the agent. |
| - | [ACM-136829](https://rsa.atlassian.net/browse/ACM-136829) | **Agent Status Label:** The label Is Running (Yes/No) is changed to Status (Connected/Disconnected) for agents on the **UI > Collectors > Agents** page. |
| - | [ACM-135836](https://rsa.atlassian.net/browse/ACM-135836) | **IDPlus Application configuration wizard:** IDPlus Application configuration wizard now automatically fills in values for key fields, such as IDPlus Lookup Api, Base URL, User Authentication Type, Client ID, Client Secret, Authentication URL, Access Token URL, etc. |
| - | [ACM-135060](https://rsa.atlassian.net/browse/ACM-135060) | **Change Approval View-only access:** Access Request Administrator, Application Administrator, Data Access Administrator, Directory Administrator, Role Administrator, and Rule Administrator roles will have Change Approval View-only access instead of Edit access. |

## Fixed Issues

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| **SF-02743144** | [ACM-137638](https://rsa.atlassian.net/browse/ACM-137638) | Authentication tokens in the REST Collector are now securely encrypted. Previously, when token-based authentication with Get Token from URL was enabled, token values were stored and exported in plain text, making them visible in exported configurations and database tables. This enhancement improves security by preventing exposure of sensitive data. |
| **SF-02739096** | [ACM-137604](https://rsa.atlassian.net/browse/ACM-137604) | Status indicators, under **Admin > Workflow**, are now showing correct values only for one node. |
| **SF-02736647** | [ACM-137595](https://rsa.atlassian.net/browse/ACM-137595) | Password reset notifications are no longer sent to terminated or orphaned user accounts. Previously, these emails were incorrectly delivered to such accounts. |
| **SF-02740658** | [ACM-137456](https://rsa.atlassian.net/browse/ACM-137456) | Fixed this issue by ensuring proxy settings are consistently applied across all relevant classes. The SOAP Connector capability actions now function as expected after applying the patch. Previously, these actions failed with the error “Could not send Message” due to incomplete proxy configuration in a class responsible for sending SOAP requests. |
| **SF-02740480** | [ACM-137407](https://rsa.atlassian.net/browse/ACM-137407) | Assigned users for Run Report and View Report Results are now retained correctly when creating or editing report templates. Previously, these user assignments were removed when navigating between tabs or saving the template due to inconsistent UI state refresh. This issue has been resolved to ensure assignments persist across navigation and template operations. |
| **SF-02734232** | [ACM-137333](https://rsa.atlassian.net/browse/ACM-137333) | The configured action in Attribute Change Rules is now retained correctly even when a schedule is set to a past date. Previously, the action was automatically changed to Revoke all entitlements of involved users. |
| **SF-02736208** | [ACM-137321](https://rsa.atlassian.net/browse/ACM-137321) | Customers were unable to create additional user attributes in the UI, and the page hung when the number of attributes exceeded the WildFly parameter limit. The root cause was the default max-parameters value of 1000 in the WildFly configuration. <br/>For cloud customers, this fix increased parameters limit to 3000 in WildFly configuration, ensuring that large numbers of user attributes can be created without errors. For cloud environments, the installation scripts were updated so that this configuration persists across patches, preventing reversion to the default value. |
| **SF-02737486** | [ACM-137307](https://rsa.atlassian.net/browse/ACM-137307) | When updating a Review Definition and editing the SQL statement in the Advanced Query dialog box, the UI now loads fast since there are no extra spaces added to the query surrounding the IN block while saving. |
| **SF-02733988** | [ACM-137083](https://rsa.atlassian.net/browse/ACM-137083) | Acquiring the OAuth 2.0 access token for Salesforce Connector now works properly in G&L Cloud. |
| **SF-02732796** | [ACM-136996](https://rsa.atlassian.net/browse/ACM-136996) | Workflows using REST WebService nodes can now be saved successfully when the Response Type is set to PROPERTIES. Previously, saving the workflow failed with the error “REST request must be well-formed”. |
| **SF-02728701** | [ACM-136955](https://rsa.atlassian.net/browse/ACM-136955) | The MEU_ID and CLIENT_IDENTITY columns in the T_AV_EVENT table are now recorded consistently for user actions. Previously, CLIENT_IDENTITY could reflect a different user due to reliance on the global audit context, leading to incorrect attribution when multiple users were logged in. |
| **SF-02725495** | [ACM-136562](https://rsa.atlassian.net/browse/ACM-136562) | Accessing a REST node in Custom Workflows no longer result in the error Failed to execute atob on window. The string to be decoded is now correctly encoded, and users can now access and edit REST nodes successfully. |
| - | [ACM-136254](https://rsa.atlassian.net/browse/ACM-136254) | Special characters in identity data are now correctly collected when using a Windows Remote Agent with CSV-based identity sources, ensuring proper handling and storage of UTF-8 encoded data. |
| **SF-02721889** | [ACM-136204](https://rsa.atlassian.net/browse/ACM-136204) | Workflow instances now correctly transition to a completed state after all change request items are rejected or cancelled, ensuring the workflow does not remain in an active state. Previously, the workflow remained stuck in the fulfillment phase when Auto Reject or Cancel actions were applied to individual change request items. |
| - | [ACM-136084](https://rsa.atlassian.net/browse/ACM-136084) | Generic REST based Account Data Collector (ADC) and Entitlement Data Collector (EDC) using Token as the User Authentication Type, for example, when using Microsoft Graph API for Microsoft Entra ID, now execute successfully without failures caused by expired authentication tokens. Previously, data collection failed when the collector continued using an expired access token during execution, resulting in authentication errors. |
| **SF-02723206** | [ACM-135914](https://rsa.atlassian.net/browse/ACM-135914) | Role Management History now correctly displays archived change requests without errors, ensuring historical data is retrieved and rendered properly. Previously, archived change requests appeared as errors because the required audit snapshot data was not included during archiving, causing failed lookups in the UI. |
| - | [ACM-135204](https://rsa.atlassian.net/browse/ACM-135204) | The Remote Agent status in the UI now reflects the correct running state after application restart, ensuring consistency with the underlying Windows service status. Previously, the agent was incorrectly shown as Not Running in the UI despite the service being active, due to stale connection handling after restart. |
| **SF-02705638** | [ACM-134608](https://rsa.atlassian.net/browse/ACM-134608) | AFX connectors now deploy and run successfully after configuration changes, ensuring stable connector deployment behavior. Previously, connector deployment failed after updates due to errors during archetype JAR processing and SSL context handling during binary download and extraction. |

## Known Issues

| Reference | Description |
| :--- | :--- |
| [ACM-139155](https://rsa.atlassian.net/browse/ACM-139155) | **Issue:** After rolling back a Workflow, the selected workflow form is not retained. The form type changes to Default Approval Form instead of Rollback Versioned Form. For rollback-saved workflows, the activity form may appear as Default Approval Form under Requests > Approvals or Activities tab instead of the configured Rollback Versioned Form. <br/><br/>**Workaround:** After performing a workflow rollback but prior to saving the rolled-back workflow, do the following: <br/>1. Manually review and document the forms configured for the Approval and Fulfillment nodes (for example, record the node-to-form mappings) before proceeding. <br/>2. Save the rolled-back workflow. <br/>3. Reconfigure the documented forms for the respective nodes before using the rolled-back workflow version. <br/><br/>*Note: Since the rollback operation does not retain the configured workflow forms, users must manually record the node-to-form mappings prior to saving the workflow so that the same configuration can be restored afterward.* |
| [ACM-139014](https://rsa.atlassian.net/browse/ACM-139014) | **Issue:** During Workflow rollback, workflow and email content may not be restored correctly. Workflow state is not auto-saved after rollback, the email content may become empty when rolling back to the default version, and version updates may impact all instances sharing the same version instead of only the targeted instance. <br/><br/>**Workaround:** After rollback, perform the following: <br/>1. Save the workflow (manually). <br/>2. Re-enter email content/templates, if required. <br/>3. Verify workflow content and associated data. <br/>4. Update versions individually per instance. <br/>5. Perform an end-to-end validation before publishing. |

## Platform Matrix

The latest application server and JDK version are certified for this release.

| | RSA Governance & Lifecycle<br/>Software Bundle | Software Only<br/>(WebLogic or WebSphere) | RSA Governance & Lifecycle<br/>Virtual Application | Container |
| :--- | :--- | :--- | :--- | :--- |
| **Application Server Version** | | | | |
| WildFly 24.0.1 Included | Qualified | N/A | Qualified | Qualified |
| WebLogic 14.1.1.0 | N/A | Qualified | N/A | N/A |
| WebSphere 9.0.5.27 | N/A | Qualified | N/A | N/A |
| **JDK Version Certified** | | | | |
| AdoptOpenJDK 1.8.0_492 | Qualified | N/A | Qualified | N/A |
| Oracle JDK 1.8.0_491<br/>(WebLogic) | N/A | Qualified | N/A | N/A |
| IBM JDK 1.8.0_491<br/>(WebSphere) | N/A | Qualified | N/A | N/A |
| **Operating Systems** | | | | |
| SUSE (SLES 12 SP5, and<br/>SLES 15 SP7) | Qualified | N/A | Qualified | N/A |
| Red Hat (RHEL 8.10 and RHEL 9.7) | Qualified | N/A | N/A | N/A |

<small>*RSA Governance & Lifecycle Virtual Application deployments are now supported on Nutanix through the OVA file installation method.*</small>

## Prerequisites for Applying Patch (v8.0 P07 or Later)

> [!NOTE]
> In case you are upgrading directly to P10 from patch P06 or earlier, you must perform the following procedure.

When using a customer-supplied Oracle Database, or RSA-Supplied Database installed remotely, update the AVUSER and AVCSUSER schema as follows:

1. Log in as **SYS** user (or another user with **SYSDBA** privilege) in SQLPLUS (or another database tool like SQL Developer).
2. Run the following script to grant permission on the following objects:
```sql
GRANT EXECUTE ON SYS.DBMS_CRYPTO TO AVUSER;
GRANT EXECUTE ON SYS.DBMS_LOCK TO AVCSUSER;
```

> If the AVUSER schema name is other than AVUSER, replace AVUSER with the appropriate schema name.

## Product Support with Operating System

RSA Governance & Lifecycle version 8.0 P05 and later software bundle is now supported on RHEL 9.4+, however, RSA Governance & Lifecycle 8.0 must first be installed on RHEL 8, complete all the pre-requisites described below, and then upgrade the operating system from RHEL 8 to RHEL 9.4+.

### Installing RSA Governance & Lifecycle on Red Hat 9.4+

#### Before upgrading your system from RHEL 8 to RHEL 9.4
Ensure the following steps are completed:
* Apply patch 8.0.0 P05 or later successfully on the existing RHEL 8 system.
* Apply the latest Appliance Updater for Oracle Database to the existing RHEL 8 system containing the RSA-provided database.

#### After completing the upgrade to RHEL 9.4
Ensure the following:
* The RSA-supplied JDK is installed and available.
* The following packages are required for Red Hat Enterprise Linux 9.4 environments and may need to be explicitly installed in addition to the operating system.

| Package | Package |
| :--- | :--- |
| binutils-2.35.2-43.el9.x86_64 | make-4.3-8.el9.x86_64 |
| gcc-11.4.1-3.el9.x86_64 | sysstat-12.5.4-7.el9.x86_64 |
| gcc-c++-11.4.1-3.el9.x86_64 | javapackages-tools |
| glibc-2.34-100.el9.x86_64 | lcms2 |
| glibc-devel-2.34-100.el9.x86_64 | rsync |
| ksh | syslinux |
| libaio-0.3.111-13.el9.x86_64 | dejavu-sans-fonts |
| libaio-devel-0.3.111-13.el9.x86_64 | dejavu-serif-fonts |
| libgcc-11.4.1-3.el9.x86_64 | dejavu-sans-mono-fonts |
| libstdc++-11.4.1-3.el9.x86_64 | fontconfig |
| libstdc++-devel-11.4.1-3.el9.x86_64 | zip |
| libXi-1.7.10-8.el9.x86_64 | unzip |
| libXtst-1.2.3-16.el9.x86_64 | libns |

Once all the pre-requisites are completed as described above, start the RSA Governance & Lifecycle services.

## RSA Governance & Lifecycle Product Version Lifecycle
RSA has a defined End of Primary Support policy associated with all major versions. For more details, please refer to the Product Version Life Cycle for RSA Governance & Lifecycle.

As of RSA Governance & Lifecycle v8.0.0 P08, RSA G&L v7.5.2 is now EOPS.

</div>
