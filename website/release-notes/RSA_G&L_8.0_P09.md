---
title: RSA G&L 8.0 P09
sidebar_label: v8.0 P09
---

# RSA Governance & Lifecycle 8.0 Patch 09

**Release Date:** *[Date not specified in extract]*  
**Version:** 8.0.0 P09

## Executive Summary
RSA Governance & Lifecycle version 8.0.0 P09 introduces features designed to enhance system efficiency, automate key tasks, and improve visibility. With updates like Duplicate Users and Accounts Notification, integration with RSA ID Plus (RSA Cloud Access Service), Stalled Requests Configuration, and Third-Party Library Updates, this release reduces manual intervention, optimizes performance, and bolsters security.

## Highlighted Features

### Duplicate Users and Accounts Notification
New event categories, **Detect Duplicate Users** and **Detect Duplicate Accounts**, have been added to Custom Events that notify/alert when the system detects duplicate users or accounts entries. While running a unification, and/or collecting data through ADC, the Custom Event Notification will be immediately triggered once a duplication (users, or accounts) is created. The selected or logged in user will be notified via Email and/or UI Notifications. This feature helps RSA G&L users to take fast action regarding duplicate entries as soon as they are discovered.

### Integration with RSA ID Plus (RSA Cloud Access Service)
RSA Cloud Access Service (CAS) has been integrated with RSA Governance & Lifecycle. CAS is being introduced as an application inside RSA G&L. This integration connects the RSA G&L instance to CAS server and establishes a trust relationship between them, enabling subsequent bi-directional integrations.
*For more information, see the Quick Setup Guide on RSA Community.*

### Stalled Requests Configuration
Enhancements have been made to manage Stalled Change Requests under **Requests Configuration > Stalled Requests** tab. The existing Pending Change Requests custom event has been integrated into this tab to detect and notify when requests remain pending for extended periods. This tab provides two key capabilities:
*   **Monitoring Pending Requests:** Integrates the existing Pending Change Requests Custom Event to detect and notify when requests are stuck for a long time.
*   **Remediation (Cleanup):** Allows administrators to automatically move stalled requests to a Cancelled or Completed state based on configured thresholds.

These enhancements help to identify problematic requests before they impact operations, reduce backlog and improve system performance.

## Enhancements

| Issue ID | Description |
| :--- | :--- |
| **[ACM-134218](https://rsa.atlassian.net/browse/ACM-134218)** | Logs have been improved around data source validation checks during WildFly based upgrades. |
| **[ACM-134076](https://rsa.atlassian.net/browse/ACM-134076)** | Clicking *Pause Scheduled Collections* button from **Collectors > Scheduling > Collectors** page now pauses scheduled Unification in addition to pausing scheduled collections. |
| **[ACM-133837](https://rsa.atlassian.net/browse/ACM-133837)** | Data Purging process by default retains only five past versions of definitions. Setting `keepVersionDataForMonths` to a number will retain version data for the configured number of months. |
| **[ACM-132733](https://rsa.atlassian.net/browse/ACM-132733)** | Application logs in `T_AV_APPLICATION_LOG` can now be capped. Flags: `EnableMaxRowsThresholdForAppLogsTable` (default false) and `MaxRowsThresholdForAppLogsTable` (default 1000000). |
| **[ACM-133225](https://rsa.atlassian.net/browse/ACM-133225)** | Built-in mechanism to validate disk space before applying patches and automatic clean-up for old patch files. |
| **[ACM-132598](https://rsa.atlassian.net/browse/ACM-132598)** | Run IDs for Duplicate User/Account removal task now display the number of duplicates removed. |
| **[ACM-132591](https://rsa.atlassian.net/browse/ACM-132591), [ACM-129665](https://rsa.atlassian.net/browse/ACM-129665), [ACM-129664](https://rsa.atlassian.net/browse/ACM-129664), [ACM-129662](https://rsa.atlassian.net/browse/ACM-129662), [ACM-120380](https://rsa.atlassian.net/browse/ACM-120380)** | In Cluster environment, Schedule/Thread/Database/Memory/Performance information now lists data from all Nodes. |
| **[ACM-132049](https://rsa.atlassian.net/browse/ACM-132049)** | Improvements to Advanced Dashboards (drill-down filters, component headers). |
| **[ACM-131970](https://rsa.atlassian.net/browse/ACM-131970)** | Default Log Refresh Scheduler created to purge logs older than 7 days if not configured. |

## Fixed Issues

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| **SF-02710144** | [ACM-135173](https://rsa.atlassian.net/browse/ACM-135173), [ACM-133566](https://rsa.atlassian.net/browse/ACM-133566) | Active Directory Server: Add Account to Group Capability now works successfully when Group exists under `CN=Users`. |
| **SF-02699615** | [ACM-134363](https://rsa.atlassian.net/browse/ACM-134363) | Custom attributes now display properly grouped together by the defined separator. |
| **SF-02699967** | [ACM-134313](https://rsa.atlassian.net/browse/ACM-134313) | Deadlocks on `T_AV_CHANGE_REQUESTS_MST` no longer occur due to database statistics operation. |
| **SF-02695164** | [ACM-134155](https://rsa.atlassian.net/browse/ACM-134155) | RESTful Connector: Multiple values with double quotes (e.g., `"dev", "admin"`) are transmitted correctly without extra slashes. |
| **[ACM-134062](https://rsa.atlassian.net/browse/ACM-134062)** | - | LDAP Connector connection timeout value changed from seconds to milliseconds. |
| **SF-02693784** | [ACM-134041](https://rsa.atlassian.net/browse/ACM-134041) | RESTful Connector: Backslashes in usernames (`username\svc`) are no longer removed. |
| **[ACM-133940](https://rsa.atlassian.net/browse/ACM-133940)** | - | Importing SoD rules works successfully if review definition names match between environments. |
| **SF-02695060** | [ACM-133924](https://rsa.atlassian.net/browse/ACM-133924) | Java Code-Based Connector: Fixed loading issue for MySQL and DB2 drivers. |
| **SF-02694718** | [ACM-133835](https://rsa.atlassian.net/browse/ACM-133835) | Generic Database Connector: Backslashes in SQL queries (`domain\username`) are no longer removed. |
| **SF-02680856, SF-02672369** | [ACM-133833](https://rsa.atlassian.net/browse/ACM-133833), [ACM-132362](https://rsa.atlassian.net/browse/ACM-132362) | Archival activity completes successfully, and history tables display archived data. |
| **SF-02684231** | [ACM-133783](https://rsa.atlassian.net/browse/ACM-133783) | Provisioning Node now shows a comprehendible reason for Cancelling instead of "Unexpected Exception". |
| **[ACM-133782](https://rsa.atlassian.net/browse/ACM-133782)** | - | Generic REST Collector: Handles empty/null values in request header to avoid NullPointerException. |
| **SF-02690670** | [ACM-133589](https://rsa.atlassian.net/browse/ACM-133589) | Responsibilities automatically assigned to Business/Technical Owner are no longer missed. |
| **SF-02691270** | [ACM-133580](https://rsa.atlassian.net/browse/ACM-133580) | Old Run IDs for IDC and IDU can now be opened successfully. |
| **SF-02687943** | [ACM-133492](https://rsa.atlassian.net/browse/ACM-133492) | App Metadata Collector changes to Business Sources now set `modified_by` to System Admin. |
| **SF-02688775** | [ACM-133483](https://rsa.atlassian.net/browse/ACM-133483) | Encryption of passwords in `domain.xml` (WildFly) in Docker Container working successfully. |
| **SF-02685548** | [ACM-133476](https://rsa.atlassian.net/browse/ACM-133476) | Active Directory Connector: Added support for multiple CNs in DN. |
| **-** | [ACM-132230](https://rsa.atlassian.net/browse/ACM-132230), [ACM-132201](https://rsa.atlassian.net/browse/ACM-132201), [ACM-128998](https://rsa.atlassian.net/browse/ACM-128998) | Library Updates: Log4j2 (2.21.0), SLF4j (2.0.17), JSTL replaced with Jakarta. |

## Known Issues

| Issue ID | Description | Workaround |
| :--- | :--- | :--- |
| **[ACM-135700](https://rsa.atlassian.net/browse/ACM-135700)** | After creating the first CAS application, the Refresh token does not work once the application is up after applying the latest P09 patch. | Restart the ACM application for the Refresh token to work. |

## Platform Matrix & Support
*   **Application Server:** WildFly 24.0.1 (Qualified), WebLogic 14.1.1.0, WebSphere 9.0.5.21
*   **JDK:** AdoptOpenJDK 1.8.0_472, Oracle JDK 1.8.0_471, IBM JDK 1.8.0_471
*   **OS:** SUSE (SLES 12 SP5, SLES 15 SP7), Red Hat (RHEL 8.10, RHEL 9.6)
*   **RHEL 9.4+ Support:** Supported for RSA G&L 8.0 P05+. Must install on RHEL 8 first, then upgrade OS.

*See PDF for full prerequisites and installation details.*
