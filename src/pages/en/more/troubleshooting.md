---
title: Troubleshooting
description: Basic Troubleshooting
layout: ../../../layouts/MainLayout.astro
---

## General Troubleshooting Tips

- Consider setting the `ENV` variable `LOG_LEVEL` to `debug`.
- Check config/logs/homepage.log, on docker simply e.g. `docker logs homepage`. This may provide some insight into the reason for an error.
- Check the browser error console, this can also sometimes provide useful information.

## Service Widget Errors

All service widgets work essentially the same, that is, homepage makes a proxied call to an API made available by that service. The majority of the time widgets don't work it is a configuration issue. Of course, sometimes things do break. Some basic steps to try:

1. Verify the homepage installation can connect to the IP address or host you are using for the widget `url`. This is most simply achieved by pinging the server from the homepage machine, in Docker this means *from inside the container* itself, e.g.:
    ```
    docker exec homepage ping SERVICEIPORDOMAIN
    ```
    
    If your homepage install (container) cannot reach the service then you need to figure out why, for example in Docker this can mean putting the two containers on the same network, checking firewall issues, etc.

2. If you have verified that homepage can in fact reach the service then you can also check the API output, which is often helpful if you do need to file a bug report. The exact API endpoints and authentication vary of course, but in many cases instructions can be found by searching the web or if you feel comfortable looking at the homepage source code. It is out of the scope of this to go into full detail, but an example for PiHole would be:
    ```
    curl -L -k http://PIHOLEIPORDOMAIN/admin/api.php
    ```
    Or for AdGuard:
    ```
    curl -L -k -u 'username:password' http://ADGUARDIPORDOMAIN/control/stats
    ```
    Or for Portainer:
    ```
    curl -L -k -H 'X-Api-Key:YOURKEY' 'https://PORTAINERIPORDOMAIN:PORT/api/endpoints/2/docker/containers/json'
    ```
    This will return some data which may reveal an issue causing a true bug in the service widget.
