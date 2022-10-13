---
title: Service Widgets
description: Service Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Unless otherwise noted, URLs should not end with a `/` or other API path.  Each widget will handle the path on its own.

Each service can have one widget attached to it (often matching the service type, but thats not forced).

Using Emby as an example, this is how you would attach the Emby service widget.

```yaml
- Emby:
    icon: emby.png
    href: http://emby.home/
    description: Movies & TV Shows
    widget:
      type: emby
      url: http://emby.home/
      key: st5XKXl8C0olqTHFPXNVCPIuU5bS6y
```

Each widget can optionally provide a list of which fields should be visible via the `fields` widget property.  If no fields are specified, then all fields will be displayed.  The `fields` property must be a valid YAML array of strings.  As an example, here is the entry for Sonarr showing only a couple of fields.

**In all cases a widget will work and display all fields without specifying the `fields` property.**

```yaml
- Sonarr:
  icon: sonarr.png
  href: http://sonarr.host.or.ip
  widget:
    type: sonarr
    fields: ["wanted", "queued"]
    url: http://sonarr.host.or.ip
    key: apikeyapikeyapikeyapikeyapikey
```


# Streaming Media Providers

Outgoing media streaming services, these widgets display current media information and controls.

## Emby

You can create an API key from inside Emby at `Settings > Advanced > Api Keys`.

Allowed fields: no configurable fields for this widget.

```yaml
widget:
  type: emby
  url: http://emby.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```


## Jellyfin

You can create an API key from inside Jellyfin at `Settings > Advanced > Api Keys`.

Allowed fields: no configurable fields for this widget.

```yaml
widget:
  type: jellyfin
  url: http://jellyfin.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```


## Tautulli (Plex)

The Plex API is hard to work with and very segmented, to simplify integration, the Tautulli service is used instead.  You can find the API key from inside Tautulli at `Settings > Web Interface  > API`.

Allowed fields: no configurable fields for this widget.

```yaml
widget:
  type: tautulli
  url: http://tautulli.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```


# Media Management Tools

This includes the `arr` range of utilities, as well as media request management tools.

## Sonarr

Find your API key under `Settings > General`.

Allowed fields: `["wanted", "queued", "series"]`.

```yaml
widget:
  type: sonarr
  url: http://sonarr.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```


## Radarr

Find your API key under `Settings > General`.

Allowed fields: `["wanted", "queued", "movies"]`.

```yaml
widget:
  type: radarr
  url: http://radarr.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```


## Readarr

Find your API key under `Settings > General`.

Allowed fields: `["wanted", "queued", "books"]`.

```yaml
widget:
  type: readarr
  url: http://readarr.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```


## Lidarr

Find your API key under `Settings > General`.

Allowed fields: `["wanted", "queued", "albums"]`.

```yaml
widget:
  type: lidarr
  url: http://lidarr.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```


## Bazarr

Find your API key under `Settings > Generaly`.

Allowed fields: `["missingEpisodes", "missingMovies"]`.

```yaml
widget:
  type: bazarr
  url: http://bazarr.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```


## Ombi

Find your API key under `Settings > Configuration > General`.

Allowed fields: `["pending", "approved", "available"]`.

```yaml
widget:
  type: ombi
  url: http://ombi.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```


## Overseerr

Find your API key under `Settings > General`.

Allowed fields: `["pending", "approved", "available"]`.

```yaml
widget:
  type: overseerr
  url: http://overseerr.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```


## Jellyseerr

Find your API key under `Settings > General > API Key`.

Allowed fields: `["pending", "approved", "available"]`.

```yaml
widget:
  type: jellyseerr
  url: http://jellyseerr.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```


# Download Clients

Download clients, like Usenet and BitTorrent, as well as their utility services for tracker and list management.

## Nzbget

This widget uses the same authentication method as your browser when logging in (HTTP Basic Auth), and is often referred to as the ControlUsername and ControlPassword inside of Nzbget documentation.

Allowed fields: `["rate", "remaining", "downloaded"]`.

```yaml
widget:
  type: nzbget
  url: http://nzbget.host.or.ip
  username: controlusername
  password: controlpassword
```


## SABnzbd

Find your API key under `Config > General`.

Allowed fields: `["rate", "queue", "timeleft"]`.

```yaml
widget:
  type: sabnzbd
  url: http://sabnzbd.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```


## ruTorrent

This requires the `httprpc` plugin to be installed and enabled, and is part of the default ruTorrent plugins.  If you have not explicitly removed or disable this plugin, it should be available.

Allowed fields: `["active", "upload", "download"]`.

```yaml
widget:
  type: rutorrent
  url: http://rutorrent.host.or.ip
  username: username # optional, false if not used
  password: password # optional, false if not used
```


## qBittorrent

Uses the same username and password used to login from the web.

Allowed fields: `["leech", "download", "seed", "upload"]`.

```yaml
widget:
  type: qbittorrent
  url: http://qbittorrent.host.or.ip
  username: username
  password: password
```


## Transmission

Uses the same username and password used to login from the web.

Allowed fields: `["leech", "download", "seed", "upload"]`.

```yaml
widget:
  type: transmission
  url: http://transmission.host.or.ip
  username: username
  password: password
```


## Prowlarr

Find your API key under `Settings > General`.

Allowed fields: `["enableIndexers", "numberOfGrabs", "numberOfQueries", "numberOfFailGrabs", "numberOfFailQueries"]`.

```yaml
widget:
  type: prowlarr
  url: http://prowlarr.host.or.ip
  key: apikeyapikeyapikeyapikeyapikey
```


## Jackett

Jackett does not require any authentication for the widget to work, as it uses the data that is exposed publicly.

Allowed fields: `["configured", "errored"]`.

```yaml
widget:
  type: jackett
  url: http://jackett.host.or.ip
```

# Networking Utilities

Includes things like proxy managers, DNS providers and network statistics.

## PiHole

PiHole does not require any authentication for the widget to work, as it uses the data that is exposed publicly.

Allowed fields: `["queries", "blocked", "gravity"]`.

```yaml
widget:
  type: pihole
  url: http://pi.hole.or.ip
  proxy: true # Optional, only use if it doesn't work otherwise
```


## AdGuard Home

The username and password are the same as used to login to the web interface.

Allowed fields: `["queries", "blocked", "filtered", "latency"]`.

```yaml
widget:
  type: adguard
  url: http://adguard.host.or.ip
  username: admin
  password: password
```


## Portainer

You'll need to make sure you have the correct environment set for the integration to work properly. From the Environments section inside of Portainer, click the one you'd like to connect to and observe the ID at the end of the URL (should be), something like `#!/endpoints/1`, here `1` is the value to set as the `env` value.  In order to generate an API key, please follow the steps outlined here https://docs.portainer.io/api/access.

Allowed fields: `["running", "stopped", "total"]`.

```yaml
widget:
  type: portainer
  url: https://portainer.host.or.ip:9443
  env: 1
  key: ptr_accesskeyaccesskeyaccesskeyaccesskey
```


## Traefik

No extra configuration is required.

Allowed fields: `["routers", "services", "middleware"]`.

```yaml
widget:
  type: traefik
  url: http://traefik.host.or.ip
```


## NGINX Proxy Manager

Login with the same admin username and password used to access the web UI.

Allowed fields: `["enabled", "disabled", "total"]`.

```yaml
widget:
  type: npm
  url: http://npm.host.or.ip
  username: admin_username
  password: admin_password
```


## Speedtest Tracker

No extra configuration is required.

Allowed fields: `["download", "upload", "ping"]`.

```yaml
widget:
  type: speedtest
  url: http://speedtest.host.or.ip
```


## Syncthing Relay Server

Pulls stats from the [relay server](https://docs.syncthing.net/users/strelaysrv.html).  [See here](https://github.com/benphelps/homepage/pull/230#issuecomment-1253053472) for more information on configuration.

Allowed fields: `["numActiveSessions", "numConnections", "bytesProxied"]`.

```yaml
widget:
  type: strelaysrv
  url: http://syncthing.host.or.ip:22070
```


## Authentik

This widget reads the number of active users in the system, as well as logins for the last 24 hours.

You will need to generate an API token for an existing user.  To do so follow these steps:

1. Navigate to the Authentik Admin Portal
2. Expand Directory, the click Tokens & App passwords
3. Click the Create button
4. Fill out the dialog making sure to set Intent to API Token
5. Click the Create button on the dialog
6. Click the copy button on the far right of the newly created API Token

Allowed fields: `["users", "loginsLast24H", "failedLoginsLast24H"]`.

```yaml
widget:
  type: authentik
  url: http://authentik.host.or.ip:22070
  key: api_token
```


## Proxmox

This widget shows the running and total counts of both QEMU VMs and LX Containers in the Proxmox cluster.  It also shows the CPU and memory usage of the first node in the cluster.

You will need to generate an API Token for an existing user.  Here is an example of how to do this.

1. Navigate to the Proxmox portal, click on Datacenter
2. Expand Permissions, click on Groups
3. Click the Create button
4. Name the group something informative, like api-ro-users
5. Click on the Permissions "folder"
6. Click Add -> Group Permission
    * Path: /
    * Group: group from bullet 4 above
    * Role: PVEAuditor
    * Propagate: Checked
7. Expand Permissions, click on Users
8. Click the Add button
    * User name: something informative like `api`
    * Realm: Linux PAM standard authentication
    * Group: group from bullet 4 above
9. Click on the Permissions "folder"
10. Click the Add button
    * User: user from bullet 8 above
    * Token ID: something informative like the application or purpose like `homepage`
    * Privilege Separation: Unchecked

Use `Token ID` as the `username` setting and `Secret` as the `password` setting.

Allowed fields: `["vms", "lxc", "cpu", "mem"]`.

```yaml
widget:
  type: proxmox
  url: http://proxmox.host.or.ip:8006
  username: api_token_id
  password: api_token_secret
```


## Unifi Controller

You can display general connectivity status from your Unifi (Network) Controller. When authenticating you will want to use an account that has at least read privileges.

Allowed fields: `["uptime", "wan", "lan_users", "wlan_users"]`.

```yaml
widget:
  type: unifi
  url: https://unifi.host.or.ip:port
  username: username
  password: password
```


# System Utilities & Services

System specific utilities and tools like message queues, databases, etc.

## Gotify

Get a Gotify client token from an existing client or create a new one on your Gotify admin page.

Allowed fields: `["apps", "clients", "messages"]`.

```yaml
widget:
  type: gotify
  url: http://gotify.host.or.ip
  key: clientoken
```


# Information Providers

Non service related items that display information from other sources, like stock monitoring or news.


## Mastodon 

Use the base URL of the Mastodon instance you'd like to pull stats for.  Does not require authentication as the stats are part of the public API endpoints.

Allowed fields: `["user_count", "status_count", "domain_count"]`.

```yaml
widget:
  type: mastodon
  url: https://mastodon.host.name
```

## Coin Market Cap

Get your API key from your [CoinMarketCap Pro Dashboard](https://pro.coinmarketcap.com/account).

Allowed fields: no configurable fields for this widget.

```yaml
widget:
  type: coinmarketcap
  currency: GBP # Optional
  symbols: [BTC, LTC, ETH]
  key: apikeyapikeyapikeyapikeyapikey
```