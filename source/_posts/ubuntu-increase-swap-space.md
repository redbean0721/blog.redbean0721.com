---
title: Ubuntu 擴大/增加 Swap
date: 2025-09-18 13:12:07
tags: [Linux, Ubuntu, Swap]
categories: [教學, 系統管理, Linux]
---
##### 什麼是 Swap
Swap 是一種將部分記憶體資料暫時存放到硬碟上的技術，當系統的實體記憶體（RAM）不足時，會將不常用的記憶體頁面移動到 Swap 空間，以釋放 RAM 給其他應用程式使用。這有助於防止系統因記憶體不足而崩潰，並提高系統的穩定性。

<!-- more -->

##### 為什麼需要增加 Swap
1. **記憶體不足**：當系統的 RAM 不足以應付當前的工作負載時，Swap 可以作為額外的記憶體資源。
2. **系統穩定性**：增加 Swap 可以防止系統因記憶體不足而崩潰，特別是在運行大型應用程式或多任務處理時。
3. **休眠功能**：如果系統需要進入休眠狀態，Swap 空間需要足夠大以存放當前的記憶體內容。

##### Swap 的缺點
1. **速度較慢**：Swap 空間通常位於硬碟上，其讀寫速度遠低於 RAM，過度依賴 Swap 可能導致系統性能下降。
2. **硬碟磨損**：頻繁的 Swap 操作可能會加速 SSD 的磨損，影響硬碟的壽命。

##### Ubuntu 如何擴大/增加 Swap
```bash
# 將現有 swap 移動到主記憶體
sudo swapoff -a

# 建立一個新的 swap 檔案，bsxcount=最後生成的 swap 大小，這裡以 4G 為例
sudo dd if=/dev/zero of=/swapfile bs=1M count=4096

# 設定 swap 檔案的權限
sudo chmod 600 /swapfile

# 格式化 swap 檔案
sudo mkswap /swapfile

# 啟用新的 swap 檔案
sudo swapon /swapfile

# 確認 swap 是否啟用
sudo swapon --show
# 或者 htop 也可以看到 swap 的使用情況

# 永久啟用 swap，編輯 /etc/fstab 檔案
sudo vim /etc/fstab
# 在檔案末尾加入以下行
/swapfile none swap sw 0 0
```