---
title: Hexo 部落格建置教學 III - 自訂效果
date: 2025-09-16 16:10:58
tags: [Hexo]
categories: [架站, 教學, 部落格]
---
上一篇：[Hexo 部落格建置教學 II - 主題與外掛](/hexo-blog-2)

##### 1. 一些自訂效果
1.1 滑鼠點擊特效
<!-- more -->
```html
<canvas
    id="fireworks"
    style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: 32767"
></canvas>
<script src="https://s4.zstatic.net/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script src="/js/fireworks.min.js"></script>
```
[`fireworks.min.js`](https://static-argvchs.netlify.app/js/fireworks.min.js)

1.2 流星背景特效
```html
<canvas
    id="background"
    style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; pointer-events: none; z-index: -1"
></canvas>
<script src="/js/background.min.js"></script>
```
[`background.min.js`](https://static-argvchs.netlify.app/js/background.min.js)

1.3 滑鼠指針特效
```html
<div id="cursor"></div>
<link rel="stylesheet" href="/css/cursor.min.css" />
<script src="/js/cursor.min.js"></script>
```
[`cursor.min.css`](https://static-argvchs.netlify.app/css/cursor.min.css) & [`cursor.min.js`](https://static-argvchs.netlify.app/js/cursor.min.js)

> 注意：`cursor.min.css` 這個檔案連結目前失效

---

##### 2. Hexo Markdown 語法補充
Markdown 是支持 HTML 渲染的，所以可以實現各種效果
如果你不要使 HTML 標籤被渲染，可以在右邊加上 `\` 來轉譯，如 `<tag\>`，但還是推薦使用 `` `code` `` 的代碼格式

2.1 字體
用 `<font>` 元素來實現字體樣式的修改
```markdown
<font color=<color> size=<size> face=<face>>...</font>
```

2.2 下載
只要把檔案放到 `source` 資料夾下，就可以直接用 `/filename` 來下載，但部份檔案類型可能會被瀏覽器直接打開，所以可以用下面的方法來強制下載
```markdown
[...](file)
<a href="<file>" download>...</a>
```

2.3 註解
Markdown 本身不支援註解，但可以用 HTML 的註解語法
```markdown
<!-- This is a comment -->
```

另外，用 `<!-- more -->` 可以控制主頁預覽內容的長度，超過的部分會被截斷並顯示「閱讀更多」


> 本文取自 [Hexo 博客搭建教程 III | Argvchs の小窝](https://argvchs.github.io/2022/04/17/hexo-blog-3/) 改寫


上一篇：[Hexo 部落格建置教學 II - 主題與外掛](/hexo-blog-2)