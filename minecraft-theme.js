/* ============================================================
   MINECRAFT THEME  ·  游戏化交互与动效
   体素方块光标 / 方块破碎粒子 / 快捷栏导航 / HUD 状态条 /
   物品提示 / 成就系统 / 挖掘解锁宝箱 / 浮动方块背景
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isCoarse = window.matchMedia("(pointer: coarse)").matches;

  /* ---------- 像素画工具：把字符画转成内联 SVG ---------- */
  function pixelSvg(rows, palette, scale) {
    var cell = scale || 1;
    var h = rows.length;
    var w = 0;
    rows.forEach(function (r) { w = Math.max(w, r.length); });
    var rects = [];
    rows.forEach(function (row, y) {
      for (var x = 0; x < row.length; x++) {
        var c = row.charAt(x);
        if (c === "." || c === " ") continue;
        var fill = palette[c] || "#fff";
        rects.push("<rect x='" + x * cell + "' y='" + y * cell + "' width='" + cell + "' height='" + cell + "' fill='" + fill + "'/>");
      }
    });
    return "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 " + w * cell + " " + h * cell + "' shape-rendering='crispEdges'>" + rects.join("") + "</svg>";
  }

  function svgDataUri(svg) {
    return "data:image/svg+xml," + encodeURIComponent(svg);
  }

  /* ---------- 像素图标 ---------- */
  var ICONS = {
    grass: svgDataUri(pixelSvg([
      "....##......##....",
      "..##############..",
      "..##############..",
      "..##############..",
      "..##############..",
      "..##############..",
      "..##############..",
      "..##############.."
    ], { "#": "#6da53c" }, 2)),
    dirt: svgDataUri(pixelSvg([
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................",
      "................"
    ], { "#": "#8a5a36" }, 2)),
    pickaxe: svgDataUri(pixelSvg([
      "..........####....",
      ".........####.....",
      "........####......",
      ".......####.......",
      "......####........",
      ".....####.........",
      "....####..........",
      "...####...........",
      "..####............",
      ".####.............",
      "####.............."
    ], { "#": "#60d4e8" }, 2)),
    book: svgDataUri(pixelSvg([
      "................",
      "..############..",
      ".###############",
      ".#...........#.#",
      ".#...........#.#",
      ".#...........#.#",
      ".#...........#.#",
      ".#...........#.#",
      ".#...........#.#",
      "..############.."
    ], { "#": "#b3392e" }, 2)),
    head: svgDataUri(pixelSvg([
      "......####......",
      "....########....",
      "...##########...",
      "...##..##..##...",
      "...##..##..##...",
      "...##########...",
      "....########....",
      "......####......",
      "....########....",
      "....########....",
      "....########...."
    ], { "#": "#d9a066" }, 2)),
    paper: svgDataUri(pixelSvg([
      "................",
      "....########....",
      "...##########...",
      "...####...#.....",
      "...###....#.....",
      "...##.....#.....",
      "...##.....#.....",
      "...###....#.....",
      "...####...#.....",
      "...##########...",
      "....########...."
    ], { "#": "#f2f2f2" }, 2)),
    compass: svgDataUri(pixelSvg([
      "................",
      "......####......",
      "....########....",
      "...##.######....",
      "...##.######....",
      "...##.######....",
      "...########.....",
      "....########....",
      "......####......",
      "................"
    ], { "#": "#d8d8d8" }, 2)),
    heart: svgDataUri(pixelSvg([
      "..####....####..",
      ".##############.",
      ".##############.",
      ".##############.",
      "..############..",
      "...##########...",
      "....########....",
      ".....######.....",
      ".......##......."
    ], { "#": "#ff4f4f" }, 2)),
    hunger: svgDataUri(pixelSvg([
      ".......####.....",
      ".......####.....",
      ".......####.....",
      ".......####.....",
      ".......####.....",
      "......####......",
      ".....####.......",
      "....####........",
      "...####.........",
      "...##...........",
      "..##............",
      ".#.............."
    ], { "#": "#f5b53a" }, 2)),
    armor: svgDataUri(pixelSvg([
      "##..........##",
      "####......####",
      "##############",
      "##############",
      "##############",
      ".############.",
      ".############.",
      ".##########...",
      "..########....",
      "..########...."
    ], { "#": "#c8c8c8" }, 2))
  };

  var BLOCK_COLORS = ["#6da53c", "#8a5a36", "#8f8f8f", "#60d4e8", "#f6b50f", "#2ecc71", "#d14b3a", "#a04c40", "#2a2630", "#b08d57", "#e0d5a3"];

  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /* ============================================================
     1. DOM 骨架（HUD / Hotbar / 光标 / 粒子 / 提示 / 浮动块 / 成就）
     ============================================================ */
  function el(tag, cls, html) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function buildChrome() {
    // 浮动方块背景
    var floats = el("div", "mc-floats");
    floats.setAttribute("aria-hidden", "true");
    document.body.appendChild(floats);
    var texVars = ["var(--tex-grass)", "var(--tex-dirt)", "var(--tex-stone)", "var(--tex-cobble)", "var(--tex-diamond)", "var(--tex-gold)", "var(--tex-emerald)", "var(--tex-redstone)", "var(--tex-obsidian)", "var(--tex-plank)", "var(--tex-sand)", "var(--tex-netherrack)"];
    for (var i = 0; i < 14; i++) {
      var b = el("span", "mc-float");
      var size = 16 + Math.random() * 30;
      b.style.left = (Math.random() * 100).toFixed(1) + "%";
      b.style.width = size.toFixed(0) + "px";
      b.style.height = size.toFixed(0) + "px";
      b.style.backgroundImage = texVars[i % texVars.length];
      b.style.animationDuration = (16 + Math.random() * 18).toFixed(1) + "s";
      b.style.animationDelay = (-Math.random() * 20).toFixed(1) + "s";
      b.style.setProperty("--mc-drift", (Math.random() * 110 - 55).toFixed(0) + "px");
      b.style.setProperty("--mc-fo", (0.25 + Math.random() * 0.35).toFixed(2));
      floats.appendChild(b);
    }

    // 粒子画布
    var canvas = el("canvas", "mc-particles");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    ctx = canvas.getContext("2d");

    // HUD
    var hud = el("div", "mc-hud");
    hud.setAttribute("aria-hidden", "true");
    hud.innerHTML =
      '<div class="mc-hud-armor mc-hud-row"></div>' +
      '<div class="mc-hud-vitals">' +
      '  <div class="mc-hud-row mc-hud-hearts"></div>' +
      '  <span class="mc-hud-level">0</span>' +
      '  <div class="mc-hud-row mc-hud-hunger"></div>' +
      '</div>' +
      '<div class="mc-hud-xp"><div class="mc-hud-xp-fill"></div></div>';
    document.body.appendChild(hud);
    hudHearts = hud.querySelector(".mc-hud-hearts");
    hudHunger = hud.querySelector(".mc-hud-hunger");
    hudArmor = hud.querySelector(".mc-hud-armor");
    xpFill = hud.querySelector(".mc-hud-xp-fill");
    xpLevel = hud.querySelector(".mc-hud-level");

    // 快捷栏
    buildHotbar();

    // 光标 + 选中框（仅精确指针设备）
    if (!isCoarse && !reduceMotion) {
      cursor = el("div", "mc-cursor");
      cursor.innerHTML = '<span class="mc-cursor-block"></span><span class="mc-cursor-ring"></span>';
      document.body.appendChild(cursor);
      selectFrame = el("div", "mc-select-frame");
      document.body.appendChild(selectFrame);
      document.body.classList.add("mc-cursor-on");
    }

    // 提示框
    tip = el("div", "mc-tip");
    document.body.appendChild(tip);

    // 成就容器
    achieves = el("div", "mc-achieves");
    achieves.setAttribute("aria-hidden", "true");
    document.body.appendChild(achieves);
  }

  /* ============================================================
     2. 粒子系统（方块破碎）
     ============================================================ */
  var ctx = null;
  var particles = [];
  var MAX_PARTICLES = 320;

  function burst(x, y, count, palette) {
    if (!ctx || reduceMotion) return;
    var colors = palette || BLOCK_COLORS;
    for (var i = 0; i < count; i++) {
      if (particles.length >= MAX_PARTICLES) particles.shift();
      var angle = Math.random() * Math.PI * 2;
      var speed = 1.5 + Math.random() * 5.5;
      particles.push({
        x: x, y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.5,
        size: 3 + Math.random() * 6,
        color: randomItem(colors),
        life: 1,
        decay: 0.018 + Math.random() * 0.022,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.4
      });
    }
  }

  function tickParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (var i = particles.length - 1; i >= 0; i--) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22;
      p.vx *= 0.985;
      p.rot += p.vr;
      p.life -= p.decay;
      if (p.life <= 0) { particles.splice(i, 1); continue; }
      ctx.save();
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.fillStyle = p.color;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    }
    if (particles.length) window.requestAnimationFrame(tickParticles);
  }

  function spawnBurst(x, y, count, palette) {
    burst(x, y, count || 10, palette);
    if (!window.__mcRafRunning) {
      window.__mcRafRunning = true;
      window.requestAnimationFrame(tickParticles);
    }
  }

  /* ============================================================
     3. 游戏光标 + 白色选中框
     ============================================================ */
  var cursor = null;
  var selectFrame = null;
  var lastHover = null;

  function isInteractive(el) {
    if (!el || el.nodeType !== 1) return false;
    return !!el.closest("a, button, .chip, .doc-card, .project-card, .experience-trigger, .reel-arrow, .mc-slot, .mc-mine-block, .mc-mine-chest, input, select, textarea, [role='button']");
  }

  if (!isCoarse && !reduceMotion) {
    document.addEventListener("pointermove", function (e) {
      if (!cursor) return;
      cursor.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)";
      var target = document.elementFromPoint(e.clientX, e.clientY);
      var interactive = isInteractive(target);
      cursor.classList.toggle("is-hover", interactive);
      if (interactive) {
        var frameEl = target.closest("a, button, .chip, .doc-card, .project-card, .experience-trigger, .reel-arrow, .mc-slot, .mc-mine-block, .mc-mine-chest, input, select, textarea, [role='button']");
        if (frameEl && frameEl !== lastHover) {
          lastHover = frameEl;
          positionSelectFrame(frameEl);
          selectFrame.style.display = "block";
        }
      } else {
        selectFrame.style.display = "none";
        lastHover = null;
      }
    }, { passive: true });

    document.addEventListener("pointerdown", function (e) {
      if (!cursor) return;
      cursor.classList.add("is-active");
      var x = e.clientX, y = e.clientY;
      spawnBurst(x, y, 8, null);
    });
    document.addEventListener("pointerup", function () {
      if (cursor) cursor.classList.remove("is-active");
    });
    document.addEventListener("scroll", function () {
      if (lastHover && selectFrame) positionSelectFrame(lastHover);
    }, { passive: true, capture: true });
  }

  function positionSelectFrame(node) {
    if (!selectFrame || !node) return;
    var r = node.getBoundingClientRect();
    var pad = 2;
    selectFrame.style.left = (r.left - pad) + "px";
    selectFrame.style.top = (r.top - pad) + "px";
    selectFrame.style.width = (r.width + pad * 2) + "px";
    selectFrame.style.height = (r.height + pad * 2) + "px";
  }

  /* ============================================================
     4. 物品提示框 Tooltip
     ============================================================ */
  var tip = null;

  function tipText(node) {
    var t = node.getAttribute ? node.getAttribute("data-mc-tip") : null;
    var lore = node.getAttribute ? node.getAttribute("data-mc-lore") : null;
    if (t) return { name: t, lore: lore || "" };
    if (node.classList && node.classList.contains("project-card")) {
      var h = node.querySelector("h3");
      return { name: h ? h.textContent : "项目", lore: "点击进入关卡世界，查看设计详情" };
    }
    if (node.classList && node.classList.contains("doc-card")) {
      var d = node.querySelector(".doc-title");
      return { name: d ? d.textContent : "设计文档", lore: "PDF 设计文档，点击预览" };
    }
    if (node.classList && node.classList.contains("mc-mine-block")) {
      return {
        name: node.getAttribute("data-name") || "方块",
        lore: "硬度 " + (node.getAttribute("data-hard") || "1") + " · 点击挖掘"
      };
    }
    return null;
  }

  document.addEventListener("pointerover", function (e) {
    if (!tip) return;
    var target = e.target && e.target.closest ? e.target.closest(".project-card, .doc-card, .mc-mine-block, [data-mc-tip]") : null;
    if (!target) { tip.style.display = "none"; return; }
    var info = tipText(target);
    if (!info) { tip.style.display = "none"; return; }
    tip.innerHTML = '<span class="mc-tip-name">' + info.name + '</span>' +
      (info.lore ? '<span class="mc-tip-lore">' + info.lore + "</span>" : "");
    tip.style.display = "block";
  });

  document.addEventListener("pointermove", function (e) {
    if (!tip || tip.style.display !== "block") return;
    var w = tip.offsetWidth, h = tip.offsetHeight;
    var x = e.clientX + 16, y = e.clientY + 18;
    if (x + w > window.innerWidth - 8) x = e.clientX - w - 14;
    if (y + h > window.innerHeight - 8) y = e.clientY - h - 14;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
  });

  document.addEventListener("pointerout", function (e) {
    if (!tip) return;
    var to = e.relatedTarget;
    if (!to || !to.closest || !to.closest(".mc-tip")) tip.style.display = "none";
  });

  /* ============================================================
     5. HUD：生命心 + 饥饿 + 经验条
     ============================================================ */
  var hudHearts = null, hudHunger = null, hudArmor = null, xpFill = null, xpLevel = null;
  var HEART_COUNT = 10;
  var HUNGER_COUNT = 10;
  var ARMOR_COUNT = 10;
  var heartsFilled = 0;
  var visitedSections = { home: true };

  function renderHudBars() {
    if (!hudHearts) return;
    hudHearts.innerHTML = "";
    for (var i = 0; i < HEART_COUNT; i++) {
      var im = document.createElement("img");
      im.className = "mc-hud-item" + (i < heartsFilled ? "" : " off");
      im.src = ICONS.heart;
      im.alt = "";
      hudHearts.appendChild(im);
    }
    hudHunger.innerHTML = "";
    for (var j = 0; j < HUNGER_COUNT; j++) {
      var hu = document.createElement("img");
      hu.className = "mc-hud-item";
      hu.src = ICONS.hunger;
      hu.alt = "";
      hudHunger.appendChild(hu);
    }
    if (hudArmor) {
      hudArmor.innerHTML = "";
      for (var k = 0; k < ARMOR_COUNT; k++) {
        var ar = document.createElement("img");
        ar.className = "mc-hud-item mc-hud-armor-item" + (k < 6 ? "" : " off");
        ar.src = ICONS.armor;
        ar.alt = "";
        hudArmor.appendChild(ar);
      }
    }
  }

  function fillHearts(target) {
    var before = heartsFilled;
    heartsFilled = Math.min(HEART_COUNT, target);
    if (heartsFilled === before) return;
    var items = hudHearts ? hudHearts.querySelectorAll(".mc-hud-item") : [];
    for (var i = before; i < heartsFilled && i < items.length; i++) {
      (function (idx) {
        window.setTimeout(function () { items[idx].classList.remove("off"); }, (idx - before) * 90);
      })(i);
    }
  }

  /* ============================================================
     6. 成就弹窗
     ============================================================ */
  var achieves = null;
  var achieveQueue = 0;

  function pushAchievement(title, subtitle, icon) {
    if (!achieves) return;
    achieveQueue += 320;
    window.setTimeout(function () {
      var a = el("div", "mc-achieve");
      var ic = el("span", "mc-achieve-icon");
      if (icon) {
        var img = document.createElement("img");
        img.src = icon;
        img.alt = "";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        ic.appendChild(img);
      } else {
        ic.textContent = "✦";
      }
      var body = el("span");
      body.innerHTML = "<b>成就达成</b><span class='mc-achieve-title'>" + title + "</span><small>" + (subtitle || "") + "</small>";
      a.appendChild(ic);
      a.appendChild(body);
      achieves.appendChild(a);
      window.setTimeout(function () {
        if (a.parentNode) a.parentNode.removeChild(a);
      }, 4300);
    }, achieveQueue);
  }

  /* ============================================================
     7. 快捷栏 Hotbar
     ============================================================ */
  var SLOT_DEFS = [
    { key: "1", id: "home", name: "主城 · 出生点", icon: ICONS.grass, dura: 100 },
    { key: "2", id: "projects", name: "任务 · 关卡列表", icon: ICONS.pickaxe, dura: 82 },
    { key: "3", id: "resume", name: "玩家档案 · 简历", icon: ICONS.book, dura: 68 },
    { key: "4", id: "about", name: "关于我", icon: ICONS.head, dura: 91 },
    { key: "5", id: "contact", name: "解锁联系方式", icon: ICONS.paper, dura: 55 },
    { key: "6", id: "top", name: "传送回出生点", icon: ICONS.compass, dura: 74 }
  ];
  var hotbarSlots = [];
  var hotbarLabel = null;
  var activeSlotId = "home";

  function buildHotbar() {
    var bar = el("div", "mc-hotbar");
    var slotsWrap = el("div", "mc-hotbar-slots");
    slotsWrap.style.pointerEvents = "auto";
    hotbarLabel = el("div", "mc-hotbar-label", "主城 · 出生点");
    SLOT_DEFS.forEach(function (def) {
      var s = el("button", "mc-slot");
      s.type = "button";
      s.setAttribute("data-target", "#" + def.id);
      s.setAttribute("data-mc-tip", def.name);
      s.setAttribute("data-mc-lore", "数字键 " + def.key + " 快速切换");
      s.setAttribute("aria-label", def.name);
      s.innerHTML = '<span class="mc-slot-key">' + def.key + "</span>" +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
        '<image href="' + def.icon + '" width="24" height="24" preserveAspectRatio="xMidYMid meet"/>' +
        "</svg>" +
        '<span class="mc-slot-dura"><i style="width:' + def.dura + '%"></i></span>';
      s.addEventListener("click", function () {
        gotoSection(def.id);
      });
      slotsWrap.appendChild(s);
      hotbarSlots.push({ def: def, node: s });
    });
    bar.appendChild(hotbarLabel);
    bar.appendChild(slotsWrap);
    document.body.appendChild(bar);
  }

  function setActiveSlot(id) {
    activeSlotId = id;
    hotbarSlots.forEach(function (item) {
      var on = item.def.id === id;
      item.node.classList.toggle("is-selected", on);
      if (on) {
        item.node.setAttribute("aria-current", "true");
        if (hotbarLabel) hotbarLabel.textContent = item.def.name;
      } else {
        item.node.removeAttribute("aria-current");
      }
    });
  }

  function gotoSection(id) {
    var target;
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    target = document.getElementById(id);
    if (!target) return;
    if (typeof window.unlockHeroScroll === "function") {
      try { window.unlockHeroScroll(); } catch (e) {}
    }
    var y = target.getBoundingClientRect().top + window.pageYOffset - 62;
    window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
  }

  // 数字键 1-6 快捷切换
  document.addEventListener("keydown", function (e) {
    var tag = (document.activeElement && document.activeElement.tagName) || "";
    if (/INPUT|TEXTAREA|SELECT/.test(tag)) return;
    var idx = ["1", "2", "3", "4", "5", "6"].indexOf(e.key);
    if (idx > -1 && SLOT_DEFS[idx]) gotoSection(SLOT_DEFS[idx].id);
  });

  /* ============================================================
     8. 挖掘小游戏（contact 区域）
     ============================================================ */
  var MINE_TYPES = [
    { name: "草方块", tex: "var(--tex-grass)", hard: 1, drop: "草方块" },
    { name: "圆石", tex: "var(--tex-cobble)", hard: 2, drop: "圆石" },
    { name: "沙石", tex: "var(--tex-sand)", hard: 1, drop: "沙子" },
    { name: "煤炭块", tex: "var(--tex-obsidian)", hard: 2, drop: "煤炭" },
    { name: "铁块", tex: "var(--tex-stone)", hard: 2, drop: "铁锭" },
    { name: "金块", tex: "var(--tex-gold)", hard: 2, drop: "金锭" },
    { name: "钻石块", tex: "var(--tex-diamond)", hard: 3, drop: "钻石" },
    { name: "绿宝石块", tex: "var(--tex-emerald)", hard: 3, drop: "绿宝石" },
    { name: "红石块", tex: "var(--tex-redstone)", hard: 2, drop: "红石" },
    { name: "黑曜石", tex: "var(--tex-obsidian)", hard: 3, drop: "黑曜石" },
    { name: "下界岩", tex: "var(--tex-netherrack)", hard: 2, drop: "下界岩" },
    { name: "草方块", tex: "var(--tex-grass)", hard: 1, drop: "草方块" }
  ];
  var remainingBlocks = 0;

  function buildMineZone() {
    var zone = document.getElementById("mcMineZone");
    if (!zone) return;
    var wall = zone.querySelector(".mc-mine-wall");
    if (!wall) return;

    var sequence = [];
    // 5x3 = 15 块
    for (var r = 0; r < 3; r++) {
      for (var c = 0; c < 5; c++) {
        sequence.push(MINE_TYPES[Math.floor(Math.random() * MINE_TYPES.length)]);
      }
    }
    // 保证至少有钻石/金/绿宝石的惊喜
    sequence[0] = MINE_TYPES[0];
    sequence[7] = MINE_TYPES[6];
    sequence[12] = MINE_TYPES[7];
    sequence[14] = MINE_TYPES[9];

    remainingBlocks = sequence.length;

    sequence.forEach(function (type) {
      var b = el("button", "mc-mine-block");
      b.type = "button";
      b.style.setProperty("--mc-btex", type.tex);
      b.setAttribute("data-name", type.name);
      b.setAttribute("data-hard", String(type.hard));
      b.setAttribute("data-drop", type.drop);
      b.setAttribute("data-mc-tip", type.name);
      b.setAttribute("data-mc-lore", "硬度 " + type.hard + " · 点击挖掘");
      b.innerHTML = '<span class="mc-crack"></span>';
      b.hits = 0;
      b.addEventListener("click", function (e) {
        mineBlock(b, e);
      });
      wall.appendChild(b);
    });
  }

  function mineBlock(block, e) {
    if (block.classList.contains("is-broken")) return;
    var hard = parseInt(block.getAttribute("data-hard") || "1", 10);
    var rect = block.getBoundingClientRect();
    var cx = rect.left + rect.width / 2;
    var cy = rect.top + rect.height / 2;
    spawnBurst(cx, cy, 6, [getComputedStyle(block).backgroundColor || "#8f8f8f"]);
    block.hits += 1;
    block.classList.remove("crack-1", "crack-2");
    if (block.hits >= hard) {
      // 破碎
      var drop = block.getAttribute("data-drop") || "物品";
      var name = block.getAttribute("data-name") || "方块";
      spawnBurst(cx, cy, 16, null);
      block.classList.add("is-broken");
      // 物品名飘字
      spawnDropLabel(name, cx, cy);
      // XP 球飞向经验条
      spawnXpOrb(cx, cy);
      remainingBlocks -= 1;
      checkMineComplete();
    } else if (hard === 3) {
      block.classList.add("crack-2");
    } else if (hard === 2) {
      block.classList.add("crack-1");
    } else {
      block.classList.add("crack-1");
    }
  }

  function spawnDropLabel(text, x, y) {
    var lab = el("div");
    lab.style.cssText = "position:fixed;z-index:2147483060;left:" + x + "px;top:" + y + "px;transform:translate(-50%,-50%);color:#fff;font:700 11px/1 var(--mc-font-hud, monospace);text-shadow:1px 1px 0 #000;pointer-events:none;transition:all 700ms steps(8,end);";
    lab.textContent = "+ " + text;
    document.body.appendChild(lab);
    window.requestAnimationFrame(function () {
      lab.style.transform = "translate(-50%,-160%)";
      lab.style.opacity = "0";
    });
    window.setTimeout(function () { if (lab.parentNode) lab.parentNode.removeChild(lab); }, 760);
  }

  function spawnXpOrb(x, y) {
    if (reduceMotion) return;
    var orb = el("div");
    orb.style.cssText = "position:fixed;z-index:2147483060;width:9px;height:9px;left:" + x + "px;top:" + y + "px;background:var(--mc-xp, #80ff66);box-shadow:0 0 8px rgba(128,255,102,0.9);border-radius:50%;pointer-events:none;will-change:transform,opacity;";
    document.body.appendChild(orb);
    var xpRect = xpFill ? xpFill.getBoundingClientRect() : null;
    var tx = xpRect ? xpRect.left + xpRect.width : 40;
    var ty = xpRect ? xpRect.top + 3 : 100;
    var start = performance.now();
    var dur = 720;
    (function step(now) {
      var t = Math.min((now - start) / dur, 1);
      var e = 1 - Math.pow(1 - t, 3);
      orb.style.transform = "translate(" + ((tx - x) * e) + "px," + ((ty - y) * e) + "px) scale(" + (1 - e * 0.6) + ")";
      orb.style.opacity = String(1 - e);
      if (t < 1) {
        window.requestAnimationFrame(step);
      } else {
        if (orb.parentNode) orb.parentNode.removeChild(orb);
        if (xpFill) {
          xpFill.style.filter = "brightness(2)";
          window.setTimeout(function () { xpFill.style.filter = ""; }, 180);
        }
      }
    })(start);
  }

  function checkMineComplete() {
    if (remainingBlocks > 0) return;
    var zone = document.getElementById("mcMineZone");
    if (!zone) return;
    zone.classList.add("is-unlocked");
    pushAchievement("获得联系方式！", "挖掘完成 · 宝箱已掉落", ICONS.paper);
    var chest = zone.querySelector(".mc-mine-chest");
    if (chest) {
      chest.addEventListener("click", function () {
        if (chest.classList.contains("is-open")) return;
        chest.classList.add("is-open");
        pushAchievement("开启宝箱", "联系方式已解锁", ICONS.grass);
        var reveal = zone.querySelector(".mc-contact-reveal");
        if (reveal) reveal.style.display = "block";
        var cr = reveal ? reveal.getBoundingClientRect() : null;
        if (cr) spawnBurst(cr.left + cr.width / 2, cr.top + cr.height / 2, 26, null);
      });
    }
  }

  /* ============================================================
     9. 滚动联动：HUD / Hotbar 高亮 / 经验条 / 探索成就
     ============================================================ */
  var SECTION_ORDER = ["home", "projects", "resume", "about", "contact"];
  var SECTION_LABEL = {
    home: "主城 · 出生点", projects: "任务 · 关卡列表", resume: "玩家档案 · 简历",
    about: "关于我", contact: "解锁联系方式"
  };

  function onScrollTick() {
    var maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    var progress = Math.min(window.scrollY / maxScroll, 1);

    // 经验条：保留基础填充（参考 MC HUD，非空条），随滚动推进到满
    var xpShown = 12 + progress * 88;
    if (xpFill) xpFill.style.width = xpShown.toFixed(2) + "%";
    if (xpLevel) xpLevel.textContent = String(Math.round(progress * 100));

    // 当前区块 + 探索成就（生命心）
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
  }

  var ticking = false;
  function requestScrollTick() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      onScrollTick();
      ticking = false;
    });
  }
  window.addEventListener("scroll", requestScrollTick, { passive: true });
  window.addEventListener("resize", requestScrollTick);

  /* ============================================================
     10. 启动
     ============================================================ */
  function init() {
    buildChrome();
    renderHudBars();
    buildMineZone();
    onScrollTick();
    document.body.classList.add("mc-ready");

    // 开场成就
    window.setTimeout(function () {
      pushAchievement("进入世界", "欢迎来到我的作品集", ICONS.grass);
    }, 900);

    // 加载完成提示
    var loader = document.querySelector(".cinematic-loader");
    if (loader) {
      window.setTimeout(function () {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, 1900);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
