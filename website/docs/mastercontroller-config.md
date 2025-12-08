---
title: Mastercontroller - Configuration
---

# Mastercontroller Configuration

## Host List Setup

Create host CSV files under:
```
/opt/rsa/datareach/mastercontroller/data
```

## Host Plugin Setup

Update `config.xml` in:
```
/opt/rsa/datareach/mastercontroller/plugins/hostlist-provider-jdbc
```

## Environment Path

```bash
cd /opt/rsa/datareach/mastercontroller/scripts
./drutils.sh envpath generate
```

## Encrypt Passwords

```bash
./drutils.sh encrypt string init1234
```

## Generate Certificates

Commands for generating CA, mastercontroller, and agent certificates are included.
