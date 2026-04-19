---
title: RSA G&L 8.0 P02
sidebar_label: v8.0 P02
sidebar_position: 9
---

<div className="text--justify">

# RSA Governance & Lifecycle 8.0 Patch 02

**Version:** 8.0.0 P02

## Executive Summary
8.0.0 P02 is available as a patch and full installer. The 8.0.0 original GA build has been replaced with the 8.0.0 P02 full installer. If you have installed 8.0.0 or later, you can apply the 8.0.0 P02 patch. Otherwise, RSA recommends that you use the 8.0.0 P02 full installer for any new deployment or upgrade from earlier versions.

> [!WARNING]
> Bitmap indexes and altering indexes ONLINE are not supported on Oracle Standard Edition (SE). For customers currently on Oracle SE and planning to upgrade to RSA Governance & Lifecycle latest version 8.0.0 P02 and above, normal indexes will be created in place of bitmap indexes.
>
> This transition should not cause any major disruptions, but it may lead to performance differences compared to Oracle Enterprise Edition (EE) users. However, performance concerns should be minimal as the Oracle SE users have been utilizing regular indexes and will continue to do so with the RSA Governance & Lifecycle latest versions.
> * Customers on Oracle EE are not permitted to downgrade to Oracle SE.
> * Customers on Oracle SE are not permitted to upgrade Oracle EE at the moment; it will be supported in the future.

## New Features

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | [ACM-122724](https://rsa.atlassian.net/browse/ACM-122724)<br/>[ACM-122723](https://rsa.atlassian.net/browse/ACM-122723) | **AFX:** Access Key Authentication implemented for existing SCIM connector. |
| - | [ACM-122666](https://rsa.atlassian.net/browse/ACM-122666) | **AFX:** Improvements in AFX (ActiveMQ component) for better performance in handling large batches of requests. |
| - | [ACM-122844](https://rsa.atlassian.net/browse/ACM-122844) | **Collector:** Generic REST-based collectors can use the JWT token (JSON Web Token) as a User Authentication Type. |
| - | [ACM-123160](https://rsa.atlassian.net/browse/ACM-123160) | **Connector:** If any AFX Custom Connector Template is missing or not uploaded, the connector using this template will not be deployed. |
| - | [ACM-123009](https://rsa.atlassian.net/browse/ACM-123009) | **Connector:** Implemented UIP to Request or Cancel an Enrollment Code for MyPage. |
| - | [ACM-122852](https://rsa.atlassian.net/browse/ACM-122852) | **Connector:** Implemented Generic Powershell Connector support. |
| - | [ACM-122672](https://rsa.atlassian.net/browse/ACM-122672) | **Connector:** RESTful Web Service-based connectors can use the JWT token (JSON Web Token) as an Authentication Type. |
| - | [ACM-122908](https://rsa.atlassian.net/browse/ACM-122908) | **Password Management:** Integration of JWT token authentication and enrollment code in REST Connector. |
| - | [ACM-122935](https://rsa.atlassian.net/browse/ACM-122935)<br/>[ACM-122905](https://rsa.atlassian.net/browse/ACM-122905)<br/>[ACM-122894](https://rsa.atlassian.net/browse/ACM-122894) | **UI:** Sorting on import and export lists of objects is allowed. |

## Functional Changes

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | [ACM-122398](https://rsa.atlassian.net/browse/ACM-122398) | **Admin Errors:** When the Admin user restarts the system, it appears in the logs. |
| - | [ACM-123830](https://rsa.atlassian.net/browse/ACM-123830) | **AFX:** Validation is added for the REST Connector header and body, and trimming spaces are removed for all input data. |
| - | [ACM-115736](https://rsa.atlassian.net/browse/ACM-115736) | **Change Requests and Workflow:** Indirect items from the Role are not included in the Entitlement Info column. |
| - | [ACM-123402](https://rsa.atlassian.net/browse/ACM-123402) | **Cloud:** The Audit Logs Search is working correctly. |
| - | [ACM-123390](https://rsa.atlassian.net/browse/ACM-123390) | **Cloud:** The Status page for Managed Services Monitoring includes more queries. |
| - | [ACM-118040](https://rsa.atlassian.net/browse/ACM-118040) | **Cloud:** Update Supervisor Resolution procedure has been removed in Pre and Post Processor for Identity Collectors and Account Data Collectors. |
| - | [ACM-123632](https://rsa.atlassian.net/browse/ACM-123632) | **Collector:** The REST Collector fails in groups that have no members. |
| - | [ACM-122566](https://rsa.atlassian.net/browse/ACM-122566) | **Connector:** There is no indication of Non-Deployed Connector data on the Connectors page. |
| - | [ACM-122565](https://rsa.atlassian.net/browse/ACM-122565) | **Connector:** The Connectors page neither shows the Source Connector Template, nor Version or Build. |
| - | [ACM-81494](https://rsa.atlassian.net/browse/ACM-81494) | **Connector:** The AFX Connector Template is not displayed after creating the AFX Connector. |
| - | [ACM-122700](https://rsa.atlassian.net/browse/ACM-122700) | **Reviews:** In the Escalation workflow, when the reviewer reassigns Transferring Review Items to new reviewers, the current reviewers are removed although the Allow Sharing of Review Items option is enabled. |
| - | [ACM-122498](https://rsa.atlassian.net/browse/ACM-122498) | **UI:** Authentication Sources can be exported and imported. |

## Fixed Issues

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| **SF-02495273** | [ACM-122436](https://rsa.atlassian.net/browse/ACM-122436) | **Access Requests:** When giving a user a Technical Role entitlement, it is shown as a Global Role on the Change Request page. |
| **SF-02486518** | [ACM-121973](https://rsa.atlassian.net/browse/ACM-121973) | **ACM:** Descriptions are not available for any of the roles and entitlements defined by the Aveksa Application. |
| **SF-02511688** | [ACM-123169](https://rsa.atlassian.net/browse/ACM-123169) | **Admin Errors:** Administrative errors are logged on the occurrence of a failed collection, and no email notification appears regarding the failed run. |
| **SF-02498614** | [ACM-122594](https://rsa.atlassian.net/browse/ACM-122594) | **Admin Errors:** The Admin Errors are not removed while using Data Purging. |
| **SF-02538462** | [ACM-124258](https://rsa.atlassian.net/browse/ACM-124258) | **AFX:** The AFX Connectors take a long time to deploy. |
| - | [ACM-123953](https://rsa.atlassian.net/browse/ACM-123953) | **AFX:** During account creation, the Active Directory connector ignores the pwdLastSet value. |
| **SF-02528259** | [ACM-123829](https://rsa.atlassian.net/browse/ACM-123829) | **AFX:** The REST Connector removes all the space in the request body. |
| **SF-1234** | [ACM-123808](https://rsa.atlassian.net/browse/ACM-123808) | **AFX:** The REST Connector capability to Update Account fails and shows a 401 error. |
| **SF-02529474** | [ACM-123686](https://rsa.atlassian.net/browse/ACM-123686) | **AFX:** The Active Directory AFX Connector does not work when the DN Suffix mapping is set. |
| **SF-02527028** | [ACM-123571](https://rsa.atlassian.net/browse/ACM-123571)<br/>[ACM-123540](https://rsa.atlassian.net/browse/ACM-123540)<br/>[ACM-122993](https://rsa.atlassian.net/browse/ACM-122993) | **AFX:** The Remote AFX batch files fail to start or stop. |
| **SF-02522297** | [ACM-123495](https://rsa.atlassian.net/browse/ACM-123495) | **AFX:** The Change Requests go to Manual FF, although the Webservice Call works successfully. |
| **SF-02514382** | [ACM-123165](https://rsa.atlassian.net/browse/ACM-123165) | **AFX:** Vulnerability in the Apache ActiveMQ: CVE-2023-46604 Remote Code Execution. |
| **SF-02512602** | [ACM-123083](https://rsa.atlassian.net/browse/ACM-123083) | **AFX:** The AFX Server cannot deploy connectors; they take a long time to run. |
| **SF-01608646** | [ACM-115553](https://rsa.atlassian.net/browse/ACM-115553) | **Agent:** The Remote Agent Heartbeat request does not validate the Subject Alternative Name in the Server SSL Certificate. |
| - | [ACM-123634](https://rsa.atlassian.net/browse/ACM-123634) | **Change Requests and Workflow:** The Approval Node Emails in the custom workflow cannot be generated. |
| **SF-02524049** | [ACM-123496](https://rsa.atlassian.net/browse/ACM-123496) | **Change Requests and Workflow:** The Entitlements details do not appear correctly in the User’s view. |
| **SF-02519219** | [ACM-123400](https://rsa.atlassian.net/browse/ACM-123400) | **Change Requests and Workflow:** The Activities for Indirect Change items are not generated. |
| **SF-02484127** | [ACM-122486](https://rsa.atlassian.net/browse/ACM-122486) | **Change Requests and Workflow:** In a Change Request, when the Requester and Approver are the same user, the Resource Owner Approval step is not skipped. |
| - | [ACM-122450](https://rsa.atlassian.net/browse/ACM-122450) | **Change Requests and Workflow:** Empty Termination Requests are created when users are deleted. |
| **SF-02490101** | [ACM-122214](https://rsa.atlassian.net/browse/ACM-122214) | **Change Requests and Workflow:** Change Requests fail when they are manually rerun. |
| **SF-02485186** | [ACM-121915](https://rsa.atlassian.net/browse/ACM-121915) | **Change Requests and Workflow:** The Role Raw Name is displayed in the Change Request instead of the Display Name. |
| **SF-02498722** | [ACM-122599](https://rsa.atlassian.net/browse/ACM-122599) | **Collector:** The REST Collector is not extracting data correctly. |
| **SF-02487829** | [ACM-121994](https://rsa.atlassian.net/browse/ACM-121994) | **Collector:** The Collectors do not pick the new password from the password vault. |
| - | [ACM-120561](https://rsa.atlassian.net/browse/ACM-120561) | **Collector:** The Generic REST Collector overwrites the Accept header with `application/json`. |
| **SF-02528489** | [ACM-123838](https://rsa.atlassian.net/browse/ACM-123838) | **Connector:** The REST Connector cannot utilize the `application/json;charset=UTF-8` in the Request Headers. |
| **SF-02497534** | [ACM-122759](https://rsa.atlassian.net/browse/ACM-122759) | **Core:** The JAVA heap memory usage has increased. |
| **SF-02512327** | [ACM-123059](https://rsa.atlassian.net/browse/ACM-123059) | **Data Collection Processing and Management:** The Risk Processing run fails. |
| **SF-02502084** | [ACM-122578](https://rsa.atlassian.net/browse/ACM-122578) | **Data Collection Processing and Management:** Unification fails in Step 10 in Account Data Collector (ADC) giving the error ORA-01403 (no data found). |
| **SF-02495515** | [ACM-122520](https://rsa.atlassian.net/browse/ACM-122520) | **Data Collection Processing and Management:** Accounts that are manually unmapped do not get rejected during collection and show an error. |
| **SF-02491346** | [ACM-122217](https://rsa.atlassian.net/browse/ACM-122217) | **Data Collection Processing and Management:** Duplicate user IDs cause failure in the Web Services API `createRequest`. |
| **SF-02472137** | [ACM-121025](https://rsa.atlassian.net/browse/ACM-121025) | **Data Collection Processing and Management:** The Collection is stuck in the Change Verification step. |
| **SF-02453141** | [ACM-119533](https://rsa.atlassian.net/browse/ACM-119533) | **Data Collection Processing and Management:** Entitlements or Roles are being assigned to Terminated or Deleted users. |
| **SF-02415575** | [ACM-118031](https://rsa.atlassian.net/browse/ACM-118031) | **Data Collection Processing and Management:** The Role Collector Pre-Processing takes a long time. |
| **SF-02503124** | [ACM-123153](https://rsa.atlassian.net/browse/ACM-123153) | **Database Management:** Cannot start Schema Migration on a remote database with a locked system account. |
| **SF-02413208** | [ACM-117571](https://rsa.atlassian.net/browse/ACM-117571) | **Database Management:** Errors in `aveksaServer.log` for Client Identity getting a null value assigned. |
| **SF-01753923** | [ACM-111957](https://rsa.atlassian.net/browse/ACM-111957) | **Database Performance:** The Requests tab takes a long time to load in Users > Users > user’s name > Requests tab. |
| **SF-02532897** | [ACM-123934](https://rsa.atlassian.net/browse/ACM-123934) | **Email:** Both the Approval and Reject buttons in the Approval Emails are non-clickable. |
| - | [ACM-123382](https://rsa.atlassian.net/browse/ACM-123382) | **Email:** The Authentication Type Option and its related fields are disabled in the Email configurations on RSA Governance & Lifecycle Cloud. |
| **SF-02503918** | [ACM-122756](https://rsa.atlassian.net/browse/ACM-122756) | **Email:** Daily notification emails are sent to the user about the same errors. |
| - | [ACM-121751](https://rsa.atlassian.net/browse/ACM-121751) | **Installer:** The `installDatabaseOnly.sh` script fails to install the Oracle database. |
| **SF-02492389** | [ACM-122270](https://rsa.atlassian.net/browse/ACM-122270) | **Log Artifact:** The Stdout.log is neither cleaned up nor added to the log artifacts. |
| **SF-02494097** | [ACM-122334](https://rsa.atlassian.net/browse/ACM-122334) | **Migration Platform:** Patching failed with the error WFLYDC0098 during the process to un-deploy the existing `aveksa.ear`. |
| **SF-02532598** | [ACM-124058](https://rsa.atlassian.net/browse/ACM-124058) | **Migration Platform:** The database migration schema task fails. |
| **SF-02524593** | [ACM-123455](https://rsa.atlassian.net/browse/ACM-123455) | **Migration Platform:** After providing the Schema Migration password, the error "ORA-01017: invalid username/password; logon denied" occurs. |
| - | [ACM-122665](https://rsa.atlassian.net/browse/ACM-122665) | **Request Forms:** Attributes are missing in the Change Request form. |
| **SF-02484962** | [ACM-121939](https://rsa.atlassian.net/browse/ACM-121939) | **Request Forms:** Cannot reset the Account Filter variable in the Field Control Type User Account Table. |
| **SF-02505632** | [ACM-122994](https://rsa.atlassian.net/browse/ACM-122994) | **Reviews:** Removal Requests from groups are not generated when revoking user access. |
| **SF-02438866** | [ACM-119251](https://rsa.atlassian.net/browse/ACM-119251) | **Reviews:** In the Role Review, the Sign-Off procedure is not called for the selected components as long as these components are not in the Committed state. |
| **SF-02428902** | [ACM-118276](https://rsa.atlassian.net/browse/ACM-118276) | **Reviews:** In the Role Review, the Totals displayed are only for direct entitlements; the numbers are incorrect. |
| **SF-02531771** | [ACM-123847](https://rsa.atlassian.net/browse/ACM-123847) | **Roles:** The Edit Role Membership Rules in the existing Roles are non-editable. |
| **SF-02512927** | [ACM-123144](https://rsa.atlassian.net/browse/ACM-123144) | **Roles:** The Change Requests get stuck when removing a user from a nested group. |
| **SF-02498629** | [ACM-123113](https://rsa.atlassian.net/browse/ACM-123113) | **Roles:** Duplicate accounts are created when assigning Aveksa Entitlements to a user using the account template. |
| **SF-02508555** | [ACM-122998](https://rsa.atlassian.net/browse/ACM-122998) | **Roles:** Cannot remove the Role Owner/Backup Role Owner. |
| **SF-02490456** | [ACM-122205](https://rsa.atlassian.net/browse/ACM-122205) | **Roles:** The Display Description in the Role Set Level is not displayed correctly. |
| **SF-02540815** | [ACM-124288](https://rsa.atlassian.net/browse/ACM-124288) | **Security:** The JAVA JMX Agent running on the remote host is configured without SSL client or password authentication.<br/>*(Included from SF-02516480/ACM-123256)* |
| **SF-02507936** | [ACM-122886](https://rsa.atlassian.net/browse/ACM-122886) | **Security:** When clicking the Test Connection button on Database Collectors, the password becomes visible. |
| **SF-02483331** | [ACM-121908](https://rsa.atlassian.net/browse/ACM-121908) | **UI:** In the System Admin Dashboard, there is a large number of User Sessions which is not the correct or actual count. |
| **SF-02502024** | [ACM-122588](https://rsa.atlassian.net/browse/ACM-122588) | **Web Services:** A wrong workflow is used when creating a Change Request through the `createchangerequest` web service from Trusted Application. |

## Platform Matrix

The latest application server and JDK version have been certified for this release.

| | RSA Governance & Lifecycle<br/>Software Bundle | Software Only<br/>(WebLogic or WebSphere) | RSA Governance & Lifecycle<br/>Virtual Application | Container |
| :--- | :--- | :--- | :--- | :--- |
| **Application Server Version** | | | | |
| WildFly 24.0.1 Included | Qualified | N/A | Qualified | Qualified |
| WebLogic 14.1.1.0 | N/A | Qualified | N/A | N/A |
| WebSphere 9.0.5.16 | N/A | Qualified | N/A | N/A |
| **JDK Version Certified** | | | | |
| AdoptOpenJDK 1.8.0_402 | Qualified | N/A | Qualified | N/A |
| Oracle JDK 1.8.0_391<br/>(WebLogic) | N/A | Qualified | N/A | N/A |
| IBM JDK 1.8.0_391<br/>(WebSphere) | N/A | Qualified | N/A | N/A |

### Product Support with Operating System

| Operating System | Customer-Supplied Oracle Remote Database | RSA Supplied Local Database | RSA Supplied Database Installed Remotely |
| :--- | :--- | :--- | :--- |
| SUSE (SLES 12 SP5 & 15 SP4) | N/A | Qualified | Qualified |
| Red Hat (RHEL 8.4, 8.5, 8.6, 8.7 & 8.8) | N/A | Qualified | Qualified |

</div>
