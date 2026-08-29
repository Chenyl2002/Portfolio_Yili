/* ================================================================
   Minecraft Portfolio Theme JS — Complete Rewrite
   ================================================================ */
(function () {
  "use strict";

  /* ---- 常量 ---- */
  var ICON_DIR = "./assets/minecraft/icons/";
  // 注意：图标文件名按精灵图 3x3 顺序切割，实际内容映射如下
  //  row0: grass, pickaxe, head
  //  row1: book,  compass, scroll
  //  row2: heart, chicken, armor
  var ICONS = {
    grass:    ICON_DIR + "mc-grass.png",
    pickaxe:  ICON_DIR + "mc-pickaxe.png",
    head:     ICON_DIR + "mc-book.png",
    book:     ICON_DIR + "mc-head.png",
    compass:  ICON_DIR + "mc-scroll.png",
    scroll:   ICON_DIR + "mc-compass.png",
    heart:    ICON_DIR + "mc-heart.png",
    chicken:  ICON_DIR + "mc-chicken.png",
    armor:    ICON_DIR + "mc-armor.png"
  };

  var MINE_TYPES = [
    { name: "草方块",   tex: "#6da53c", hard: 1, drop: "泥土" },
    { name: "泥土",     tex: "#8a5a36", hard: 1, drop: "泥土" },
    { name: "石头",     tex: "#8f8f8f", hard: 2, drop: "圆石" },
    { name: "圆石",     tex: "#7a7a7a", hard: 2, drop: "圆石" },
    { name: "木板",     tex: "#9b6b3f", hard: 2, drop: "木板" },
    { name: "铁矿",     tex: "#d8a878", hard: 3, drop: "铁锭" },
    { name: "金矿",     tex: "#f6d04a", hard: 3, drop: "金锭" },
    { name: "钻石矿",   tex: "#4fd8e8", hard: 3, drop: "钻石" },
    { name: "绿宝石矿", tex: "#2ecc71", hard: 3, drop: "绿宝石" },
    { name: "红石矿",   tex: "#d14b3a", hard: 2, drop: "红石" },
    { name: "黑曜石",   tex: "#2a2630", hard: 3, drop: "黑曜石" },
    { name: "煤炭",     tex: "#2a2a2a", hard: 2, drop: "煤炭" }
  ];

  var BLOCK_COLORS = ["#6da53c","#8a5a36","#8f8f8f","#60d4e8","#f6b50f","#2ecc71","#d14b3a","#a04c40"];
  var FLOAT_BLOCK_COLORS = ["#6da53c","#8a5a36","#8f8f8f","#d8a878","#f6d04a","#4fd8e8"];

  var SLOT_DEFS = [
    { key: "1", id: "home",     name: "主城 · 出生点",     icon: ICONS.grass,   dura: 100 },
    { key: "2", id: "projects", name: "任务 · 关卡列表",  icon: ICONS.pickaxe, dura: 82 },
    { key: "3", id: "resume",   name: "玩家档案 · 简历",  icon: ICONS.book,    dura: 68 },
    { key: "4", id: "about",    name: "关于我",           icon: ICONS.head,    dura: 91 },
    { key: "5", id: "contact",  name: "解锁联系方式",     icon: ICONS.scroll,  dura: 55 },
    { key: "6", id: "top",      name: "传送回出生点",     icon: ICONS.compass, dura: 74 }
  ];

  var SECTION_ORDER = ["home", "projects", "resume", "about", "contact"];
  var SECTION_LABEL = {
    home: "主城 · 出生点", projects: "任务 · 关卡列表", resume: "玩家档案 · 简历",
    about: "关于我", contact: "解锁联系方式"
  };

  var PROJECTS = [
    {
      id: "01", title: "破碎之家",
      desc: "微缩世界家庭场景 · 第三人称线性冒险解谜",
      tags: ["个人项目","UE5","PC"], type: "个人项目", engine: "UE5", platform: "PC",
      tags2: ["情绪镜身","线性解谜","微缩叙事"],
      media: "./Image/1.png",
      video: "./assets/animation/video-1-r2.mp4",
      videoUrl: "https://www.bilibili.com/video/BV1k41cBXEfU/",
      bvid: "BV1k41cBXEfU",
      design: ["以微缩家庭场景映射人物内心情绪变化","线性解谜推进，关卡节奏与叙事同步","空间尺度变化作为情绪线索"],
      contrib: ["独立完成白盒搭建与氛围调试","Sequencer 镜头演出设计与实现","蓝图基础交互逻辑编写"]
    },
    {
      id: "02", title: "破冰启航",
      desc: "工业港口 & 飞艇 · 第三人称线性冒险解谜",
      tags: ["个人项目","UE5","PC"], type: "个人项目", engine: "UE5", platform: "PC",
      tags2: ["冰冻机制","工业机关","飞艇关卡"],
      media: "./Image/2.png",
      video: "./assets/animation/final_video_v2-2.mp4",
      videoUrl: "https://www.bilibili.com/video/BV1oTXzBvEyA/",
      bvid: "BV1oTXzBvEyA",
      design: ["冰冻/融化机制驱动关卡推进","工业港口机关与飞艇内部空间设计","机关解谜与移动平台结合"],
      contrib: ["独立完成关卡白盒与机关逻辑","Lumen 氛围调试与光照设计","Sequencer 飞艇演出序列"]
    },
    {
      id: "03", title: "山中古刹",
      desc: "祠堂古刹箱庭 · 御剑解谜与战斗校验",
      tags: ["团队项目","UE5","PC"], type: "团队项目", engine: "UE5", platform: "PC",
      tags2: ["符箓解谜","阵法切换","塔楼限时挑战"],
      media: "./Image/3.png",
      video: "./assets/animation/video-1-r2.mp4",
      videoUrl: "https://www.bilibili.com/video/BV1Bg5a6dEHL/",
      bvid: "BV1Bg5a6dEHL",
      design: ["古刹箱庭地图布局与动线设计","符箓解谜系统与阵法切换机制","塔楼限时挑战关卡"],
      contrib: ["负责古刹区域白盒搭建","解谜机关逻辑设计与蓝图实现","与美术、程序协作推进关卡落地"]
    },
    {
      id: "04", title: "Gamified Moston",
      desc: "Moston 城市游戏化景观 · MDA 框架与 Gameplay 模拟",
      tags: ["个人项目","多工具","跨场景"], type: "个人项目", engine: "多工具", platform: "跨场景",
      tags2: ["MDA 框架","Game Simulation","包容性城市空间"],
      media: "./Image/4.png",
      video: "./assets/animation/final_video_v2-2.mp4",
      videoUrl: "https://www.bilibili.com/video/BV1jRGb6GEwE/",
      bvid: "BV1jRGb6GEwE",
      design: ["MDA 框架分析城市空间游戏化潜力","Gameplay 模拟验证空间设计","包容性城市空间策略"],
      contrib: ["独立完成调研、分析与模拟","多工具协作完成方案输出","景观建筑与游戏设计跨学科结合"]
    }
  ];

  var EXPERIENCES = {
    "xingyue-camp": {
      title: "腾讯游戏星跃实战营 - 游戏关卡策划",
      period: "2026.03 - 2026.05",
      summary: "参与腾讯游戏星跃实战营，系统学习游戏关卡设计全流程，从白盒搭建到可玩 Demo 落地。",
      tags: ["关卡设计","UE5","白盒","团队协作"],
      work: ["学习并实践关卡设计从概念到落地的完整流程","使用 UE5 完成白盒关卡搭建与测试","参与跨工种协作，与美术、程序对接关卡需求","完成关卡设计文档与评审汇报"],
      outcome: ["掌握关卡设计从需求到 Demo 的全链路","深入理解玩家动线、节奏与空间叙事","积累团队协作与项目管理经验"]
    },
    "starter-camp": {
      title: "腾讯游戏开局一课训练营——策划方向 - 游戏策划",
      period: "2025.11 - 2026.01",
      summary: "参加腾讯游戏开局一课训练营策划方向，系统学习游戏策划核心知识与工作方法。",
      tags: ["游戏策划","系统设计","玩法分析"],
      work: ["系统学习游戏策划核心知识体系","完成策划方向实战作业与项目","分析多品类游戏的系统设计与玩法循环","参与策划方案评审与答辩"],
      outcome: ["建立完整的游戏策划知识框架","提升玩法分析与系统设计能力","明确游戏策划职业发展方向"]
    },
    "innovation-park": {
      title: "大学生创新创业大赛项目——杨柳青国家文化公园景观营建设计",
      period: "2023.05 - 2024.05 · 第一负责人",
      summary: "担任第一负责人，主导杨柳青国家文化公园景观营建设计项目，获多项国家级与省级奖项。",
      tags: ["景观设计","项目管理","第一负责人","获奖项目"],
      work: ["统筹项目整体方向与设计策略","负责景观方案设计与落地规划","协调团队成员分工与进度管理","对接评审与竞赛申报"],
      outcome: ["获全国三维数字化创新设计大赛国家三等奖","获人居环境设计学年奖","获园冶杯大学生国际竞赛最佳人气奖","获华灿奖省级二等奖"]
    }
  };

  /* ---- DOM 引用 ---- */
  var hudEl, hudArmor, hudHearts, hudHunger, xpFill, xpLevel;
  var hotbarEl, hotbarLabel, hotbarSlots = [];
  var tipEl, achievesEl, loaderEl, backTopEl, particleCanvas;
  var activeSlotId = "home";
  var heartsFilled = 0;
  var visitedSections = { home: true };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isCoarse = window.matchMedia("(pointer: coarse)").matches;

  /* ---- 工具函数 ---- */
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function img(src, cls) {
    var i = document.createElement("img");
    i.src = src; i.alt = ""; i.className = cls || "";
    return i;
  }

  /* ================================================================
     1. 加载界面
     ================================================================ */
  function initLoader() {
    loaderEl = el("div", "mc-loader");
    loaderEl.innerHTML =
      '<div class="mc-loader-bg"></div>' +
      '<div class="mc-loader-text">LOADING WORLD</div>' +
      '<div class="mc-loader-bar"><div class="mc-loader-fill"></div></div>' +
      '<div class="mc-loader-sub">生成世界中…</div>';
    document.body.appendChild(loaderEl);

    var fill = loaderEl.querySelector(".mc-loader-fill");
    var pct = 0;
    var timer = setInterval(function () {
      pct += Math.random() * 18 + 6;
      if (pct >= 100) {
        pct = 100;
        clearInterval(timer);
        setTimeout(function () {
          loaderEl.classList.add("hide");
          document.body.classList.add("mc-ready");
          setTimeout(function () { if (loaderEl.parentNode) loaderEl.parentNode.removeChild(loaderEl); }, 700);
        }, 300);
      }
      fill.style.width = pct + "%";
    }, 120);
  }

  /* ================================================================
     2. 导航栏
     ================================================================ */
  function initNav() {
    var nav = el("nav", "mc-nav");
    nav.innerHTML =
      '<a href="#home" class="mc-nav-brand">' +
        '<span class="mc-nav-brand-icon"></span>' +
        '<span class="mc-nav-brand-name">陈宜理</span>' +
        '<span class="mc-nav-brand-ver">v2026</span>' +
      '</a>' +
      '<button class="mc-nav-toggle" type="button">菜单</button>' +
      '<div class="mc-nav-links">' +
        '<a class="mc-nav-link" href="#home">HOME</a>' +
        '<a class="mc-nav-link" href="#projects">PROJECTS</a>' +
        '<a class="mc-nav-link" href="#resume">RESUME</a>' +
        '<a class="mc-nav-link" href="#about">ABOUT</a>' +
        '<a class="mc-nav-link" href="#contact">CONTACT</a>' +
      '</div>';
    document.body.insertBefore(nav, document.body.firstChild);

    // 移动端菜单
    var toggle = nav.querySelector(".mc-nav-toggle");
    var links = nav.querySelector(".mc-nav-links");
    toggle.addEventListener("click", function () { links.classList.toggle("open"); });

    // 点击关闭
    nav.querySelectorAll(".mc-nav-link").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  /* ================================================================
     3. HUD
     ================================================================ */
  function initHUD() {
    hudEl = el("div", "mc-hud");
    hudEl.innerHTML =
      '<div class="mc-hud-armor mc-hud-row"></div>' +
      '<div class="mc-hud-vitals">' +
      '  <div class="mc-hud-row mc-hud-hearts"></div>' +
      '  <span class="mc-hud-level">0</span>' +
      '  <div class="mc-hud-row mc-hud-hunger"></div>' +
      '</div>' +
      '<div class="mc-hud-xp"><div class="mc-hud-xp-fill"></div></div>';
    document.body.appendChild(hudEl);

    hudArmor = hudEl.querySelector(".mc-hud-armor");
    hudHearts = hudEl.querySelector(".mc-hud-hearts");
    hudHunger = hudEl.querySelector(".mc-hud-hunger");
    xpFill = hudEl.querySelector(".mc-hud-xp-fill");
    xpLevel = hudEl.querySelector(".mc-hud-level");

    renderHudBars();
  }

  function renderHudBars() {
    hudHearts.innerHTML = "";
    for (var i = 0; i < 10; i++) {
      var h = img(ICONS.heart, "mc-hud-icon" + (i < heartsFilled ? "" : " off"));
      hudHearts.appendChild(h);
    }
    hudHunger.innerHTML = "";
    for (var j = 0; j < 10; j++) {
      var hu = img(ICONS.chicken, "mc-hud-icon");
      hudHunger.appendChild(hu);
    }
    if (hudArmor) {
      hudArmor.innerHTML = "";
      for (var k = 0; k < 10; k++) {
        var ar = img(ICONS.armor, "mc-hud-icon" + (k < 6 ? "" : " off"));
        hudArmor.appendChild(ar);
      }
    }
  }

  function fillHearts(target) {
    var before = heartsFilled;
    heartsFilled = Math.min(10, target);
    if (heartsFilled === before) return;
    var items = hudHearts ? hudHearts.querySelectorAll(".mc-hud-icon") : [];
    for (var i = before; i < heartsFilled && i < items.length; i++) {
      (function (idx) {
        setTimeout(function () { items[idx].classList.remove("off"); }, (idx - before) * 90);
      })(i);
    }
  }

  /* ================================================================
     4. 快捷栏
     ================================================================ */
  function initHotbar() {
    hotbarEl = el("div", "mc-hotbar");
    var wrap = el("div", "mc-hotbar-slots");
    wrap.style.pointerEvents = "auto";
    hotbarLabel = el("div", "mc-hotbar-label", "主城 · 出生点");

    SLOT_DEFS.forEach(function (def) {
      var s = el("button", "mc-slot");
      s.type = "button";
      s.setAttribute("data-target", "#" + def.id);
      s.setAttribute("data-mc-tip", def.name);
      s.setAttribute("data-mc-lore", "数字键 " + def.key);
      s.innerHTML =
        '<span class="mc-slot-key">' + def.key + '</span>' +
        '<img src="' + def.icon + '" />' +
        '<span class="mc-slot-dura"><i style="width:' + def.dura + '%"></i></span>';
      s.addEventListener("click", function () { gotoSection(def.id); });
      wrap.appendChild(s);
      hotbarSlots.push({ def: def, node: s });
    });

    hotbarEl.appendChild(hotbarLabel);
    hotbarEl.appendChild(wrap);
    document.body.appendChild(hotbarEl);

    // 默认选中第 1 格
    setActiveSlot("home");

    // 数字键
    document.addEventListener("keydown", function (e) {
      var tag = (document.activeElement && document.activeElement.tagName) || "";
      if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
      var def = SLOT_DEFS.find(function (d) { return d.key === e.key; });
      if (def) { e.preventDefault(); gotoSection(def.id); }
    });
  }

  function setActiveSlot(id) {
    activeSlotId = id;
    hotbarSlots.forEach(function (item) {
      var on = item.def.id === id;
      item.node.classList.toggle("is-selected", on);
      if (on && hotbarLabel) hotbarLabel.textContent = item.def.name;
    });
  }

  function gotoSection(id) {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    var target = document.getElementById(id);
    if (!target) return;
    var y = target.getBoundingClientRect().top + window.pageYOffset - 56;
    /* MC 方块碎片转场 */
    var trans = document.querySelector(".mc-transition");
    if (!trans) {
      trans = el("div", "mc-transition");
      document.body.appendChild(trans);
    }
    trans.classList.add("active");
    setTimeout(function () {
      window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
      setTimeout(function () { trans.classList.remove("active"); }, 320);
    }, 200);
  }

  /* ================================================================
     5. 提示框
     ================================================================ */
  function initTip() {
    tipEl = el("div", "mc-tip");
    document.body.appendChild(tipEl);

    document.addEventListener("mouseover", function (e) {
      var t = e.target.closest("[data-mc-tip]");
      if (!t) { tipEl.style.display = "none"; return; }
      var name = t.getAttribute("data-mc-tip");
      var lore = t.getAttribute("data-mc-lore");
      tipEl.innerHTML = '<div class="mc-tip-name">' + name + '</div>' +
        (lore ? '<div class="mc-tip-lore">' + lore + '</div>' : '');
      tipEl.style.display = "block";
      var r = t.getBoundingClientRect();
      tipEl.style.left = Math.min(r.left, window.innerWidth - 280) + "px";
      tipEl.style.top = (r.top - tipEl.offsetHeight - 6) + "px";
    });
    document.addEventListener("mouseout", function () { tipEl.style.display = "none"; });
  }

  /* ================================================================
     6. 成就弹窗
     ================================================================ */
  function initAchieves() {
    achievesEl = el("div", "mc-achieves");
    document.body.appendChild(achievesEl);
  }

  function pushAchievement(title, subtitle, iconUrl) {
    if (!achievesEl) return;
    var a = el("div", "mc-achieve");
    var ic = el("span", "mc-achieve-icon");
    if (iconUrl) ic.appendChild(img(iconUrl));
    var body = el("span", "mc-achieve-body");
    body.innerHTML = "<b>成就达成</b><span class='mc-achieve-title'>" + title + "</span>" +
      (subtitle ? "<small>" + subtitle + "</small>" : "");
    a.appendChild(ic); a.appendChild(body);
    achievesEl.appendChild(a);
    setTimeout(function () { if (a.parentNode) a.parentNode.removeChild(a); }, 4300);
  }

  /* ================================================================
     7. 浮动方块背景
     ================================================================ */
  function initFloats() {
    if (reduceMotion) return;
    var container = el("div", "mc-floats");
    document.body.appendChild(container);

    function spawn() {
      var b = el("div", "mc-float");
      var color = FLOAT_BLOCK_COLORS[Math.floor(Math.random() * FLOAT_BLOCK_COLORS.length)];
      b.style.background = color;
      b.style.left = Math.random() * 100 + "vw";
      b.style.animationDuration = (12 + Math.random() * 10) + "s";
      b.style.animationDelay = "0s";
      container.appendChild(b);
      setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 25000);
    }

    for (var i = 0; i < 8; i++) setTimeout(spawn, i * 800);
    setInterval(spawn, 2000);
  }

  /* ================================================================
     8. 粒子系统（方块破碎）
     ================================================================ */
  function initParticles() {
    particleCanvas = document.createElement("canvas");
    particleCanvas.className = "mc-particles";
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
    document.body.appendChild(particleCanvas);

    var ctx = particleCanvas.getContext("2d");
    var particles = [];
    var MAX = 300;

    function resize() {
      particleCanvas.width = window.innerWidth;
      particleCanvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    function burst(x, y, count, palette) {
      if (reduceMotion) return;
      var colors = palette || BLOCK_COLORS;
      for (var i = 0; i < count; i++) {
        if (particles.length >= MAX) particles.shift();
        particles.push({
          x: x, y: y,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8 - 3,
          size: 3 + Math.random() * 5,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: 1,
          decay: 0.02 + Math.random() * 0.02,
          gravity: 0.3
        });
      }
    }

    function tick() {
      ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
      for (var i = particles.length - 1; i >= 0; i--) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        p.vy += p.gravity; p.vx *= 0.96;
        p.life -= p.decay;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(Math.round(p.x), Math.round(p.y), Math.round(p.size), Math.round(p.size));
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(tick);
    }
    tick();

    return { burst: burst };
  }

  var particleSys = null;

  /* ================================================================
     9. Hero 视频滚动控制
     ================================================================ */
  var heroVideo, finaleVideo;

  function initScrollVideo() {
    heroVideo = document.getElementById("mcHeroVideo");
    finaleVideo = document.getElementById("mcFinaleVideo");
    [heroVideo, finaleVideo].forEach(startLoopVideo);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    initEyeTracking();
  }

  /* ================================================================
     3D 头像眼睛 & 身体跟随鼠标
     ================================================================ */
  function initEyeTracking() {
    var avatar = document.getElementById("mcAvatar3D");
    var pupilL = document.getElementById("mcPupilL");
    var pupilR = document.getElementById("mcPupilR");
    if (!avatar) return;

    var maxTilt = 10;  // 头部最大倾斜 deg

    // 瞳孔可移动余量：眼区尺寸 - 瞳孔尺寸，各方向取一半
    function pupilRange() {
      var eye = avatar.querySelector(".mc-eye-left");
      if (!eye) return { x: 2, y: 1.5 };
      var r = eye.getBoundingClientRect();
      return {
        x: Math.max(1, r.width * 0.25),   // 瞳孔宽 50% 居中 → 左右各余 25%
        y: Math.max(1, r.height * 0.19)   // 瞳孔高 62% 居中 → 上下各余 19%
      };
    }

    function onMove(e) {
      var rect = avatar.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      // 按「头像到各侧边缘的距离」分别归一化：
      // 无论头像偏左还是偏右，鼠标到达任一边缘都刚好是满量程，且全程平滑渐变
      var leftSpan  = Math.max(1, cx);
      var rightSpan = Math.max(1, window.innerWidth - cx);
      var upSpan    = Math.max(1, cy);
      var downSpan  = Math.max(1, window.innerHeight - cy);
      var ddx = e.clientX - cx;
      var ddy = e.clientY - cy;
      var dx = Math.max(-1, Math.min(1, ddx / (ddx < 0 ? leftSpan : rightSpan)));
      var dy = Math.max(-1, Math.min(1, ddy / (ddy < 0 ? upSpan : downSpan)));

      // 瞳孔偏移：两眼同向，严格限制在余量内
      var rg = pupilRange();
      var px = dx * rg.x;
      var py = dy * rg.y;
      if (pupilL) { pupilL.style.setProperty("--px", px + "px"); pupilL.style.setProperty("--py", py + "px"); }
      if (pupilR) { pupilR.style.setProperty("--px", px + "px"); pupilR.style.setProperty("--py", py + "px"); }

      // 头部 3D 倾斜
      var ry = Math.max(-maxTilt, Math.min(maxTilt, dx * maxTilt));
      var rx = Math.max(-maxTilt, Math.min(maxTilt, -dy * maxTilt));
      avatar.style.setProperty("--rx", rx + "deg");
      avatar.style.setProperty("--ry", ry + "deg");
    }

    window.addEventListener("mousemove", onMove, { passive: true });

    // 触摸设备：用 deviceorientation 做近似
    if ("ontouchstart" in window && window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", function (e) {
        if (e.gamma == null || e.beta == null) return;
        var dx = Math.max(-1, Math.min(1, e.gamma / 45));
        var dy = Math.max(-1, Math.min(1, (e.beta - 30) / 45));
        var rg = pupilRange();
        var px = dx * rg.x;
        var py = dy * rg.y;
        if (pupilL) { pupilL.style.setProperty("--px", px + "px"); pupilL.style.setProperty("--py", py + "px"); }
        if (pupilR) { pupilR.style.setProperty("--px", px + "px"); pupilR.style.setProperty("--py", py + "px"); }
        avatar.style.setProperty("--rx", (-dy * maxTilt) + "deg");
        avatar.style.setProperty("--ry", (dx * maxTilt) + "deg");
      }, { passive: true });
    }
  }

  // 让视频真正循环播放（含首次自动播放被拦截时的兜底）
  function startLoopVideo(v) {
    if (!v) return;
    v.loop = true;
    v.muted = true;
    v.playsInline = true;
    v.webkitPlaysInline = true;
    v.defaultMuted = true;
    v.setAttribute("webkit-playsinline", "");
    v.setAttribute("playsinline", "");
    var tryPlay = function () {
      var pr = v.play();
      if (pr && typeof pr.catch === "function") pr.catch(function () {});
    };
    tryPlay();
    v.addEventListener("loadeddata", tryPlay, { once: true });
    v.addEventListener("canplay", tryPlay, { once: true });
    // 部分浏览器 loop 属性失效时的兜底
    v.addEventListener("ended", function () {
      v.currentTime = 0;
      tryPlay();
    });
    // 首次用户交互后再兜底一次（应对自动播放策略）
    ["pointerdown", "keydown", "wheel", "touchstart"].forEach(function (evt) {
      window.addEventListener(evt, tryPlay, { once: true, passive: true });
    });
  }

  function toggleVideoByVisibility(v) {
    if (!v || !v.parentElement) return;
    var r = v.parentElement.getBoundingClientRect();
    var visible = r.bottom > 0 && r.top < window.innerHeight;
    if (visible && v.paused) {
      var pr = v.play();
      if (pr && typeof pr.catch === "function") pr.catch(function () {});
    } else if (!visible && !v.paused) {
      v.pause();
    }
  }

  function onScroll() {
    var maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    var progress = Math.min(window.scrollY / maxScroll, 1);

    // XP 条
    var xpShown = 12 + progress * 88;
    if (xpFill) xpFill.style.width = xpShown.toFixed(2) + "%";
    if (xpLevel) xpLevel.textContent = String(Math.round(progress * 100));

    // 视频改为自动循环播放（不再随滚动逐帧 seek）
    // 仅做省电处理：离开视口时暂停，回到视口继续播
    toggleVideoByVisibility(heroVideo);
    toggleVideoByVisibility(finaleVideo);

    // 当前区块检测
    var currentId = "home";
    SECTION_ORDER.forEach(function (id) {
      var sec = document.getElementById(id);
      if (!sec) return;
      var rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.55) currentId = id;
      if (rect.top < window.innerHeight * 0.6 && !visitedSections[id]) {
        visitedSections[id] = true;
        var idx = SECTION_ORDER.indexOf(id);
        fillHearts((idx + 1) * 2);
        pushAchievement(SECTION_LABEL[id], "探索进度 " + Math.round(((idx + 1) / SECTION_ORDER.length) * 100) + "%", ICONS.grass);
      }
    });
    if (currentId !== activeSlotId) setActiveSlot(currentId);

    // 返回顶部按钮
    if (backTopEl) backTopEl.classList.toggle("show", window.scrollY > 400);
  }

  /* ================================================================
     10. 滚动揭示
     ================================================================ */
  var revealObserver = null;
  function initReveal() {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    observeReveal(document.querySelectorAll(".mc-reveal"));
  }
  /* 供动态生成的元素补充注册（避免 initReveal 早于内容创建导致永久 opacity:0） */
  function observeReveal(nodes) {
    if (!revealObserver || !nodes) return;
    var list = nodes.length !== undefined ? nodes : [nodes];
    Array.prototype.forEach.call(list, function (item) {
      if (!item || item.classList.contains("is-visible")) return;
      revealObserver.observe(item);
    });
  }

  /* ================================================================
     11. 项目卡片 + Modal
     ================================================================ */
  function initProjects() {
    var grid = document.getElementById("mcProjectGrid");
    if (!grid) return;

    var filterBtns = document.querySelectorAll("[data-filter]");
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var filter = btn.getAttribute("data-filter");
        grid.querySelectorAll(".mc-project-card").forEach(function (card) {
          var show = filter === "all" || card.getAttribute("data-type") === filter ||
            card.getAttribute("data-engine") === filter || card.getAttribute("data-platform") === filter;
          card.style.display = show ? "" : "none";
        });
      });
    });

    PROJECTS.forEach(function (p) {
      var card = el("div", "mc-project-card mc-reveal");
      card.setAttribute("data-type", p.type);
      card.setAttribute("data-engine", p.engine);
      card.setAttribute("data-platform", p.platform);
      var thumbHtml = '<img src="' + p.media + '" alt="' + p.title + '" loading="lazy" />';
      if (p.video) {
        thumbHtml += '<video class="mc-card-video" src="' + p.video + '" muted loop playsinline webkit-playsinline preload="metadata" poster="' + p.media + '"></video>';
        thumbHtml += '<div class="mc-play-hint"></div>';
      }
      card.innerHTML =
        '<div class="mc-project-thumb">' + thumbHtml + '</div>' +
        '<div class="mc-project-body">' +
          '<div class="mc-proj-label">' +
            '<img src="./assets/ui/ico-pick.png" alt="" />' +
            '<span class="mc-proj-idx">' + p.id + '</span>' +
            '<span>MISSION</span>' +
          '</div>' +
          '<div class="mc-proj-value"><h3>' + p.title + '</h3></div>' +
          '<div class="mc-proj-label"><img src="./assets/ui/ico-book.png" alt="" /><span>BRIEFING</span></div>' +
          '<div class="mc-proj-value"><p class="mc-project-desc">' + p.desc + '</p></div>' +
          '<div class="mc-project-tags">' +
            p.tags2.map(function (t) { return '<span>' + t + '</span>'; }).join("") +
          '</div>' +
        '</div>';
      if (p.video) {
        var v = card.querySelector(".mc-card-video");
        var isTouch = ("ontouchstart" in window) || navigator.maxTouchPoints > 0;
        var playCardVideo = function () {
          v.play().catch(function(){});
          card.classList.add("is-playing");
        };
        var pauseCardVideo = function () {
          v.pause();
          v.currentTime = 0;
          card.classList.remove("is-playing");
        };
        if (isTouch) {
          // 触摸设备：卡片进入视口自动播放，离开暂停
          var cardObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) { playCardVideo(); }
              else { pauseCardVideo(); }
            });
          }, { threshold: 0.3 });
          cardObserver.observe(card);
        } else {
          // 桌面：hover 播放
          card.addEventListener("mouseenter", playCardVideo);
          card.addEventListener("mouseleave", pauseCardVideo);
        }
      }
      card.addEventListener("click", function () { openProjectModal(p); });
      grid.appendChild(card);
      observeReveal(card);
    });

    // Modal
    var modal = document.getElementById("mcModal");
    var closeBtn = modal.querySelector(".mc-modal-close");
    closeBtn.addEventListener("click", function () { modal.classList.remove("open"); });
    modal.querySelector(".mc-modal-backdrop").addEventListener("click", function () { modal.classList.remove("open"); });
  }

  function openProjectModal(p) {
    var modal = document.getElementById("mcModal");
    modal.querySelector("#mcModalTitle").textContent = p.title;
    modal.querySelector("#mcModalSummary").textContent = p.desc;
    // 如果有B站视频，嵌入 iframe 播放器；否则显示图片
    if (p.bvid) {
      modal.querySelector("#mcModalMedia").innerHTML =
        '<div style="position:relative;width:100%;padding-bottom:56.25%;height:0;overflow:hidden;border:2px solid rgba(255,255,255,0.5);box-shadow:0 4px 14px rgba(0,0,0,0.5);">' +
          '<iframe src="https://player.bilibili.com/player.html?bvid=' + p.bvid + '&autoplay=0&high_quality=1&danmaku=1" ' +
            'style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" ' +
            'scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">' +
          '</iframe>' +
        '</div>';
    } else {
      modal.querySelector("#mcModalMedia").innerHTML =
        p.media ? '<img src="' + p.media + '" alt="" style="width:100%;display:block;" />' : "";
    }
    modal.querySelector("#mcModalMeta").innerHTML =
      p.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("");
    modal.querySelector("#mcModalDesign").innerHTML =
      p.design.map(function (d) { return "<li>" + d + "</li>"; }).join("");
    modal.querySelector("#mcModalContrib").innerHTML =
      p.contrib.map(function (c) { return "<li>" + c + "</li>"; }).join("");
    modal.classList.add("open");
  }

  /* ================================================================
     12. 经历 Modal
     ================================================================ */
  function initExperiences() {
    document.querySelectorAll("[data-exp-id]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-exp-id");
        var exp = EXPERIENCES[id];
        if (!exp) return;
        var modal = document.getElementById("mcModal");
        modal.querySelector("#mcModalTitle").textContent = exp.title;
        modal.querySelector("#mcModalSummary").textContent = exp.summary;
        modal.querySelector("#mcModalMedia").innerHTML = "";
        modal.querySelector("#mcModalMeta").innerHTML =
          (exp.tags || []).map(function (t) { return "<span>" + t + "</span>"; }).join("");
        modal.querySelector("#mcModalDesign").innerHTML =
          (exp.work || []).map(function (w) { return "<li>" + w + "</li>"; }).join("");
        modal.querySelector("#mcModalContrib").innerHTML =
          (exp.outcome || []).map(function (o) { return "<li>" + o + "</li>"; }).join("");
        modal.classList.add("open");
      });
    });
  }

  /* ================================================================
     13. 文档卡片 Modal
     ================================================================ */
  function initDocs() {
    document.querySelectorAll("[data-doc-url]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var title = btn.getAttribute("data-doc-title");
        var url = btn.getAttribute("data-doc-url");
        var modal = document.getElementById("mcModal");
        modal.querySelector("#mcModalTitle").textContent = title;
        modal.querySelector("#mcModalSummary").textContent = "PDF · 设计文档";
        modal.querySelector("#mcModalMedia").innerHTML =
          '<iframe src="' + url + '" style="width:100%;aspect-ratio:16/9;border:2px solid #000;background:#000;" title="文档预览"></iframe>';
        modal.querySelector("#mcModalMeta").innerHTML = "<span>PDF</span>";
        modal.querySelector("#mcModalDesign").innerHTML = "<li>点击预览文档内容</li>";
        modal.querySelector("#mcModalContrib").innerHTML = "";
        modal.classList.add("open");
      });
    });
  }

  /* ================================================================
     14. 挖掘小游戏
     ================================================================ */
  function initMineGame() {
    var zone = document.getElementById("mcMineZone");
    if (!zone) return;
    var wall = zone.querySelector(".mc-mine-wall");
    var chest = zone.querySelector(".mc-mine-chest");
    var remaining = 15;

    // 生成 15 个方块
    var sequence = [];
    for (var i = 0; i < 15; i++) {
      sequence.push(MINE_TYPES[Math.floor(Math.random() * MINE_TYPES.length)]);
    }
    sequence[0] = MINE_TYPES[0];
    sequence[7] = MINE_TYPES[6];
    sequence[12] = MINE_TYPES[7];
    sequence[14] = MINE_TYPES[9];

    sequence.forEach(function (type) {
      var b = el("button", "mc-mine-block");
      b.type = "button";
      b.style.setProperty("--mc-btex", type.tex);
      b.setAttribute("data-name", type.name);
      b.setAttribute("data-hard", String(type.hard));
      b.setAttribute("data-mc-tip", type.name);
      b.setAttribute("data-mc-lore", "硬度 " + type.hard + " · 点击挖掘");
      b.innerHTML = '<span class="mc-crack"></span>';
      b.hits = 0;
      b.addEventListener("click", function () { mineBlock(b); });
      wall.appendChild(b);
    });

    function mineBlock(block) {
      if (block.classList.contains("is-broken")) return;
      var hard = parseInt(block.getAttribute("data-hard") || "1", 10);
      var rect = block.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      if (particleSys) particleSys.burst(cx, cy, 6, [block.style.getPropertyValue("--mc-btex")]);
      block.hits += 1;
      block.classList.remove("crack-1", "crack-2");
      if (block.hits >= hard) {
        var name = block.getAttribute("data-name") || "方块";
        if (particleSys) particleSys.burst(cx, cy, 16, null);
        block.classList.add("is-broken");
        spawnDropLabel(name, cx, cy);
        spawnXpOrb(cx, cy);
        remaining -= 1;
        if (remaining <= 0) {
          zone.classList.add("is-unlocked");
          pushAchievement("宝藏猎人", "挖完了所有方块！", ICONS.pickaxe);
        }
      } else {
        block.classList.add(hard === 3 ? "crack-2" : "crack-1");
      }
    }

    // 宝箱点击
    chest.addEventListener("click", function () {
      chest.classList.add("is-open");
      pushAchievement("宝箱已开启", "联系方式已解锁！", ICONS.scroll);
    });
  }

  function spawnDropLabel(text, x, y) {
    var lab = el("div");
    lab.style.cssText = "position:fixed;z-index:2147483060;left:" + x + "px;top:" + y +
      "px;transform:translate(-50%,-50%);color:#fff;font:700 11px/1 var(--mc-font-hud,monospace);text-shadow:1px 1px 0 #000;pointer-events:none;transition:all 700ms steps(8,end);";
    lab.textContent = "+ " + text;
    document.body.appendChild(lab);
    requestAnimationFrame(function () {
      lab.style.transform = "translate(-50%,-160%)";
      lab.style.opacity = "0";
    });
    setTimeout(function () { if (lab.parentNode) lab.parentNode.removeChild(lab); }, 760);
  }

  function spawnXpOrb(x, y) {
    if (reduceMotion) return;
    var orb = el("div");
    orb.style.cssText = "position:fixed;z-index:2147483060;width:9px;height:9px;left:" + x +
      "px;top:" + y + "px;background:var(--mc-xp,#80ff66);box-shadow:0 0 8px rgba(128,255,102,0.9);border-radius:50%;pointer-events:none;will-change:transform,opacity;";
    document.body.appendChild(orb);
    var xpRect = xpFill ? xpFill.getBoundingClientRect() : null;
    var tx = xpRect ? xpRect.left + xpRect.width : 40;
    var ty = xpRect ? xpRect.top + 3 : 100;
    var dx = tx - x, dy = ty - y;
    orb.animate([
      { transform: "translate(0,0)", opacity: 1 },
      { transform: "translate(" + (dx * 0.3) + "px," + (dy * 0.3 - 40) + "px)", opacity: 0.8 },
      { transform: "translate(" + dx + "px," + dy + "px)", opacity: 0 }
    ], { duration: 600, easing: "cubic-bezier(0.3,0,0.7,1)" });
    setTimeout(function () { if (orb.parentNode) orb.parentNode.removeChild(orb); }, 620);
  }

  /* ================================================================
     14b. MC 主菜单（按钮 / splash / FPS）
     ================================================================ */
  var SPLASHES = [
    "陈宜理的作品集!", "关卡设计中!", "UE5 白盒已就绪!", "10000+ 小时游戏时长!",
    "空间叙事爱好者!", "也能做景观建筑!", "点击开始探索!", "还有隐藏关卡哦!",
    "第一负责人!", "雅思 6.0!", "别忘了挖方块!"
  ];

  function initMainMenu() {
    // 菜单按钮跳转
    document.querySelectorAll("[data-goto]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-goto");
        var target = document.getElementById(id);
        if (!target) return;
        var y = target.getBoundingClientRect().top + window.pageYOffset - 56;
        window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
      });
    });

    // splash 标语随机切换
    var splash = document.getElementById("mcSplash");
    if (splash) {
      splash.textContent = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];
      setInterval(function () {
        splash.textContent = SPLASHES[Math.floor(Math.random() * SPLASHES.length)];
      }, 5200);
    }

    // FPS 数字轻微跳动（仿 F3 调试信息）
    var fps = document.getElementById("mcFps");
    if (fps) {
      setInterval(function () {
        fps.textContent = "FPS:" + (58 + Math.floor(Math.random() * 5));
      }, 900);
    }
  }

  /* ================================================================
     15. 返回顶部
     ================================================================ */
  function initBackTop() {
    backTopEl = el("button", "mc-back-top");
    backTopEl.innerHTML = "↑";
    backTopEl.setAttribute("aria-label", "返回顶部");
    backTopEl.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.body.appendChild(backTopEl);
  }

  /* ================================================================
     16. 移动端导航点击关闭
     ================================================================ */

  /* ================================================================
     初始化
     ================================================================ */
  function init() {
    initLoader();
    initNav();
    initMainMenu();
    initHUD();
    initHotbar();
    initTip();
    initAchieves();
    initFloats();
    particleSys = initParticles();
    initScrollVideo();
    initReveal();
    initProjects();
    initExperiences();
    initDocs();
    initMineGame();
    initBackTop();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
