---
title: Hexo 部落格建置教學 I - 建置與部屬
date: 2025-09-15 16:26:12
tags: [Hexo, Git, Node.js, GitHub, Cloudflare]
categories: [架站, 教學, 部落格]
---
0. 前言
[Hexo](https://hexo.io/zh-tw/) 是一個快速、簡潔且高效的部落格框架，使用 Node.js 編寫。它允許用戶通過 Markdown 語法輕鬆撰寫文章，並能夠生成靜態網站，適合用於個人部落格或技術分享平台。
Markdown 是一種輕量級標記語言，允許用戶使用易讀易寫的純文本格式編寫文檔，然後轉換為 HTML 或其他格式。Hexo 支持 Markdown 語法，使得撰寫和管理文章變得非常方便。
[基本撰寫與語法格式](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

<!-- more -->

1. 安裝 Git 和 Node.js
    1.1 安裝 Git
    ```bash
    sudo apt update
    sudo apt install git
    ```
    然後用 `git --version` 確認是否安裝成功。

    1.2 安裝 Node.js
    由於 Ubuntu 軟體庫中的 Node.js 版本可能較舊，建議使用 NodeSource 或 nvm 來安裝最新版本的 Node.js。
    這裡使用 nvm (Node Version Manager) 來安裝 Node.js，這樣可以方便地管理不同版本的 Node.js。
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
    source ~/.bashrc    # 或 source ~/.zshrc，視你使用的 shell 而定
    nvm --version    # 確認 nvm 是否安裝成功
    ```

    安裝目標版本的 Node.js，例如安裝 24.4.0 版本：
    ```bash
    nvm install v24.4.0
    ```
    安裝完成後指定使用該版本：
    ```bash
    nvm use v24.4.0
    ```
    確認 Node.js 和 npm 是否安裝成功：
    ```bash
    node -v
    npm -v
    ```
    設定預設使用該版本，避免下次重起後又恢復預設：
    ```bash
    nvm alias default v24.4.0
    ```

2. 啟用 Corepack (可選)
運行 `corepack enable` 來啟用 Corepack
啟用後自動安裝 Yarn 和 pnpm，這樣就可以換成自己喜歡的包管理器，我這裡使用 Yarn

3. 在 GitHub 建立一個空的 Repository

4. 安裝 Hexo 與初始化專案
新增一個資料夾來放 Hexo 專案，並進入該資料夾
```bash
npm install -g hexo-cli
mkdir hexo-blog
cd hexo-blog
hexo init # 初始化 Hexo 專案
npm install # 安裝相依套件
```
初始化 git 並連結到剛剛在 GitHub 建立的 Repository
```bash
git init
git branch -M main
# 下面兩行擇一使用
git remote add origin git@github.com:<你的 GitHub 帳號>/<你的 Repository 名稱>.git  # 使用 SSH 連結，需要先設定 SSH Key
git remote add origin https://github.com/<你的 GitHub 帳號>/<你的 Repository 名稱>.git  # 使用 HTTPS 連結，需要輸入帳號密碼
```
5. 設定 Hexo
    5.1 修改 `_config.yml`
    ```yaml
    # Site
    title: Hexo     # 網站標題
    subtitle: ''    # 網站副標題
    description: '' # 網站描述
    keywords:       # 網站關鍵字，使用逗號分隔
    author: John Doe    # 作者名稱
    language: en    # 網站語言
    timezone: ''    # 時區，例如 'Asia/Taipei'

    # URL
    ## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
    url: http://example.com     # 網站 URL
    permalink: :year/:month/:day/:title/    # 文章永久連結格式，例如 /2025/09/15/sample-post/
    permalink_defaults:     # 永久連結預設值
    pretty_urls:
    # 網址結尾顯示 `index.html`，設定為 `false` 則會移除
    trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
    # 網址結尾顯示 `.html`，設定為 `false` 則會移除 (不包含 `index.html`)
    trailing_html: true # Set to false to remove trailing '.html' from permalinks
    ```
    5.2 預覽網頁
    ```bash
    hexo server
    ```
    預設會在 `http://localhost:4000` 開啟本地伺服器，可以在瀏覽器中打開該網址來預覽網站。

6. 部屬設定 (以 Cloudflare Pages 為例)
    6.1 將網站推送到 GitHub
    ```bash
    git add .
    git commit -m "Initial Hexo Blog Commit"
    git push -u origin main
    ```
    6.2 在 Cloudflare Workers & Pages 建立一個新的 Pages 專案，選擇匯入現有的 Git 存放庫
    ![Cloudflare-Pages-Import-Repo](/images/hexo-blog-1/Cloudflare-Pages-Import-Repo.png)

    選擇剛剛推送的 GitHub Repo
    ![Cloudflare-Pages-Select-Repo](/images/hexo-blog-1/Cloudflare-Pages-Select-Repo.png)

    設定建置參數
    - Framework 預設：`None`
    - 組件命令：`npm run build`
    - 輸出目錄：/`public`
    ![Cloudflare-Pages-Build-Settings](/images/hexo-blog-1/Cloudflare-Pages-Build-Settings.png)

    設定環境變數
    - `NODE_VERSION`：`24.4.0` (或你安裝的 Node.js 版本)
    - `YARN_ENABLE_IMMUTABLE_INSTALLS`：`false`
    ![Cloudflare-Pages-Env-Variables](/images/hexo-blog-1/Cloudflare-Pages-Env-Variables.png)

    按下 `儲存並部署` 後，Cloudflare 會自動從 GitHub 拉取程式碼並進行建置與部署
    ![Cloudflare-Pages-Deploying](/images/hexo-blog-1/Cloudflare-Pages-Deploying.png)

    部署完成後會有一個預設的 `<your-project-name>.pages.dev` 網址，如果要使用自訂網域，可以在 `自訂網域` 中設定
    ![Cloudflare-Pages-Custom-Domain](/images/hexo-blog-1/Cloudflare-Pages-Custom-Domain.png)

這樣就完成了 Hexo 部落格的基本安裝與設定，接下來可以開始撰寫文章並享受寫作的樂趣！
如果將新文章推送到 GitHub，Cloudflare Pages 會 `自動` 重新建置並部署網站，非常方便。

7. Hexo 常用指令
新增文章：`hexo new <fileName>`
運行本地伺服器：`hexo server` 或 `hexo s`
產生靜態文件：`hexo generate` 或 `hexo g`
清空靜態文件 (public 資料夾)：`hexo clean` 或 `hexo cl`
部屬到遠端伺服器：`hexo deploy` 或 `hexo d`
生成靜態文件並部署：`hexo deploy --generate` 或 `hexo d -g`

P.S. 建立新文章中的 `<fileName>` 是檔案名稱，不需要加副檔名，標題在文章中的 `title` 中修改

> 本文取自 [Hexo 博客搭建教程 I | Argvchs の小窝](https://argvchs.github.io/2022/04/17/hexo-blog-1/) 改寫

下一篇：[Hexo 部落格建置教學 II - 主題與外掛](/hexo-blog-2)