---
title: 啟用Google BBR
date: 2025-09-14 22:45:00
tags: [Linux, BBR, Ubuntu]
---
參考資料：
- [qnic](https://en.wikipedia.org/wiki/QUIC)
- [BBR](https://en.wikipedia.org/wiki/Bottleneck_Bandwidth_and_Round-trip_propagation_time)

<!-- more -->
---

Linux 內核在 4.9 版本中引入了 BBR（Bottleneck Bandwidth and Round-trip propagation time）擁塞控制算法，這是一種基於模型的擁塞控制算法，旨在提高網絡吞吐量和降低延遲。BBR 通過測量網絡的帶寬和延遲來調整發送速率，從而最大化數據傳輸效率。

由於 Ubuntu 20.04 預設內核版本為 5.4，已經編譯了 TCP BBR 模組，因此我們可以直接啟用 BBR，而無需升級內核版本。

### 啟用 BBR
```bash
echo "net.core.default_qdisc=fq" | sudo tee -a /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p  # 重新載入 sysctl 設定
```

### 驗證 BBR 是否啟用成功
```bash
sysctl net.ipv4.tcp_congestion_control
```
如果輸出結果為 `bbr cubic reno`，則表示 BBR 已成功啟用。

也可以使用以下命令來檢查 BBR 是否正在運行：
```bash
lsmod | grep tcp_bbr
```
如果看到 `tcp_bbr` 模組出現在輸出中，則表示 BBR 正在運行。