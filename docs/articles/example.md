---
title: 如何发布文章
icon: read
---

## 格式

### 文章头部

文章头部请先添加以下内容，不标注必填的可以去掉

```md
---
title: 文章示例 # string 【必填】
description: xxx # string 当前页面内容描述
icon: read # string 当前页面图标的 FontClass，支持图表见 https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-精选图标
isOriginal: true # boolean 是否原创
category: # string | string[] 分类
  - aaa
  - bbb
tag: # string | string[] 标签
  - tag1
  - tag2
image: /articles/images/aa.png # string 预览图，绝对路径
banner: /articles/images/aa.png # string 横幅图片 (宽屏分享图)，绝对路径
author: { # string | string[] | AuthorInfo | AuthorInfo[]，type AuthorInfo = { name: string; url?: string }
  name: '作者名称',
  url: '作者主页链接'
},
---
```

### 正文

文章正文支持 markdown 语法

更多 markdown 增强功能见 [markdown 增强](https://vuepress-theme-hope.github.io/v2/zh/guide/markdown/intro.html) (忽略配置相关内容，直接看示例使用即可)

## 发布

- 如果是 mini-projects 仓库的成员，在`articles`文件夹内存放你的文章，然后 push 到仓库`mini-page`分支即可，github 会自动进行构建更新；
- 如果非 mini-projects 仓库的成员，提交`pull-request`或联系管理员添加你为仓库成员。
