---
title: RSA G&L 8.0 P08
sidebar_label: v8.0 P08
sidebar_position: 3
---

<div className="text--justify">

# RSA Governance & Lifecycle 8.0 Patch 08

**Release Date:** 2026-01-11
**Version:** 8.0.0 P08

## Executive Summary
RSA Governance & Lifecycle version 8.0.0 P08 introduces features designed to enhance system efficiency, automate key tasks, and improve visibility. With updates like Database Defragmentation, Duplicate Data Cleanup, Role Definition Review (New UI) including the Insights and Guidance part, Send Email, Sign Off, and Delegation, this release reduces manual intervention, optimizes performance, and bolsters security.

## Highlighted Features

### Database Defragmentation
In Oracle database, the users may observe performance issues and excess space usage due to fragmentation of data. It is usually observed that when data is modified or deleted, its movement across blocks can cause free pockets of space and existing free space is not reused/unallocated by oracle processes immediately. This whole process can cause fragmentation of data in database tables and indexes.

To address the complexities and various steps involved in the process of defragmentation, the feature is now available on RSA Governance & Lifecycle UI and can be accessed from **Admin > Diagnostics > Segment Advisor** tab. The button *Defragment Tables/Indexes* is visible to admin users only and is shown in disabled state when the application is not in maintenance mode.

*Note: The Defragmentation option on the UI is available for all types of environments/databases.*

### Duplicate Data Cleanup
The Duplicate Data Cleanup feature in RSA Governance & Lifecycle provides a structured mechanism to systematically identify and remediate duplicate user and account records within the system.

It can be accessed by users from **Collectors > Duplicate Data Cleanup**. This feature marks duplicate users/accounts without physically deleting them from the underlying database tables. Instead, they are logically flagged as duplicates, preserving data integrity while ensuring that these records are excluded from further processing within the application. This approach helps maintain the uniqueness and consistency of user and account data across the system.

### Role Definition Review New UI – [Public Preview]
The feature is not intended for production use and is hidden by a custom feature flag named `FeatureFlag.UseEnhancedUIForReviews`. When this feature is enabled (only by Admin user), from **Admin > System > Settings tab > Edit > Custom**, reviewers are provided with a toggle option, from **Home > Reviews > My Reviews** page > Use the new UI toggle, to allow experiencing new UI.

*   When the toggle is turned ON, opening any user review will provide the new UI experience.
*   By turning the toggle OFF, users will be able to perform the reviews using existing UI.

This beta feature is available to all customers for testing. If you test the new UI, please send us your feedback or questions via [`gl-beta-feedback@rsa.com`](mailto:gl-beta-feedback@rsa.com).

#### Sub-features in New UI:
*   **Insights & Guidance**: View all reviews and review items information in a brief. It is like a statistical view helping you to monitor reviews displayed according to their severity.
*   **Send Email**: Send an email to multiple users who are interested in the review process.
*   **Sign Off**: Sign-off review items leading to committing your changes and effectively completing the review.
*   **Delegate**: Reassign the review to another user/reviewer.

## New Features

| Issue ID | Description |
| :--- | :--- |
| **[ACM-132884](https://rsa.atlassian.net/browse/ACM-132884)** | **Export Data to PDF**: In the new user review interface, review items table can now be exported to PDF in addition to existing support for CSV. |
| **[ACM-132297](https://rsa.atlassian.net/browse/ACM-132297)** | **Email Timeout**: New Mail Polling Connection Timeout and Mail Polling Read Timeout settings have been added under the **Approval Email Server section > Email > Settings**. Default timeout is 180 seconds. |
| **[ACM-132103](https://rsa.atlassian.net/browse/ACM-132103)<br/>[ACM-132101](https://rsa.atlassian.net/browse/ACM-132101)<br/>[ACM-129940](https://rsa.atlassian.net/browse/ACM-129940)** | **Password Decryption for Generic REST Collector Metadata**: Supports password decryption only within the same environment, or across environments when encryption keys are also transferred. |
| **[ACM-132086](https://rsa.atlassian.net/browse/ACM-132086)** | **AES for AFX**: In AFX, Blowfish algorithm is replaced with AES algorithm to encrypt or decrypt data. |
| **[ACM-131997](https://rsa.atlassian.net/browse/ACM-131997)** | **AFX Spring Upgrade**: Spring jar upgraded to v5.3.39, Spring Security jar to v5.8.16. |
| **[ACM-131760](https://rsa.atlassian.net/browse/ACM-131760)<br/>[ACM-131331](https://rsa.atlassian.net/browse/ACM-131331)<br/>[ACM-131255](https://rsa.atlassian.net/browse/ACM-131255)<br/>[ACM-131188](https://rsa.atlassian.net/browse/ACM-131188)<br/>[ACM-121468](https://rsa.atlassian.net/browse/ACM-121468)** | **Graph API for Incoming Email**: Integrated Microsoft Graph API protocol for reading incoming approval emails. |
| **[ACM-131695](https://rsa.atlassian.net/browse/ACM-131695)<br/>[ACM-131444](https://rsa.atlassian.net/browse/ACM-131444)<br/>[ACM-131221](https://rsa.atlassian.net/browse/ACM-131221)<br/>[ACM-130976](https://rsa.atlassian.net/browse/ACM-130976)** | **Remove Duplicate Users/Accounts**: Users can view duplicate Users or Accounts on the UI under **Collectors > Duplicate Data Cleanup**. |
| **[ACM-131635](https://rsa.atlassian.net/browse/ACM-131635)** | **Workflow Upgrade**: Workpoint version has been updated to 4.50.16. |
| **[ACM-131151](https://rsa.atlassian.net/browse/ACM-131151)<br/>[ACM-131129](https://rsa.atlassian.net/browse/ACM-131129)** | **Pending Change Request Notifications**: New Custom Event "Pending Change Requests" triggers notifications based on threshold. |
| **[ACM-131083](https://rsa.atlassian.net/browse/ACM-131083)** | **System Indicator Discrepancies**: Accurate counts for orphaned watches and pending verification items under Admin > Workflow > Monitoring. |
| **[ACM-130042](https://rsa.atlassian.net/browse/ACM-130042)** | **Expanded Multi-Value Attributes for LDAP**: Supports multi-valued attributes for Creation and Update (Account/Group) in single operation. |
| **[ACM-129653](https://rsa.atlassian.net/browse/ACM-129653)** | **Performance Improvement**: Session information for nodes with cluster communication issues is no longer retrieved for Performance Summary. |
| **[ACM-126520](https://rsa.atlassian.net/browse/ACM-126520)<br/>[ACM-126518](https://rsa.atlassian.net/browse/ACM-126518)** | **Spring Upgrade**: Spring libraries and Spring-core on ACM/AFX upgraded. |

## Enhancements

| Issue ID | Description |
| :--- | :--- |
| **[ACM-132029](https://rsa.atlassian.net/browse/ACM-132029)** | LDAP Connectors now support updating the CN and Distinguished Name attributes of Account/Group. |
| **[ACM-131500](https://rsa.atlassian.net/browse/ACM-131500)** | SCIM Connector enhanced to NOT include version number in URL when SCIM Version is blank. |
| **[ACM-131499](https://rsa.atlassian.net/browse/ACM-131499)** | SCIM Collector enhanced to NOT include version number in URL when Version is blank. |
| **[ACM-130634](https://rsa.atlassian.net/browse/ACM-130634)** | Improved response time for Data Run information on History tab. |
| **[ACM-130633](https://rsa.atlassian.net/browse/ACM-130633)<br/>[ACM-130632](https://rsa.atlassian.net/browse/ACM-130632)** | Improved response time for Approvals and Activities pages (lazy loading). |
| **[ACM-130553](https://rsa.atlassian.net/browse/ACM-130553)** | Workpoint updated to 4.50.16; logs now display correct client protocol/host/port. |
| **[ACM-130409](https://rsa.atlassian.net/browse/ACM-130409)** | Time spent on each rule action added to task progress table. |
| **[ACM-130021](https://rsa.atlassian.net/browse/ACM-130021)<br/>[ACM-130015](https://rsa.atlassian.net/browse/ACM-130015)** | Improved response time for Request page, User Request tab, and Rules page. |
| **[ACM-129368](https://rsa.atlassian.net/browse/ACM-129368)** | New flag `custom.EmailLogParallelOptimization` to optimize Email Log display performance. |
| **[ACM-129338](https://rsa.atlassian.net/browse/ACM-129338)** | Enhanced Role page response time; unmodified membership rules don't change Role state. |
| **[ACM-123379](https://rsa.atlassian.net/browse/ACM-123379)** | Rule Processing Status bar introduced. |

## Fixed Issues

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| **SF-02691844** | [ACM-133617](https://rsa.atlassian.net/browse/ACM-133617) | Java Code-Based Connector: Custom settings parameter values no longer have trailing `)`. |
| **SF-02689245** | [ACM-133475](https://rsa.atlassian.net/browse/ACM-133475) | Generic REST: Daily collectors now triggered once a day. |
| **SF-02679743** | [ACM-133191](https://rsa.atlassian.net/browse/ACM-133191)<br/>[ACM-132237](https://rsa.atlassian.net/browse/ACM-132237)<br/>[ACM-132505](https://rsa.atlassian.net/browse/ACM-132505) | Generic REST: Restricted updates to `T_SCHEDULED_TASKS` during token generation to prevent deadlocks. |
| **SF-02671969** | [ACM-132464](https://rsa.atlassian.net/browse/ACM-132464) | LDAP Connectors: Restricted logging of security credentials. |
| **SF-02670570** | [ACM-132363](https://rsa.atlassian.net/browse/ACM-132363) | AD Account creation with `accountExpires` works successfully. |
| **SF-02677298** | [ACM-132350](https://rsa.atlassian.net/browse/ACM-132350) | Role and Multi-App Collectors no longer throw errors with correct credentials. |
| **SF-02673670** | [ACM-132216](https://rsa.atlassian.net/browse/ACM-132216) | `PARENT_ENT_ID/NAME` populated when creating CR from Add Access for user with multiple accounts. |
| **SF-02674446** | [ACM-132170](https://rsa.atlassian.net/browse/ACM-132170) | REST Collector supports Array/Map format in JSON response for attribute mapping. |
| **-** | [ACM-131558](https://rsa.atlassian.net/browse/ACM-131558) | New Review UI page title displays properly. |
| **-** | [ACM-131358](https://rsa.atlassian.net/browse/ACM-131358) | Fixed `NoClassDefFoundError` for AD/LDAP connectors. |
| **-** | [ACM-132064](https://rsa.atlassian.net/browse/ACM-132064) | Token refresh stopped for inactive Generic REST Collectors. |
| **SF-02670954** | [ACM-132040](https://rsa.atlassian.net/browse/ACM-132040) | Purging works successfully on Step 9/16. |
| **SF-02669831** | [ACM-132037](https://rsa.atlassian.net/browse/ACM-132037) | Signoff works successfully for Role Review. |
| **SF-02669724** | [ACM-131852](https://rsa.atlassian.net/browse/ACM-131852) | Forget Password works for multiple users with same name (active users only). |
| **SF-02669457** | [ACM-131792](https://rsa.atlassian.net/browse/ACM-131792) | Login page correctly reflects Maintenance Mode when DB is shutdown. |
| **SF-02663424** | [ACM-131765](https://rsa.atlassian.net/browse/ACM-131765) | New flag `excludeDelOrphInPwdMgmtNotif` (default true) to skip password expiration notifications for deleted/orphaned accounts. |
| **-** | [ACM-131719](https://rsa.atlassian.net/browse/ACM-131719) | Filtering by Email Thread in Email Logs fixed. |
| **-** | [ACM-131717](https://rsa.atlassian.net/browse/ACM-131717) | SSH Connector: New flag `custom.useLatestSSHVersionInConnector` to enable TLS 1.2 ciphers. |
| **SF-02666232** | [ACM-131683](https://rsa.atlassian.net/browse/ACM-131683) | Correspondng workflows appear when Process is set to ANY. |
| **SF-02665554** | [ACM-131668](https://rsa.atlassian.net/browse/ACM-131668) | Semicolon (;) supported in stored procedures for Generic Database Connector. |
| **SF-02666422** | [ACM-131662](https://rsa.atlassian.net/browse/ACM-131662)<br/>[ACM-131488](https://rsa.atlassian.net/browse/ACM-131488) | Generic REST: Restricted history table updates during token renewal. |
| **-** | [ACM-131560](https://rsa.atlassian.net/browse/ACM-131560) | Group objects now have Status attribute for SCIM ValueCloud. |
| **SF-02660136** | [ACM-131518](https://rsa.atlassian.net/browse/ACM-131518)<br/>[ACM-131517](https://rsa.atlassian.net/browse/ACM-131517) | Removed redundant JAR files. |
| **SF-02661257** | [ACM-131413](https://rsa.atlassian.net/browse/ACM-131413) | `HideAlreadyAddedEntitlementForParticularAccount`: Hidden if already assigned indirectly. |
| **SF-02660793** | [ACM-131405](https://rsa.atlassian.net/browse/ACM-131405) | Old CR approvals no longer appear under My Approvals after Archiving. |
| **SF-02653162** | [ACM-131344](https://rsa.atlassian.net/browse/ACM-131344) | App Metadata Collectors: Custom Attributes in Applications Version table working. |
| **-** | [ACM-131343](https://rsa.atlassian.net/browse/ACM-131343) | Added filter to exclude indirect access elements in Data Resource Access reviews. |
| **SF-02661326** | [ACM-131341](https://rsa.atlassian.net/browse/ACM-131341) | Ports 5672, 61613, 1883, 61614 no longer used by AFX. |
| **SF-02660699** | [ACM-131340](https://rsa.atlassian.net/browse/ACM-131340) | Data Archiving performance enhanced. |
| **SF-02660949** | [ACM-131300](https://rsa.atlassian.net/browse/ACM-131300) | UI Language change correctly reflects in Notifications and Help tooltips. |
| **-** | [ACM-131235](https://rsa.atlassian.net/browse/ACM-131235) | SCIM Connector creates accounts with `active=true`. |
| **-** | [ACM-131234](https://rsa.atlassian.net/browse/ACM-131234) | Support for content type and accept header in SCIM Test Connection. |
| **-** | [ACM-131049](https://rsa.atlassian.net/browse/ACM-131049) | Multi-App Collector no longer throws errors. |
| **SF-02657305** | [ACM-131000](https://rsa.atlassian.net/browse/ACM-131000) | RESTful Connector support for `text/html` in request body. |
| **-** | [ACM-130908](https://rsa.atlassian.net/browse/ACM-130908) | Role Review (High Maintenance) changes reflected in Role Summary tabs. |
| **SF-02646025** | [ACM-130876](https://rsa.atlassian.net/browse/ACM-130876) | Role Review History log records correct actor. |
| **SF-02649180** | [ACM-130751](https://rsa.atlassian.net/browse/ACM-130751) | Request Form fields displayed correctly with "Hide table if empty". |
| **SF-02651832** | [ACM-130707](https://rsa.atlassian.net/browse/ACM-130707) | Review Definitions no longer show errors. |
| **SF-02650671** | [ACM-130646](https://rsa.atlassian.net/browse/ACM-130646) | Wait for Verification node correctly recognizes `VerifiedToComplete` status. |
| **SF-02646657** | [ACM-130508](https://rsa.atlassian.net/browse/ACM-130508) | Role Collectors performance enhanced. |
| **SF-02647887** | [ACM-130497](https://rsa.atlassian.net/browse/ACM-130497) | SOAP Connector Capabilities work with proxy configuration. |
| **SF-02623450** | [ACM-130341](https://rsa.atlassian.net/browse/ACM-130341) | ADC post-processing handles duplicate accounts by renaming/soft-deleting the orphaned duplicate. |
| **SF-02633006** | [ACM-130290](https://rsa.atlassian.net/browse/ACM-130290) | Java Connector custom settings with parenthesis handled. |

## Known Issues

import CodeBlock from '@theme/CodeBlock';

| Issue ID | Description | Workaround |
| :--- | :--- | :--- |
| **[ACM-134066](https://rsa.atlassian.net/browse/ACM-134066)** | **Unable To Install 8.0.0 P08 Build on the WebLogic Setup.**<br/>Error: `java.lang.IllegalStateException: ManagerFactory unable to create manager for [/wpqmonitor.log]` | In WebLogic's `setDomainEnv.sh`, add:<br/><CodeBlock language="bash">{`JAVA_OPTIONS="\${JAVA_OPTIONS} -Dworkpoint.log.dir.custom=\${DOMAIN_HOME}/servers/aveksaServer/tmp/_WL_user/aveksa/tkgoak/aveksa.war/log"`}</CodeBlock><br/>(Adjust paths as necessary) |

## Platform Support Matrix

The latest application server and JDK version have been certified for this release.

| | RSA Governance & Lifecycle<br/>Software Bundle | Software Only<br/>(WebLogic or WebSphere) | RSA Governance & Lifecycle<br/>Virtual Application | Container |
| :--- | :--- | :--- | :--- | :--- |
| **Application Server Version** | | | | |
| WildFly 24.0.1 Included | Qualified | N/A | Qualified | Qualified |
| WebLogic 14.1.1.0 | N/A | Qualified | N/A | N/A |
| WebSphere 9.0.5.21 | N/A | Qualified | N/A | N/A |
| **JDK Version Certified** | | | | |
| AdoptOpenJDK 1.8.0_462 | Qualified | N/A | Qualified | N/A |
| Oracle JDK 1.8.0_461<br/>(WebLogic) | N/A | Qualified | N/A | N/A |
| IBM JDK 1.8.0_461<br/>(WebSphere) | N/A | Qualified | N/A | N/A |
| **Operating Systems** | | | | |
| SUSE (SLES 12 SP5, and SLES 15 SP7) | Qualified | N/A | Qualified | N/A |
| Red Hat (RHEL 8.10 and RHEL 9.6) | Qualified | N/A | N/A | N/A |

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