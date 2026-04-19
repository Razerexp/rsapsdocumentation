---
title: RSA G&L 8.0 P04
sidebar_label: v8.0 P04
sidebar_position: 7
---

<div className="text--justify">

# RSA Governance & Lifecycle 8.0 Patch 04

**Release Date:** 2024-09-25  
**Version:** 8.0.0 P04

## Executive Summary
RSA Governance & Lifecycle version 8.0.0 P04 introduces features designed to enhance system efficiency, automate key tasks, and improve visibility. With updates like automatic archiving, critical event notifications, improved AFX management, and expanded cloud insights, this release reduces manual intervention, optimizes performance, and bolsters security.

## Feature Highlights

### AFX Auto Shutdown
A new property is added to enable and disable the auto shutdown feature of AFX when ACM is not running for a long time. The option is added to avoid resource usage when ACM is not running for a long time. 
Added a new property `afx.config.custom.flag.autoAfxShutdown` in the `AFX/esb/lib/user/afx-config.properties` and `AFX/esb/domains/01-AFX-DOMAIN/afx-config.properties` file. The behaviour of AFX when this flag is enabled and disabled is as follows:
* **True:** This is the default option and the AFX server goes down if the ACM is not up and running for 1 hour and 30 minutes. This option is recommended to avoid resource usage when ACM is not running for so long.
* **False:** The AFX server will not go down if the ACM is not running.

### Automated Archiving Enhancements
You can now automate the archiving process by specifying cutoff dates for older data (ex: 12 months) on a scheduled basis (once, daily, weekly, monthly, yearly). This "set and forget" feature saves time and reduces manual effort, ensuring the data is consistently managed without manual intervention. By automating archiving, you can maintain compliance and optimize system performance effortlessly.
A new scheduling option for Archiving Data is found at **Admin > System > Data Management**. This feature allows you to control the maximum time the Data Management task can run (default 4 hours). Only users with Admin access (AveksaAdmin) can activate or deactivate this feature. This prevents the data management tasks from running during normal business hours, which can impact performance.
You can now create a schedule to automatically archive data older than a specific age (i.e. 1 year) daily, weekly, monthly, quarterly, semi-annually, annually, or just once. For more information, see the Archiving Data section in the Administrator’s Guide on RSA Community.

### Automatic Token Regeneration for REST Collectors
Generic REST Collectors now support automatic token regeneration upon expiration for Token-Based Authentication, eliminating the need for manual token updates.
It reduces administrative overhead and ensures uninterrupted service availability. By automating token management, you can focus on more strategic tasks while maintaining secure and continuous access to their systems.
The user configures the collector once with the token validity, and the token is automatically regenerated when it expires. The user does not have to monitor the process anymore.

### Critical Event Notifications
A new feature called Critical Event Notifications is now available at **Admin > Email > Custom Events**. It allows you to monitor and respond to the most relevant events to your business operations. You can either use OOTB events or define your custom critical event utilizing the type of configuration and notification.
This flexibility ensures that important events do not go unnoticed, empowering businesses to take timely actions and maintain optimal performance. By focusing on what matters most, you can better manage risks and ensure business continuity. For more information, see the Managing Custom Events section in the Administrator’s Guide on RSA Community.

### Enhanced OS Visibility in ASR Reports
ASR reports now include detailed OS information, including version details, reducing the need for a back-and-forth between you and support teams. This enhancement streamlines the support process, accelerates issue resolution, and improves the overall user experience by providing more complete and actionable data in a single report.
The system is enhanced to extract and display detailed OS versions and information by reading the `/etc/os-release` file. This improvement allows showing specific distributions like Red Hat or SUSE Linux, along with their versions, giving customers a clearer understanding of the platform they are using.

### Expanded Cloud Platform Insights
With the latest enhancements to our G&L Cloud platform, you can now access detailed database usage metrics. This visibility empowers you to optimize your cloud resources, prevent overages, and better manage your cloud environments. You can make informed decisions that align with your budget and performance goals.
Using AWS scripts, we obtain disk usage data and total allocated disk space from the instances. This information is valuable for effectively managing RDS disk space and preventing disk shortage issues and it also provides insights into how disk space is distributed across different tables.

### Microsoft Entra Compatibility in Generic REST Collector and Connector
The Generic REST Collector and Connector now support Microsoft Entra, allowing you to integrate with Microsoft Identity and Access Management solutions. This update broadens compatibility and provides more options for managing their IT environments, ensuring their identity solutions remain flexible and future-proof.
You configure the new Microsoft Graph REST APIs using the latest Microsoft Entra solutions in the Generic REST Collector and Connector.

### Microsoft Graph PowerShell SDK Integration in Office 365 Collector
The Office 365 collector has been updated to use the latest MS Graph PowerShell SDK. This modernization enhances compatibility with current Microsoft environments and ensures you can leverage the latest features from Microsoft. It helps you improve the long-term viability and supportability of their integration.
A new custom setting `useMSGraphPowershellSDKInOffice365` is introduced in Office365 ADC and EDC collectors to support using the latest MS Graph PowerShell SDK-based commands. By default, you can use the existing MS-Online commands. You can switch between commands through one of the following options:
* MS-Online SDK: `custom.useMSGraphPowershellSDKInOffice365 = false`
* MS Graph PowerShell SDK: `custom.useMSGraphPowershellSDKInOffice365 = true`

### Optimized AFX Startup and Connector Deployment
This update includes several quality-of-life improvements, such as enhanced detection, notification, and remediation of AFX-related startup issues. It reduces the likelihood of bugs and deployment challenges, leading to more stable and efficient operations. You will experience fewer disruptions, more visibility for errors, and faster resolutions, ultimately increasing productivity and satisfaction with the platform.
During the AFX startup, warning messages are displayed if the following criteria are not met:
* System RAM size is less than 32GB
* JRE is installed instead of JDK
* Maven Home is already set in the environment variable
* Required ports are not available

### SON Switchover
The SON node can now be switched between nodes without requiring a reboot or manual configuration changes. This enables continuous operations during maintenance, or OS patching, limiting downtime or disruptions. Administrative tasks including scheduling and collections will automatically transition to the new SON node, enhancing system reliability and reducing the risk of service interruptions. Administrative tasks including scheduling and collections will automatically transition to the new SON node, enhancing system reliability and reducing the risk of service interruptions.
The Make Next SON option streamlines the process, eliminating the need for multiple restarts and configuration updates. A Now radio button is introduced in the dialog box that appears when using the Make Next SON button under **Admin > System > Server Nodes > Make Next SON**. To use this option, the system must be put into maintenance mode. For more information, see the Managing Server Cluster Nodes section in the Administrator’s Guide on RSA Community.

## New Features

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | [ACM-125677](https://rsa.atlassian.net/browse/ACM-125677) | **AFX:** A new feature to enable and disable the AFX Server auto-shutdown is now supported. A new property `afx.config.custom.flag.autoAfxShutdown` is introduced in `AFX/esb/lib/user/afx-config.properties` and `AFX/esb/domains/01-AFX-DOMAIN/afx-config.properties` files. The scenarios when the value of this flag is set to true or false are: True: This is the default option and the AFX server goes down if the ACM is not up and running for 1 hour and 30 minutes. This option is recommended to avoid resource usage when ACM is not running for so long. False: The AFX server will not go down if the ACM is not running. |
| - | [ACM-123432](https://rsa.atlassian.net/browse/ACM-123432) | **Change Requests and Workflow:** Workpoint has been upgraded to version 4.50.10. |
| - | [ACM-126131](https://rsa.atlassian.net/browse/ACM-126131) | **Cloud:** As part of the Expanded Cloud Platform Insights feature, the database usage in G&L Cloud is retrieved every 30 minutes by default and displayed on the UI > **Admin > Monitoring > Memory Usage** page. The default 30-minute interval can be changed by adding a custom flag `RdsDiskSpaceFetchPollInterval` and setting a preferred value in minutes. A restart of ACM services is required for the changes to take effect. |
| - | [ACM-126614](https://rsa.atlassian.net/browse/ACM-126614) | **Collector:** A custom feature flag is introduced to support MS Graph SDK in Office 365 ADC and EDC Collectors. For details, see the new feature Microsoft Graph PowerShell SDK Integration in Office 365 Collector description. |
| - | [ACM-125731](https://rsa.atlassian.net/browse/ACM-125731) | **Server Core:** The ASR Report has been updated to display the details of the named queries. |
| - | [ACM-125730](https://rsa.atlassian.net/browse/ACM-125730) | **Server Core:** Named queries, when configured, are logged to `aveksaServer.log` on server startup. |

## Enhancements

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | [ACM-123823](https://rsa.atlassian.net/browse/ACM-123823) | **Access Certification:** Enhanced log collection capability to gather logs from all nodes in a cluster environment. This feature is controlled by the `CollectLogsFromAllNodes` flag (which defaults to `true`) and can be toggled off to allow log collection only from the node on which the user is currently logged in. |
| - | [ACM-126196](https://rsa.atlassian.net/browse/ACM-126196) | **Access Requests:** The Leave of Absence (LOA) or Out-of-Office (OOO) request of a user will now be cancelled if the user is terminated before the return date. |
| - | [ACM-124906](https://rsa.atlassian.net/browse/ACM-124906) | **AFX:** The RESTful Web Service Connector is enhanced to support `Content-Type: application/x-www-form-urlencoded`. |
| - | [ACM-124562](https://rsa.atlassian.net/browse/ACM-124562) | **AFX:** The RESTful Web Service Connector now supports JSON paths when the API returns a response with the content type of `application/scim+json`. |
| - | [ACM-120398](https://rsa.atlassian.net/browse/ACM-120398) | **Cloud:** The G&L Cloud shows the amount of RDS disk space under **Admin > Monitoring > Memory Usage** (The default refresh is 30 minutes). |
| - | [ACM-123236](https://rsa.atlassian.net/browse/ACM-123236) | **Collector:** The Generic REST Collector now retrieves a new token when the previous token expires. |
| - | [ACM-125674](https://rsa.atlassian.net/browse/ACM-125674) | **Connector:** During the AFX startup, the required ports are printed along with their status (available or in use). This will show potential port conflicts during startup. |
| - | [ACM-124525](https://rsa.atlassian.net/browse/ACM-124525) | **Connector:** In the Active Directory Connector, the Use Secure Connection option is read-only and set to enabled for improved security. |
| - | [ACM-125540](https://rsa.atlassian.net/browse/ACM-125540) | **Installer:** ACM start-up now validates the installed JDK version. |

## Fixed Issues

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| **SF-02540808** | [ACM-124771](https://rsa.atlassian.net/browse/ACM-124771) | **Account Management:** When a Naming Policy is configured with the Allow base name if unique option enabled AND using a Base Name Transform that transforms a custom attribute value to an uppercase character string, the value 1 is appended to a unique base name if the custom attribute value is already in uppercase. This issue does not exhibit if the unique-base name value is not in uppercase. A new custom parameter `disableUniqueAttributeValue` has been introduced which, if set to `true`, will no longer append the value 1 to a unique-base name that is already in uppercase. |
| **SF-02576058** | [ACM-126463](https://rsa.atlassian.net/browse/ACM-126463) | **AFX:** The Database Connector no longer reports an error in the change request when it is successfully provisioned. |
| **SF-02578674** | [ACM-126424](https://rsa.atlassian.net/browse/ACM-126424) | **AFX:** If the AFX Server is not used (disabled or deleted), it will not fill the aveksaServer log with the message AFX Server is not running. |
| **SF-02575541** | [ACM-126245](https://rsa.atlassian.net/browse/ACM-126245) | **AFX:** Multiple Java Code-based Connectors configured with different custom jars are not loaded due to Mule limitation causing the connector capability functionality to fail. |
| **SF-02570140** | [ACM-125977](https://rsa.atlassian.net/browse/ACM-125977) | **AFX:** AFX Database Connector Capability no longer throws an error when the Update Statements are configured in the Create Account Capability. |
| **SF-02564349** | [ACM-125788](https://rsa.atlassian.net/browse/ACM-125788) | **AFX:** The Reset Account Password capability did not work when using the Generic SSH Connector. |
| - | [ACM-125627](https://rsa.atlassian.net/browse/ACM-125627) | **AFX:** Active Directory Update Account now supports the use of (\) in the accountDN. |
| **SF-02563992** | [ACM-125607](https://rsa.atlassian.net/browse/ACM-125607) | **AFX:** AFX now supports processing requests with data that contains special characters (&lt;, &gt;, &, \, '). |
| **SF-02558664** | [ACM-125572](https://rsa.atlassian.net/browse/ACM-125572) | **AFX:** Random Requests stuck on the AFX Fulfillment Handler node and did not handle the AFX failure. AFX failure handling and retry mechanisms were added for the SAP Connector. If the requests are stuck on the AFX Fulfillment handler node with endpoint failure, based on the retry configuration, it retries the request to complete the CR which got stuck in the fulfillment handler. |
| **SF-02562591** | [ACM-125500](https://rsa.atlassian.net/browse/ACM-125500) | **AFX:** Microsoft Exchange Connector can now be provisioned when it is referenced as a Dependent Exchange Connector in an Active Directory Connector. |
| **SF-02547715** | [ACM-125460](https://rsa.atlassian.net/browse/ACM-125460) | **AFX:** The RESTful Web Service Connector updates its OAuth token, causing the connector’s lastmodifieddate and revision to change and making it eligible for redeployment. |
| **SF-02559250** | [ACM-125291](https://rsa.atlassian.net/browse/ACM-125291) | **AFX:** The AFX Server startup script, afx_server, fails due to (.) appended to one of the paths. |
| **SF-02544576** | [ACM-124443](https://rsa.atlassian.net/browse/ACM-124443) | **Authentication:** When a Load Balancer, front-ending a G&L application using SSO, is configured to block web sessions based on LB's session timeout, the G&L application's session timeout functionality fails unexpectedly with errors on the UI, such as, "Unauthorized Error", "Request Loader Error", and "Bad Request Error". A client-side code has been introduced to redirect to the login page if the current time is longer than the session timeout. |
| **SF-02575290** | [ACM-126426](https://rsa.atlassian.net/browse/ACM-126426) | **Change Requests and Workflow:** Due Dates of escalations in workflows now accept negative values to work backward from a set Duration. |
| **SF-02574415** | [ACM-126168](https://rsa.atlassian.net/browse/ACM-126168) | **Change Requests and Workflow:** Fixed an issue where workflows may not be saved correctly after an upgrade due to a parsing error. |
| **SF-02566810** | [ACM-125836](https://rsa.atlassian.net/browse/ACM-125836) | **Change Requests and Workflow:** Fixed an issue where some completed workflows will show an error when `acm.VariableLevel` or `acm.bussource` are used. |
| - | [ACM-125594](https://rsa.atlassian.net/browse/ACM-125594) | **Change Requests and Workflow:** The Delay node used in a loop only works for the first iteration; all subsequent iterations of the delay node do not wait for the configured time. |
| - | [ACM-125573](https://rsa.atlassian.net/browse/ACM-125573) | **Change Requests and Workflow:** Default variables can now be edited in Workflows. |
| **SF-02560239** | [ACM-125448](https://rsa.atlassian.net/browse/ACM-125448) | **Change Requests and Workflow:** The option Complete Work Assigned if Activity is Verified in a workflow configuration was not being considered when unchecked. |
| **SF-02549564** | [ACM-124754](https://rsa.atlassian.net/browse/ACM-124754) | **Change Requests and Workflow:** SOAP Web Service Node is fixed to allow users who have Diacritic marks in their name (ex: João). |
| **SF-02519473** | [ACM-123853](https://rsa.atlassian.net/browse/ACM-123853) | **Change Requests and Workflow:** Fixed an issue where a subsequent approval in a Change Request was ignored when the previous approver was not found. |
| - | [ACM-127363](https://rsa.atlassian.net/browse/ACM-127363) | **Connector:** Adding and removing values of multi-value attributes using the parameters `add_<attr>` or `remove_<attr>` in the endpoint using the Active Directory Connector is now supported. |
| **SF-02569804** | [ACM-125897](https://rsa.atlassian.net/browse/ACM-125897) | **Connector:** Added the None authentication type back into the Generic REST Connector as it was removed in v8.0.0. |
| **SF-02546321** | [ACM-124580](https://rsa.atlassian.net/browse/ACM-124580) | **Custom Attributes:** Under Admin > Attribute > Entitlement, an error occurs when creating an attribute that has a User Data Type. |
| **SF-02544627** | [ACM-124553](https://rsa.atlassian.net/browse/ACM-124553) | **Custom Attributes:** Changed the custom attribute `UseDirectTablesInplaceofGlobalRoleDefView` to be able to use `true` instead of `TRUE` to conform to other custom attributes. |
| **SF-02558723** | [ACM-125405](https://rsa.atlassian.net/browse/ACM-125405) | **Dashboard:** Fixed the toggle to show the correct state of Risk and Gamification if the Advanced Dashboards are disabled. Previously, they could be turned on even when the Advanced Dashboards were turned off. |
| **SF-02581919**<br/>**SF-02571335**<br/>**SF-02579949** | [ACM-126721](https://rsa.atlassian.net/browse/ACM-126721)<br/>[ACM-126327](https://rsa.atlassian.net/browse/ACM-126327)<br/>[ACM-126597](https://rsa.atlassian.net/browse/ACM-126597) | **Data Collection Processing and Management:** Fixed an issue where MAEDC relationships were duplicated and sub-sequentially rejected which caused null references. |
| **SF-02520254** | [ACM-124941](https://rsa.atlassian.net/browse/ACM-124941) | **Database Management:** Improved performance in querying workflow jobs. |
| **SF-02549998** | [ACM-124746](https://rsa.atlassian.net/browse/ACM-124746) | **Database Management:** Duplicate users are created when moving from one primary IDC to another with the same set of data in the secondary IDC after a successful collection/unification run with create users set as No. |
| **SF-02381246** | [ACM-116574](https://rsa.atlassian.net/browse/ACM-116574) | **Database Management:** Added the Purge option to tables starting with `RR_` during report generation to prevent disk space issues. |
| **SF-02564072** | [ACM-125570](https://rsa.atlassian.net/browse/ACM-125570) | **Database Performance:** Performance has been improved significantly when selecting a user from Users > Users page to view the user details when the number of users is very large in the database. |
| **SF-02574626** | [ACM-126176](https://rsa.atlassian.net/browse/ACM-126176) | **Descriptions:** Fixed an issue where a NULL value in a Description could not be deleted. |
| **SF-02528553** | [ACM-123792](https://rsa.atlassian.net/browse/ACM-123792) | **Local Entitlements:** The terminated users’ Local Entitlements are not removed/deleted. |
| **SF-02572744** | [ACM-126074](https://rsa.atlassian.net/browse/ACM-126074) | **Request Forms:** Conditions set under the Enabled tab, for a new field in a request form, are deleted when the Control Type for the field is changed from visual or normal controls to non-visual or hidden controls. |
| **SF-02571711** | [ACM-125937](https://rsa.atlassian.net/browse/ACM-125937) | **Reviews:** After running the review, the custom view does not appear in the results. |
| **SF-02559222** | [ACM-125380](https://rsa.atlassian.net/browse/ACM-125380) | **Reviews:** Fixed an issue where the User Access Review text is incorrectly displayed due to using a specific language and not the browser language. |
| **SF-02553713** | [ACM-125030](https://rsa.atlassian.net/browse/ACM-125030) | **Reviews:** Fixed a caching issue that can cause the Delegation Icon to not appear in User Access Reviews. |
| **SF-02553663** | [ACM-124922](https://rsa.atlassian.net/browse/ACM-124922) | **Reviews:** Updated the logic to ignore duplicated comments in Review Items. |
| **SF-02553678** | [ACM-124918](https://rsa.atlassian.net/browse/ACM-124918) | **Reviews:** In the Role Review, an error occurs when using the Advanced Search bar. |
| - | [ACM-127400](https://rsa.atlassian.net/browse/ACM-127400) | **Rules:** If users are removed from a role that has a hierarchy of nested or child roles as entitlements (whether this is executed through methods like the Role Membership Rule Difference, User Access Rule (UA), Segregation of Duties (SoD) rules, User Access Review, or by directly removing the role from the user through the access screen) the resulting change request will not include the indirect change request item necessary for the removal of entitlements linked to the nested or child role. This issue occurred only in v8.0.0 P03. |
| **SF-02570137** | [ACM-125808](https://rsa.atlassian.net/browse/ACM-125808) | **Rules:** If the custom flag `isNoAutoDeleteOrphanAccounts` was used, it split CRs. This created duplicate CRs which can cause accounts to be deleted immediately instead of respecting the Termination Rules. |
| **SF-02546881** | [ACM-124734](https://rsa.atlassian.net/browse/ACM-124734) | **Rules:** Fixed an issue where "Relevant Violations" showed the total number of violations instead of only showing the number of violations that are part of the current CR. |
| **SF-02570415** | [ACM-126088](https://rsa.atlassian.net/browse/ACM-126088) | **Security:** Updated the cfx libraries to 3.5.9 to fix CVE-2024-28752. |
| **SF-02570099** | [ACM-125929](https://rsa.atlassian.net/browse/ACM-125929) | **Security:** The older version of Log4j 1.x was removed from a third-party dependent library, resolving CVE-2021-4104 in the AFX module of the application. |
| **SF-02566052**<br/>**SF-02552906** | [ACM-125617](https://rsa.atlassian.net/browse/ACM-125617)<br/>[ACM-124916](https://rsa.atlassian.net/browse/ACM-124916) | **Security:** SSL is now configured by default for the remote Java JMX Agent. |

## Known Issues and Limitations

| Category | Issue ID | Description / Workaround |
| :--- | :--- | :--- |
| **AFX** | **[ACM-125962](https://rsa.atlassian.net/browse/ACM-125962)** | **Issue:** Whenever the SON is switched, the connector test setting does not work.<br/><br/>**Workaround:** After switching the SON, do as follows:<br/> 1. Stop the AFX servers.<br/> 2. Update the new hostname `afx.config.acm.host` in `AFX/esb/domain/01-AFX-DOMAIN/afx-config.properties` and `AFX/esb/lib/user/afx-config.properties`.<br/> 3. Restart the AFX servers. |
| **Agent** | **[ACM-127156](https://rsa.atlassian.net/browse/ACM-127156)** | **Issue:** The RemoteAgent does not work when the SON node is switched while the current SON is down.<br/><br/>**Workaround:**<br/>1. The RemoteAgent will not start automatically.<br/>2. Manually download and update the configuration files.<br/>3. Restart the RemoteAgent. |
| **Change Requests and Workflow** | **[ACM-127456](https://rsa.atlassian.net/browse/ACM-127456)** | **Issue:** Removing violating users or entitlements from a Role through the Role Management tab does not work. The General page for the generated CRs would not be accessible showing an error “The request could not be handled”. This issue only applies to v8.0.0 P04.<br/><br/>**Workaround:**<br/>* If you have not attempted to remove violating users or entitlements from the Role Management tab, you can alternatively remove the violating users or entitlements from the Users > Access page or through Reviews.<br/>* If you have already attempted to remove violating users or entitlements from the Role Management tab, perform the following steps:<br/> 1. Cancel the corresponding CR from Requests > Requests.<br/> 2. Go to the Role Management tab and revert the role changes.<br/> 3. Process the violated rule. The violating users or entitlements can be removed from the Users > Access page or through Reviews. |

## Platform Matrix

The latest application server and JDK version have been certified for this release.

| | RSA Governance & Lifecycle<br/>Software Bundle | Software Only<br/>(WebLogic or WebSphere) | RSA Governance & Lifecycle<br/>Virtual Application | Container |
| :--- | :--- | :--- | :--- | :--- |
| **Application Server Version** | | | | |
| WildFly 24.0.1 Included | Qualified | N/A | Qualified | Qualified |
| WebLogic 14.1.1.0 | N/A | Qualified | N/A | N/A |
| WebSphere 9.0.5.20 | N/A | Qualified | N/A | N/A |
| **JDK Version Certified** | | | | |
| AdoptOpenJDK 1.8.0_422 | Qualified | N/A | Qualified | N/A |
| Oracle JDK 1.8.0_411<br/>(WebLogic) | N/A | Qualified | N/A | N/A |
| IBM JDK 1.8.0_411<br/>(WebSphere) | N/A | Qualified | N/A | N/A |

### Product Support with Operating System

| Operating System | Customer-Supplied Oracle Remote Database | RSA Supplied Local Database | RSA Supplied Database Installed Remotely |
| :--- | :--- | :--- | :--- |
| SUSE (SLES 12 SP5, and SLES 15 SP4 & SP5) | N/A | Qualified | Qualified |
| Red Hat (RHEL 8.4, 8.5, 8.6, 8.7 & 8.8) | N/A | Qualified | Qualified |

</div>
