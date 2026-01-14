---
title: RSA G&L 8.0 P05
sidebar_label: v8.0 P05
sidebar_position: 6
---

<div className="text--justify">

# RSA Governance & Lifecycle 8.0 Patch 05 Release Notes

## Executive Summary

RSA Governance & Lifecycle version 8.0.0 P05 introduces features designed to enhance system efficiency, automate key tasks, and improve visibility. With updates like automatic archiving, event notifications, support of Oracle TCPS, and expanded cloud insights, this release reduces manual intervention, optimizes performance, and bolsters security.

## Highlighted Features

### Additional Custom Events for Critical Event Notifications

Critical Event Notifications (Admin > Email > Custom Events) is an advanced notification mechanism by which you can create your own configured type of notifications. This feature helps you create all the events’ attributes and details according to your needs.

Seven new categories have been introduced in v8.0 P05 under Custom Events to facilitate the monitoring of various events. Each category includes user-configurable settings to enable detailed system oversight.

*   **Admin Error**: Identifies the Admin Errors Generation Count within a specific number of hours and notifies the user when these errors exceed the specified count/value.
*   **Change Request Cancellation**: Identifies the Change Request Cancellation Count within a specific number of hours and notifies the user when the count exceeds the configured threshold.
*   **Change Request Generation**: Identifies the Change Request Generation Count within a specific number of hours and notifies the user when the count exceeds the configured threshold.
*   **Change Request Item Generation**: Identifies the Number of Change Request Items in a specific change request, and notifies the user when the count exceeds the configured threshold.
*   **Cloud DB Disk Threshold Notification**: Identifies the Database Disk Space Usage in RSA Governance and Lifecycle Cloud and notifies the user after reaching the specified threshold.
*   **Cluster Communication Issue**: Identifies the Communication Breakdown, and sends notification when nodes in the cluster cannot communicate with each other after the configured Breakdown period.
*   **User Sessions Monitoring**: Identifies the Number of User Sessions and notifies the user according to the configured User Sessions Threshold and Notification Frequency.

### Clean Archive

This new feature is an extension of the Archiving functionality introduced in v8.0. It enables customers to efficiently manage storage by removing archived data, helping reduce costs, and ensuring that only necessary data is retained for compliance with RSA Governance & Lifecycle. The Clean Archive process in RSA Governance and Lifecycle involves creating a .dmp file of archived data. To initiate this process, users must first archive and purge data, ensuring both statuses are marked as completed. The Clean Archive button, independent of the Archive Schedule, can trigger the creation of the .dmp file for selected Archive IDs or Run IDs. Once the process is complete, the .dmp file and a .log file are generated in the specified directory for on-premise deployments or S3 bucket in RSA Governance & Lifecycle Cloud.

Clean Archive does not support custom date ranges. Instead, it works based on Archive IDs, meaning that the period used to archive the data will be the same period cleaned by this process.

A monitoring job tracks the progress of creating the .dmp file. These .dmp files can then be imported into another Oracle database for audit and history purposes. Importing the data into the production schema is neither recommended nor supported. Finally, the purge schedule can be executed to remove the data from the history tables, marking the Archive Purge Status as complete.

### Oracle TCPS Support

This feature enables secure and encrypted connections between RSA Governance & Lifecycle and Oracle databases using the TCPS protocol. It enhances data protection and compliance while providing seamless support for fresh and existing installations. The customer should configure the Oracle Wallet at the Remote DB and provide the wallet password at installation time. The feature is available in limited deployment scenarios, including WildFly Application Server with the Remote DB for both On-premise and AWS RDS customers. For more information, see the Oracle TCPS Support Matrix Guide.

### RedHat 9 Support

This feature enables the Red Hat Enterprise Linux 9 operating system to be supported for deploying RSA Governance & Lifecycle on the WildFly Application Server.

> **Note:** Before upgrading to RHEL 9, the customer needs to be on the latest RSA Governance & Lifecycle patch and apply the latest Oracle Database Appliance Updater on the existing RHEL 8 system. For detailed information including known limitations, see **Installing RSA Governance & Lifecycle on Red Hat 9.4+** below.

### SCIM-Based Identity Collector


## New Features

| Feature | What's New |
| :--- | :--- |
| **[ACM-128249](https://rsa.atlassian.net/browse/ACM-128249)** | The Segment Advisor report is now only generated for AVUSER schema; the report for AVCSUSER schema has been removed. |
| **[ACM-127681](https://rsa.atlassian.net/browse/ACM-127681)** | The Generic REST Account Collector now collects all accounts for account-to-group membership and validates like all other collectors. In P05, accounts in the account-to-group membership records, that have not been collected in the account collection, will be displayed in the rejected list of raw data.<br/><br/>A custom flag CollectInvalidAccountForRESTCollector is introduced to control whether or not a Generic REST Account Collector should display rejected accounts. The custom flag can be set in Admin > System > Settings > Edit > Custom section.<br/><br/>When set to True (default setting) – Maintains the new behaviour of validating all accounts, with the rejected ones appearing in the rejected list of raw data.<br/>When set to False – Reverts to the previous behaviour, where the rejected accounts are not listed in the raw data. |
| **[ACM-126582](https://rsa.atlassian.net/browse/ACM-126582)** | A new custom event category, Cloud DB Disk Threshold Notification, has been introduced in the critical event notifications module. This type of event identifies the Database Disk Space Usage in RSA Governance & Lifecycle Cloud and notifies the user after reaching the specified threshold. |
| **[ACM-127178](https://rsa.atlassian.net/browse/ACM-127178)** | The library commons-httpclient v3.0.1 has been upgraded to httpclient v4.5.14 in the AFX server. |
| **[ACM-127129](https://rsa.atlassian.net/browse/ACM-127129)** | The JARs ant junit, ant jnuit4, and ant core are upgraded from 1.10.7 to 1.10.15. |
| **[ACM-127086](https://rsa.atlassian.net/browse/ACM-127086)** | The Keystore Password provided for Password Vault configuration is no longer displayed in plain text during the Test Connection operation. |
| **[ACM-126581](https://rsa.atlassian.net/browse/ACM-126581)** | A new custom event category named Admin Errors has been created. It identifies the Admin Errors Generation Count within a specific number of hours and notifies the user when these errors exceed the specified count/value. |
| **[ACM-126569](https://rsa.atlassian.net/browse/ACM-126569)** | A new custom event category named Cluster Communication has been created. It identifies the Communication Breakdown, and notifies the user when the nodes in the cluster cannot communicate with each other after the configured Breakdown period. |
| **[ACM-126536](https://rsa.atlassian.net/browse/ACM-126536)** | The library jersey-core has been upgraded from v1.8 to v1.19.5. |
| **[ACM-126459](https://rsa.atlassian.net/browse/ACM-126459)** | A new Download Connector Logs button is added to the UI, which enables the users to easily download logs for Connectors. |
| **[ACM-126269](https://rsa.atlassian.net/browse/ACM-126269)** | The SCIM IDC with basic and API Key authentication is now supported under Collectors > Identity Collectors > Create Identity Collector > Data Source Type (The API Key Authorization is now supported in the SCIM Account Collector). |
| **[ACM-126337](https://rsa.atlassian.net/browse/ACM-126337)** | A new custom event is created named User Sessions Monitoring. It identifies the Number of User Sessions, and notifies the user according to the configured user sessions threshold and notification frequency. |
| **[ACM-126270](https://rsa.atlassian.net/browse/ACM-126270)** | SCIM-Based Identity Collector has been introduced; enabling the collection of user data through SCIM v1 and v2 protocols, with both API Key and Username/Password authentication options. |
| **[ACM-125834](https://rsa.atlassian.net/browse/ACM-125834)** | For the RSA-managed G&L Cloud deployments, the ability to edit the data purging scheduler is restricted solely to users in the GL DevOps and Operations. |
| **[ACM-125632](https://rsa.atlassian.net/browse/ACM-125632)**<br/>**[ACM-125631](https://rsa.atlassian.net/browse/ACM-125631)** | AFX Server's embedded component ESB (Mule) has been upgraded from v4.4 to v4.7.1. |
| **[ACM-124875](https://rsa.atlassian.net/browse/ACM-124875)** | A new custom event named Change Request Cancellation has been created. It identifies the Change Request Cancellation Count within a specific number of hours and notifies the user when the count exceeds the configured threshold. |
| **[ACM-124875](https://rsa.atlassian.net/browse/ACM-124875)** | A new custom event named Change Request Generation has been created. It identifies the Change Request Generation Count within a specific number of hours and notifies the user when the count exceeds the configured threshold. |
| **[ACM-124875](https://rsa.atlassian.net/browse/ACM-124875)** | A new event category named Change Request Items Generation has been created. It identifies the Number of Change Request Items in a specific change request and notifies the user when the count exceeds the configured threshold. |
| **[ACM-124880](https://rsa.atlassian.net/browse/ACM-124880)** | RSA G&L now detects if Named Queries have been configured and reports those in the ASR report. |
| **[ACM-124751](https://rsa.atlassian.net/browse/ACM-124751)** | The customer can now remove/clean the archived data (older than 6 months) in offline mode, which helps the customer to manage storage better. |

## Enhancements

| Feature | Description |
| :--- | :--- |
| **[ACM-127694](https://rsa.atlassian.net/browse/ACM-127694)** | Two new Web Services API's, findChangeRequestItems and findUserRoleMembership, are now available to query against the public views PV_CHANGE_REQUEST_DETAIL and PV_USER_ROLE_MEMBERSHIP respectively. |
| **[ACM-127600](https://rsa.atlassian.net/browse/ACM-127600)** | The OpenLDAP Connector now supports object classes configured in the connector for creating accounts and groups in the endpoint when the Skip Certificate Validation option is enabled. |
| **[ACM-126404](https://rsa.atlassian.net/browse/ACM-126404)** | Selecting the remote agent during directory creation is now supported via a drop-down list under Resources > Directories > Create Directory, allowing users to choose the correct agent. |
| **[ACM-127016](https://rsa.atlassian.net/browse/ACM-127016)** | The Alias support is now added to the Google Apps Connector enabling the ability to add, update, and remove aliases during creating and updating accounts under the Capabilities tab. |
| **[ACM-126128](https://rsa.atlassian.net/browse/ACM-126128)**<br/>**SF-02562773** | In certain instances, invalid role version entries were not removed, due to this user being unable to modify the role. As part of the solution, a scheduler is implemented to eliminate these invalid role versions. |
| **[ACM-125839](https://rsa.atlassian.net/browse/ACM-125839)** | The properties of the status command have been altered for the product version, which will now exclusively return the build number. The status_monitoring.size-of-source-table will provide only a numerical value, while the server-up-time will be reported in minutes. Additionally, the no-of-unhealthy-nodes will also be represented as a numerical value. |
| **[ACM-124685](https://rsa.atlassian.net/browse/ACM-124685)** | Filters set by a Reviewer for a particular Review Result only applies to that Review Result and no longer persists across other Review Results for the same Review Definition. A custom flag custom.enableReviewDefinitionLevelFilter can be set to True (default value is False) to revert the filter persistence to the old behavior where filters set in a Review Result applies to all other Review Results for the same Review Definition. |
| **[ACM-124559](https://rsa.atlassian.net/browse/ACM-124559)** | Google Apps Connector supports Output Parameters: Added support for returning the ID as an output parameter during account creation. |
| **[ACM-116532](https://rsa.atlassian.net/browse/ACM-116532)** | The Multi-App Generic REST Collector now supports an Application Resolution Rule screen to define a rule that either retains or removes the previously collected account data. |

## Fixed Issues

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| **SF-02604185**<br/>**SF-02593200** | **[ACM-128157](https://rsa.atlassian.net/browse/ACM-128157)**<br/>**[ACM-127634](https://rsa.atlassian.net/browse/ACM-127634)** | The Active Directory Connector now supports object classes configured in the connector for creating accounts and groups in the endpoint, when the Skip Certificate Validation option is enabled. |
| **SF-02604329**<br/>**SF-02597301** | **[ACM-128128](https://rsa.atlassian.net/browse/ACM-128128)**<br/>**[ACM-127888](https://rsa.atlassian.net/browse/ACM-127888)** | The Active Directory Connector for SSL connection creates accounts successfully even when empty parameters are provided through the UI. |
| **SF-02602152** | **[ACM-128079](https://rsa.atlassian.net/browse/ACM-128079)** | The AFX start script now correctly checks whether the callback port (default 8089) is available or not. |
| **SF-02601303** | **[ACM-128071](https://rsa.atlassian.net/browse/ACM-128071)** | An extra filter, id ≥ 0, is no longer added as part of searching or grouping on the Assignee Selection pop-up dialog for a Reassign action during a Change Request approval process. |
| **SF-02602860** | **[ACM-128069](https://rsa.atlassian.net/browse/ACM-128069)** | A JAR file uploaded for a connector template is now only applied to the selected template and is no longer applied to other templates cloned from the original template. |
| **SF-02602149** | **[ACM-128011](https://rsa.atlassian.net/browse/ACM-128011)** | When the AFX starts as a service, the afx.server.log is created properly under the afx_home path. |
| **SF-02595891**<br/>**SF-02585024** | **[ACM-127887](https://rsa.atlassian.net/browse/ACM-127887)**<br/>**[ACM-127107](https://rsa.atlassian.net/browse/ACM-127107)** | The LDAP Connector now dynamically reads the User Membership attribute for the Group value configured in the UI. |
| **SF-02597873** | **[ACM-127839](https://rsa.atlassian.net/browse/ACM-127839)** | The Activity Node no longer executes the previous approvers. |
| **SF-02597559** | **[ACM-127753](https://rsa.atlassian.net/browse/ACM-127753)** | Account creation now works successfully when a password generated for SSH-based connectors contains special characters (&gt;, &lt;, $). |
| **SF-02582815** | **[ACM-127717](https://rsa.atlassian.net/browse/ACM-127717)** | The Java Code-Based Connector Capability works successfully even when empty parameters are provided. |
| **SF-02597428** | **[ACM-127716](https://rsa.atlassian.net/browse/ACM-127716)** | Aborting the task (data run) for deleting a Review Definition now correctly reverts the Review Definition state from "Marked for deletion" back to its previous active state. The Review Definition can then be deleted at a later time. |
| **SF-02595173** | **[ACM-127711](https://rsa.atlassian.net/browse/ACM-127711)** | Reports can now be exported in xlsx format under Reports > Tabular. |
| **SF-02596824** | **[ACM-127698](https://rsa.atlassian.net/browse/ACM-127698)** | The ASR report is generated even if the database has an external table reference. |
| **SF-02594406** | **[ACM-127662](https://rsa.atlassian.net/browse/ACM-127662)** | The AFX Connector logs now show properly on the UI. The connector log's rollover file size has been reduced from 2KB to 1KB, and duplicate UUIDs for log entries no longer occur due to the rollover. |
| **SF-02588921** | **[ACM-127649](https://rsa.atlassian.net/browse/ACM-127649)** | The ASR reports generated in v8.0 exclude the external tables. |
| **SF-02581532** | **[ACM-127561](https://rsa.atlassian.net/browse/ACM-127561)** | The IRP performance has been enhanced so that Step 11/12 in the Calculate Role Metrics now completes faster. |
| **SF-02590759** | **[ACM-127472](https://rsa.atlassian.net/browse/ACM-127472)** | The issue with parsing the & character before sending requests to the endpoint has been fixed, and the SOAP connector now supports it properly. |
| **SF-02591257** | **[ACM-127428](https://rsa.atlassian.net/browse/ACM-127428)** | The REST Connector now supports handling requests with non-standard characters (ex: Jöhnson ). |
| **SF-02587183** | **[ACM-127411](https://rsa.atlassian.net/browse/ACM-127411)** | Now, in the Account Attributes, both Date and Time are displayed (not only the Date data type). |
| **SF-02587846** | **[ACM-127246](https://rsa.atlassian.net/browse/ACM-127246)** | The names and values of the Response and Error variables are now available in v8.x under Workflow > Job Properties > Variables panel. |
| **SF-02586523** | **[ACM-127171](https://rsa.atlassian.net/browse/ACM-127171)** | The IRP performance has been enhanced so that Step 10/12 in the Calculate Application Summary Counts now completes faster. |
| - | **[ACM-127106](https://rsa.atlassian.net/browse/ACM-127106)** | In the Database Connector, the Oracle stored procedure execution with specific data types in the format of String, Integer, String is now supported. |
| **SF-02585367** | **[ACM-127012](https://rsa.atlassian.net/browse/ACM-127012)** | Upon executing a full refresh on the Role Collector, the deletion_date for the deleted records in T_AV_ROLEDEFINITIONS and T_AV_ROLEMEMBERSHIPS was updated to the current date. As part of the resolution, the deletion_date will no longer be overridden. |
| **SF-02587010** | **[ACM-126997](https://rsa.atlassian.net/browse/ACM-126997)** | Upon editing the automatically generated UOOC Role Membership Rule, the condition section has been altered from "who are members not matching" to "who are not members matching”. As a result, the UOOC (User out of constraint) will function similarly to the UINC (User in constraint) rule. This issue has been resolved. |
| **SF-2577167** | **[ACM-126994](https://rsa.atlassian.net/browse/ACM-126994)** | A migration script has been implemented to automatically encrypt static authentication tokens stored in plain text after upgrading, ensuring the REST Collectors function as expected. |
| **SF-02583321** | **[ACM-126943](https://rsa.atlassian.net/browse/ACM-126943)** | In the SSH Connector, the Create Account Capability with the output parameter configuration issue has been fixed, and accounts are successfully created. |
| **SF-02582846** | **[ACM-126909](https://rsa.atlassian.net/browse/ACM-126909)** | A pagination jump-to option (by which the customer can jump to a specific page directly without moving in sequence) has been added under Workflow > Activity Node Properties > Resource panel > Resources Selection pop-up dialog. |
| **SF-02583883** | **[ACM-126871](https://rsa.atlassian.net/browse/ACM-126871)** | A new panel named Self-Looping Panel has been added to all the expected nodes to configure or edit existing self-looping transitions allowing the customer to create Unconditional, Conditional, Completion Code, and Button transitions. |
| **SF-02581851** | **[ACM-126806](https://rsa.atlassian.net/browse/ACM-126806)** | Names are now displayed correctly/as-is in the submission forms when they include the text “null” (ex: Willnullson was displayed Willson). |
| **SF-02574747** | **[ACM-126757](https://rsa.atlassian.net/browse/ACM-126757)** | The user can turn off and save Enable WS-Security in a SOAP Web Service node (the node's colour changes back to blue (normal) when the toggle button is switched off). |
| **SF-02556281** | **[ACM-126710](https://rsa.atlassian.net/browse/ACM-126710)** | When the actions Maintain and/or Revoke are selected and subsequently deselected without any saving occurring in the interim, the review items will no longer show None as the sign-off comments. |
| **SF-02572675** | **[ACM-126655](https://rsa.atlassian.net/browse/ACM-126655)** | The issue that caused a NullPointerException when the SSL checkbox was enabled for the Generic Database Connector with empty values for the trust store, password, and type has been fixed. |
| **SF-02327821** | **[ACM-126398](https://rsa.atlassian.net/browse/ACM-126398)**<br/>**[ACM-126397](https://rsa.atlassian.net/browse/ACM-126397)** | Commons-compress is upgraded to 1.26.1 in v8.0 P03.<br/><br/>The older version of commons-compress (1.4.1,1.16.1, 1.19, and 1.21) is removed from a third-party dependent library, resolving CVE-2021-35515, CVE-2019-12402, CVE-2021-35517, CVE-2018-11771, and CVE-2024-25710 in the AFX module of the application. |
| **SF-02575209** | **[ACM-126342](https://rsa.atlassian.net/browse/ACM-126342)** | Hebrew words are now correctly displayed in the workflow-generated emails, using the enableCharsetForWorkflowEmail custom setting. |
| **SF-02573982** | **[ACM-126222](https://rsa.atlassian.net/browse/ACM-126222)** | When cancelling a Change Request using the Revert Changes option, any pending accounts created by that request will be deleted. |
| **SF-02560481** | **[ACM-125373](https://rsa.atlassian.net/browse/ACM-125373)** | The startup script for the Aveksa Server has been modified to resolve the Cluster Communication issue.<br/><br/>The modified script expects a hostname, instead of the localhost, to connect to the webservices. |
| **SF-02541831** | **[ACM-124523](https://rsa.atlassian.net/browse/ACM-124523)** | When the BRM is OFF and the custom setting disableVersionsInRoleReviewsWhenBRMIsOff is set to True when modifying the review result configuration and subsequently reviewing the review result leads to a change in the Role state. |
| **SF-02195899** | **[ACM-112507](https://rsa.atlassian.net/browse/ACM-112507)** | In the Requests tab, the performance has been enhanced when using the Search filter so that the requests list is displayed faster. |
| **SF-01792166** | **[ACM-111235](https://rsa.atlassian.net/browse/ACM-111235)** | The Requests Approval tab performance has been enhanced so that now it loads faster. |

## Platform Support Matrix

| Component | RSA Governance & Lifecycle Software Bundle | Software Only (WebLogic or WebSphere) | RSA Governance & Lifecycle Virtual Application | Container |
| :--- | :--- | :--- | :--- | :--- |
| **Application Server Version** | | | | |
| **WildFly 24.0.1 Included** | Qualified | N/A | Qualified | Qualified |
| **WebLogic 14.1.1.0** | N/A | Qualified | N/A | N/A |
| **WebSphere 9.0.5.21** | N/A | Qualified | N/A | N/A |
| **JDK Version Certified** | | | | |
| **AdoptOpenJDK 1.8.0_432** | Qualified | N/A | Qualified | N/A |
| **Oracle JDK 1.8.0_421 (WebLogic)** | N/A | Qualified | N/A | N/A |
| **IBM JDK 1.8.0_421 (WebSphere)** | N/A | Qualified | N/A | N/A |
| **Operating Systems** | | | | |
| **SUSE (SLES 12 SP5, and SLES 15 SP4 & SP5)** | Qualified | N/A | Qualified | N/A |
| **Red Hat (RHEL 8.10 and RHEL 9.4)** | Qualified | N/A | N/A | N/A |

## Product Support with Operating System


RSA Governance & Lifecycle version 8.0 P05 and later software bundle is now supported on RHEL 9.4+, however, RSA Governance & Lifecycle 8.0 must first be installed on RHEL 8, complete all the pre-requisites described below, and then upgrade the operating system from RHEL 8 to RHEL 9.4+.

### Installing RSA Governance & Lifecycle on Red Hat 9.4+

#### Before upgrading your system from RHEL 8 to RHEL 9.4
Ensure the following steps are completed:
*   Apply patch 8.0.0 P05 and later successfully on the existing RHEL 8 system.
*   Apply the latest Appliance Updater for Oracle Database to the existing RHEL 8 system containing the RSA-provided database.

#### After completing the upgrade to RHEL 9.4
Assure the following:
*   The RSA-supplied JDK is installed and available.
*   The following packages are required for Red Hat Enterprise Linux 9.4 environments and may need to be explicitly installed in addition to the operating system.

| Package | Package |
| :--- | :--- |
| binutils-2.35.2-43.el9.x86_64 | make-4.3-8.el9.x86_64 |
| gcc-11.4.1-3.el9.x86_64 | sysstat-12.5.4-7.el9.x86_64 |
| gcc-c++-11.4.1-3.el9.x86_64 | javapackages-tools |
| glibc-2.34-100.el9.x86_64 | lcms2 |
| glibc-devel-2.34-100.el9.x86_64 | syslinux |
| ksh | dejavu-sans-fonts |
| libaio-0.3.111-13.el9.x86_64 | dejavu-serif-fonts |
| libaio-devel-0.3.111-13.el9.x86_64 | dejavu-sans-mono-fonts |
| libgcc-11.4.1-3.el9.x86_64 | fontconfig |
| libstdc++-11.4.1-3.el9.x86_64 | zip |
| libstdc++-devel-11.4.1-3.el9.x86_64 | unzip |
| libXi-1.7.10-8.el9.x86_64 | libns |
| libXtst-1.2.3-16.el9.x86_64 | |

Once all the prerequisites have been completed as described above, start RSA Governance & Lifecycle Services.

</div>
