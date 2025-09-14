---
title: 在 RIPE DataBase 建立 Object
date: 2025-09-14 22:51:33
tags: [ASN, BGP, RIPE]
---
在這篇文章中會和大家分享如何在 RIPE DataBase 註冊 MAINTAINER, PERSON / ROLE, ORGANISATION 這三種 Object。

<!-- more -->

1. 首先到 [RIPE 網站](https://access.ripe.net/registration) 註冊一個帳號
![RIPE Register A Account](/images/create-object-in-ripe-database/RIPE-Reg-Account.png)

2. 註冊完成後進入 RIPE DataBase 頁面，進入 “Create an Object” 頁面後選第一個 “role and maintainer pair” 後按 CREATE
![RIPE Create role and maintainer pair](/images/create-object-in-ripe-database/RIPE-Create-role-and-maintainer-pair.png)

第一個 mntner 會是 “mnt-by”

```txt
role 隨便寫
address 寫你家的地址
email 寫你的電子郵件地址
```
![RIPE Edit role and maintainer pair](/images/create-object-in-ripe-database/RIPE-Edit-role-and-maintainer-pair.png)

按提交後，它會給你一個 role 與 mntner，請記好 primary key，等等會用到
![RIPE Get role and mntner primary](/images/create-object-in-ripe-database/RIPE-Get-role-and-mntner-primary.png)
 

3. 建立好後，我們回去剛剛的 “Create an Object” 頁面，這次選 “role” 後按 CREATE
![RIPE Create role](/images/create-object-in-ripe-database/RIPE-Create-role.png)

接下來我們需要寫 濫用投訴信箱，等等 ORG object 會用到
![RIPE Edit role abuse mailbox](/images/create-object-in-ripe-database/RIPE-Edit-role-abuse-mailbox.png)
 
如果沒看到 abuse-mailbox 那一欄，可點擊 e-mail 旁的 + 號，選擇要新增的欄位後按 add 即可
![RIPE Edit role abuse mailbox Add abuse mailbox](/images/create-object-in-ripe-database/RIPE-Edit-role-abuse-mailbox-Add-abuse-mailbox.png)
 
填寫完後會得到這樣
![RIPE Get role abuse mailbox](/images/create-object-in-ripe-database/RIPE-Get-role-abuse-mailbox.png)
 

4. 完成後再回到 “Create an Object”，這次要新增 “organisation”
![RIPE Create organisation](/images/create-object-in-ripe-database/RIPE-Create-organisation.png)

需要填寫的內容有：
```txt
org-name：這要填寫你護照上的真實姓名
address：填寫你家地址
country：你的國家
e-mail：你的電子郵件地址
abuse-c：剛剛建立的 Abuse contact role object 的編號
mnt-ref：剛剛建立的 mntner 的 primary key
```
![RIPE Edit organisation](/images/create-object-in-ripe-database/RIPE-Edit-organisation.png)

完成後點擊 Submit 後就完成了
![RIPE Get organisation](/images/create-object-in-ripe-database/RIPE-Get-organisation.png)


接下來只需要將 ORG 的編號給 LIR，就可以幫他們幫忙註冊 ASN 了