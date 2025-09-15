---
title: 將 LSI 9220-8i 刷成 LSI 9211-8i IT
date: 2025-09-14 22:46:08
tags: [LSI]
categories: [教學, 儲存, 伺服器]
---
## 為什麼要刷成 IT mode (也就是 HBA ONLY) 呢？
假如你不是要透過硬體來建立陣列，而是有大量儲存裝置需要 HANDLE，這時你可以選擇刷成 IT mode，這樣就能讓作業系統直接控制每一顆硬碟，達到最佳化的效能。
且純 IT mode 的性能會比 IR mode 好 (Queue Depth 較大)，這對於 NAS 或是需要大量 IOPS 的應用來說是非常重要的。

<!-- more -->

## 下載韌體
1. 首先先使用 RufusPortable 來製作一個 FreeDOS 的 USB 開機碟，並格式化成 FAT32。

2. 下載 `LSI 9211-8i` 的韌體與工具，並解壓縮到 USB 開機碟根目錄中。
   - [LSI 9211-8i IT mode Firmware](https://cdn.redbean0721.com/download/LSI-9211-8i.zip)

3. 用 BIOS 設定 USB 開機，進入 FreeDOS後先確認 Raid card 狀況
```bash
megarec -adplist
```
應該會得到有 `MR card 0` 以及其他詳細資訊，但若你的機器有許多張卡，建議先拆到只剩要刷的卡

4. 確認 Raid card 詳細資訊 (-a0 代表第 0 張卡)，並找出 SAS Address
```bash
megarec -AdpAllInfo -a0 | find "SAS Address"
```
然後會有 5 開頭，共 16 碼的 SAS Address，請記下來，等一下會用到

5. 接下來要洗白 SBR (Secure Boot Record)
```bash
megarec -writesbr 0 sbrempty.bin
```
看到 successful 代表 SBR 有順利安裝進去

6. 清空 Flash
```bash
megarec -cleanflash 0
```
會需要等待一小段時間，看到 successful 代表 Flash 清除成功

7. 刷入 HBA 的 Firmware，但在這個步驟若你的主板是 UEFI BIOS 而不是傳統 Legacy BIOS 的話，那這個部份會失敗，而該影片作者也是，所以這個步驟會失敗 (若成功了，後續舊部需要跳到 UEFI，直接把 sas2flash.efi 換成 sas2flsh.exe 即可)
```bash
sas2flsh.exe -o -f 6GBPSAS.FW
```
出現 `ERROR: Failed to initialize PAL. Exiting Program` 等字樣就代表你的平台是 UEFI 環境

8. 這時候請重新開機，進入 BIOS 設定成 UEFI Shell 開機，也就是用 UEFI 模式把你這支隨身碟設為 UEFI 開機，並使用它開機
基本上 UEFI Shell 環境現在是統一的，最一開始的壓縮檔裡面就已經有包含 bootx64.efi，所以只需要到主板的 BIOS 選擇載入 UEFI Shell 即可

9. 進入 UEFI Shell 後會長這個樣子
![UEFI Shell](/images/flash-lsi-to-itmode/EFI_Shell.png)

10. 切換目錄到隨身碟
```bash
fs0:
```
(若是 fs0: 進不去，可以試試看 fs1:、fs2:，直到找到你的隨身碟)

11. 繼續我們在第 7 步有問題的部份
```bash
sas2flash.p19.efi -o -f 6GBPSAS.FW
```
等待一小段時間，看到 successful 代表韌體刷入成功

12. 重起電腦或用指令讓 Raid card 重新啟動
```bash
sas2flash.p19.efi -o -reset
```

13. 開始刷入 9211-8i 的 FW
```bash
sas2flash.p19.efi -o -f 2118P7.BIN
```
中途會遇到詢問 FW 跟板卡的 VENDOR 對不上，是否繼續的提示，輸入 y 繼續
出現 Firmware Flash Successful 代表韌體刷入成功

14. 再次重起電腦或用指令讓 Raid card 重新啟動
```bash
sas2flash.p19.efi -o -reset
```

15. 開始刷入 IT mode 的 FW
```bash
sas2flash.p19.efi -o -f 2118IT.BIN
```
出現 Firmware Flash Successful 代表韌體刷入成功

16. 再次重起電腦或用指令讓 Raid card 重新啟動
```bash
sas2flash.p19.efi -o -reset
```

17. 查看是否已經更換成 IT mode 的 FW
```bash
sas2flash.p19.efi -o -list
```
沒意外的話 Fireware Product ID 會變成 9211-8i，且 Firmware Version 會是 IT mode 的版本

18. 最後一步，將剛剛在第 4 步驟記下來的 SAS Address 寫回去
```bash
sas2flash.p19.efi -o -sasadd 500605bxxxxxxxxx
```

看到 successful 代表 SAS Address 寫入成功
沒意外的話重起後就獲得了一張改成 LSI 9211-8i IT mode 的 HBA 卡囉！