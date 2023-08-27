---
title: Custom API
description: Custom Widget Configuration from the API
layout: ../../../layouts/MainLayout.astro
---

This widget can show information from custom self-hosted or third party API.

Fields need to be defined in the `mappings` section YAML object to correlate with the value in the APIs JSON object. Final field definition needs to be the key with the desired value information.

```yaml
widget:
    type: customapi
    url: http://custom.api.host.or.ip:port/path/to/exact/api/endpoint
    refreshInterval: 10000 # optional - in milliseconds, defaults to 10s
    username: username # auth - optional
    password: password # auth - optional
    method: GET # optional, e.g. POST
    headers: # optional, must be object, see below
    mappings:
      - field: key # needs to be YAML string or object
        label: Field 1
        format: text # optional - defaults to text
      - field: # needs to be YAML string or object
          path:
            to: key2
        format: number # optional - defaults to text
        label: Field 2
      - field: # needs to be YAML string or object
          path:
            to:
              another: key3
        label: Field 3
        format: percent # optional - defaults to text
```

Supported formats for the values are `text`, `number`, `float` and `percent`.

## Example

For the following JSON object from the API:
```json
{
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "gender": "Male",
  "origin": {
    "name": "Earth (C-137)"
  },
  "locations": [{
    "name": "Earth (C-137)"
  },{
    "name": "Citadel of Ricks"
  }]
}
```

Define the `mappings` section as an aray, for example:
```yaml
    mappings:
      - field: name # Rick Sanchez
        label: Name
      - field: status # Alive
        label: Status
      - field:
          origin: name # Earth (C-137)
        label: Origin
      - field:
          locations:
            1: name # Citadel of Ricks
        label: Location
```

Pass custom headers using the `headers` option, for example:
```yaml
  headers:
    X-API-Token: token
```

*Added in v0.6.29*