---
title: DN42 資訊
date: 2026-10-11 14:53:00
tags: [DN42, BGP, Networking]
categories: [DN42]
permalink: /dn42/
---

中文 | [English](/dn42/en/)

DN42 是一個去中心化的點對點網路，讓個人與組織能建立自己的自治系統（AS），並透過邊界閘道協定（BGP）交換路由資訊。它的目的是讓網路愛好者能在其中實驗、學習與交流合作。

---

<!-- more -->

> ##### <i class="fa-solid fa-circle-info"></i> DN42 概覽
> **ASN：** `4242422020`
> **IPv4 區段：** `172.20.45.0/26`
> **IPv6 區段：** `fd9d:ff88:3667::/48`
> **DN42 網域：** `redbean0721.dn42`
> **PGP 指紋：** `866C 48E0 3252 1AFD 6A81 4EC9 DDB4 BA8F B973 AD79`
> **可 Ping 位址：** `172.20.45.1` (IPv4) / `fd9d:ff88:3667::1` (IPv6)
> **GeoFeed：** https://r2.redbean0721.com/dn42/geofeed.csv

> 若要強制使用 IPv4 或 IPv6，請在 Endpoint 前加上 `v4.` 或 `v6.`，例如 `v4.tnn-1.dn42.redbean0721.com` 或 `v6.tnn-1.dn42.redbean0721.com`。

#### 節點

|           | 台灣台南 (Tainan, Taiwan) |
| --------- | ------- |
| 描述 | AS3462 中華電信 HiNet，台灣台南 |
| 節點 ID   | tnn-1   |
| Router ID | 2       |
| Endpoint  | `tnn-1.dn42.redbean0721.com` (v4+v6) |
| 公鑰 | `iJvLbmyVJjPH2V2gK79UNdgyDEPyxotIKfWmsSlDl38=` |
| IPv4 位址 | `172.20.45.2/32` |
| IPv6 位址 | `fd9d:ff88:3667:2::1/128` |
| Link-Local | `fe80::2020:2` |
| MTU       | IPv4: 1420, IPv6: 1332 |

|           | 日本大阪 (Osaka, Japan) |
| --------- | ------- |
| 描述 | AS31898 Oracle Cloud，日本大阪 (AD-1) |
| 節點 ID   | osa-1   |
| Router ID | 3       |
| Endpoint  | `osa-1.dn42.redbean0721.com` (v4+v6) |
| 公鑰 | `DAdI2YISMQj14W9Ja/hVjEEw3UwupTQ2cjScyYtuYCE=` |
| IPv4 位址 | `172.20.45.3/32` |
| IPv6 位址 | `fd9d:ff88:3667:3::1/128` |
| Link-Local | `fe80::2020:3` |
| MTU       | 1420 |

|           | 加拿大蒙特婁 (Montreal, Canada) |
| --------- | ------- |
| 描述 | AS31898 Oracle Cloud，加拿大蒙特婁 (AD-1) |
| 節點 ID   | mtl-1   |
| Router ID | 4       |
| Endpoint  | `mtl-1.dn42.redbean0721.com` (v4+v6) |
| 公鑰 | `805aXA7WKIt0KWn0QuNbuyOwD7o6/LapqyZKiReIMGA=` |
| IPv4 位址 | `172.20.45.4/32` |
| IPv6 位址 | `fd9d:ff88:3667:4::1/128` |
| Link-Local | `fe80::2020:4` |
| MTU       | 1420 |

|           | 美國愛荷華州 (Iowa, USA) |
| --------- | ------- |
| 描述 | AS15169 Google LLC，us-central1-c（美國愛荷華州） |
| 節點 ID   | us-ia-1   |
| Router ID | 5       |
| Endpoint  | `us-ia-1.dn42.redbean0721.com` (僅 v4) |
| 公鑰 | `pkkXHNPqYrbY5QWbf9ZiQyz21DuMdgYRxnLDf7A/Q1U=` |
| IPv4 位址 | `172.20.45.5/32` |
| IPv6 位址 | `fd9d:ff88:3667:5::1/128` |
| Link-Local | `fe80::2020:5` |
| MTU       | 1420 |

---

#### Peering

政策：`Open`

支援：
- MP-BGP
- Extended nexthop
- IPv6 Link-Local

要求：
- 延遲：`<= 200ms`
- 使用 WireGuard（也支援 ZeroTier，但不推薦）
- 支援 MP-BGP（建議）
- 支援 Extended nexthop（建議）
- 支援 IPv6 Link-Local（建議）

##### 自動 Peering
開發中...（大概吧）

> ##### 連接埠
> 我 WireGuard 監聽 `22020`。
> 如果你的 ASN 是 `424242xxxx`，我會連到你的 `2xxxx`。例如你的 ASN 是 `4242421234`，就是 `21234`。

---

#### 服務

| 服務 | 位址 |
| ------- | ------- |
| 網站 | https://redbean0721.dn42 |
| Anycast 遞迴 DNS | `172.20.45.1` (IPv4) / `fd9d:ff88:3667::1` (IPv6) |
| 可 Ping 位址 | pingable.redbean0721.dn42 |

---

#### BGP Community

- 詳細說明請參考 [DN42 BGP Communities](https://dn42.dev/howto/BGP-communities)。

| BGP（及 Large）Community | 說明 |
| ------------- | ----------- |
| `(64511, 1..9)`  | DN42 延遲 |
| `(64511,21..29)` | DN42 頻寬 |
| `(64511,31..36)` | DN42 加密 |
| `(64511,41..70)` | DN42 來源地區 |
| `(64511,81..89)` | DN42 拓撲 |
| `(64511,91..94)` | DN42 封包遺失率 |
| `(64511,1000..1999)` | DN42 來源國家 |
| `(65535,0)`     | 優雅關閉（降低此路由優先度） |
| `(65535,666)`   | RTBH（IPv4 /32 或 IPv6 /64~128） |
| `(65535, 65281)` | NO_EXPORT（僅在 iBGP 內傳遞，不向 eBGP 宣告） |
| `(65535, 65282)` | NO_ADVERTISE（不向任何 iBGP 及 eBGP peer 宣告） |
| `(4242422020, 101..103, ASN)` | 向指定 ASN 宣告時 prepend 我的 ASN 1-3 次 |
