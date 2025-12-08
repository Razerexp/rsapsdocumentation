---
title: Mastercontroller - Installation
---

# Mastercontroller Installation

## Install DataReach DDL

1. Obtain `000_DataReach_Database.sql` from RSA.
2. Log in as SYSDBA and run the script.
3. Reset the `RSA_DATAREACH` user password.

## Install Mastercontroller

```bash
cd /opt/rsa
unzip /tmp/DRbinaries/MasterController_1.4.v13082021095902.zip
cp /tmp/DRbinaries/license.properties /opt/rsa/datareach/mastercontroller/license
chown -R datareach:datareach /opt/rsa/datareach
chmod +x /opt/rsa/datareach/mastercontroller/scripts/setperms.sh
/opt/rsa/datareach/mastercontroller/scripts/setperms.sh
```
