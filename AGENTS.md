# 项目说明 / Agent 工作规范

## 部署架构（重要）

本仓库**发布内容在 `public/` 目录**，由 Cloudflare Pages 自动构建部署到 **chenyili.fun**。

- **要更新线上页面，必须改 `public/` 里的文件。**
- 仓库根目录存放原始素材、大 PDF、原始视频等，**不会被发布**。
- 改根目录不会影响线上站点。

## 标准发布流程

1. 修改 `public/` 下的文件（`public/index.html`、`public/mc-portfolio.css`、`public/mc-portfolio.js`、`public/assets/`、`public/Image/`、`public/Portfolio/`）
2. `git add` → `git commit` → `git push origin main`
3. Cloudflare 检测到 push 自动构建，**约 1 分钟后 chenyili.fun 自动更新**
4. 在 Cloudflare 项目页 **Deployments** 查看每次构建状态与历史版本（支持一键回滚）

## public/ 与根目录的刻意差异（改动时务必保留，不要覆盖回去）

`public/index.html` 针对国内访问做了优化，与根目录 `index.html` 有两类差异：

1. **字体走国内镜像**
   - 根目录：`fonts.googleapis.com` / `fonts.gstatic.com`
   - `public/`：`fonts.loli.net` / `gstatic.loli.net`

2. **PDF 文件名用英文**（避免中文路径编码问题）

   | 根目录 | `public/` |
   |---|---|
   | `《破碎之家》游戏关卡说明.pdf` | `doc-broken-home.pdf` |
   | `破冰启航游戏关卡说明.pdf` | `doc-icebreaking.pdf` |
   | `作品集 建筑.pdf` | `doc-architecture.pdf` |
   | `ChenYili_LA1B.pdf` | `doc-landscape-portfolio.pdf` |

**因此：不要用根目录的 `index.html` 直接覆盖 `public/index.html`。** 若需同步改动，只搬运本次真正改动的部分，保留上述两类差异。

`public/mc-portfolio.css` 与 `public/mc-portfolio.js` 目前与根目录内容一致，可直接同步。

## 媒体资源注意事项

- **视频必须是 H.264 + `pix_fmt=yuv420p` + `color_range=tv`**。HEVC/H.265 在 Chrome/Firefox/Edge 无法解码；`yuvj420p`（JPEG 全范围）会被 iOS Safari 和多数安卓播放器拒绝解码。
- 线上使用的视频：`mc-hero-h264.mp4`（944×532）、`mc-finale-h264.mp4`（942×530），各自另有 `-sd` 弱网备选源。
- 大图优先提供 WebP，并用 `<picture>` 保留 PNG/JPG 回退，兼容旧版移动浏览器。

## 移动端易踩的坑（已修，勿回退）

- 首屏视频必须 `preload="auto"`。设成 `metadata` 会停在 `readyState=1`，loader 永远等不到可播放状态，首页视频黑屏。
- 滚动揭示动画的 `IntersectionObserver` 用 `threshold: 0`（不要用 `0.15`）。窄屏上高元素永远无法满足 15% 可见面积，会永久卡在 `opacity: 0`。
- `.mc-reveal` 的 `opacity: 0` 必须挂在 `html.mc-js` 下。JS 失败或浏览器不支持 IntersectionObserver 时，内容需默认可见。
- 卡片缩略图用 `loading="eager"`。`lazy` 配合 `opacity:0` 父元素，iOS Safari 会无限期推迟加载。

## 仓库体积

`.git` 已膨胀到约 339MB（历史里有 80MB 的 zip、38MB PDF、多个旧版视频），导致 push 偏慢。如需加速，可考虑将发布用不到的大文件加入 `.gitignore`，或用 `git filter-repo` 清理历史（会重写历史，需强制推送）。
