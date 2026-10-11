---
title: DN42 Information
date: 2026-10-11 14:53:01
tags: [DN42, BGP, Networking]
categories: [DN42]
permalink: /dn42/en/
---

[中文](/dn42/) | English

DN42 is a decentralized, peer-to-peer network that allows individuals and organizations to create their own autonomous systems (AS) and exchange routing information using the Border Gateway Protocol (BGP). It is designed for experimentation, learning, and collaboration among network enthusiasts.

---

<!-- more -->

> ##### <i class="fa-solid fa-circle-info"></i> DN42 Overview
> **ASN:** `4242422020`
> **IPv4 block:** `172.20.45.0/26`
> **IPv6 block:** `fd9d:ff88:3667::/48`
> **DN42 Domain:** `redbean0721.dn42`
> **PGP fingerprint:** `866C 48E0 3252 1AFD 6A81 4EC9 DDB4 BA8F B973 AD79`
> **Pingable:** `172.20.45.1` (IPv4) / `fd9d:ff88:3667::1` (IPv6)
> **GeoFeed:** https://r2.redbean0721.com/dn42/geofeed.csv

> To force IPv4 or IPv6, add a `v4.` or `v6.` prefix to the endpoint, e.g. `v4.tnn-1.dn42.redbean0721.com` or `v6.tnn-1.dn42.redbean0721.com`.

#### Nodes

|           | 台灣台南 (Tainan, Taiwan) |
| --------- | ------- |
| Description | AS3462 HiNet, Tainan, Taiwan |
| Node ID   | tnn-1   |
| Router ID | 2       |
| Endpoint  | `tnn-1.dn42.redbean0721.com` (v4+v6) |
| Public Key | `iJvLbmyVJjPH2V2gK79UNdgyDEPyxotIKfWmsSlDl38=` |
| IPv4 Address | `172.20.45.2/32` |
| IPv6 Address | `fd9d:ff88:3667:2::1/128` |
| Link-Local | `fe80::2020:2` |
| MTU       | IPv4: 1420, IPv6: 1332 |

|           | 日本大阪 (Osaka, Japan) |
| --------- | ------- |
| Description | AS31898 Oracle Cloud, Osaka (AD-1) |
| Node ID   | osa-1   |
| Router ID | 3       |
| Endpoint  | `osa-1.dn42.redbean0721.com` (v4+v6) |
| Public Key | `DAdI2YISMQj14W9Ja/hVjEEw3UwupTQ2cjScyYtuYCE=` |
| IPv4 Address | `172.20.45.3/32` |
| IPv6 Address | `fd9d:ff88:3667:3::1/128` |
| Link-Local | `fe80::2020:3` |
| MTU       | 1420 |

|           | 加拿大蒙特婁 (Montreal, Canada) |
| --------- | ------- |
| Description | AS31898 Oracle Cloud, Montreal (AD-1) |
| Node ID   | mtl-1   |
| Router ID | 4       |
| Endpoint  | `mtl-1.dn42.redbean0721.com` (v4+v6) |
| Public Key | `805aXA7WKIt0KWn0QuNbuyOwD7o6/LapqyZKiReIMGA=` |
| IPv4 Address | `172.20.45.4/32` |
| IPv6 Address | `fd9d:ff88:3667:4::1/128` |
| Link-Local | `fe80::2020:4` |
| MTU       | 1420 |

|           | 美國愛荷華州 (Iowa, USA) |
| --------- | ------- |
| Description | AS15169 Google LLC, us-central1-c (Iowa) |
| Node ID   | us-ia-1   |
| Router ID | 5       |
| Endpoint  | `us-ia-1.dn42.redbean0721.com` (v4 only) |
| Public Key | `pkkXHNPqYrbY5QWbf9ZiQyz21DuMdgYRxnLDf7A/Q1U=` |
| IPv4 Address | `172.20.45.5/32` |
| IPv6 Address | `fd9d:ff88:3667:5::1/128` |
| Link-Local | `fe80::2020:5` |
| MTU       | 1420 |

---

#### Peering

Policy: `Open`

Supported:
- MP-BGP
- Extended nexthop
- IPv6 Link-Local

Requirements:
- Latency: `<= 200ms`
- Use WireGuard (ZeroTier is also supported, but not recommended)
- MP-BGP support (Preferred)
- Extended nexthop support (Preferred)
- IPv6 Link-Local support (Preferred)

##### Automatic Peering
Under development... (guess so)

> ##### Port
> My WireGuard listening port is `22020`.
> If your ASN is `424242xxxx`, I will connect to your port `2xxxx`. For example, if your ASN is `4242421234`, I will connect to port `21234`.

---

#### Services

| Service | Address |
| ------- | ------- |
| Website | https://redbean0721.dn42 |
| Anycast Recursive DNS | `172.20.45.1` (IPv4) / `fd9d:ff88:3667::1` (IPv6) |
| Pingable | pingable.redbean0721.dn42 |

---

#### BGP Community

- See [DN42 BGP Communities](https://dn42.dev/howto/BGP-communities) for details.

| BGP (and Large) Community | Description |
| ------------- | ----------- |
| `(64511, 1..9)`  | DN42 Latency |
| `(64511,21..29)` | DN42 Bandwidth |
| `(64511,31..36)` | DN42 Crypto |
| `(64511,41..70)` | DN42 Origin Region |
| `(64511,81..89)` | DN42 Topology |
| `(64511,91..94)` | DN42 Packet Loss |
| `(64511,1000..1999)` | DN42 Origin Country |
| `(65535,0)`     | Graceful Shutdown (lowers the preference of this route) |
| `(65535,666)`   | RTBH (IPv4 /32 or IPv6 /64~128) |
| `(65535, 65281)` | NO_EXPORT (propagated within iBGP only, not announced to eBGP) |
| `(65535, 65282)` | NO_ADVERTISE (not announced to any iBGP or eBGP peer) |
| `(4242422020, 101..103, ASN)` | Prepend my ASN 1-3 times when announcing to the specified ASN |
