const projects = [
  {
    id: "broken-home",
    title: "破碎之家",
    subtitle: "微缩世界家庭场景 · 第三人称线性冒险解谜",
    type: "个人项目",
    engine: "UE5",
    platform: "PC",
    cycle: "2025.09 - 2025.11",
    role: "独立完成关卡设计与蓝图设计",
    tags: ["情绪镜身", "线性解谜", "微缩叙事"],
    thumbnail:
      "./Image/WeChat711f392c1afddf18da8e1b8865a8de2c.jpg",
    thumbnailPosition: "50% 46%",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    embedUrl:
      "https://player.bilibili.com/player.html?bvid=BV1k41cBXEfU&page=1&autoplay=1",
    summary:
      "场景主题为\u201c微缩世界 & 家庭场景\u201d。玩家扮演处于家庭冲突中的孩子，使用\u201c情绪镜身\u201d（复刻过去 3 秒动作的分身）推进关卡，在物理解谜与心理转折中完成\u201c接纳过去、寻找救赎\u201d的叙事目标。",
    design: [
      "核心机制：情绪镜身。通过与过去 3 秒的自己协作，实现原本需要多人配合的机关解谜。",
      "挑战单元：规划类挑战、时间差挑战、协力型挑战；符号化元素为橙色按钮、压力板、绳子等。",
      "关卡节奏：LV1（3min）教学入门、LV2（5min）机制进阶、LV3（10min）综合运用与最终 Boss 净化。"
    ],
    contribution: [
      "采用\u201c情绪主题 -> 核心机制 -> 挑战单元 -> 空间流程\u201d的自上而下设计流程，完成完整关卡框架。",
      "围绕床铺、衣柜、抽屉、桌椅等微缩家庭空间设计可操作谜题与玩家动线，并通过颜色/材质区分强化引导。",
      "独立完成关卡设计与蓝图实现，包含风扇、延时洞口、伸缩平台、小火车、断桥与 Boss 终点等关键环节。"
    ]
  },
  {
    id: "break-ice",
    title: "破冰启航",
    subtitle: "工业港口 & 飞艇 · 第三人称线性冒险解谜",
    type: "个人项目",
    engine: "UE5",
    platform: "PC",
    cycle: "2026.03.21 - 2026.03.31",
    role: "独立完成关卡设计与蓝图设计",
    tags: ["冰冻机制", "工业机关", "飞艇关卡"],
    thumbnail:
      "./Image/WeChata387371355de2ef25039aafe61d4bdfd.jpg",
    thumbnailPosition: "50% 52%",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    embedUrl:
      "https://player.bilibili.com/player.html?bvid=BV1oTXzBvEyA&page=1&autoplay=1",
    summary:
      "场景主题为\u201c工业港口 & 飞艇\u201d。玩家以\u201c冰冻技能\u201d干预机关运动、创造路径并控制节奏，在寒潮废墟中重启老式工业飞艇，前往曙光主城。",
    design: [
      "核心机制：按住鼠标中键使用冰冻技能，冻结并改变物体/机关运动；核心乐趣是时机判断与机关组合运用。",
      "机制教学递进：LV1（3min）基础操作与冻结入门、LV2（5min）冻结顺序与规划解谜、LV3（10min）冻结时机与综合 Boss 校验。",
      "主题符号化：橙色可交互/可冰冻机关，冰冻后转蓝色；关键验证物包括吊机、吊桥、矿车、传输带、风扇、电梯。"
    ],
    contribution: [
      "完成港口入口、飞艇港口、飞艇本体三段流程设计，覆盖吊机/吊桥/矿车/电梯/高炉/装货区等工业空间。",
      "将\u201c冻结机关运动、冻结顺序规划、时机冻结\u201d拆解为可教学挑战，并通过战斗与奖励节点形成节奏张弛。",
      "独立完成关卡设计与蓝图实现，含可视符号引导、关键机关参数设计与关卡流畅度迭代。"
    ]
  },
  {
    id: "ancient-temple",
    title: "山中古刹",
    subtitle: "祠堂古刹箱庭 · 御剑解谜与战斗校验",
    type: "团队项目",
    engine: "UE5",
    platform: "PC",
    cycle: "8 周",
    role: "关卡策划 / 关卡流程与机制设计",
    tags: ["符箓解谜", "阵法切换", "塔楼限时挑战"],
    thumbnail:
      "./Image/WeChat647d538c08a2e3ff20212847a48ba14a.jpg",
    thumbnailPosition: "50% 47%",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    embedUrl:
      "https://player.bilibili.com/player.html?bvid=BV1Bg5a6dEHL&page=1&autoplay=1",
    summary:
      "以\u201c山中古刹\u201d15分钟箱庭关卡为核心，围绕符箓破除、阵法切换与御剑能力解锁构建玩法流程。玩家从前殿逐步深入偏殿、地下宫殿、大殿与塔楼，最终在庭院完成小头目战，形成\u2018解谜\u2014战斗\u2014能力成长\u2014高潮校验\u2019的线性体验。",
    design: [
      "空间流程采用\u201c前殿一楼\u2014偏殿1\u2014地下宫殿\u2014通道\u2014偏殿2\u2014大殿一楼\u2014塔楼1-4\u2014大殿负一楼\u2014古刹庭院\u2014前殿\u201d闭环路径，强调探索推进与目标回收。",
      "核心解谜围绕符箓展开：从前殿单符箓教学，到偏殿双符箓破阵，再到地下宫殿蓝红阵法联动，逐步提升机制理解与思考强度。",
      "大殿阶段通过灵石解锁御剑能力，并以屋顶/塔楼限时安插阵盘挑战完成机制综合校验；庭院小头目战作为最终战斗高潮。"
    ],
    contribution: [
      "拆解并编排\u201c战斗\u2014解谜\u2014探索\u201d节奏序列，按前殿教学、地下宫殿锻炼机制、塔楼限时挑战验证能力、庭院小头目战完成节点设计。",
      "输出符箓与阵法机制规则，明确可破坏符箓、封印门/结界、阵盘破坏等关键蓝图交互逻辑。",
      "完成古刹关卡区域的关卡流程设计与引导设计，包括白盒关卡搭建和设计，过场动画和剧情文本、敌人的放置等。"
    ]
  },
  {
    id: "gamified-moston",
    title: "Gamified Moston",
    subtitle: "Moston 城市游戏化景观 · MDA 框架与 Gameplay 模拟",
    type: "个人项目",
    engine: "多工具",
    platform: "跨场景",
    cycle: "1 年",
    role: "第一负责人 / 策划统筹 / 方案设计",
    tags: ["MDA 框架", "Game Simulation", "包容性城市空间"],
    thumbnail: "./Image/HighresScreenshot00000.png",
    thumbnailPosition: "50% 52%",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    embedUrl:
      "https://player.bilibili.com/player.html?bvid=BV1jRGb6GEwE&page=1&autoplay=1",
    summary:
      "Gameplay 页面以\u201cSEN 学生上学通勤\u201d作为核心任务：玩家需要在限定时间内抵达学校，同时维持血量。该玩法用于模拟 SEN 学生在城市环境中面对噪音、强光和拥挤人群时的感官过载与决策压力。",
    design: [
      "机制 01｜环境压力伤害：靠近道路时（噪音）持续掉血；进入强烈日照区域时屏幕逐步泛白并扣血；接近拥挤人群时血量快速下降。",
      "机制 02｜双资源约束：系统同时存在\u201c血量条（Health bar）\u201d和\u201c倒计时（Count down）\u201d，玩家必须在两者耗尽前完成到校目标。",
      "机制 03｜失败判定：当血量归零，或倒计时结束仍未到达学校，即判定本局失败；玩家需通过路径选择与风险规避优化通行策略。"
    ],
    contribution: [
      "将 Gameplay 页英文机制翻译并结构化为可执行策划条目，明确\u201c触发条件\u2014数值反馈\u2014失败结果\u201d的完整规则链。",
      "主导\u201c噪音/阳光/人群\u201d三类环境压力的玩法映射，把城市问题转换为可感知、可量化的游戏交互机制。",
      "结合玩家路径与反馈页结果，反推场地优化方向（入口引导、遮阴与缓冲节点、低刺激通行路径），形成\u201c模拟\u2014反馈\u2014设计迭代\u201d闭环。"
    ]
  }
];

const projectGrid = document.getElementById("projectGrid");
const filmReelWindow = document.querySelector(".film-reel-window");
const heroGallery = document.getElementById("heroGallery");
const filterButtons = document.querySelectorAll(".chip");
const projectModal = document.getElementById("projectModal");
const projectModalBackdrop = document.getElementById("projectModalBackdrop");
const closeProjectModal = document.getElementById("closeProjectModal");
const projectModalPanel = document.querySelector(".project-modal-panel");
const modalVideo = document.getElementById("modalVideo");
const modalVideoSource = document.getElementById("modalVideoSource");
const modalIframe = document.getElementById("modalIframe");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalSummary = document.getElementById("modalSummary");
const modalDesign = document.getElementById("modalDesign");
const modalContrib = document.getElementById("modalContrib");
const navToggle = document.querySelector(".nav-toggle");
const siteHeader = document.querySelector(".site-header");
const navLinks = document.querySelector(".nav-links");
const backToTop = document.getElementById("backToTop");
const contactForm = document.getElementById("contactForm");
const experienceTriggers = document.querySelectorAll(".experience-trigger");
const experienceModal = document.getElementById("experienceModal");
const experienceModalBackdrop = document.getElementById("experienceModalBackdrop");
const closeExperienceModal = document.getElementById("closeExperienceModal");
const experienceModalTitle = document.getElementById("experienceModalTitle");
const experienceModalPeriod = document.getElementById("experienceModalPeriod");
const experienceModalSummary = document.getElementById("experienceModalSummary");
const experienceModalTags = document.getElementById("experienceModalTags");
const experienceModalWork = document.getElementById("experienceModalWork");
const experienceModalOutcome = document.getElementById("experienceModalOutcome");
const docTriggers = document.querySelectorAll(".doc-trigger");
const docModal = document.getElementById("docModal");
const docModalBackdrop = document.getElementById("docModalBackdrop");
const closeDocModal = document.getElementById("closeDocModal");
const docModalTitle = document.getElementById("docModalTitle");
const docModalFrame = document.getElementById("docModalFrame");
const sketchLayer = document.getElementById("sketchLayer");
const fantasyStage = document.querySelector(".fantasy-stage");
const heroShowcase = document.getElementById("heroShowcase");
const warpField = document.getElementById("warpField");
const scrollSceneVideo = document.getElementById("scrollSceneVideo");
const scrollProgress = document.getElementById("scrollProgress");
const reelPrev = document.getElementById("reelPrev");
const reelNext = document.getElementById("reelNext");
const finaleSection = document.getElementById("finale");
const finaleScrollVideo = document.getElementById("finaleScrollVideo");
const finaleContactModal = document.getElementById("finaleContactModal");
const finaleContactBackdrop = document.getElementById("finaleContactBackdrop");
const closeFinaleContact = document.getElementById("closeFinaleContact");
const root = document.documentElement;
const MODAL_ANIMATION_MS = 720;

const scrollSceneConfig = {
  enabled: true,
  scrubSectionId: "projects",
  startOffset: 0,
  endOffsetRatio: 1,
  introHoldTime: 4.6,
  scrollPixelsToComplete: 1800,
  snapThresholdRatio: 0.52,
  smoothing: 0.22,
  minSeekDelta: 0.012
};

let activeFilter = { group: "all", value: "all" };
let activeReelIndex = 0;
let activeReelDisplayIndex = 0;
let lastModalTrigger = null;
let isModalClosing = false;

const experiences = {
  "xingyue-camp": {
    title: "腾讯游戏星跃实战营 - 游戏关卡策划",
    period: "2026.03 ~ 2026.05",
    summary:
      "腾讯互娱面向高校的策划方向实战营。组建 5 人跨工种小组，在腾讯关卡、战斗、文案策划导师指导下，以仙侠题材动作关卡为命题，在 2 个月内完成约 30 分钟箱庭式动作关卡 Demo，从纸面策划案落地到 UE5 可玩版本。",
    tags: ["仙侠题材", "箱庭关卡", "UE5 可玩落地"],
    work: [
      "核心设计：作品《从御剑飞行开始》以御剑飞行为核心机制，构建\u201c解谜 \u2192 战斗 \u2192 能力解锁 \u2192 御剑爆发\u201d的玩法循环。",
      "实现方法：依据设计框架撰写策划案，累计迭代 4 版，完成基础关卡流程与解谜设计；使用 SketchUp 场景建模，GitHub 协同开发，UE5 完成白盒搭建（Lumen、Sequencer、蓝图与基础 Gameplay 逻辑）。",
      "跨工种协作：配合战斗策划分层投放近战小怪、远程怨魂与 Boss；配合文案策划打磨场景叙事文本与剧情节奏。"
    ],
    outcome: [
      "项目成果：交付约 30 分钟、约 15 个空间节点的箱庭式动作关卡可玩 Demo，包含 12 个战斗节点与 1 场 Boss 战。",
      "完成\u201c叙事 \u2192 关卡 \u2192 战斗 \u2192 落地\u201d的设计闭环。",
      "系统掌握仙侠题材动作关卡设计方法论与跨工种协作流程。"
    ]
  },
  "starter-camp": {
    title: "腾讯游戏开局一课训练营——策划方向 - 游戏策划",
    period: "2025.11 ~ 2026.01",
    summary:
      "腾讯面向高校生的线上策划方向训练营，以系统化课程、行业嘉宾直播分享与课后练习相结合，旨在建立游戏策划职业基础认知与方法论框架。",
    tags: ["系统课程", "岗位认知", "方法论框架"],
    work: [
      "课程围绕策划方向展开，系统拆解各岗位职责差异、能力要求与典型工作流程。",
      "全程跟课，通过行业嘉宾分享与一线项目案例拆解，理解真实开发场景中的策划工作流与跨工种协作节奏。",
      "围绕课后练习持续复盘，沉淀个人理解与方法。"
    ],
    outcome: [
      "建立完整的游戏策划方法论框架与岗位认知。",
      "确立关卡策划职业方向。",
      "以此为基础进入腾讯游戏星跃实战营进行深度实战训练。"
    ]
  },
  "design-intern": {
    title: "天津大学建筑设计研究院 · 设计师助理（实习）",
    period: "2025.06 ~ 2025.08",
    summary:
      "参与建筑与校园改造项目，负责设计协助、技术支持与资料整理，提升项目执行与团队协作能力。",
    tags: ["建筑改造", "设计协助", "团队沟通"],
    work: [
      "负责天津海运职业学院体育场改造项目看台与操场部分方案设计，优化布局并提升观赛容量。",
      "参与天津市第九中学外立面翻新项目，完成现场勘测与色彩规划。",
      "配合主创设计师完成方案设计、施工图绘制、效果图调整，协助制作汇报文本/PPT/展板并进行技术资料整理。"
    ],
    outcome: [
      "积累完整的\u201c现场勘测\u2014方案协助\u2014资料整理\u2014汇报呈现\u201d实践经验。",
      "增强与主创设计师及同组同事的高频沟通和需求同步能力。",
      "为后续关卡策划中的空间理解与落地表达提供工程化基础。"
    ]
  },
  "innovation-park": {
    title: "大学生创新创业大赛项目——杨柳青国家文化公园景观营建设计（第一负责人）",
    period: "2023.05 ~ 2024.05",
    summary:
      "全国大学生创新创业大赛立项项目。以杨柳青古镇大运河国家文化公园为蓝本，担任第一负责人统筹跨学科团队，完成景观空间和数智城市复合方案设计。",
    tags: ["第一负责人", "AR 实景解谜", "文化活化"],
    work: [
      "核心设计：以线上探索和线下体验为核心理念，在御河公园区、古镇文化区、文化学镇三大分区设计沉浸式任务链。",
      "机制设计：融合过去与未来双线叙事、多人协作机制与智能 NPC 系统，将非遗主题转化为可交互玩法。",
      "项目推进：景观层面完成总平面、节点空间与生态修复策略；机制层面完成 AR 解谜与场地探索逻辑，推进概念到可视化的完整产出。"
    ],
    outcome: [
      "获全国大学生创新创业大赛国家级结项。",
      "获第九届中国人居环境设计学年奖优秀奖、第十四届园冶杯大学生国际竞赛最佳人气奖等。",
      "完成\u201c景观空间设计 + 游戏化机制设计 + 团队统筹落地\u201d闭环实践。"
    ]
  }
};

function renderHeroGallery() {
  if (!heroGallery) return;
  const heroItems = projects.slice(0, 4);
  heroGallery.innerHTML = "";

  heroItems.forEach((project, index) => {
    const panel = document.createElement("article");
    panel.className = "hero-panel no-video";
    panel.innerHTML = [
      '<img',
      '  src="' + project.thumbnail + '"',
      '  alt="' + project.title + ' \u9884\u89c8\u56fe"',
      '  loading="lazy"',
      '  style="object-position: ' + (project.thumbnailPosition || "50% 50%") + ';"',
      '/>',
      '<video muted loop playsinline preload="none" poster="' + project.thumbnail + '">',
      '  <source src="' + project.video + '" type="video/mp4" />',
      '</video>',
      '<div class="hero-panel-overlay"><p>' + project.title + '</p></div>'
    ].join("\n");

    panel.addEventListener("click", () => {
      location.href = "#projects";
    });
    heroGallery.appendChild(panel);
  });
}

function renderProjects() {
  const list =
    activeFilter.value === "all"
      ? projects
      : projects.filter((p) => p[activeFilter.group] === activeFilter.value);

  projectGrid.innerHTML = "";
  projectGrid.dataset.reelCount = String(list.length);
  activeReelIndex = Math.min(activeReelIndex, Math.max(list.length - 1, 0));

  activeReelDisplayIndex = list.length > 1 ? list.length + activeReelIndex : activeReelIndex;
  var reelItems = list.length > 1 ? list.concat(list, list) : list;

  reelItems.forEach((project, index) => {
    var originalIndex = list.length ? index % list.length : index;
    const card = document.createElement("article");
    card.className = "project-card reveal-up";
    card.style.setProperty("--card-order", String(index + 1));
    card.style.setProperty("--tilt", String((-1.2 + Math.random() * 2.4).toFixed(2)) + "deg");
    card.dataset.reelIndex = String(originalIndex);
    card.dataset.reelDisplayIndex = String(index);
    card.innerHTML = [
      '<div class="project-media">',
      '  <img',
      '    src="' + project.thumbnail + '"',
      '    alt="' + project.title + ' \u7f29\u7565\u56fe"',
      '    loading="lazy"',
      '    style="object-position: ' + (project.thumbnailPosition || "50% 50%") + ';"',
      '  />',
      '</div>',
      '<div class="project-overlay">',
      '  <span class="project-number">' + String(originalIndex + 1).padStart(2, "0") + '</span>',
      '  <h3>' + project.title + '</h3>',
      '  <p>' + project.subtitle + '</p>',
      '  <div class="project-specs">',
      '    <span>' + project.type + '</span>',
      '    <span>' + project.engine + '</span>',
      '    <span>' + project.platform + '</span>',
      '  </div>',
      '  <div class="tags">' + project.tags.map(function(tag) { return "<span>" + tag + "</span>"; }).join("") + '</div>',
      '</div>'
    ].join("\n");

    // Bug 3: Single click opens modal — no second click needed
    // Desktop: set reel index AND open modal in one click
    // Mobile: just open modal
    (function(proj, cardEl, idx) {
      cardEl.addEventListener("click", function() {
        if (window.matchMedia("(min-width: 981px)").matches) {
          var displayIdx = parseInt(cardEl.dataset.reelDisplayIndex || "", 10);
          setReelIndex(idx, Number.isFinite(displayIdx) ? displayIdx : undefined);
        }
        renderDetail(proj, cardEl);
      });
    })(project, card, originalIndex);
    
    projectGrid.appendChild(card);
  });

  setReelIndex(activeReelIndex);
  initRevealAnimations();
  initFantasyMotion();
}

function setReelIndex(index, displayIndex, skipNormalize) {
  if (!projectGrid) return;
  var cards = Array.from(projectGrid.querySelectorAll(".project-card"));
  if (!cards.length) {
    activeReelIndex = 0;
    activeReelDisplayIndex = 0;
    projectGrid.style.setProperty("--reel-index", "0");
    projectGrid.style.setProperty("--reel-shift", "0px");
    return;
  }

  var reelCount = parseInt(projectGrid.dataset.reelCount || String(cards.length), 10);
  if (!Number.isFinite(reelCount) || reelCount < 1) reelCount = cards.length;
  activeReelIndex = (index + reelCount) % reelCount;
  activeReelDisplayIndex = Number.isFinite(displayIndex)
    ? displayIndex
    : (reelCount > 1 ? reelCount + activeReelIndex : activeReelIndex);
  projectGrid.style.setProperty("--reel-index", String(activeReelIndex));
  var targetCard = cards[activeReelDisplayIndex] || cards[activeReelIndex] || cards[0];
  var reelWindow = filmReelWindow || projectGrid.parentElement;
  var windowWidth = reelWindow ? reelWindow.clientWidth : 0;
  var targetCenter = targetCard ? targetCard.offsetLeft + targetCard.offsetWidth / 2 : 0;
  var shift = windowWidth / 2 - targetCenter;
  projectGrid.style.setProperty("--reel-shift", String(shift.toFixed(2)) + "px");
  highlightReelCard(activeReelDisplayIndex);
  window.requestAnimationFrame(syncCenteredReelCard);
  window.setTimeout(syncCenteredReelCard, 120);
  window.setTimeout(syncCenteredReelCard, 760);

  if (!skipNormalize && reelCount > 1 && (activeReelDisplayIndex < reelCount || activeReelDisplayIndex >= reelCount * 2)) {
    window.setTimeout(function() {
      projectGrid.classList.add("is-reel-reset");
      setReelIndex(activeReelIndex, reelCount + activeReelIndex, true);
      void projectGrid.offsetWidth;
      window.requestAnimationFrame(function() {
        projectGrid.classList.remove("is-reel-reset");
      });
    }, 760);
  }
}

function highlightReelCard(displayIndex) {
  if (!projectGrid) return;
  var cards = Array.from(projectGrid.querySelectorAll(".project-card"));
  cards.forEach(function(card, cardIndex) {
    var cardDisplayIndex = parseInt(card.dataset.reelDisplayIndex || String(cardIndex), 10);
    var isActive = cardDisplayIndex === displayIndex;
    card.classList.toggle("is-reel-active", isActive);
    card.classList.toggle("is-reel-center", isActive);
    card.setAttribute("aria-current", isActive ? "true" : "false");
    applyReelFocusStyle(card, isActive);
  });
}

function applyReelFocusStyle(card, isActive) {
  if (!card) return;
  if (isActive) {
    card.style.opacity = "1";
    card.style.filter = "none";
    card.style.borderColor = "rgba(199, 251, 255, 1)";
    card.style.outline = "4px solid rgba(142, 230, 255, 0.82)";
    card.style.outlineOffset = "6px";
    card.style.boxShadow = [
      "inset 0 0 0 2px rgba(255, 255, 255, 0.34)",
      "inset 0 0 58px rgba(83, 232, 255, 0.24)",
      "0 0 0 3px rgba(142, 230, 255, 0.68)",
      "0 0 62px rgba(83, 232, 255, 0.9)",
      "0 0 130px rgba(105, 91, 255, 0.5)",
      "0 28px 74px rgba(0, 0, 0, 0.58)"
    ].join(", ");
    card.style.zIndex = "40";
  } else {
    card.style.opacity = "0.3";
    card.style.filter = "blur(3px) grayscale(0.08) saturate(0.44) brightness(0.38) contrast(0.86)";
    card.style.borderColor = "rgba(151, 224, 255, 0.18)";
    card.style.outline = "0 solid transparent";
    card.style.outlineOffset = "0";
    card.style.boxShadow = "inset 0 0 0 1px rgba(255, 255, 255, 0.06), 0 18px 42px rgba(0, 0, 0, 0.34)";
    card.style.zIndex = "1";
  }
}

function syncCenteredReelCard() {
  if (!projectGrid) return;
  var cards = Array.from(projectGrid.querySelectorAll(".project-card"));
  if (!cards.length) return;

  var reelWindow = filmReelWindow || projectGrid.parentElement;
  var windowRect = reelWindow ? reelWindow.getBoundingClientRect() : projectGrid.getBoundingClientRect();
  var windowCenter = windowRect.left + windowRect.width / 2;
  var closestCard = null;
  var closestDistance = Infinity;

  cards.forEach(function(card) {
    var rect = card.getBoundingClientRect();
    if (rect.right < windowRect.left || rect.left > windowRect.right) return;
    var cardCenter = rect.left + rect.width / 2;
    var distance = Math.abs(cardCenter - windowCenter);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  cards.forEach(function(card) {
    var isActive = card === closestCard;
    card.classList.toggle("is-reel-active", isActive);
    card.classList.toggle("is-reel-center", isActive);
    card.setAttribute("aria-current", isActive ? "true" : "false");
    applyReelFocusStyle(card, isActive);
  });

  if (closestCard) {
    var centerDisplayIndex = parseInt(closestCard.dataset.reelDisplayIndex || "0", 10);
    var centerReelIndex = parseInt(closestCard.dataset.reelIndex || "0", 10);
    if (Number.isFinite(centerDisplayIndex)) activeReelDisplayIndex = centerDisplayIndex;
    if (Number.isFinite(centerReelIndex)) activeReelIndex = centerReelIndex;
  }
}

function moveReel(direction) {
  if (!projectGrid) return;
  var cards = Array.from(projectGrid.querySelectorAll(".project-card"));
  var reelCount = parseInt(projectGrid.dataset.reelCount || String(cards.length), 10);
  if (!Number.isFinite(reelCount) || reelCount < 1) reelCount = cards.length;
  setReelIndex(activeReelIndex + direction, activeReelDisplayIndex + direction);
}

window.portfolioMoveReel = moveReel;

function renderHeroShowcase() {
  if (!heroShowcase) return;
  heroShowcase.innerHTML = "";

  projects.slice(0, 4).forEach(function(project, index) {
    var item = document.createElement("button");
    item.className = "showcase-card showcase-card-" + (index + 1);
    item.type = "button";
    item.setAttribute("aria-label", "\u67e5\u770b" + project.title);
    item.innerHTML = [
      '<img',
      '  src="' + project.thumbnail + '"',
      '  alt=""',
      '  loading="lazy"',
      '  style="object-position: ' + (project.thumbnailPosition || "50% 50%") + ';"',
      '/>',
      '<span>' + project.title + '</span>'
    ].join("\n");
    (function(projIdx) {
      item.addEventListener("click", function() {
        location.href = "#projects";
        var target = Array.from(projectGrid.querySelectorAll(".project-card"))[projIdx];
        if (target) target.classList.add("is-pulsing");
        window.setTimeout(function() { if (target) target.classList.remove("is-pulsing"); }, 900);
      });
    })(index);
    heroShowcase.appendChild(item);
  });
}

function renderDetail(project, triggerElement) {
  if (isModalClosing) return;
  modalTitle.textContent = project.title;
  modalSummary.textContent = project.summary;

  modalMeta.innerHTML = [
    '<span>\u9879\u76ee\u7c7b\u578b\uff1a' + project.type + '</span>',
    '<span>\u5f00\u53d1\u5468\u671f\uff1a' + project.cycle + '</span>',
    '<span>\u5de5\u5177/\u5f15\u64ce\uff1a' + project.engine + '</span>',
    '<span>\u5e73\u53f0\uff1a' + project.platform + '</span>',
    '<span>\u4e2a\u4eba\u804c\u8d23\uff1a' + project.role + '</span>'
  ].join("");

  modalDesign.innerHTML = project.design.map(function(item) { return "<li>" + item + "</li>"; }).join("");
  modalContrib.innerHTML = project.contribution.map(function(item) { return "<li>" + item + "</li>"; }).join("");

  // Bug 4: Completely destroy and recreate media elements to avoid artifacts
  modalIframe.src = "";
  modalIframe.classList.add("hidden");

  modalVideo.pause();
  modalVideo.removeAttribute("src");
  var oldSource = modalVideo.querySelector("source");
  if (oldSource) oldSource.remove();
  modalVideo.load();
  modalVideo.classList.add("hidden");

  void modalVideo.offsetWidth;
  void modalIframe.offsetWidth;

  if (project.embedUrl) {
    modalIframe.classList.remove("hidden");
    window.setTimeout(function() {
      modalIframe.src = project.embedUrl;
    }, 50);
  } else {
    modalVideo.classList.remove("hidden");
    modalVideo.removeAttribute("poster");
    modalVideo.setAttribute("poster", project.thumbnail);
    var newSource = document.createElement("source");
    newSource.src = project.video;
    newSource.type = "video/mp4";
    modalVideo.appendChild(newSource);
    modalVideo.load();
    modalVideo.play()["catch"](function() {});
  }

  projectModal.classList.remove("hidden");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.body.classList.add("modal-open");
  lastModalTrigger = triggerElement || null;

  if (triggerElement && projectModalPanel) {
    var fromRect = triggerElement.getBoundingClientRect();
    var panelRect = projectModalPanel.getBoundingClientRect();
    var deltaX = fromRect.left + fromRect.width / 2 - (panelRect.left + panelRect.width / 2);
    var deltaY = fromRect.top + fromRect.height / 2 - (panelRect.top + panelRect.height / 2);
    var scale = Math.max(
      Math.min(fromRect.width / panelRect.width, fromRect.height / panelRect.height),
      0.24
    );

    projectModalPanel.style.transition = "none";
    projectModalPanel.style.transform = "translate(" + deltaX + "px, " + deltaY + "px) scale(" + scale + ")";
    projectModalPanel.style.opacity = "0.32";

    requestAnimationFrame(function() {
      projectModalPanel.style.transition = "transform 0.72s cubic-bezier(0.2, 0.78, 0.2, 1), opacity 0.72s ease";
      projectModalPanel.style.transform = "translate(0, 0) scale(1)";
      projectModalPanel.style.opacity = "1";
    });
  }
}

function hideProjectModal() {
  if (projectModal.classList.contains("hidden") || isModalClosing) return;
  isModalClosing = true;

  projectModal.classList.add("hidden");
  projectModal.setAttribute("aria-hidden", "true");

  // Bug 4: Completely destroy and recreate media elements
  modalVideo.pause();
  modalVideo.removeAttribute("src");
  var oldSource2 = modalVideo.querySelector("source");
  if (oldSource2) oldSource2.remove();
  modalVideo.load();

  modalIframe.src = "";
  modalIframe.classList.add("hidden");
  modalVideo.classList.add("hidden");

  if (projectModalPanel) {
    projectModalPanel.style.transition = "";
    projectModalPanel.style.transform = "";
    projectModalPanel.style.opacity = "";
  }
  projectModalBackdrop.style.transition = "";
  projectModalBackdrop.style.opacity = "";
  document.body.style.overflow = "";
  document.body.classList.remove("modal-open");
  isModalClosing = false;
}

function openExperienceModal(expId) {
  var exp = experiences[expId];
  if (!exp) return;
  experienceModalTitle.textContent = exp.title;
  experienceModalPeriod.textContent = exp.period;
  experienceModalSummary.textContent = exp.summary;
  experienceModalTags.innerHTML = exp.tags.map(function(tag) { return "<span>" + tag + "</span>"; }).join("");
  experienceModalWork.innerHTML = exp.work.map(function(item) { return "<li>" + item + "</li>"; }).join("");
  experienceModalOutcome.innerHTML = exp.outcome.map(function(item) { return "<li>" + item + "</li>"; }).join("");
  experienceModal.classList.remove("hidden");
  experienceModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.body.classList.add("modal-open");
}

function closeExperienceModalNow() {
  if (experienceModal.classList.contains("hidden")) return;
  experienceModal.classList.add("hidden");
  experienceModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.body.classList.remove("modal-open");
}

function shouldOpenDocInNewTab() {
  var isSmallScreen = window.matchMedia("(max-width: 760px)").matches;
  var ua = navigator.userAgent || "";
  var isMobileUA = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
  return isSmallScreen || isMobileUA;
}

function openDocModal(title, url) {
  if (!url) return;

  if (shouldOpenDocInNewTab()) {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  docModalTitle.textContent = title || "\u8bbe\u8ba1\u6587\u6863";
  docModalFrame.src = url;
  docModal.classList.remove("hidden");
  docModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.body.classList.add("modal-open");
}

function closeDocModalNow() {
  if (docModal.classList.contains("hidden")) return;
  docModal.classList.add("hidden");
  docModal.setAttribute("aria-hidden", "true");
  docModalFrame.src = "";
  document.body.style.overflow = "";
  document.body.classList.remove("modal-open");
}

function initRevealAnimations() {
  var revealItems = document.querySelectorAll(".reveal-up");
  if (!revealItems.length) return;
  var observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );
  revealItems.forEach(function(item) { observer.observe(item); });
}

function initFantasyMotion() {
  var interactiveItems = document.querySelectorAll(
    ".project-card, .doc-card, .card, .hero-advantages article"
  );

  interactiveItems.forEach(function(item) {
    if (item.dataset.fantasyMotionBound === "true") return;
    item.dataset.fantasyMotionBound = "true";

    item.addEventListener("pointermove", function(event) {
      var rect = item.getBoundingClientRect();
      var x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      var y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      item.style.setProperty("--tilt-x", String((-y * 5).toFixed(2)) + "deg");
      item.style.setProperty("--tilt-y", String((x * 5).toFixed(2)) + "deg");
      item.style.setProperty("--glow-x", String(((x + 1) * 50).toFixed(1)) + "%");
      item.style.setProperty("--glow-y", String(((y + 1) * 50).toFixed(1)) + "%");
    });

    item.addEventListener("pointerleave", function() {
      item.style.removeProperty("--tilt-x");
      item.style.removeProperty("--tilt-y");
      item.style.removeProperty("--glow-x");
      item.style.removeProperty("--glow-y");
    });
  });
}

function updateActiveNavigation() {
  var sections = ["home", "projects", "resume", "about", "contact"]
    .map(function(id) { return document.getElementById(id); })
    .filter(Boolean);
  var navItems = document.querySelectorAll(".nav-links a");
  var activeId = "home";

  sections.forEach(function(section) {
    var rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.42) {
      activeId = section.id;
    }
  });

  navItems.forEach(function(link) {
    var href = link.getAttribute("href") || "";
    link.classList.toggle("is-active", href === "#" + activeId);
  });

  var homeSection = document.getElementById("home");
  var projectsSection = document.getElementById("projects");
  var heroFadeEnd = projectsSection
    ? projectsSection.offsetTop - window.innerHeight * 0.28
    : (homeSection ? homeSection.offsetHeight * 0.82 : window.innerHeight * 0.82);
  document.body.classList.toggle("hero-video-visible", window.scrollY < heroFadeEnd);
}

function updatePageMotion() {
  var maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  var progress = Math.min(window.scrollY / maxScroll, 1);

  root.style.setProperty("--page-progress", progress.toFixed(4));
  if (scrollProgress) {
    scrollProgress.style.setProperty("--page-progress", progress.toFixed(4));
  }

  updateNarrativeScroll();
  updateScrollSceneTarget();
  updateFinaleScrollVideo();
  updateProjectsMode();
  updateActiveNavigation();

  if (siteHeader) {
    siteHeader.classList.toggle("scrolled", window.scrollY > 24);
  }

  if (fantasyStage) {
    fantasyStage.style.setProperty("--scroll-shift", String(Math.min(window.scrollY * 0.08, 90)) + "px");
  }

  if (warpField) {
    warpField.style.setProperty("--scroll-progress", progress.toFixed(4));
    warpField.classList.toggle("is-warping", window.scrollY > 80);
  }

  if (backToTop) {
    backToTop.classList.toggle("show", window.scrollY > 500);
  }
}

function openFinaleContactModal() {
  if (!finaleContactModal || finaleState.shown) return;
  finaleState.shown = true;
  finaleContactModal.classList.remove("hidden");
  finaleContactModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeFinaleContactModal() {
  if (!finaleContactModal) return;
  finaleContactModal.classList.add("hidden");
  finaleContactModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function updateFinaleScrollVideo() {
  if (!finaleSection || !finaleScrollVideo) return;

  var rect = finaleSection.getBoundingClientRect();
  var mobileFinaleActive =
    isMobileFinaleScene() && rect.top < window.innerHeight && rect.bottom > 0;
  document.body.classList.toggle("mobile-finale-active", mobileFinaleActive);

  if (!finaleState.ready) return;

  var scrollRange = Math.max(finaleSection.offsetHeight - window.innerHeight, 1);
  var raw = Math.min(Math.max(-rect.top / scrollRange, 0), 1);
  var eased = raw < 0.5
    ? 2 * raw * raw
    : 1 - Math.pow(-2 * raw + 2, 2) / 2;
  var targetTime = Math.min(finaleScrollVideo.duration * 0.995, eased * finaleScrollVideo.duration);

  if (Number.isFinite(targetTime)) {
    finaleScrollVideo.currentTime += (targetTime - finaleScrollVideo.currentTime) * 0.28;
  }

  root.style.setProperty("--finale-progress", raw.toFixed(4));
  if (raw < 0.9) {
    finaleState.shown = false;
  }
  if (raw > (isMobileFinaleScene() ? 0.972 : 0.985)) {
    openFinaleContactModal();
  }
}

function initFinaleScrollVideo() {
  if (!finaleScrollVideo) return;
  var markReady = function() {
    finaleState.ready = Number.isFinite(finaleScrollVideo.duration) && finaleScrollVideo.duration > 0;
    finaleScrollVideo.pause();
    updateFinaleScrollVideo();
  };

  finaleScrollVideo.addEventListener("loadedmetadata", markReady, { once: true });
  finaleScrollVideo.addEventListener("canplay", markReady, { once: true });
  finaleScrollVideo.addEventListener("error", function() {
    finaleState.ready = false;
  }, { once: true });
  finaleScrollVideo.load();
}

function initPointerParallax() {
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  window.addEventListener("pointermove", function(event) {
    var x = (event.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
    var y = (event.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
    root.style.setProperty("--mouse-x", x.toFixed(3));
    root.style.setProperty("--mouse-y", y.toFixed(3));
  });
}

var scrollSceneState = {
  targetTime: 0,
  currentTime: 0,
  ready: false,
  introPlaying: false,
  introComplete: false,
  projectsSnapped: false,
  unlockScroll: false,
  touchStartY: 0,
  pendingAnchor: ""
};

var finaleState = {
  ready: false,
  shown: false
};

function isDesktopScrollScene() {
  return window.matchMedia("(min-width: 981px)").matches;
}

function isMobileFinaleScene() {
  return window.matchMedia("(max-width: 980px)").matches;
}

function getScrollSceneProgress() {
  var projectsSection = document.getElementById("projects");
  var endOffset = projectsSection
    ? Math.max(projectsSection.offsetTop - window.innerHeight * 0.08, window.innerHeight * 0.8)
    : window.innerHeight * 1.25;
  var raw = (window.scrollY - scrollSceneConfig.startOffset) / Math.max(endOffset, 1);
  return Math.min(Math.max(raw, 0), 1);
}

function updateScrollSceneTarget() {
  if (!scrollSceneVideo || !scrollSceneState.ready) return;
  if (window.scrollY < 8) {
    syncHeroVideoProgress();
    return;
  }
  if (scrollSceneState.unlockScroll) {
    scrollSceneState.targetTime = scrollSceneVideo.duration;
    root.style.setProperty("--scene-progress", "1.0000");
    root.style.setProperty("--hero-copy-y", "-220px");
    root.style.setProperty("--hero-copy-opacity", "0");
    return;
  }
  var progress = getScrollSceneProgress();
  var eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;
  var holdTime = Math.min(scrollSceneConfig.introHoldTime, scrollSceneVideo.duration * 0.82);
  if (scrollSceneState.introPlaying && window.scrollY < 8) {
    root.style.setProperty("--scene-progress", "0.0000");
    root.style.setProperty("--hero-copy-y", "0px");
    root.style.setProperty("--hero-copy-opacity", "1");
    return;
  }

  if (scrollSceneState.introPlaying) {
    scrollSceneVideo.pause();
    scrollSceneState.introPlaying = false;
    scrollSceneState.introComplete = true;
  }

  scrollSceneState.targetTime = Math.min(
    scrollSceneVideo.duration * 0.985,
    Math.max(holdTime, holdTime + eased * (scrollSceneVideo.duration - holdTime))
  );
  root.style.setProperty("--scene-progress", progress.toFixed(4));
  var exitProgress = Math.min(Math.max((progress - 0.58) / 0.34, 0), 1);
  root.style.setProperty("--hero-copy-y", String((-220 * exitProgress).toFixed(1)) + "px");
  root.style.setProperty("--hero-copy-opacity", String((1 - exitProgress).toFixed(4)));
}

function updateProjectsMode() {
  var projectsSection = document.getElementById("projects");
  if (!projectsSection) return;

  var isDesktop = window.matchMedia("(min-width: 981px)").matches;

  // Bug 12: On mobile (<=980px), never set projects-mode
  if (!isDesktop) {
    document.body.classList.remove("projects-mode");
    return;
  }

  // Desktop: only set projects-mode when scrolled within projects section
  var projectsTop = projectsSection.offsetTop;
  var projectsBottom = projectsTop + projectsSection.offsetHeight;
  var viewportBottom = window.scrollY + window.innerHeight;
  var isInProjectsRange = window.scrollY >= projectsTop - 8 && viewportBottom <= projectsBottom + 100;

  document.body.classList.toggle("projects-mode", isInProjectsRange);
}

function snapToProjects() {
  var projectsSection = document.getElementById("projects");
  if (!projectsSection) return;
  scrollSceneState.projectsSnapped = true;
  window.scrollTo({ top: projectsSection.offsetTop, behavior: "auto" });
}

function shouldSnapToProjects() {
  var projectsSection = document.getElementById("projects");
  if (!projectsSection || scrollSceneState.projectsSnapped) return false;
  var triggerTop = projectsSection.offsetTop - window.innerHeight * scrollSceneConfig.snapThresholdRatio;
  return window.scrollY >= triggerTop && window.scrollY < projectsSection.offsetTop - 4;
}

function initProjectSnap() {
  var snapLocked = false;

  // Bug 1: Replace "Wheel block entirely" with gentle snap behavior that doesn't trap user
  window.addEventListener(
    "wheel",
    function(event) {
      if (shouldLockHeroScroll(event.deltaY)) {
        event.preventDefault();
        driveHeroVideoByScroll(event.deltaY);
        return;
      }
      // Only on desktop
      if (!window.matchMedia("(min-width: 981px)").matches) return;

      var projectsSection = document.getElementById("projects");
      if (!projectsSection) return;

      var projectsTop = projectsSection.offsetTop;
      var projectsBottom = projectsTop + projectsSection.offsetHeight;

      // If scrolling down in projects-mode, check if at bottom
      if (event.deltaY > 0 && document.body.classList.contains("projects-mode")) {
        var atBottom = window.scrollY + window.innerHeight >= projectsBottom - 20;
        if (atBottom) {
          // Bug 1: Allow scrolling past — remove lock, don't preventDefault
          document.body.classList.remove("projects-mode");
          return;
        }
      }

      // Snap to projects when scrolling down near the top
      if (event.deltaY > 0 && shouldSnapToProjects()) {
        if (snapLocked) return;
        snapLocked = true;
        event.preventDefault();
        snapToProjects();
        window.setTimeout(function() { snapLocked = false; }, 600);
      }
    },
    { passive: false }
  );

  window.addEventListener("click", function(event) {
    var heroAnchor = event.target.closest("#home a[href^='#']");
    if (heroAnchor && !scrollSceneState.unlockScroll) {
      event.preventDefault();
      scrollSceneState.pendingAnchor = heroAnchor.getAttribute("href") || "";
      return;
    }
    if (event.target.closest("a, button, input, textarea, select, iframe")) return;
    if (shouldSnapToProjects()) snapToProjects();
  });
}

function shouldLockHeroScroll(deltaY) {
  if (!scrollSceneVideo || !scrollSceneState.ready) return false;
  if (window.scrollY > 8) return false;
  var atStart = scrollSceneVideo.currentTime <= 0.04;
  var atEnd = scrollSceneVideo.currentTime >= scrollSceneVideo.duration - 0.04;
  if (deltaY > 0) return !atEnd;
  if (deltaY < 0) return !atStart;
  return false;
}

function syncHeroVideoProgress() {
  if (!scrollSceneVideo || !scrollSceneState.ready) return;
  var progress = Math.min(Math.max(scrollSceneVideo.currentTime / Math.max(scrollSceneVideo.duration, 1), 0), 1);
  root.style.setProperty("--scene-progress", progress.toFixed(4));
  var exitProgress = Math.min(Math.max((progress - 0.72) / 0.22, 0), 1);
  root.style.setProperty("--hero-copy-y", String((-220 * exitProgress).toFixed(1)) + "px");
  root.style.setProperty("--hero-copy-opacity", String((1 - exitProgress).toFixed(4)));
}

function driveHeroVideoByScroll(deltaY) {
  if (!scrollSceneVideo || !scrollSceneState.ready) return;
  window.scrollTo(0, 0);
  scrollSceneVideo.pause();
  var scrollSpan = Math.max(scrollSceneConfig.scrollPixelsToComplete, 1);
  var nextTime = scrollSceneVideo.currentTime + (deltaY / scrollSpan) * scrollSceneVideo.duration;
  nextTime = Math.min(Math.max(nextTime, 0), scrollSceneVideo.duration);
  scrollSceneVideo.currentTime = nextTime;
  scrollSceneState.currentTime = nextTime;
  scrollSceneState.targetTime = nextTime;
  if (nextTime < scrollSceneVideo.duration - 0.04) {
    scrollSceneState.unlockScroll = false;
    scrollSceneState.introComplete = false;
    document.body.classList.remove("hero-video-complete");
  }
  syncHeroVideoProgress();

  if (nextTime >= scrollSceneVideo.duration - 0.04) {
    scrollSceneVideo.currentTime = scrollSceneVideo.duration;
    unlockHeroScroll();
  }
}

function unlockHeroScroll() {
  if (scrollSceneState.unlockScroll) return;
  scrollSceneState.unlockScroll = true;
  scrollSceneState.introPlaying = false;
  scrollSceneState.introComplete = true;
  document.body.classList.add("hero-video-complete");
  if (scrollSceneVideo && scrollSceneState.ready) {
    scrollSceneState.currentTime = scrollSceneVideo.duration;
    scrollSceneState.targetTime = scrollSceneVideo.duration;
  }
  updateScrollSceneTarget();
  if (scrollSceneState.pendingAnchor) {
    var target = document.querySelector(scrollSceneState.pendingAnchor);
    scrollSceneState.pendingAnchor = "";
    if (target) window.scrollTo({ top: target.offsetTop, behavior: "auto" });
  }
}

function initHeroScrollLock() {
  if (!scrollSceneVideo) return;

  window.addEventListener("touchstart", function(event) {
    if (!event.touches || !event.touches.length) return;
    scrollSceneState.touchStartY = event.touches[0].clientY;
  }, { passive: true });

  window.addEventListener("touchmove", function(event) {
    if (!event.touches || !event.touches.length) return;
    var deltaY = scrollSceneState.touchStartY - event.touches[0].clientY;
    if (!shouldLockHeroScroll(deltaY)) return;
    event.preventDefault();
    driveHeroVideoByScroll(deltaY);
    scrollSceneState.touchStartY = event.touches[0].clientY;
  }, { passive: false });

  window.addEventListener("keydown", function(event) {
    var scrollKeys = ["ArrowDown", "PageDown", " ", "Spacebar", "End", "ArrowUp", "PageUp"];
    if (scrollKeys.indexOf(event.key) === -1) return;
    var delta = ["ArrowUp", "PageUp"].indexOf(event.key) === -1 ? 1 : -1;
    if (!shouldLockHeroScroll(delta)) return;
    event.preventDefault();
    if (event.key === "End") {
      driveHeroVideoByScroll(scrollSceneConfig.scrollPixelsToComplete);
    } else {
      driveHeroVideoByScroll(delta * 180);
    }
  });
}

function initScrollSceneVideo(config) {
  if (!config) config = scrollSceneConfig;
  if (!config.enabled || !scrollSceneVideo) return;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  scrollSceneVideo.pause();
  scrollSceneVideo.currentTime = 0;

  var markReady = function() {
    scrollSceneState.ready = Number.isFinite(scrollSceneVideo.duration) && scrollSceneVideo.duration > 0;
    // Bug 7: gracefully degrade if duration is invalid
    if (!scrollSceneState.ready) return;

    scrollSceneState.targetTime = 0;

    if (window.scrollY < 8 && !scrollSceneState.introComplete) {
      scrollSceneState.introPlaying = false;
      scrollSceneVideo.currentTime = 0;
      scrollSceneState.currentTime = 0;
      scrollSceneVideo.pause();
      syncHeroVideoProgress();
    } else if (isDesktopScrollScene()) {
      scrollSceneState.currentTime = scrollSceneVideo.duration;
      scrollSceneVideo.currentTime = scrollSceneVideo.duration;
      unlockHeroScroll();
      updateScrollSceneTarget();
    } else {
      scrollSceneVideo.pause();
      updateScrollSceneTarget();
    }
  };

  var scrub = function() {
    if (scrollSceneState.ready) {
      if (!scrollSceneState.unlockScroll && isDesktopScrollScene()) {
        if (window.scrollY > 8) window.scrollTo(0, 0);
      }
      if (scrollSceneState.unlockScroll || !isDesktopScrollScene()) {
        scrollSceneState.currentTime +=
          (scrollSceneState.targetTime - scrollSceneState.currentTime) * config.smoothing;
        if (Math.abs(scrollSceneVideo.currentTime - scrollSceneState.currentTime) > config.minSeekDelta) {
          scrollSceneVideo.currentTime = scrollSceneState.currentTime;
        }
      }
    }
    window.requestAnimationFrame(scrub);
  };

  scrollSceneVideo.addEventListener("loadedmetadata", markReady, { once: true });
  scrollSceneVideo.addEventListener("canplay", markReady, { once: true });
  scrollSceneVideo.addEventListener("ended", unlockHeroScroll);

  // Bug 7: Scroll scene video error handling
  scrollSceneVideo.addEventListener("error", function() {
    scrollSceneState.ready = false;
    if (scrollSceneVideo) {
      scrollSceneVideo.style.display = "none";
    }
  }, { once: true });

  scrollSceneVideo.load();
  window.requestAnimationFrame(scrub);
}

function initInteractiveHudAnimation(config) {
  if (!config) config = { enabled: false };
  var interactiveHudCanvas = document.getElementById("interactiveHudCanvas");
  if (!config.enabled || !interactiveHudCanvas) return;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  var cursorReticle = document.querySelector(".cursor-reticle");
  var ctx = interactiveHudCanvas.getContext("2d");
  if (!ctx) return;

  var state = {
    width: 0,
    height: 0,
    dpr: 1,
    particles: [],
    ripples: [],
    pointer: {
      x: window.innerWidth * 0.68,
      y: window.innerHeight * 0.42,
      tx: window.innerWidth * 0.68,
      ty: window.innerHeight * 0.42,
      active: false
    },
    scrollY: window.scrollY,
    scrollVelocity: 0,
    lastTime: performance.now()
  };

  var randomBetween = function(min, max) { return min + Math.random() * (max - min); };
  var isMobile = function() { return window.matchMedia("(max-width: 760px)").matches; };

  function resizeCanvas() {
    state.width = window.innerWidth;
    state.height = window.innerHeight;
    state.dpr = Math.min(window.devicePixelRatio || 1, config.maxPixelRatio);
    interactiveHudCanvas.width = Math.round(state.width * state.dpr);
    interactiveHudCanvas.height = Math.round(state.height * state.dpr);
    interactiveHudCanvas.style.width = state.width + "px";
    interactiveHudCanvas.style.height = state.height + "px";
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);

    var targetCount = isMobile() ? config.mobileParticleCount : config.desktopParticleCount;
    if (state.particles.length > targetCount) {
      state.particles.length = targetCount;
    }
    while (state.particles.length < targetCount) {
      state.particles.push({
        x: randomBetween(0, state.width),
        y: randomBetween(0, state.height),
        z: randomBetween(0.2, 1),
        vx: randomBetween(-1, 1) * config.baseSpeed,
        vy: randomBetween(-1, 1) * config.baseSpeed,
        size: randomBetween(0.7, 2.2),
        phase: randomBetween(0, Math.PI * 2)
      });
    }
  }

  function drawGrid(time, boost) {
    var gridGap = isMobile() ? 58 : 74;
    var offset = (time * 0.012 + window.scrollY * 0.18) % gridGap;
    ctx.save();
    ctx.globalAlpha = 0.1 + boost * 0.08;
    ctx.strokeStyle = "rgba(" + config.particleColor + ", 0.42)";
    ctx.lineWidth = 1;

    for (var x = -gridGap; x < state.width + gridGap; x += gridGap) {
      ctx.beginPath();
      ctx.moveTo(x + offset, 0);
      ctx.lineTo(x - offset * 0.25, state.height);
      ctx.stroke();
    }

    for (var y = -gridGap; y < state.height + gridGap; y += gridGap) {
      ctx.beginPath();
      ctx.moveTo(0, y + offset * 0.55);
      ctx.lineTo(state.width, y - offset * 0.2);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawParticles(delta, time, boost) {
    var pointer = state.pointer;
    var particles = state.particles;

    particles.forEach(function(particle) {
      var dx = particle.x - pointer.x;
      var dy = particle.y - pointer.y;
      var dist = Math.hypot(dx, dy) || 1;
      var influence = Math.max(0, 1 - dist / config.pointerRadius);
      var force = influence * config.pointerForce * (pointer.active ? 1.6 : 0.75);

      particle.vx += (dx / dist) * force * delta * 0.018;
      particle.vy += (dy / dist) * force * delta * 0.018;
      particle.x += (particle.vx + state.scrollVelocity * 0.012 * particle.z) * delta * (1 + boost);
      particle.y += (particle.vy + Math.sin(time * 0.001 + particle.phase) * 0.08) * delta * (1 + boost * 0.4);
      particle.vx *= 0.992;
      particle.vy *= 0.992;

      if (particle.x < -30) particle.x = state.width + 30;
      if (particle.x > state.width + 30) particle.x = -30;
      if (particle.y < -30) particle.y = state.height + 30;
      if (particle.y > state.height + 30) particle.y = -30;
    });

    for (var i = 0; i < particles.length; i += 1) {
      var a = particles[i];
      for (var j = i + 1; j < particles.length; j += 1) {
        var b = particles[j];
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        var dist = Math.hypot(dx, dy);
        if (dist > config.connectionDistance) continue;
        var alpha = (1 - dist / config.connectionDistance) * 0.22 * Math.min(a.z + b.z, 1.4);
        ctx.strokeStyle = "rgba(" + config.particleColor + ", " + alpha + ")";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    particles.forEach(function(particle) {
      var pulse = 0.55 + Math.sin(time * 0.002 + particle.phase) * 0.35;
      ctx.fillStyle = "rgba(" + config.particleColor + ", " + (0.28 + particle.z * 0.42) + ")";
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * (1 + pulse * 0.35), 0, Math.PI * 2);
      ctx.fill();
    });
  }

  function drawReticle(time, boost) {
    var pointer = state.pointer;
    var x = pointer.x;
    var y = pointer.y;
    var active = pointer.active;
    var radius = active ? 38 : 28;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(time * 0.0014);
    ctx.strokeStyle = "rgba(" + config.goldColor + ", " + (0.42 + boost * 0.28) + ")";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 1.35);
    ctx.stroke();
    ctx.rotate(-time * 0.0025);
    ctx.strokeStyle = "rgba(" + config.accentColor + ", " + (active ? 0.5 : 0.24) + ")";
    ctx.beginPath();
    ctx.arc(0, 0, radius + 12, Math.PI * 0.1, Math.PI * 1.65);
    ctx.stroke();
    ctx.restore();
  }

  function drawRipples(delta) {
    state.ripples = state.ripples.filter(function(ripple) { return ripple.life > 0; });
    state.ripples.forEach(function(ripple) {
      ripple.life -= delta * 0.018;
      ripple.radius += delta * 1.1;
      var alpha = Math.max(ripple.life, 0) / ripple.maxLife;
      ctx.strokeStyle = "rgba(" + config.clickRippleColor + ", " + (alpha * 0.72) + ")";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
      ctx.stroke();
    });
  }

  function render(time) {
    var delta = Math.min((time - state.lastTime) / 16.67, 2);
    state.lastTime = time;

    var nextScrollY = window.scrollY;
    state.scrollVelocity += (nextScrollY - state.scrollY - state.scrollVelocity) * 0.14;
    state.scrollY = nextScrollY;
    var boost = Math.min(Math.abs(state.scrollVelocity) / 42, 1) * config.scrollBoost;

    state.pointer.x += (state.pointer.tx - state.pointer.x) * 0.18;
    state.pointer.y += (state.pointer.ty - state.pointer.y) * 0.18;

    ctx.clearRect(0, 0, state.width, state.height);
    ctx.fillStyle = "rgba(5, 7, 19, " + config.trailFade + ")";
    ctx.fillRect(0, 0, state.width, state.height);
    drawGrid(time, boost);
    drawParticles(delta, time, boost);
    drawRipples(delta);
    drawReticle(time, boost);

    root.style.setProperty("--hud-boost", boost.toFixed(3));
    window.requestAnimationFrame(render);
  }

  function updatePointer(event) {
    state.pointer.tx = event.clientX;
    state.pointer.ty = event.clientY;
    state.pointer.active = true;
    if (cursorReticle) {
      cursorReticle.style.setProperty("--cursor-x", event.clientX + "px");
      cursorReticle.style.setProperty("--cursor-y", event.clientY + "px");
      cursorReticle.classList.add("is-active");
    }
  }

  window.addEventListener("pointermove", updatePointer, { passive: true });
  window.addEventListener("pointerdown", function(event) {
    updatePointer(event);
    state.ripples.push({
      x: event.clientX,
      y: event.clientY,
      radius: 8,
      life: 1,
      maxLife: 1
    });
    if (cursorReticle) cursorReticle.classList.add("is-clicking");
  });
  window.addEventListener("pointerup", function() {
    if (cursorReticle) cursorReticle.classList.remove("is-clicking");
  });
  window.addEventListener("pointerleave", function() {
    state.pointer.active = false;
    if (cursorReticle) cursorReticle.classList.remove("is-active");
  });
  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();
  window.requestAnimationFrame(render);
}

// Re-implement initScrollSceneVideo without the unused config reassignment
(function() {
  var _origInit = initScrollSceneVideo;
  initScrollSceneVideo = function(config) {
    if (!config) config = scrollSceneConfig;
    _origInit(config);
  };
})();

function bootCinematicSystem() {
  document.body.classList.add("os-ready");
  updatePageMotion();
}

function updateNarrativeScroll() {
  var scenes = {
    home: document.getElementById("home"),
    phone: document.getElementById("projects"),
    badge: document.getElementById("resume"),
    back: document.getElementById("about"),
    contact: document.getElementById("contact")
  };

  Object.entries(scenes).forEach(function(_ref) {
    var name = _ref[0];
    var section = _ref[1];
    if (!section) return;
    var rect = section.getBoundingClientRect();
    var range = window.innerHeight + rect.height;
    var raw = (window.innerHeight - rect.top) / range;
    var progress = Math.min(Math.max(raw, 0), 1);
    document.documentElement.style.setProperty("--" + name + "-progress", progress.toFixed(4));
  });
}

function initSketchBackground() {
  if (!sketchLayer) return;

  var sketchSources = [
    "./Sketch/f45b34b797a1a5afbb0d42a83d6c6713.jpg",
    "./Sketch/5f66ed38451e53ddab917b8631bb8e7f.jpg",
    "./Sketch/da2d3d5c26a240e02ad04f10c90b697f.jpg",
    "./Sketch/276abe27c3501cdb395cb351fe7c4c0e.jpg",
    "./Sketch/72671c6506dffbd6463ffd589ac4199.jpg",
    "./Sketch/5b6f87353e5643fe0b6a2fb3ebfe4c0e.jpg",
    "./Sketch/c32b6c1ebabebb5553c8c1e530c0d07d.jpg",
    "./Sketch/fe62d5812ed00c051e6b0c6395712a5b.jpg",
    "./Sketch/2170c72131bf9855f7465ee85fc166aa.jpg",
    "./Sketch/90609e6adb8872ba59c7e3d6abf9ce28.jpg",
    "./Sketch/264fc2a02503e9a1d88bf5a71415092f.jpg"
  ];

  var isMobile = window.innerWidth < 760;
  var layerConfigs = isMobile
    ? [
        {
          count: 7,
          minW: 150,
          maxW: 250,
          opacityMin: 0.09,
          opacityMax: 0.16,
          rotateRange: 30,
          gap: 16,
          safetyScale: 1.18,
          ratioMin: 0.72,
          ratioMax: 1.08,
          depth: "front"
        },
        {
          count: 5,
          minW: 90,
          maxW: 160,
          opacityMin: 0.05,
          opacityMax: 0.11,
          rotateRange: 40,
          gap: 10,
          safetyScale: 1.12,
          ratioMin: 0.68,
          ratioMax: 1.15,
          depth: "back"
        }
      ]
    : [
        {
          count: 10,
          minW: 210,
          maxW: 430,
          opacityMin: 0.09,
          opacityMax: 0.17,
          rotateRange: 32,
          gap: 18,
          safetyScale: 1.2,
          ratioMin: 0.72,
          ratioMax: 1.08,
          depth: "front"
        },
        {
          count: 8,
          minW: 120,
          maxW: 250,
          opacityMin: 0.05,
          opacityMax: 0.11,
          rotateRange: 44,
          gap: 11,
          safetyScale: 1.14,
          ratioMin: 0.66,
          ratioMax: 1.16,
          depth: "back"
        }
      ];

  sketchLayer.innerHTML = "";

  var placedBoxes = [];
  var intersects = function(a, b, gap) {
    if (gap === undefined) gap = 14;
    return !(a.left + a.width + gap < b.left ||
      b.left + b.width + gap < a.left ||
      a.top + a.height + gap < b.top ||
      b.top + b.height + gap < a.top);
  };

  var layerWidth = window.innerWidth;
  var layerHeight = window.innerHeight;

  layerConfigs.forEach(function(config) {
    for (var n = 0; n < config.count; n += 1) {
      var src = sketchSources[Math.floor(Math.random() * sketchSources.length)];
      var img = document.createElement("img");
      img.className = "sketch-item depth-" + config.depth;
      img.src = src;
      img.alt = "";
      img.loading = "lazy";

      var width = config.minW + Math.random() * (config.maxW - config.minW);
      var rotate = -config.rotateRange + Math.random() * (config.rotateRange * 2);
      var opacity = config.opacityMin + Math.random() * (config.opacityMax - config.opacityMin);
      var ratio = config.ratioMin + Math.random() * (config.ratioMax - config.ratioMin);
      var height = width * ratio;
      var boxWidth = width * config.safetyScale;
      var boxHeight = height * config.safetyScale;

      var placed = false;
      for (var i = 0; i < 110; i += 1) {
        var left = -16 + Math.random() * 116;
        var top = -12 + Math.random() * 112;
        var candidate = {
          left: (left / 100) * layerWidth,
          top: (top / 100) * layerHeight,
          width: boxWidth,
          height: boxHeight
        };
        var overlap = placedBoxes.some(function(existing) { return intersects(candidate, existing, config.gap); });
        if (!overlap) {
          placed = true;
          placedBoxes.push(candidate);
          img.style.left = left.toFixed(2) + "%";
          img.style.top = top.toFixed(2) + "%";
          break;
        }
      }

      if (!placed) continue;

      img.style.width = width.toFixed(0) + "px";
      img.style.opacity = opacity.toFixed(2);
      img.style.transform = "rotate(" + rotate.toFixed(1) + "deg)";
      sketchLayer.appendChild(img);
    }
  });
}


function applyFilter(chip) {
  filterButtons.forEach(function(btn) { btn.classList.remove("active"); });
  chip.classList.add("active");
  activeFilter = {
    group: chip.dataset.filterGroup,
    value: chip.dataset.filter
  };
  var filterRow = chip.closest(".filter-row");
  if (filterRow) {
    filterRow.classList.remove("is-switching");
    void filterRow.offsetWidth;
    filterRow.classList.add("is-switching");
    window.setTimeout(function() { filterRow.classList.remove("is-switching"); }, 380);
  }
  if (projectGrid) {
    projectGrid.classList.remove("is-switching");
    void projectGrid.offsetWidth;
    projectGrid.classList.add("is-switching");
    window.setTimeout(function() { projectGrid.classList.remove("is-switching"); }, 380);
  }
  renderProjects();
}

filterButtons.forEach(function(button) {
  button.addEventListener("click", function() { applyFilter(button); });
});

closeProjectModal.addEventListener("click", hideProjectModal);
projectModalBackdrop.addEventListener("click", hideProjectModal);
window.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    hideProjectModal();
    closeExperienceModalNow();
    closeDocModalNow();
    closeFinaleContactModal();
  }
});

// Bug 10: NodeList.forEach is fine in modern browsers, empty NodeList does nothing
experienceTriggers.forEach(function(trigger) {
  trigger.addEventListener("click", function() {
    openExperienceModal(trigger.dataset.expId);
  });
});
closeExperienceModal.addEventListener("click", closeExperienceModalNow);
experienceModalBackdrop.addEventListener("click", closeExperienceModalNow);
docTriggers.forEach(function(trigger) {
  trigger.addEventListener("click", function() {
    openDocModal(trigger.dataset.docTitle, trigger.dataset.docUrl);
  });
});
closeDocModal.addEventListener("click", closeDocModalNow);
docModalBackdrop.addEventListener("click", closeDocModalNow);

// Bug 6: navToggle can be null — guard
if (navToggle) {
  navToggle.addEventListener("click", function() { navLinks.classList.toggle("open"); });
}

if (reelPrev) {
  reelPrev.addEventListener("click", function() { moveReel(-1); });
}

if (reelNext) {
  reelNext.addEventListener("click", function() { moveReel(1); });
}

if (projectGrid) {
  projectGrid.addEventListener("transitionend", function(event) {
    if (event.propertyName === "transform") {
      syncCenteredReelCard();
    }
  });

  projectGrid.addEventListener("click", function(event) {
    if (!window.matchMedia("(min-width: 981px)").matches) return;
    if (event.target.closest(".project-card")) return;
    var rect = projectGrid.getBoundingClientRect();
    var midpoint = rect.left + rect.width / 2;
    moveReel(event.clientX > midpoint ? 1 : -1);
  });

  projectGrid.addEventListener(
    "wheel",
    function(event) {
      if (!window.matchMedia("(min-width: 981px)").matches) return;
      var cards = projectGrid.querySelectorAll(".project-card");
      if (cards.length <= 1) return;
      if (Math.abs(event.deltaY) < 16 && Math.abs(event.deltaX) < 16) return;
      event.preventDefault();
      moveReel(event.deltaY + event.deltaX > 0 ? 1 : -1);
    },
    { passive: false }
  );
}

if (filmReelWindow) {
  var mobileReelTouch = {
    startX: 0,
    startY: 0
  };

  filmReelWindow.addEventListener(
    "wheel",
    function(event) {
      if (event.defaultPrevented) return;
      if (!window.matchMedia("(min-width: 981px)").matches) return;
      var cards = projectGrid ? projectGrid.querySelectorAll(".project-card") : [];
      if (cards.length <= 1) return;
      if (Math.abs(event.deltaY) < 16 && Math.abs(event.deltaX) < 16) return;
      event.preventDefault();
      moveReel(event.deltaY + event.deltaX > 0 ? 1 : -1);
    },
    { passive: false }
  );

  filmReelWindow.addEventListener(
    "touchstart",
    function(event) {
      if (!window.matchMedia("(max-width: 980px)").matches) return;
      if (!event.touches || !event.touches.length) return;
      mobileReelTouch.startX = event.touches[0].clientX;
      mobileReelTouch.startY = event.touches[0].clientY;
    },
    { passive: true }
  );

  filmReelWindow.addEventListener(
    "touchend",
    function(event) {
      if (!window.matchMedia("(max-width: 980px)").matches) return;
      if (!event.changedTouches || !event.changedTouches.length) return;
      var dx = event.changedTouches[0].clientX - mobileReelTouch.startX;
      var dy = event.changedTouches[0].clientY - mobileReelTouch.startY;
      if (Math.abs(dx) < 42 || Math.abs(dx) < Math.abs(dy) * 1.15) return;
      moveReel(dx < 0 ? 1 : -1);
    },
    { passive: true }
  );
}

var aiOrb = document.querySelector(".ai-orb");
if (aiOrb) {
  aiOrb.addEventListener("click", function() {
    var projSection = document.getElementById("projects");
    if (projSection) window.scrollTo({ top: projSection.offsetTop, behavior: "auto" });
  });
}

document.querySelectorAll(".nav-links a").forEach(function(link) {
  link.addEventListener("click", function() {
    if (navLinks) navLinks.classList.remove("open");
  });
});

window.addEventListener("scroll", updatePageMotion, { passive: true });

window.addEventListener("resize", updatePageMotion);
window.addEventListener("resize", function() { setReelIndex(activeReelIndex); });

// Bug 6: backToTop can be null
if (backToTop) {
  backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (closeFinaleContact) {
  closeFinaleContact.addEventListener("click", closeFinaleContactModal);
}

if (finaleContactBackdrop) {
  finaleContactBackdrop.addEventListener("click", closeFinaleContactModal);
}

// Bug 9: contactForm can be null (no form in HTML) — guard
if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(contactForm);
    var name = formData.get("name");
    var email = formData.get("email");
    var message = formData.get("message");
    var subject = encodeURIComponent("\u6765\u81ea\u4f5c\u54c1\u96c6\u7f51\u7ad9\u7684\u65b0\u7559\u8a00 - " + name);
    var body = encodeURIComponent(
      "\u59d3\u540d\uff1a" + name + "\n\u90ae\u7bb1\uff1a" + email + "\n\n\u7559\u8a00\u5185\u5bb9\uff1a\n" + message
    );
    window.location.href = "mailto:1102910102@qq.com?subject=" + subject + "&body=" + body;
  });
}

renderProjects();
renderHeroShowcase();
initRevealAnimations();
initSketchBackground();
initFantasyMotion();
initPointerParallax();
initScrollSceneVideo();
initHeroScrollLock();
initFinaleScrollVideo();
initProjectSnap();
bootCinematicSystem();
