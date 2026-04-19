---
title: RSA G&L 8.0 P10
sidebar_label: v8.0 P10
sidebar_position: 1
---

<div className="text--justify">

# RSA Governance & Lifecycle 8.0 Patch 10

**Release Date:** 2026-04-01  
**Version:** 8.0.0 P10

## Executive Summary
RSA Governance & Lifecycle version 8.0.0 P10 introduces features designed to enhance system efficiency, automate key tasks, and improve visibility. With updates like Compare User (in User Review), Pluggable Password Vault, Search Filter, and New User Interface for Reviews (Account and Group Reviews, My Reviews, and Home Page) this release reduces manual intervention, optimizes performance, and bolsters security.

## Highlighted Features

### Compare User (in User Review) – <span className="badge badge--danger">[BETA]</span>
The User Review section in the enhanced UI now features an entitlement comparison tool. By selecting up to four users, reviewers can easily identify entitlements assigned to each of the selected users. This added visibility ensures more informed decision-making when approving or revoking user entitlements.

### Pluggable Password Vault
RSA G&L currently supports only CyberArk vault integration. Part of this solution system will expose a plugin-based vault integration where customers, partners, and RSA PS can build and upload their own Password Vault Manager (PVM) providers (via UI) to supply credentials to collectors and connectors. The framework defines common interfaces, metadata-driven configuration for vault configuration and profiles, automatic class loading of new providers. As a part of this feature a Local Vault is introduced which stores the credential name and password within the product; to help the customers who do not have the external vaults.

### Search Filter
In the existing Search Filter functionality, the search text is applied across all visible columns on the UI, which can lead to increased response time. For column-specific searches, users must explicitly click the search icon (magnifying glass) in the Search Filter box to open the Advanced Search dialog.

With this enhancement, clicking anywhere within the Search Filter box will automatically open the Advanced Search dialog. This encourages users to perform more targeted, column-specific searches, improving performance and usability. To enable this feature, set the custom flag `enableEnhancedFilterSearch` to `true` from **Admin > System > Settings > Custom**. Removing the flag or setting the flag’s value to false reverts to the previous behavior.

When this feature is enabled, users can still search across all visible columns by selecting the Any Column option in the Advanced Search dropdown. To restrict the option to select Any Column for non-System Admin users, set another flag `disableQuickFilterSearch` to `true`; this flag defaults to `false`.

### New User Interface for Reviews
This feature is not intended for production use and is hidden by a custom feature flag named `FeatureFlag.UseEnhancedUIForReviews`. When this feature is enabled (only by Admin user), from **Admin > System > Settings tab > Edit > Custom**, reviewers are provided with a toggle option from **Home > Reviews > My Reviews page > Use the new UI** toggle, to allow experiencing the new UI.

* When the toggle is turned ON, opening any of the respective reviews will provide the new UI experience.
* By turning the toggle OFF, users will be able to perform the respective reviews using existing UI. Ensure you reload the page to display the new UI.

This beta feature is available to all customers for testing. If you test the new UI, please send us your feedback or questions via `gl-beta-feedback@rsa.com`. Please do not contact RSA Technical Support or open a Technical Support Case if you have any feedback on this beta feature.

#### Account and Group Review
The user interface is introduced for the Account and the Group Review pages. It enhances the user experience and provides a better display for the respective data.

#### My Reviews Page
The My Reviews page UI is enhanced to be displayed in two views; Cards view (by default), List view. More features are introduced and others enhanced. To display your reviews, log in as a Reviewer, and click the My Reviews card on the Home page. In addition to the UI changes, new Reviews Statuses, new Filter fields, and a Full Screen view are introduced to the page for better experience.

#### Home Page
A new Home page is introduced to RSA G&L that is displayed in the new interface by setting the `FeatureFlag.UseEnhancedUIForHomePage` custom flag under **Admin > System > Settings tab**. This custom flag must be set to `true` to enable displaying the new Home page in the new UI. It provides better usability and user experience.

## New Features

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | [ACM-136202](https://rsa.atlassian.net/browse/ACM-136202) | **Reviews - New UI**: In the Reviews New UI, the Collaborate feature is renamed to Share. |
| - | [ACM-134647](https://rsa.atlassian.net/browse/ACM-134647) | **Role Invalid Membership Rule**: If an Invalid Membership rule is established for the Role, the Indirect Relationship Processing (IRP) will encounter failure. This enhancement ensures that such issues are managed gracefully, preventing the IRP from failing. A new ValidMembership Rule field is introduced in the Role table to facilitate the identification of any invalid membership rules associated with the role. This information is also prominently displayed on the Role General page and the Membership tab. |
| - | [ACM-135524](https://rsa.atlassian.net/browse/ACM-135524) | A limit is set to the Risk CR evaluation. The maximum value is now 365 days, and the default is 90 days. |
| - | [ACM-134835](https://rsa.atlassian.net/browse/ACM-134835) | Unused space in the AWS-RDS for RSA G&L Cloud is now reclaimed by shrinking the database files. The procedure to shrink the database files is carried out, when necessary, by the RSA SaaS Ops team. |
| - | [ACM-134832](https://rsa.atlassian.net/browse/ACM-134832) | The Lite User category is removed from the ASR report, and now they count as Active users. |
| - | [ACM-134567](https://rsa.atlassian.net/browse/ACM-134567) | The Self-Service Access Request page performance is improved. |
| - | [ACM-133932](https://rsa.atlassian.net/browse/ACM-133932) | The commons-beanutils.jar is upgraded to version 1.9.4. |
| - | [ACM-133930](https://rsa.atlassian.net/browse/ACM-133930) | The sshd-common.jar is upgraded from version 2.13.2 to version 2.16.0. |
| - | [ACM-133855](https://rsa.atlassian.net/browse/ACM-133855) | **Ability to Download and Delete Archive Dump Files**: new buttons for Archive runs in RSA G&L Cloud are added under **Monitoring > Data Runs**. **Download**: downloads the archive dump file from the S3 bucket in G&L Cloud to the local system which can be used to import to the customer’s on-premises database. **Delete**: deletes the archive dump files from the S3 bucket in G&L Cloud. This feature is only available in RSA G&L Cloud. |
| - | [ACM-132475](https://rsa.atlassian.net/browse/ACM-132475)<br/>[ACM-129559](https://rsa.atlassian.net/browse/ACM-129559)<br/>[ACM-129558](https://rsa.atlassian.net/browse/ACM-129558)<br/>[ACM-125625](https://rsa.atlassian.net/browse/ACM-125625) | **Handling First & Last Names in Auto-generated Passwords**: Violations are added for not using the First Name or Last Name in user’s password. If the last name has a single character and it exists in the auto-generated password, and the password policy with single character for first name/last name is ignored. |
| - | [ACM-119149](https://rsa.atlassian.net/browse/ACM-119149) | **Support for External CA-Signed Certificates**: The application now supports the import of external CA-signed certificates into both server and client keystores. Instead of using the default internal RSA CA for communication between ACM and AFX/Remote Agents, customers can now use the import utility to configure their own CA-signed certificates. |

## Enhancements

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | [ACM-136294](https://rsa.atlassian.net/browse/ACM-136294) | The Database Connector is now showing a View Changes section to help identify the SSL information for migrated and imported Connector. |
| - | [ACM-136253](https://rsa.atlassian.net/browse/ACM-136253)<br/>[ACM-135782](https://rsa.atlassian.net/browse/ACM-135782)<br/>[ACM-135781](https://rsa.atlassian.net/browse/ACM-135781) | All the LDAP Directory Wizards are enhanced to support secure/SSL connections for the LDAP Connectors. |
| - | [ACM-135205](https://rsa.atlassian.net/browse/ACM-135205) | In the Directory Wizards, based on the Use SSL checkbox selection, the connector screen fields will be enabled/disabled or displayed/hidden accordingly. All LDAP connectors will support SSL connections only. The Use Secure Connection option will be selected by default, and the SSL port value will be populated automatically. |
| - | [ACM-134941](https://rsa.atlassian.net/browse/ACM-134941)<br/>[ACM-134939](https://rsa.atlassian.net/browse/ACM-134939)<br/>[ACM-134938](https://rsa.atlassian.net/browse/ACM-134938) | Logging in AFX startup and Auto upgrade is enhanced. |
| - | [ACM-134218](https://rsa.atlassian.net/browse/ACM-134218) | Debug Logs and Checks for Data Source are enhanced during WildFly configuration. |
| **SF-02710275** | [ACM-132575](https://rsa.atlassian.net/browse/ACM-132575)<br/>[ACM-135134](https://rsa.atlassian.net/browse/ACM-135134) | MuleSoft component in AFX Server is updated from version 4.7.1 to 4.6.24 LTS. |
| - | [ACM-128147](https://rsa.atlassian.net/browse/ACM-128147) | In the Generic REST IDC, the attribute mapping page is now supporting a drop-down feature that allows the users to select attributes. |
| - | [ACM-121745](https://rsa.atlassian.net/browse/ACM-121745) | Tokens acquired by loginTrustedApp expire as per the configured time threshold. |

## Fixed Issues

| Issue ID | Reference | Description |
| :--- | :--- | :--- |
| - | [ACM-137052](https://rsa.atlassian.net/browse/ACM-137052) | A validation is added to check for a trailing backslash in the JAVA_HOME path to prevent AFX installation failure on Windows systems. |
| - | [ACM-137051](https://rsa.atlassian.net/browse/ACM-137051) | The Log4j version is upgraded to prevent Remote Agent startup failure when running as a service on Windows systems. |
| **SF-02728501** | [ACM-136461](https://rsa.atlassian.net/browse/ACM-136461) | Entitlements are now filtered correctly once the Entitlements Rules are applied. For example, when the RoleSet policy is set to Deny, no Roles can be added as Entitlements. |
| **SF-02725113** | [ACM-136208](https://rsa.atlassian.net/browse/ACM-136208) | The Indirect Relationship Processing is now working successfully during collections since the date format is changed from 01-jan-2026 to 01-01-2026 in the SQL packages. |
| **SF-02717614** | [ACM-135814](https://rsa.atlassian.net/browse/ACM-135814) | In the Fulfillment Workflow, the Transition button is no longer shown when the option Show this button on the workflow form is unchecked in the transition line. |
| **SF-02716848** | [ACM-135739](https://rsa.atlassian.net/browse/ACM-135739) | The Amazon AWS Collector and Connector are updated to properly connect to the endpoint through HTTP proxy. |
| **SF-02717991** | [ACM-135594](https://rsa.atlassian.net/browse/ACM-135594) | The Generic REST EDCs are now generating tokens successfully when the collector is configured to use a POST request with Basic Authentication. |
| **SF-02711882** | [ACM-135433](https://rsa.atlassian.net/browse/ACM-135433) | In the Generic REST Connector, the proxy port is made a non-mandatory field. |
| **SF-02714814** | [ACM-135432](https://rsa.atlassian.net/browse/ACM-135432) | In the AFX Database Connector, the stored procedure configuration with new lines is now supported. |
| **SF-02711755** | [ACM-135289](https://rsa.atlassian.net/browse/ACM-135289) | A preservation step is added to mask the ampersands (&) in query parameters (&parameter) before sanitization and restore them afterward, preventing accidental decoding and ensuring that the drop-down options load correctly in Request Forms. |
| **SF-02696248** | [ACM-135188](https://rsa.atlassian.net/browse/ACM-135188)<br/>[ACM-135158](https://rsa.atlassian.net/browse/ACM-135158) | The Risk Data processing no longer takes a long time to load; whether for completion or failure. |
| **SF-02696677** | [ACM-135016](https://rsa.atlassian.net/browse/ACM-135016) | Logging has been enhanced to provide more detailed diagnostic information for workflow jobs. |
| **SF-02706235** | [ACM-134949](https://rsa.atlassian.net/browse/ACM-134949) | The Notifications menu title is no longer written all in upper case. It is “Notifications” instead of “NOTIFICATIONS”. |
| **SF-02707091** | [ACM-134928](https://rsa.atlassian.net/browse/ACM-134928) | In the Rules menu, the Workflow option is correctly highlighted if the current page being shown is Rules > Workflows. |
| - | [ACM-134924](https://rsa.atlassian.net/browse/ACM-134924) | Response Timeout is optimized to reduce the number of requests in Open State (sent from AFX to ACM) to avoid the load on the ACM when it is not reachable for some time. |
| **SF-02706684** | [ACM-134869](https://rsa.atlassian.net/browse/ACM-134869) | Change Requests for changes to a group made from Users > Groups > select a group > Edit, now complete successfully. |
| **SF-02699080** | [ACM-134810](https://rsa.atlassian.net/browse/ACM-134810) | Data Purging performance is enhanced. |
| - | [ACM-134728](https://rsa.atlassian.net/browse/ACM-134728) | The parsing issue encountered during migration is resolved when a special character is present in a collector post-processing script. |
| **SF-02702119** | [ACM-134479](https://rsa.atlassian.net/browse/ACM-134479) | In the Advanced Dashboards, the components now are loaded and displayed successfully. |
| **SF-02703113** | [ACM-134440](https://rsa.atlassian.net/browse/ACM-134440) | In the Account Data Collector of type Database, the Test button is now working successfully. |
| **SF-02699967** | [ACM-134313](https://rsa.atlassian.net/browse/ACM-134313) | The Workflow now runs successfully, and the process loading does not time out. |
| **SF-02697008** | [ACM-134073](https://rsa.atlassian.net/browse/ACM-134073) | Creating an Entitlement Data Collector for the Database type is now working successfully. |
| **SF-02697849** | [ACM-134044](https://rsa.atlassian.net/browse/ACM-134044) | The IDC can now be edited successfully under Collectors > select a collector > General tab > Edit. |
| **SF-02696831** | [ACM-133999](https://rsa.atlassian.net/browse/ACM-133999) | The internal security handling is improved by removing the use of a field labeled as a password from the REST POST calls. |
| **SF-02695459** | [ACM-133839](https://rsa.atlassian.net/browse/ACM-133839) | A placeholder is introduced to the Account Filter field, under Requests > Configurations > Requests Form, to guide users to use parentheses when applying OR conditions. It ensures accurate filtering of results when multiple OR conditions are used together. |
| **SF-02667293** | [ACM-132981](https://rsa.atlassian.net/browse/ACM-132981) | Who Has Access and Who Has What screens no longer take time loading and the respective data is displayed, for each of them, successfully. |
| **SF-02680516** | [ACM-132654](https://rsa.atlassian.net/browse/ACM-132654) | The UI for CyberArk password vault is enhanced for uploading keystore/certificate for two-way SSL option. This enhancement makes it possible for the keystore/certificate to be passed to the corresponding remote agent for handling authentication. |
| **SF-02666125** | [ACM-131759](https://rsa.atlassian.net/browse/ACM-131759) | Entitlements associated with Business Owner access are automatically removed when a user is removed from the Business Owner role. |
| **SF-02657790** | [ACM-131414](https://rsa.atlassian.net/browse/ACM-131414) | The HTTP Trace method on port 8585 is now disabled in AFX. |
| **SF-02653327** | [ACM-131023](https://rsa.atlassian.net/browse/ACM-131023) | The SQLServer type Database Collector is now working successfully when creating an Account Data Collector (ADC) and an Entitlement Data Collector (EDC). |
| - | [ACM-130082](https://rsa.atlassian.net/browse/ACM-130082) | The Purging Process logic is enhanced to not delete any valid Provisioning Requests. |

## Platform Matrix

The latest application server and JDK version are certified for this release.

| | RSA Governance & Lifecycle<br/>Software Bundle | Software Only<br/>(WebLogic or WebSphere) | RSA Governance & Lifecycle<br/>Virtual Application | Container |
| :--- | :--- | :--- | :--- | :--- |
| **Application Server Version** | | | | |
| WildFly 24.0.1 Included | Qualified | N/A | Qualified | Qualified |
| WebLogic 14.1.1.0 | N/A | Qualified | N/A | N/A |
| WebSphere 9.0.5.21 | N/A | Qualified | N/A | N/A |
| **JDK Version Certified** | | | | |
| AdoptOpenJDK 1.8.0_482 | Qualified | N/A | Qualified | N/A |
| Oracle JDK 1.8.0_481<br/>(WebLogic) | N/A | Qualified | N/A | N/A |
| IBM JDK 1.8.0_481<br/>(WebSphere) | N/A | Qualified | N/A | N/A |
| **Operating Systems** | | | | |
| SUSE (SLES 12 SP5, and SLES 15 SP7) | Qualified | N/A | Qualified | N/A |
| Red Hat (RHEL 8.10 and RHEL 9.7) | Qualified | N/A | N/A | N/A |

<small>*RSA Governance & Lifecycle Virtual Application deployments are now supported on Nutanix through the OVA file installation method.*</small>

## Prerequisites for Applying Patch (v8.0 P07 or Later)

Note: In case you are upgrading directly to P10 from patch P06 or earlier, you must perform the following procedure.

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
Assure the following:
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
