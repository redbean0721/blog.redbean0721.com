---
title: Hexo 部落格建置教學 II - 主題與外掛
date: 2025-09-16 16:07:00
tags: [Hexo, Git, Node.js, SiteMap, Lazy Load]
categories: [架站, 教學, 部落格]
---
上一篇：[Hexo 部落格建置教學 I - 建置與部屬](/hexo-blog-1)

##### 1. 安裝主題 (Theme)
Hexo 有很多 [免費主題](https://hexo.io/themes) 可以選擇
上面的圖片是預覽，下面的藍色連結是主題的 GitHub 頁面
選好主題後，通常會有安裝說明，照著做就可以，在 Hexo 根目錄下執行

<!-- more -->

```bash
cd themes
git clone <link>.git <theme> --depth=1
```
`<link>` 是主題的 GitHub 連結，`<theme>` 是你想要的主題資料夾名稱
> `--depth=1` 是只下載最新的 commit，節省空間

這裡以 [ParticleX](https://github.com/theme-particlex/hexo-theme-particlex) 為例：
```bash
git clone https://github.com/theme-particlex/hexo-theme-particlex.git particlex --depth=1
```

安裝完成後，在 Hexo 根目錄 `_config.yml` 中設定主題名稱，就可以切換主題了，一般主題在 GitHub 頁面會有說明
```yml
theme: particlex
```

---

##### 2. 建立特殊頁面
有些主題會有特殊頁面，例如關於我 (About Me)、標籤 (Tags)、分類 (Categories) 等等
<br>
2.1 分類頁 (Categories)
```bash
hexo new page categories
```
打開 `source/categories/index.md`，在 `---` 括起來的地方添加 `type: categories`

2.2 標籤頁 (Tags)
```bash
hexo new page tags
```
打開 `source/tags/index.md`，在 `---` 括起來的地方添加 `type: tags`

2.3 關於我 (About Me)
```bash
hexo new page about
```
打開 `source/about/index.md`，在 `---` 括起來的地方添加 `type: about`

---

##### 3. 安裝外掛 (Plugin)
Hexo 有很多外掛可以使用，這裡介紹幾個常用的
<br>
3.1 網站地圖 (Sitemap) [hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap)
```bash
npm install hexo-generator-sitemap --save
```
安裝完成後，在 Hexo 根目錄 `_config.yml` 中添加以下設定
```yml
sitemap:
  path: 
    - sitemap.xml
    - sitemap.txt
  template: ./sitemap_template.xml
  template_txt: ./sitemap_template.txt
  rel: false
  tags: true
  categories: true
```
- `path`：設定網站地圖的路徑，可以設定多個
- `template` / `template_txt`：設定網站地圖的模板，可以自訂
[`預設 xml 範本`](https://github.com/hexojs/hexo-generator-sitemap/blob/master/sitemap.xml) & [`預設 txt 範本`](https://github.com/hexojs/hexo-generator-sitemap/blob/master/sitemap.txt)
- `rel`：添加 `rel-sitemap` 標籤到 `<head>`，預設為 `false`
- `tags` / `categories`：是否包含標籤和分類頁，預設為 `true`
排除文章/頁面：
在文章/頁面的 `front-matter` 中添加 `sitemap: false`
```yml
title: "不包含在網站地圖的文章"
date: 2024-06-01 12:00:00
sitemap: false
```

<br>

3.2 懶加載圖片 (Lazy Load Images) [hexo-lazyload-image](https://github.com/Troy-Yang/hexo-lazyload-image)
```bash
npm install hexo-lazyload-image --save
```
安裝完成後，在 Hexo 根目錄 `_config.yml` 中添加以下設定
```yml
lazyload:
  enable: true
  onlypost: false # optional
  loadingImg: # optional eg ./images/loading.gif
  isSPA: false # optional
  preloadRatio: 3 # optional, default is 1
```
- `enable`：啟用懶加載功能
- `onlypost`：如果為 `true`，則只有來自文章或頁面的圖片會被懶加載; 如果為 `false`，則所有圖片都會被懶加載，包括主題的圖片，但不包括來自 CSS 的背景圖片
- `loadingImg`：設定加載中的佔位圖片，可以是本地圖片或線上圖片
- `isSPA`：如果為 `true`，則在滾動過程中搜尋每個圖像以支援 SPA 頁面，但會影響效能; 如果為 `false`，則只在頁面加載時搜尋圖像，不支援 SPA 頁面，但效能較好
- `preloadRatio`：設定預加載的比例，數值越大，圖片越早被加載，預設為 `1`
排除文章/頁面：
在文章/頁面的 `front-matter` 中添加 `lazyimage: false`
```yml
# In your post's front matter
---
title: My Post with Non-Lazy Loaded Images
lazyimage: no
---

# In your site's config file
onlypost: true
```

> 本文取自 [Hexo 博客搭建教程 II | Argvchs の小窝](https://argvchs.github.io/2022/04/17/hexo-blog-2/) 改寫

上一篇：[Hexo 部落格建置教學 I - 建置與部屬](/hexo-blog-1)
下一篇：[Hexo 部落格建置教學 III - 自訂效果](/hexo-blog-3)