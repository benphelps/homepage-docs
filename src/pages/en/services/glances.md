---
title: Glances
description: Glances Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

[replace with image url]

The Glances widget allows you to monitor the resources (cpu, memory, diskio, sensors & processes) of host or another machine You can have multiple instances by adding another service block.

```yaml
widget:
    type: glances
    url: http://glances.host.or.ip:port
    username: username
    password: password
    metric: cpu
```

_Please note, this widget does not need an `href`, `icon` or `description` on its parent service. To achive the same effect as the examples above, see as an example:_

```yaml
- CPU Usage:
      widget:
          type: glances
          url: http://glances.host.or.ip:port
          metric: cpu
```

## Metrics

The metric field in the configuration determines the type of system monitoring data to be displayed. Here are the supported metrics:

`cpu`: CPU usage. Shows how much of the system's computational resources are currently being used.

`memory`: Memory usage. Shows how much of the system's RAM is currently being used.

`process`: Top 5 processes based on CPU usage. Gives an overview of which processes are consuming the most resources.

`network:<interface_name>`: Network data usage for the specified interface. Replace `<interface_name>` with the name of your network interface, e.g., `network:enp0s25`, as specificed in glances.

`sensor:<sensor_id>`: Temperature of the specified sensor, typically used to monitor CPU temperature. Replace `<sensor_id>` with the name of your sensor, e.g., `sensor:Package id 0` as specificed in glances.

`disk:<disk_id>:` Disk I/O data for the specified disk. Replace `<disk_id>` with the id of your disk, e.g., `disk:sdb`, as specificed in glances.
