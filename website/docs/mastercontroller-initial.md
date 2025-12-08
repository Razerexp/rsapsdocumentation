---
title: Mastercontroller - Initial Configuration
---

# Mastercontroller: Initial Configuration

## DataReach User Creation

```bash
useradd -d /home/datareach -c "Service Account for DataReach - DO NOT DELETE" datareach
mkdir -p /opt/rsa/datareach
```

## Firewall Setup

Open outbound traffic from each agent to the Mastercontroller:
- **10443**
- **22**

## DataReach Packages and License

Place all DataReach binaries and `license.properties` under `/tmp/DRbinaries/`.
