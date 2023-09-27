---
title: Coin Market Cap
description: Coin Market Cap Widget Configuration
layout: ../../../layouts/MainLayout.astro
---

Get your API key from your [CoinMarketCap Pro Dashboard](https://pro.coinmarketcap.com/account).

Allowed fields: no configurable fields for this widget.

```yaml
widget:
    type: coinmarketcap
    currency: GBP # Optional
    symbols: [BTC, LTC, ETH]
    key: apikeyapikeyapikeyapikeyapikey
```

You can also specify slugs instead of symbols (since symbols aren't garaunteed to be unique). If you supply both, slugs will be used. For example:

```yaml
widget:
    type: coinmarketcap
    slugs: [chia-network, uniswap]
    key: apikeyapikeyapikeyapikeyapikey
```

*Added in v0.3.24, updated in v0.6.22*
