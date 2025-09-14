---
title: Ubuntu sudo 免輸入密碼設定
date: 2025-09-14 23:43:19
tags: [Linux, Ubuntu]
---
在 Ubuntu 系統中，預設情況下使用 `sudo` 命令時需要輸入使用者密碼以獲取管理權限。然而，在某些情況下可能希望免輸入密碼即可使用 `sudo`，例如在自動化腳本或特定的開發環境中。以下是如何設定 Ubuntu 使特定使用者免輸入密碼使用 `sudo` 的步驟。

<!-- more -->

### 步驟
```bash
sudo vim /etc/sudoers
```
找到以下行：
```bash
%sudo ALL=(ALL:ALL) ALL
```
請改成：
```bash
%sudo ALL=(ALL:ALL) NOPASSWD: ALL
```
這樣，屬於 `sudo` 群組的所有使用者在使用 `sudo` 時將不再需要輸入密碼。