---
title: RSA G&L 8.0 P06
sidebar_label: v8.0 P06
sidebar_position: 5
---

<div className="text--justify">

# RSA Governance & Lifecycle 8.0 Patch 06

**Release Date:** March 2025
**Version:** 8.0.0 P06

## Executive Summary
RSA Governance & Lifecycle version 8.0.0 P06 introduces features designed to enhance system efficiency, automate key tasks, and improve visibility. With updates like Novell eDirectory Connector, Password Vault through Remote Agents, and disabling X-Powered-By Header, this release reduces manual intervention, optimizes performance, and bolsters security.

## Highlighted Features

### Novell eDirectory (LDAP) Connector
The Novell eDirectory Connector Template is now supported. It has been added to the LDAP Connector list when creating a new connector.

### Password Vault through Remote Agents
Password Vault can now be associated with a Remote Agent so that the CyberArk SOAP API calls go through the selected Remote Agent instead of the Local Agent. This feature enables G&L Cloud to utilize Password Vault through a Remote Agent installed in the same on-premises network as the CyberArk Central Credential Provider (CCP) SOAP web service. The Agent configured in the Password Vault Configuration UI applies to all password vault profiles configured in the collectors and connectors.

### X-Powered-By Header
The X-Powered-By header has been disabled in the HTTP response headers to prevent the exposure of technical stack details, including the underlying frameworks, software tools, and their versions. This enhances security by minimizing the risk of attackers gaining insight into the technologies used in the application, which could potentially help them identify vulnerabilities or tailor specific attacks.

It also helps to reduce the chances of targeted exploits based on known software versions or configurations.

## New Features

| Issue ID | Description |
| :--- | :--- |
| **[ACM-129177](https://rsa.atlassian.net/browse/ACM-129177)** | Under AFX > Connectors > Create New Connector > LDAP > Novell eDirectory has been added. |
| **[ACM-129109](https://rsa.atlassian.net/browse/ACM-129109)** | Postgres library has been upgraded from postgresql-42.2.18-1.0.0.jar to postgresql-42.2.29. |
| **[ACM-129090](https://rsa.atlassian.net/browse/ACM-129090)<br/>[ACM-128146](https://rsa.atlassian.net/browse/ACM-128146)** | Admin Rest API URL, Access ID, and Access Key fields are hidden and shown according to marking/unmarking the check box Generate Token from Access Key when User Authentication Type is set to JWT for Generic REST collectors. |
| **[ACM-129005](https://rsa.atlassian.net/browse/ACM-129005)** | The count values on the Home Dashboard can now be cached. It can be enabled by setting the custom.enableHomePageCountCache to true (it is false by default). Once this flag is set to true, set the number of minutes after which you want to reload the count cache.<br/>This can be defined by setting custom.homePageCountCacheInterval and providing integer value as a number of minutes, for example, 10 to set it refresh after every 10 minutes (5 minutes is the default value). |
| **[ACM-128962](https://rsa.atlassian.net/browse/ACM-128962)** | If a connector application jar already exists in the AFX folder /esb/apps, the application jar will not be generated again when the connector is deployed. |
| **[ACM-128813](https://rsa.atlassian.net/browse/ACM-128813)** | After the Workpoint update to version 4.50.13, a new parameter, WP_IFRAME_ORIGINS, has been introduced in the Aveksa_System.cfg file.<br/>This parameter needs to be configured for workflows to load or open properly. Workflows may fail to load when the application is accessed through a web proxy or a load balancer.<br/>For more information, please refer to the RSA Governance & Lifecycle 8.0 Installation Guide and Patch Installation Guide. |
| **[ACM-128781](https://rsa.atlassian.net/browse/ACM-128781)<br/>[ACM-128780](https://rsa.atlassian.net/browse/ACM-128780)** | JWT authentication for the Generic REST collector does not work in the G&L Cloud environment. Since providing the client file path to generate the JWT token is not feasible in the G&L Cloud, authentication fails. To address this issue, three new fields—Admin API URL, Access ID, and Access Key—have been introduced to generate the JWT token and authenticate the endpoint in the G&L Cloud. |
| **[ACM-123760](https://rsa.atlassian.net/browse/ACM-123760)** | In the Generic REST Entitlement Collector, UI Changes are implemented for the Entitlement option. Once the Entitlement option is selected, there are now 4 extra pages (for Resource_Action) in the wizard for mapping the Entitlement Attributes. |
| **[ACM-128747](https://rsa.atlassian.net/browse/ACM-128747)** | Improvements have been made to validate the referrer header for all the requests that G&L receives. |
| **[ACM-128552](https://rsa.atlassian.net/browse/ACM-128552)** | The X-Powered-By header is disabled from http response headers, to protect from exposing tech stack information (which includes underlying frameworks, software tools used, and their versions). |
| **[ACM-128551](https://rsa.atlassian.net/browse/ACM-128551)** | The system/server related information is now more secure after disabling the Host Header vulnerability. |
| **[ACM-128258](https://rsa.atlassian.net/browse/ACM-128258)** | The Statistics Collection of the Review Tables post Review Generation is now improved and working faster. |
| **[ACM-127789](https://rsa.atlassian.net/browse/ACM-127789)** | Password Vault can now be associated with a Remote Agent so that the CyberArk SOAP API calls go through the selected Remote Agent instead of the Local Agent. |
| **[ACM-125431](https://rsa.atlassian.net/browse/ACM-125431)** | In the Advanced Dashboards module, a new set of generic error messages are introduced to prevent the exposure of sensitive system details. These messages are displayed in the event of a failure. |



## Enhancements

| Issue ID | Description |
| :--- | :--- |
| **[ACM-129647](https://rsa.atlassian.net/browse/ACM-129647)** | The Archive process has been corrected to successfully run in parallel mode. In addition to introducing an Index to improve the Data Archiving process performance as it no longer takes time to archive data from the t_av_wfescalations table. |
| **[ACM-128922](https://rsa.atlassian.net/browse/ACM-128922)** | A Results tab is newly added to the Attribute Change Rule details page. This displays all processed users and their requests, if created. |
| **[ACM-128827](https://rsa.atlassian.net/browse/ACM-128827)** | A Requests tab is newly added to the Rule details page. This tab is added for the following Rule Types:<ul><li>Account Access</li><li>Attribute Change</li><li>Provisioning – Termination</li><li>Role Membership Rule Difference</li><li>Role Missing Entitlements</li><li>SOD</li><li>Unauthorized Change Detection</li><li>User Access</li></ul> |
| **[ACM-128704](https://rsa.atlassian.net/browse/ACM-128704)** | The Violations table is now displayed on the rule processing run Task Details page (including the quick filters: Open, Clear, and Closed). |
| **[ACM-128636](https://rsa.atlassian.net/browse/ACM-128636)** | **Performance Improvements with request forms.**<br/>When there are hidden tables in the form, the count queries for the tables were still being run and this used to cause delays in running forms if there were many hidden tables that were set to be displayed conditionally with some drop-down selection for example. This has now been addressed to make sure no queries are running for the hidden tables.<br/>Also, when there is grouping on the tables, the count queries were running multiple times and this has been addressed. An unnecessary run of the count query when the option Hide Tables If Empty option is used has been avoided with this fix.<br/>This fix improves the performance of forms when above features are used. |
| **[ACM-128902](https://rsa.atlassian.net/browse/ACM-128902)<br/>[ACM-128635](https://rsa.atlassian.net/browse/ACM-128635)** | The Home page loading time has been improved. The counts on the home screen will now load asynchronously. |
| **[ACM-128371](https://rsa.atlassian.net/browse/ACM-128371)** | Name field is now visible under the Self Looping Panel for Workflow nodes and names can be assigned to the self-looping transition lines. |
| **[ACM-128173](https://rsa.atlassian.net/browse/ACM-128173)** | The jodit-react library has been updated from v1.3.39 to the latest (v4.1.20).<br/>The Generic SSH Connector now supports the latest cipher with the introduction of the useLatestSSHVersionInConnector flag. This flag ensures compatibility for customers using older ciphers while also enabling support for the latest ones.<br/>If the user's system is updated with the latest cipher, they must set the useLatestSSHVersionInConnector flag to True to establish an SSH connection. By default, the flag remains False, ensuring continued support for systems with older ciphers. This change does not impact customers still using the old cipher. |
| **[ACM-128131](https://rsa.atlassian.net/browse/ACM-128131)<br/>SF-02577496<br/>[ACM-127419](https://rsa.atlassian.net/browse/ACM-127419)** | The Generic SSH Connector now supports the latest cipher with the introduction of the useLatestSSHVersionInConnector flag (set under Admin > System > Custom) to determine which library to use for use for Generic SSH Connector.<br/>This flag ensures compatibility for customers using older ciphers while also enabling support for the latest ones. It determines which library to use for use for the Generic SSH Connector.<br/>If the user's system is updated with the latest cipher, they must set the useLatestSSHVersionInConnector flag to true to establish an SSH connection using Apache Mina SSHD which supports the latest SSH version too.<br/>If the flag is set to false, or is left at its default value, the SSH connection will be established using JSch, which supports the old SSH version and Cipher.<br/>This ensures continued support for systems with older cipher. This change does not impact customers still using the old cipher. |
| **[ACM-123978](https://rsa.atlassian.net/browse/ACM-123978)** | A new checkbox Append Host Url: is added to the Restful Web Service Connector Capability Configuration page to ignore or append the URL from connector settings page. Complete URL can be specified in the Capability page after unchecking this checkbox. |
| **[ACM-121868](https://rsa.atlassian.net/browse/ACM-121868)** | The loading time of the Change Request Details landing page has been enhanced, with the Violation section set to load exclusively upon expansion. |




## Fixed Issues


| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | **[ACM-129692](https://rsa.atlassian.net/browse/ACM-129692)** | AFX works successfully when the user tries to update the account Attribute and the Account Group. Also, now the user can update the Active Directory ebaoappid attribute. |
| - | **[ACM-129686](https://rsa.atlassian.net/browse/ACM-129686)** | In G&L Cloud instances, under Admin > Monitoring > Memory Usage > Cloud DB Disk Usage Statistics and Cloud DB Usage Statistics, the user can successfully retrieve the Cloud DB disk space information. |
| **SF-02626393** | **[ACM-129522](https://rsa.atlassian.net/browse/ACM-129522)** | The AFX Connectors are now mapped to the Provisioning Node in the Workflow to set the correct configuration for the AFX Connector Capabilities. |
| **SF-02623755** | **[ACM-129408](https://rsa.atlassian.net/browse/ACM-129408)** | Null Pointer Exception no longer appears upon clicking the Finish button when editing a Generic REST based Entitlements Collector. |
| **SF-02626536** | **[ACM-129323](https://rsa.atlassian.net/browse/ACM-129323)** | The Active Directory Connector Capability Update Account is now working correctly. |
| **SF-02620578** | **[ACM-129316](https://rsa.atlassian.net/browse/ACM-129316)** | Update Account capability for Active Directory Connector now correctly provisions the change when the DN has an OU with parenthesis in its value. |
| **SF-02620137** | **[ACM-129213](https://rsa.atlassian.net/browse/ACM-129213)** | The RESTful Web Services Connector now successfully creates a matching group by applying the expression to the response. These groups help in performing the replacement operation. |
| **SF-02619348** | **[ACM-129116](https://rsa.atlassian.net/browse/ACM-129116)** | The Violations’ Exception Table now displays the correct remediators for users with a later expiration date (Exception Date and Granted By values are updated due to the change). |
| **SF-02618510** | **[ACM-129024](https://rsa.atlassian.net/browse/ACM-129024)** | The server timeout issue has been fixed during patch application. |
| **SF-02618498** | **[ACM-129022](https://rsa.atlassian.net/browse/ACM-129022)** | The Update Account capability for AD is working as expected, even with the Exchange property added. |
| - | **[ACM-129012](https://rsa.atlassian.net/browse/ACM-129012)** | The double quotes in the request body for the REST connector have been handled to ensure a successful token retrieval on the REST API. |
| **SF-02615912** | **[ACM-129007](https://rsa.atlassian.net/browse/ACM-129007)** | Create an Account capability, in RESTful Web Service Connector, configured to use Login capability by enabling Generate SessionToken option now works correctly. |
| **SF-02617806** | **[ACM-128984](https://rsa.atlassian.net/browse/ACM-128984)** | The stored procedures now builds properly for Generic Database Connector capabilities that include SQL methods like UPPER, LOWER in the query. |
| **SF-02615486** | **[ACM-128929](https://rsa.atlassian.net/browse/ACM-128929)** | When the access is reinstated before the next rule processing after the change request completion, the existing violation will be closed, and new violation is created on the next rule processing. |
| - | **[ACM-128877](https://rsa.atlassian.net/browse/ACM-128877)** | A minimum RAM requirement warning in the install and startup scripts has been added. For RHEL 8 and above, the OS memory reservation has been changed from 2GB to 4GB. |
| - | **[ACM-128833](https://rsa.atlassian.net/browse/ACM-128833)** | A custom parameter hideSchemaForCollectors has been introduced to control whether to auto-fetch and display Object Classes or Schemas from endpoints such as Active Directory or CSV files, during a collector configuration change. The parameter value defaults to true for G&L Cloud and false for on-premises G&L deployments.<br/>When the parameter is set to false, the Object Classes or Schemas are auto fetched when editing a collector.<br/>When set to true, the Object Classes or Schemas are not auto fetched and instead a button labeled Fetch Source Schema or Fetch Schema is displayed where clicking the button retrieves the schema from an endpoint.<br/>Enabling the flag helps improve UI performance when editing a collector that is bound to a remote agent or there are network delays in connection to the endpoint. |
| **SF-02613737** | **[ACM-128830](https://rsa.atlassian.net/browse/ACM-128830)** | The AFX now works efficiently when any RESTful Web Service Connector is created with authentication type as JWT. An AFX server memory leak associated with the use of JWT tokens in RESTful Web Service Connector has also been fixed. |
| **SF-02612957** | **[ACM-128725](https://rsa.atlassian.net/browse/ACM-128725)** | In the Role Review Results, the Change Preview tab has been modified to support grouping, and additional columns have been incorporated to enhance search functionality. |
| **SF-02611766** | **[ACM-128724](https://rsa.atlassian.net/browse/ACM-128724)** | In the Role Review Results, the Change Preview section shows the Application name listed in the Members App column for modifications related to Group and Global Role types. |
| **SF-02612893** | **[ACM-128715](https://rsa.atlassian.net/browse/ACM-128715)** | The data between the accountexpires value on the Active Directory and the Expiration Date collected is now matching correctly. |
| **SF-02612180** | **[ACM-128712](https://rsa.atlassian.net/browse/ACM-128712)** | In the Group Review Results, the Change Preview section shows the correct value for the Subcomponent Type, Subcomponent Name, and Subcomponent Raw Name columns for the Application Role type group changes. |
| **SF-02611730** | **[ACM-128703](https://rsa.atlassian.net/browse/ACM-128703)** | Migrated workflows now properly import the Transition lines. |
| **SF-02610730** | **[ACM-128658](https://rsa.atlassian.net/browse/ACM-128658)** | Database Connector capabilities has been fixed when there is a space in the parameter name. |
| **SF-02608742** | **[ACM-128657](https://rsa.atlassian.net/browse/ACM-128657)** | Log files under AFX server folder AFX/esb/logs/rolled no longer pile up avoiding potential disk space issues. |
| - | **[ACM-128639](https://rsa.atlassian.net/browse/ACM-128639)** | Intermittent unification failure has been fixed. |
| **SF-02588600** | **[ACM-128633](https://rsa.atlassian.net/browse/ACM-128633)** | When editing Local Entitlements, the Data Source Type is now correctly displayed. |
| **SF-02610322** | **[ACM-128558](https://rsa.atlassian.net/browse/ACM-128558)** | The Timeout field now also applies to the Response (Response Timeout), which is set to a specific duration. If the Generic REST Collector does not receive a response from the endpoint within this time, it will abort the process instead of staying in the Waiting State. |
| **SF-02606342** | **[ACM-128557](https://rsa.atlassian.net/browse/ACM-128557)** | Vulnerabilities have been fixed:<ul><li>Host header injection</li><li>Banner grabbing</li><li>Insecure direct object reference</li><li>No Rate limited</li><li>Concurrent login</li></ul> |
| **SF-02605402** | **[ACM-128529](https://rsa.atlassian.net/browse/ACM-128529)** | The action buttons are now correctly displayed under Role Review > Display Options. |
| **SF-02608762** | **[ACM-128497](https://rsa.atlassian.net/browse/ACM-128497)** | Update Account capability in OpenLDAP Connector picks up the DN correctly. |
| **SF-02604613** | **[ACM-128493](https://rsa.atlassian.net/browse/ACM-128493)** | Now the user can easily reorder and/or resize columns displayed under User Access Review. |
| **SF-02604707** | **[ACM-128389](https://rsa.atlassian.net/browse/ACM-128389)** | The Java Code-Based Connector can now successfully update and delete the Implementation jar. |
| **SF-02604498** | **[ACM-128251](https://rsa.atlassian.net/browse/ACM-128251)** | Data Purging process now works properly. |
| **SF-02601778** | **[ACM-128202](https://rsa.atlassian.net/browse/ACM-128202)** | Requests generated from Rule Violations are no longer shown in the Pending Submissions. |
| - | **[ACM-128201](https://rsa.atlassian.net/browse/ACM-128201)** | Uploading custom JAR files for Generic Database Connector Template functions properly. |
| **SF-02603188** | **[ACM-128102](https://rsa.atlassian.net/browse/ACM-128102)** | The Entitlement Data Collectors (EDC) import process is now functioning correctly. Multiple local EDCs cannot be imported within the same app, but multiple EDCs of other types can be imported. |
| **SF-02601910** | **[ACM-128087](https://rsa.atlassian.net/browse/ACM-128087)** | - |
| **SF-02602846** | **[ACM-127983](https://rsa.atlassian.net/browse/ACM-127983)** | Errors like "Synonym is already defined" and "Duplicate transition already exists" no longer occur when updating a workflow. |
| **SF-02597062** | **[ACM-128078](https://rsa.atlassian.net/browse/ACM-128078)** | The user can now easily upload jar files to a cloned connector template. |
| **SF-02595142** | **[ACM-127972](https://rsa.atlassian.net/browse/ACM-127972)** | When changing a password in the WebService Node in the Workflow, authentication works successfully. |
| **SF-02596681** | **[ACM-127938](https://rsa.atlassian.net/browse/ACM-127938)** | The AFX Server performance has been fixed. Also, the Response Timeout is now set to 30 seconds instead of 2 minutes to avoid requests piling up in the ACM side. |
| **SF-02589197** | **[ACM-127695](https://rsa.atlassian.net/browse/ACM-127695)** | When editing or updating collector schedules, it no longer causes duplicate collection runs in a cluster environment. |
| **SF-02592373** | **[ACM-127691](https://rsa.atlassian.net/browse/ACM-127691)** | Form content and Email content for Approval Activity node in workflows no longer add extra spaces. |
| **SF-02593065** | **[ACM-127675](https://rsa.atlassian.net/browse/ACM-127675)** | Testing the Create Account Capability on the JavaCodeBased Connector is now successful (no errors occur). |
| **SF-02590265** | **[ACM-127549](https://rsa.atlassian.net/browse/ACM-127549)** | The issue of role export failure has been resolved in scenarios involving nested role structures, where certain mappings were retrieving multiple entries instead of a unique role entry. |
| **SF-02579212** | **[ACM-127474](https://rsa.atlassian.net/browse/ACM-127474)** | An issue has been identified in specific environments where the Change Verification data run is obstructing the queue, despite the completion of all underlying tasks. This has been handled, to address this issue, set the custom setting MonitorDataRuns flag to true and restart ACM. |
| **SF-02564841** | **[ACM-126425](https://rsa.atlassian.net/browse/ACM-126425)** | - |
| **SF-02571377** | **[ACM-125608](https://rsa.atlassian.net/browse/ACM-125608)** | Transition Lines in some Workflows are correctly displayed (no longer have missing parts). |
| **SF-02542715** | **[ACM-126271](https://rsa.atlassian.net/browse/ACM-126271)** | When collecting Application Entitlements, and the MADEC finds some missing/deleted data and then returned, the App-Roles are created without duplications. |
| - | **[ACM-124755](https://rsa.atlassian.net/browse/ACM-124755)** | When a user is assigned to a Role through the Add Access form, and the Role includes entitlements from the application that mandates an account and has a defined password policy, the Request form processing has been fixed. |


## Known Issues and Limitations

| Issue ID | Description |
| :--- | :--- |
| **[ACM-129155](https://rsa.atlassian.net/browse/ACM-129155)** | In the Workflow, the Add Another checkbox is not working. |

## Platform Support Matrix

The latest application server and JDK version have been certified for this release.

| | RSA Governance & Lifecycle<br/>Software Bundle | Software Only<br/>(WebLogic or WebSphere) | RSA Governance & Lifecycle<br/>Virtual Application | Container |
| :--- | :--- | :--- | :--- | :--- |
| **Application Server Version** | | | | |
| WildFly 24.0.1 Included | Qualified | N/A | Qualified | Qualified |
| WebLogic 14.1.1.0 | N/A | Qualified | N/A | N/A |
| WebSphere 9.0.5.21 | N/A | Qualified | N/A | N/A |
| **JDK Version Certified** | | | | |
| AdoptOpenJDK 1.8.0_442 | Qualified | N/A | Qualified | N/A |
| Oracle JDK 1.8.0_441<br/>(WebLogic) | N/A | Qualified | N/A | N/A |
| IBM JDK 1.8.0_431<br/>(WebSphere) | N/A | Qualified | N/A | N/A |
| **Operating Systems** | | | | |
| SUSE (SLES 12 SP5, and SLES 15 SP6) | Qualified | N/A | Qualified | N/A |
| Red Hat (RHEL 8.10 and RHEL 9.4) | Qualified | N/A | N/A | N/A |

<small>*RSA Governance & Lifecycle version 8.0 P05 and later software bundle is now supported on RHEL 9.4+ (must install on RHEL 8 first, then upgrade).*</small>

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
