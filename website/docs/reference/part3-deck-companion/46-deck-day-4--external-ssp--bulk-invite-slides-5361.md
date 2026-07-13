---
title: "46. Deck Day 4 — External SSP & Bulk Invite (Slides 53–61)"
sidebar_position: 46
---

# 46. Deck Day 4 — External SSP & Bulk Invite (Slides 53–61)


Almost entirely deck-only material. The live sessions discussed the external SSP tier architecturally (Section 9.3) but never installed one, and Bulk Invite/Bulk Enrollment was introduced in one line (Section 3.2) with hands-on work planned for Day 2 that the recordings did not capture in procedural detail. The deck supplies both procedures.

*Slide 53 — Day 4 Divider — External SSP & SSP Bulk Invite*

![](/img/54.jpeg)

*Slide 54 — External Self-Service Portal Divider*

![](/img/55.jpeg)

*Slide 55 — External SSP Architecture*

![](/img/56.jpeg)

The DMZ topology diagram: internet users → external load balancer → external SSP (DMZ) → internal AMIS — the deployment shape of Section 9.3, in reusable diagram form.

*Slide 56 — External SSP Divider*

![](/img/57.jpeg)

*Slide 57 — External SSP Installation (1 of 2)*

![](/img/58.jpeg)

The external kit follows the internal pattern (Section 22.4): transfer the external PrimeKit build, create /opt/rsa, extract, symlink — then diverges: navigate to the certificates folder for the trust step on the next slide. Note the external build is a distinct tarball from the internal kit.

*Slide 58 — External SSP Installation (2 of 2)*

![](/img/59.jpeg)

The key deck-only step: trust bootstrapping.

Because the DMZ SSP must call the internal AMIS over SSL, the AMIS certificate is imported into the external kit's truststore using the bundled keytool: ../java/latest/bin/keytool -importcert -alias amis\_certificate -keystore truststore.jks -file /tmp/amis\_certificate.cer. Then scripts 1–3 (no Quick Setup on an external node — there is no AM to provision), a manual setenv.sh fill-in under configs/ssp/tomcat-ssp (back up first), and service tomcat-ssp start with a logon test. The absence of Quick Setup on external nodes explains why the manual-configuration reference of slides 24–29 stays relevant: external SSP installs are configured by hand.

*Slide 59 — SSP Bulk Invite Utility Divider*

![](/img/60.jpeg)

*Slide 60 — SSP Bulk Invite Configuration (1 of 2)*

![](/img/61.jpeg)

Deck-only procedure — server-side enablement.

Four server-side steps: (1) create the Security Console admin role SelfService-Bulk-Invite-Role and assign it to the users authorized to run the utility — the entitlement-granting authority behind Section 12.2's invitation entitlements; (2) copy bulkInviteEndpointConfig.xml to each AMIS server's root configs directory, editing its URL to the AMIS service URL/VIP; (3) deploy bulkinvite.war into the AMIS Tomcat webapps directory; (4) verify by browsing https://`<amis>`/bulkinvite/endpoints. (Both files ship with PrimeKit builds from June 2021 onward.)

*Slide 61 — SSP Bulk Invite Configuration (2 of 2)*

![](/img/62.jpeg)

Deck-only procedure — client-side configuration and execution.

The client-side mirrors Bulk Update's pattern (Section 15): configure bulkinvite.properties (log directory/level/config, AMIS encryption key, AMIS endpoint URL, AMIS service token) — using Template Builder on the bulk-invite-properties.apt file to encrypt, exactly the Section 15.2 workflow with the same key-that-looks-like-a-path trap. Three invitation profiles ship in the profiles directory: general\_invite.profile (generic SSP invitations), mfa\_guided\_enrollment.profile (MFA/Authenticate app guided enrollment), and sw\_guided\_enrollment.profile (software token guided enrollment) — pick per campaign. Update the bundled truststore.jks with the root CA that issued the AMIS certificate, build the input CSV (bulkinvite.csv ships as the example; users must already exist in AM or an identity source), and execute RunBulkInvite.bat. Combined with slide 60, this is the complete procedure for the mass-enrollment campaigns discussed as the Day 2 agenda item (Section 16.3).
