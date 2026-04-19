---
title: RSA G&L 8.0 P03 HF01
sidebar_label: v8.0 P03 HF01
sidebar_position: 8
---

<div className="text--justify">

# RSA Governance & Lifecycle 8.0 Patch 03 HF01

**Version:** 8.0.0 P03_HF01

## Executive Summary
RSA Governance & Lifecycle version 8.0.0 P03 introduces features designed to enhance system efficiency, along with Hotfix 01 (HF01) which addresses specific security vulnerabilities. The following sections describe the new features, functional changes, and fixed issues in this combined release.

## New Features

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | [ACM-124519](https://rsa.atlassian.net/browse/ACM-124519) | **AFX:** Old and unused AFX Connector templates/folders have been removed. |
| - | [ACM-123758](https://rsa.atlassian.net/browse/ACM-123758) | **AFX:** Whenever a failure occurs during the Initialization request of AFX, the AFX server automatically shuts down. |
| - | [ACM-124533](https://rsa.atlassian.net/browse/ACM-124533) | **Connector:** Custom Connector templates are migrated successfully. |
| - | [ACM-124251](https://rsa.atlassian.net/browse/ACM-124251) | **Connector:** The JWT token expiry is not displaying on UI. |
| - | [ACM-124125](https://rsa.atlassian.net/browse/ACM-124125) | **Connector:** The Logger Category is filtered according to the connector type under Edit Log Settings for each connector. |
| - | [ACM-124097](https://rsa.atlassian.net/browse/ACM-124097) | **Connector:** IBM Tivoli's Directory Server Connector has been introduced. |
| - | [ACM-123732](https://rsa.atlassian.net/browse/ACM-123732)<br/>[ACM-121226](https://rsa.atlassian.net/browse/ACM-121226)<br/>[ACM-110213](https://rsa.atlassian.net/browse/ACM-110213) | **Connector:** Test Connector Settings option is implemented for the RACFssh connector. |
| - | [ACM-121405](https://rsa.atlassian.net/browse/ACM-121405) | **Connector:** Oracle Internet Directory Connector has been introduced. |
| - | [ACM-121290](https://rsa.atlassian.net/browse/ACM-121290) | **Connector:** IBM Notes (Lotus Notes) connector has been introduced. |
| - | [ACM-124149](https://rsa.atlassian.net/browse/ACM-124149) | **Security:** In response to CVE-2021-35515, the embedded compression and archive library "Commons Compress" is upgraded to version 1.26.1. |
| - | [ACM-124275](https://rsa.atlassian.net/browse/ACM-124275) | **UI:** Default Email Templates are created for Maintenance Mode Events. |
| - | [ACM-124166](https://rsa.atlassian.net/browse/ACM-124166) | **UI:** Events for Maintenance Mode changes are created. |
| - | [ACM-123692](https://rsa.atlassian.net/browse/ACM-123692) | **UI:** When deleting an Application, the system verifies (by displaying a warning) whether it includes any open CRs. This verification and warning only occur if a custom flag `checkAssociatedObjectsDuringAppDeletion` is set to True. |

## Functional Changes

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | [ACM-124094](https://rsa.atlassian.net/browse/ACM-124094)<br/>[ACM-123706](https://rsa.atlassian.net/browse/ACM-123706) | **Collector:** OAuth2 authentication type-related fields (Client ID, Client Secret, Authentication URL, Access Token URL, and Scope) in the Generic REST Collectors now accept up to 4000 characters. |
| - | [ACM-120347](https://rsa.atlassian.net/browse/ACM-120347) | **Collector:** The Generic REST Collector supports the placeholder attributes in query parameters. |
| - | [ACM-124466](https://rsa.atlassian.net/browse/ACM-124466) | **Reviews:** The option Allow reviewers to use bulk actions on review items can be disabled for User Access Reviews created using the default Reviewer Interface Style. |

## Fixed Issues

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| **SF-02514765** | [ACM-123605](https://rsa.atlassian.net/browse/ACM-123605) | **Access Requests:** Searching for Notes under the Activities tab does not bring any results, although the items are visible. |
| - | [ACM-124604](https://rsa.atlassian.net/browse/ACM-124604) | **AFX:** The Microsoft Exchange Connector disappeared from the Connectors list after upgrading to 8.0.0 P01 HF01. |
| **SF-02540877** | [ACM-124370](https://rsa.atlassian.net/browse/ACM-124370) | **AFX:** The AFX Server deploys the Salesforce REST Connector successfully. |
| **SF-02537011** | [ACM-124067](https://rsa.atlassian.net/browse/ACM-124067) | **AFX:** The AFX Debug Logs display the Connection Password in clear text. |
| **SF-02539596** | [ACM-124270](https://rsa.atlassian.net/browse/ACM-124270) | **Change Requests and Workflow:** In a Duplicate Request, the Change Items are not grouped correctly under the Account option. |
| **SF-02497231** | [ACM-124012](https://rsa.atlassian.net/browse/ACM-124012) | **Change Requests and Workflow:** When cancelling a Create Account Request, the change items depending on account creation are marked as Rejected; not Cancelled. |
| **SF-01833576** | [ACM-118327](https://rsa.atlassian.net/browse/ACM-118327) | **Change Requests and Workflow:** The account dependencies in a Change Request point to a newer Change Request. |
| **SF-02352829** | [ACM-114701](https://rsa.atlassian.net/browse/ACM-114701) | **Change Requests and Workflow:** The Role Resource is displayed as the Role ID. |
| - | [ACM-124404](https://rsa.atlassian.net/browse/ACM-124404) | **Cloud:** RDS in G&L Cloud deployments experiences very high IOPS if the AFX RESTful Web Service Connectors are configured with large amounts of data. |
| **SF-02494458** | [ACM-123024](https://rsa.atlassian.net/browse/ACM-123024) | **Collector:** Default attributes that should be read-only are impacted after running the Metadata Collector. |
| - | [ACM-125155](https://rsa.atlassian.net/browse/ACM-125155) | **Connector:** The Generic Database Connector does not fail when executing a capability that contains a stored procedure with multiple statements where one or more of those statements may have failed. |
| - | [ACM-124436](https://rsa.atlassian.net/browse/ACM-124436) | **Connector:** The Active Directory Connector capabilities cannot use the previously supported prefixes `add_`, `remove_`, and `replace_` for LDAP attributes to accomplish the corresponding action on the endpoint. |
| **SF-02536600** | [ACM-124244](https://rsa.atlassian.net/browse/ACM-124244) | **Connector:** In the LDAP Connector, the `AttributeExpiryDate` attribute changes are not reflected in the LDAP Account template. |
| **SF-02538115** | [ACM-124183](https://rsa.atlassian.net/browse/ACM-124183) | **Connector:** The Cloned Connectors Display Name is not shown in the Log File Name. |
| - | [ACM-124057](https://rsa.atlassian.net/browse/ACM-124057)<br/>[ACM-123953](https://rsa.atlassian.net/browse/ACM-123953)<br/>[ACM-124042](https://rsa.atlassian.net/browse/ACM-124042) | **Connector:** The Active Directory Connector ignores the `pwdLastSet` value during account creation. The HTML tags sent to the Generic REST AFX Connector Capability are not replicated at the endpoint. |
| **SF-02522708** | [ACM-123556](https://rsa.atlassian.net/browse/ACM-123556) | **Data Collection Processing and Management:** The Change Verification step in a collection either takes a long time to complete or gets stalled. |
| **SF-02533321** | [ACM-124083](https://rsa.atlassian.net/browse/ACM-124083) | **Migration:** The RSA G&L fails to start after Database (AFX Template) migration. |
| **SF-02504644** | [ACM-122758](https://rsa.atlassian.net/browse/ACM-122758) | **Email:** Email Reply Approval Processing fails from IOS mobiles. |
| **SF-02538370** | [ACM-124402](https://rsa.atlassian.net/browse/ACM-124402) | **Password Management:** The Password Vault profile fails to delete. |
| **SF-02531059** | [ACM-123902](https://rsa.atlassian.net/browse/ACM-123902) | **Password Management:** When copying a password that contains 2 successive $ characters (ex: Pa$$word), one character is lost when pasted (ex: Pas$word). |
| - | [ACM-124252](https://rsa.atlassian.net/browse/ACM-124252) | **Reviews:** The Maintain button under the Role Review Definition can be renamed. |
| **SF-02462881** | [ACM-124406](https://rsa.atlassian.net/browse/ACM-124406) | **Roles:** When adding 2 different Application Roles from 2 different Business Sources (that require Account to Role), the Approver rejects adding one of them to the Role. However, the related Indirect Access is accepted. |
| **SF-02533280** | [ACM-123939](https://rsa.atlassian.net/browse/ACM-123939) | **Role Management:** An empty Change Request is created when committing a Role using the Actions button where no changes/modifications were made within the role. |
| **SF-02490456** | [ACM-123391](https://rsa.atlassian.net/browse/ACM-123391) | **Role Management:** An error occurs when adding a Display Description to a Role Set of any type. |
| **SF-02414394** | [ACM-118251](https://rsa.atlassian.net/browse/ACM-118251) | **Role Management:** When creating or editing Roles, the `alt_name` is the same as the Raw Name; it is not unique. |
| **SF-02538953** | [ACM-124211](https://rsa.atlassian.net/browse/ACM-124211) | **Security:** The UI framework - JQuery has been upgraded to the latest 3.7.1 across the application. |
| - | [ACM-124123](https://rsa.atlassian.net/browse/ACM-124123) | **Security:** In response to CVE-2022-42889, the G&L application upgraded Apache Commons Text version to 1.11.0 to ensure it secures the StringSubstitutor API against potential risks associated with untrusted input. |
| **SF-02570099** | [ACM-125929](https://rsa.atlassian.net/browse/ACM-125929) | **Security:** *(HF01)* (CVE-2021-4104) A vulnerable version of Apache Log4j is found on the server. |
| **SF-02566052**<br/>**SF-02552906** | [ACM-125617](https://rsa.atlassian.net/browse/ACM-125617)<br/>[ACM-124916](https://rsa.atlassian.net/browse/ACM-124916) | **Security:** *(HF01)* Remote Java JMX Agent is configured without SSL client and password authentication. |
| **SF-02492243** | [ACM-122435](https://rsa.atlassian.net/browse/ACM-122435) | **UI:** After upgrading to v8.0, users frequently receive the error message: The request could not be handled. |
| **SF-02532426** | [ACM-123861](https://rsa.atlassian.net/browse/ACM-123861) | **Workflow:** Updating the email template in the workflow does not update the last modified and the modified by fields. |

## Known Issues

| Issue ID | Description | Workaround |
| :--- | :--- | :--- |
| **[ACM-126153](https://rsa.atlassian.net/browse/ACM-126153)** | *(HF01)* NullPointerException errors are logged continuously in `aveksaServer.log` on WebLogic and WebSphere application servers which may lead to disk space issues. This issue only occurs when applying v8.0.0 P03 HF01 on v8.0.0 P03. | Restart the application server after deploying the v8.0.0 P03 HF01 EAR on WebLogic or WebSphere. |

## Platform Matrix

The latest application server and JDK version have been certified for this release.

| | RSA Governance & Lifecycle<br/>Software Bundle | Software Only<br/>(WebLogic or WebSphere) | RSA Governance & Lifecycle<br/>Virtual Application | Container |
| :--- | :--- | :--- | :--- | :--- |
| **Application Server Version** | | | | |
| WildFly 24.0.1 Included | Qualified | N/A | Qualified | Qualified |
| WebLogic 14.1.1.0 | N/A | Qualified | N/A | N/A |
| WebSphere 9.0.5.19 | N/A | Qualified | N/A | N/A |
| **JDK Version Certified** | | | | |
| AdoptOpenJDK 1.8.0_412 | Qualified | N/A | Qualified | N/A |
| Oracle JDK 1.8.0_401<br/>(WebLogic) | N/A | Qualified | N/A | N/A |
| IBM JDK 1.8.0_401<br/>(WebSphere) | N/A | Qualified | N/A | N/A |

### Product Support with Operating System

| Operating System | Customer-Supplied Oracle Remote Database | RSA Supplied Local Database | RSA Supplied Database Installed Remotely |
| :--- | :--- | :--- | :--- |
| SUSE (SLES 12 SP5 & 15 SP4) | N/A | Qualified | Qualified |
| Red Hat (RHEL 8.4, 8.5, 8.6, 8.7 & 8.8) | N/A | Qualified | Qualified |

</div>
