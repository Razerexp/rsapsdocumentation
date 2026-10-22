---
title: RSA G&L 8.0 P12
sidebar_label: v8.0 P12
sidebar_position: 1
---

<div className="text--justify">

# RSA Governance & Lifecycle 8.0 Patch 12 Release Notes

**Release Date:** October 2026  
**Version:** 8.0.0 P12

## Executive Summary
RSA Governance & Lifecycle version 8.0.0 P12 introduces features designed to enhance system efficiency, automate key tasks, and improve visibility. With updates like AFX OUT Parameter for Database Connector, Compliance Advisor, Load Balancer Support for SAP Connector, Password Vault Support for Generic REST Collectors and Connectors, and Pluggable Notification Provider Framework, this release reduces manual intervention, optimizes performance, and bolsters security.

## Highlighted Features

This section highlights the most significant and vital features introduced in RSA Governance & Lifecycle 8.0.0 Patch 12 Release.

### AFX OUT Parameter for Database Connector
RSA G&L now supports a new OUT parameter in the Database Connector stored procedure, enabling the retrieval of OUT parameter values after the stored procedure execution. This update addresses a critical limitation in stored procedure calls initiated by AFX, allowing users to avoid the implementation of secondary processes to retrieve the stored procedure execution result.

### Compliance Advisor
The Compliance Advisor is introduced in RSA G&L under the Reports section. It includes the compliance documents, related articles, and G&L Key Performance Indicators (KPIs) used to measure compliance percentages for each article’s procedures across different regions worldwide. This data is also reflected in the Compliance Dashboard under **Admin > Dashboards**. This requires the Advanced Dashboard Library license.

### Load Balancer Support for SAP Connector
RSA G&L now supports Load Balancer connectivity for the SAP connector which enables organizations to connect to their SAP environment through an SAP Message Server rather than a single, fixed application server.

This feature enables the connector to distribute requests across multiple SAP application servers within a defined server group, which increases the reliability and availability of SAP data collection within the G&L application.

### Password Vault Support for Generic REST Collectors and Connectors
RSA G&L now supports Password Vault integration for REST Collectors and Connectors. This feature allows the system to retrieve credentials dynamically, securing sensitive information and eliminating the operational risks associated with manual reconfiguration or expired passwords.

### Pluggable Notification Provider Framework
RSA G&L now supports an extensible notification framework for Templates and Custom Events. In addition to the existing Email and UI notification channels, customers, partners, and RSA Professional Services (PS) teams can develop and upload custom notification providers through the UI.

This introduces standard provider interfaces, metadata-driven endpoint configuration, and automatic discovery and loading of notification providers. Email continues to be the default notification channel, while users can optionally select additional notification channels from the list of configured providers.

## New Features

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | [ACM-140944](https://rsa.atlassian.net/browse/ACM-140944) | **Enhanced UI:** In the Reviews new UI, the Enhanced UI toggle is now Enabled by default for all users. Users can switch between the new and old UI using this toggle. Additionally, users can remove the toggle itself by setting the custom flag `FeatureFlag.UseEnhancedUIForReviews` to `false` under **Admin > System > Settings > Edit > Custom**. If the toggle is removed, the old UI will be displayed by default. |
| - | [ACM-138334](https://rsa.atlassian.net/browse/ACM-138334) | **Agent Server Details Tab:** A new Agent Server Details tab is added to the Agent UI. This tab shows the Agent Server information, including Host, OS, Hardware, and Java Runtime. |
| - | [ACM-136764](https://rsa.atlassian.net/browse/ACM-136764) | **Thread Dump:** Users are now allowed to generate, download, schedule, and delete Thread Dump files under **Admin > Diagnostics**. This action triggers dump files across all nodes in a cluster. |
| - | [ACM-128457](https://rsa.atlassian.net/browse/ACM-128457) | **Load Balancer Support for SAP Connector:** The SAP Connector now supports Load Balancer. It enables the connector to distribute requests across multiple SAP application servers within a defined server group. |

## Enhancements

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | [ACM-138761](https://rsa.atlassian.net/browse/ACM-138761) | Password Vault now supports multiple password-type fields in both Vault Configuration and Vault Profiles. |
| - | [ACM-138369](https://rsa.atlassian.net/browse/ACM-138369),<br/>[ACM-137707](https://rsa.atlassian.net/browse/ACM-137707) | The Generic REST Collector and Connector now support utilizing the Password Vault to retrieve passwords for endpoint connections. |
| - | [ACM-138335](https://rsa.atlassian.net/browse/ACM-138335) | Expiration Date of trusted SSL certificates, uploaded through **Admin > User Interface > Files > SSL Certificates**, is now being categorized by colour coding to make it easier for users to detect expiration:<br/>• Expired certificates are in Red.<br/>• Certificates due in 6 months are in Yellow. |
| - | [ACM-137708](https://rsa.atlassian.net/browse/ACM-137708) | RSA G&L automatically populates Workflow variables during runtime to ensure real-time data availability for active processes without requiring custom SQL queries. Newly populated variables are:<br/>• **Change Item ID:** is now directly selectable in the workflow editor, no custom SQL required.<br/>• **Detailed AFX Provisioning Command Response:** captures the complete response or error message returned by an AFX provisioning command, making it available for use in subsequent workflow steps such as notifications, logging, or conditional branching. |
| - | [ACM-137484](https://rsa.atlassian.net/browse/ACM-137484) | RSA G&L now enhances the creation and download of Archive Dump files with the following capabilities:<br/>• Export Master Table Dumps to S3 buckets for G&L Cloud or local file systems for On-Premise is now supported.<br/>• RunID column for DumpExport is now included and provides detailed descriptions for column headers.<br/>• Download and Delete buttons are now enabled for on-premise customers with local database.<br/>• Purge Run History section is newly added under **Admin > Data Management > Data Purge** to summarize latest 5 data purge runs. |
| - | [ACM-134086](https://rsa.atlassian.net/browse/ACM-134086) | Termination Rule is enhanced to check all Terminated users in all system runs, not just newly terminated ones. It now supports two behaviours controlled by the `includeHistoricalTerminatedUsersInTermRules` flag. The flag's default value is `False`.<br/>• If the flag is set to `False`, users status changes are compared only to the previous run according to the system default behaviour.<br/>  - On the very first run, the flag has no effect; the system always scans all terminated users in the system, processes those who match the rule's condition, and logs all processed users for future runs.<br/>• If the flag is set to `True`, the system evaluates terminated users across all runs, excluding those already processed in previous runs. |

## Fixed Issues

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| **SF-02790296** | [ACM-142331](https://rsa.atlassian.net/browse/ACM-142331) | Fixed an issue where the REST Web Service node did not accept or save `application/x-www-form-urlencoded` as the Content-Type, resulting in validation errors. |
| - | [ACM-141176](https://rsa.atlassian.net/browse/ACM-141176) | Fixed an issue where the AFX Server Details page displayed incorrect IPv4 address, ActiveMQ path, and Maven path information. |
| - | [ACM-141117](https://rsa.atlassian.net/browse/ACM-141117) | Fixed an issue where Custom Events were not imported successfully or did not include all associated data. |
| **SF-02776422** | [ACM-140928](https://rsa.atlassian.net/browse/ACM-140928) | Fixed an issue where the Due Date in workflow emails was not displayed according to the respective deliverer’s time zone. |
| - | [ACM-140917](https://rsa.atlassian.net/browse/ACM-140917) | Fixed an issue where the Termination Date and User ID columns were unavailable in the Violation table. |
| - | [ACM-140767](https://rsa.atlassian.net/browse/ACM-140767) | Fixed an issue where AFX did not substitute the Mapping variable when it was null or empty during Create Account capability execution. |
| **SF-02777746** | [ACM-140638](https://rsa.atlassian.net/browse/ACM-140638) | Fixed an issue where database collectors became unresponsive upon detecting an empty or corrupted CSV file. RSA G&L now reports the error and exits automatically. |
| **SF-02773212** | [ACM-140636](https://rsa.atlassian.net/browse/ACM-140636) | Fixed an issue where filter results were displayed incorrectly or inconsistently when creating an Account Form. |
| **SF-02774047** | [ACM-140530](https://rsa.atlassian.net/browse/ACM-140530) | Fixed an issue where ADC Collectors could not retrieve passwords from the vault through the configured agent. |
| **SF-02770010** | [ACM-140151](https://rsa.atlassian.net/browse/ACM-140151) | Fixed an issue where Role Profile Change Requests were not generated correctly for attributes of the Custom Values type. |
| **SF-02768702** | [ACM-139983](https://rsa.atlassian.net/browse/ACM-139983) | Fixed an issue where invalid custom threshold settings were ignored and replaced with built-in defaults, causing unexpected Admin Error and Warning alerts or false recovery notifications. Alerts are now sent only when a valid custom threshold rule is configured. |
| **SF-02768414** | [ACM-139632](https://rsa.atlassian.net/browse/ACM-139632) | Fixed an issue where incorrect Entitlements and Memberships were displayed on the Role Review Results > Members tab in Role Reviews. |
| **SF-02760478** | [ACM-139583](https://rsa.atlassian.net/browse/ACM-139583) | Fixed an issue where previously selected checkboxes were not displayed correctly on the Submitted Form tab when an approver opened a Change Request. |
| **SF-02760322** | [ACM-139341](https://rsa.atlassian.net/browse/ACM-139341) | Fixed an issue where fields on the Schedule and E-Mail tab were removed or not retained after editing and saving a report. |
| **SF-02760322** | [ACM-139327](https://rsa.atlassian.net/browse/ACM-139327) | Fixed an issue where Active Directory Collectors took longer than expected to update group membership data, improving overall collection performance. |
| **SF-02742799** | [ACM-139230](https://rsa.atlassian.net/browse/ACM-139230) | Fixed an issue where successful workflow REST calls that returned an empty response body were incorrectly reported as failures. The system now recognizes the external service’s actual response and handles successful no-content responses correctly. |
| **SF-02748180** | [ACM-138822](https://rsa.atlassian.net/browse/ACM-138822) | Fixed an issue where parameters containing XML were not encoded correctly in RESTful Web Service- and SoapWebService-based connectors, causing capability execution failures. |
| **SF-02752242** | [ACM-138564](https://rsa.atlassian.net/browse/ACM-138564) | Fixed an issue where table column divider widths did not adjust to fit the selected page size or orientation in RSA G&L. |
| **SF-02748637** | [ACM-138465](https://rsa.atlassian.net/browse/ACM-138465) | Fixed an issue where accounts were not automatically mapped as orphan accounts after their associated users were terminated or deleted. |
| **SF-02742375**,<br/>**SF-02738987** | [ACM-138149](https://rsa.atlassian.net/browse/ACM-138149),<br/>[ACM-137388](https://rsa.atlassian.net/browse/ACM-137388) | Fixed an issue where workflow imports and exports took longer than expected or did not complete successfully. |
| **SF-02745673** | [ACM-138008](https://rsa.atlassian.net/browse/ACM-138008) | Fixed an issue where duplicate accounts were created during Change Request approvals instead of displaying the existing accounts. |
| **SF-02746567** | [ACM-137903](https://rsa.atlassian.net/browse/ACM-137903) | Fixed an issue where purged data caused Task Details and Description information to display incorrectly for older Closed Activities and Manual Fulfillment tasks. |
| **SF-02731024** | [ACM-137797](https://rsa.atlassian.net/browse/ACM-137797) | Fixed an issue where Decision nodes evaluated variables incorrectly, causing Workflows to follow the wrong transitions. |
| - | [ACM-137763](https://rsa.atlassian.net/browse/ACM-137763) | Fixed an issue where delayed initialization of security components during G&L application start-up caused log in failures after maintenance. |
| **SF-02727088** | [ACM-137332](https://rsa.atlassian.net/browse/ACM-137332) | Fixed a performance issue that caused Data Risk Runs to take longer than expected. |
| **SF-02724543** | [ACM-136949](https://rsa.atlassian.net/browse/ACM-136949) | Fixed an issue where Change Requests generated duplicate approval tasks for the same approver when originating from different sources. |

## Platform Matrix

The latest application server and JDK version are certified for this release.

| | RSA Governance & Lifecycle<br/>Software Bundle | Software Only<br/>(WebLogic or WebSphere) | RSA Governance & Lifecycle<br/>Virtual Application | Container |
| :--- | :--- | :--- | :--- | :--- |
| **Application Server Version** | | | | |
| WildFly 24.0.1 Included | Qualified | N/A | Qualified | Qualified |
| WebLogic 14.1.1.0 | N/A | Qualified | N/A | N/A |
| WebSphere 9.0.5.27 | N/A | Qualified | N/A | N/A |
| **JDK Version Certified** | | | | |
| AdoptOpenJDK 1.8.0_502 | Qualified | N/A | Qualified | N/A |
| Oracle JDK 1.8.0_501<br/>(WebLogic) | N/A | Qualified | N/A | N/A |
| IBM JDK 1.8.0_501<br/>(WebSphere) | N/A | Qualified | N/A | N/A |
| **Operating Systems** | | | | |
| SUSE (SLES 12 SP5, and<br/>SLES 15 SP7) | Qualified | N/A | Qualified | N/A |
| Red Hat (RHEL 8.10 and<br/>RHEL 9.8) | Qualified | N/A | N/A | N/A |

<small>*RSA Governance & Lifecycle Virtual Application deployments are supported on Nutanix through the OVA file installation method.*</small>

## Prerequisites for Applying Patch (v8.0 P07 or Later)

> In case you are upgrading directly to P12 from patch P06 or earlier, you must perform the following procedure.

When using a customer-supplied Oracle Database, or RSA-Supplied Database installed remotely, update the AVUSER and AVCSUSER schemas as follows:

1. Log in as a **SYS** user (or another user with **SYSDBA** privilege) in SQLPLUS (or another database tool, such as SQL Developer).
2. Run the following script to grant permission on the following objects:
```sql
GRANT EXECUTE ON SYS.DBMS_CRYPTO TO AVUSER;
GRANT EXECUTE ON SYS.DBMS_LOCK TO AVCSUSER;
```

> **Note:** If the AVUSER schema name is not AVUSER, replace AVUSER with the appropriate schema name.

## Product Support with Operating System

RSA Governance & Lifecycle version 8.0 P05 and later software bundle is now supported on RHEL 9.4+. There are two paths to deploying RSA Governance & Lifecycle version 8.0 software bundle on RHEL 9.4+:

1. For a fresh/new deployment of RSA G&L on RHEL 9.4+, use the 8.0.0 P11 HF01 Full Installer to install RSA G&L on RHEL 9.4+, and then upgrade G&L to the latest available patch.
2. For a previously installed deployment of RSA G&L 8.0 on RHEL 8, complete all the prerequisites described in the following section, and then upgrade the operating system from RHEL 8 to RHEL 9.4+.

### Upgrading RHEL 8 with RSA G&L 8.0 to RHEL 9.4+

Before upgrading your system from RHEL 8 to RHEL 9.4, ensure the following steps are completed:

1. Apply patch 8.0.0 P05 or later successfully on the existing RHEL 8 system.
2. Apply the latest Appliance Updater for Oracle Database to the existing RHEL 8 system containing the RSA-provided database.

After completing the upgrade to RHEL 9.4, ensure the following:

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

> **Note:** Once all the prerequisites are completed as described above, start the RSA Governance & Lifecycle services.

## RSA Governance & Lifecycle Product Version Lifecycle

RSA has a defined End of Primary Support (EOPS) policy associated with all major versions. For more details, please refer to the [Product Version Life Cycle for RSA Governance & Lifecycle](https://community.rsa.com/s/news/product-version-life-cycle-for-rsa-governance-lifecycle-MC2LX56UYE5ZC27FM6QZLQHO2Q5Y).

> **Note:** SecurID Governance & Lifecycle v7.5.2 has reached EOPS as of July 2025.

</div>
