# 陈宜理 · 个人作品集（Minecraft 风格游戏策划 Portfolio）

线上地址：**https://chenyili.fun**

## 目录结构与部署说明

本仓库通过 **Cloudflare Pages 连接 GitHub 自动部署**：

- `public/` —— **线上发布目录（Cloudflare Pages 的 Output directory）**。只有这个目录里的文件会被部署到网站。每次向 `main` 分支 push 后，Cloudflare 会在约 1 分钟内自动构建并上线。
- 根目录其余文件（`assets/`、`Sketch/`、`Design Requirements/`、`portfolio-website-design/`、原始 PDF/视频/文档等）为设计源文件与历史版本，**不会被部署**，仅作存档。

## 如何更新网站

1. 修改 `public/` 内对应的文件（页面入口为 `public/index.html`）。
2. 提交并推送：
   ```bash
   git add public
   git commit -m "update site"
   git push
   ```
3. 打开 Cloudflare Dashboard → Workers & Pages → 项目，可看到自动构建进度；构建完成后 https://chenyili.fun 自动更新，每次提交还会生成独立的预览链接。

## 发布目录的处理约定

为满足线上加载与平台限制，`public/` 相对原始素材做了以下处理（源文件仍保留在仓库其他位置）：

- Google Fonts 替换为国内可快速访问的字体镜像（loli.net）。
- 中文文件名的 PDF 改为 ASCII 文件名，`index.html` 中的引用同步修改。
- 单个文件不得超过 Cloudflare Pages 的 25MB 上限（大 PDF 已压缩）。
