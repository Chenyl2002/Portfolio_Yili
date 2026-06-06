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
      "场景主题为“微缩世界 & 家庭场景”。玩家扮演处于家庭冲突中的孩子，使用“情绪镜身”（复刻过去 3 秒动作的分身）推进关卡，在物理解谜与心理转折中完成“接纳过去、寻找救赎”的叙事目标。",
    design: [
      "核心机制：情绪镜身。通过与过去 3 秒的自己协作，实现原本需要多人配合的机关解谜。",
      "挑战单元：规划类挑战、时间差挑战、协力型挑战；符号化元素为橙色按钮、压力板、绳子等。",
      "关卡节奏：LV1（3min）教学入门、LV2（5min）机制进阶、LV3（10min）综合运用与最终 Boss 净化。"
    ],
    contribution: [
      "采用“情绪主题 -> 核心机制 -> 挑战单元 -> 空间流程”的自上而下设计流程，完成完整关卡框架。",
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
      "场景主题为“工业港口 & 飞艇”。玩家以“冰冻技能”干预机关运动、创造路径并控制节奏，在寒潮废墟中重启老式工业飞艇，前往曙光主城。",
    design: [
      "核心机制：按住鼠标中键使用冰冻技能，冻结并改变物体/机关运动；核心乐趣是时机判断与机关组合运用。",
      "机制教学递进：LV1（3min）基础操作与冻结入门、LV2（5min）冻结顺序与规划解谜、LV3（10min）冻结时机与综合 Boss 校验。",
      "主题符号化：橙色可交互/可冰冻机关，冰冻后转蓝色；关键验证物包括吊机、吊桥、矿车、传输带、风扇、电梯。"
    ],
    contribution: [
      "完成港口入口、飞艇港口、飞艇本体三段流程设计，覆盖吊机/吊桥/矿车/电梯/高炉/装货区等工业空间。",
      "将“冻结机关运动、冻结顺序规划、时机冻结”拆解为可教学挑战，并通过战斗与奖励节点形成节奏张弛。",
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
      "以“山中古刹”15分钟箱庭关卡为核心，围绕符箓破除、阵法切换与御剑能力解锁构建玩法流程。玩家从前殿逐步深入偏殿、地下宫殿、大殿与塔楼，最终在庭院完成小头目战，形成‘解谜—战斗—能力成长—高潮校验’的线性体验。",
    design: [
      "空间流程采用“前殿一楼—偏殿1—地下宫殿—通道—偏殿2—大殿一楼—塔楼1-4—大殿负一楼—古刹庭院—前殿”闭环路径，强调探索推进与目标回收。",
      "核心解谜围绕符箓展开：从前殿单符箓教学，到偏殿双符箓破阵，再到地下宫殿蓝红阵法联动，逐步提升机制理解与思考强度。",
      "大殿阶段通过灵石解锁御剑能力，并以屋顶/塔楼限时安插阵盘挑战完成机制综合校验；庭院小头目战作为最终战斗高潮。"
    ],
    contribution: [
      "拆解并编排“战斗—解谜—探索”节奏序列，按前殿教学、地下宫殿锻炼机制、塔楼限时挑战验证能力、庭院小头目战完成节点设计。",
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
    thumbnail:
      "./Image/WeChatea6415f433e42edff40767152968d6bb.jpg",
    thumbnailPosition: "50% 52%",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    embedUrl:
      "https://player.bilibili.com/player.html?bvid=BV1jRGb6GEwE&page=1&autoplay=1",
    summary:
      "Gameplay 页面以“SEN 学生上学通勤”作为核心任务：玩家需要在限定时间内抵达学校，同时维持血量。该玩法用于模拟 SEN 学生在城市环境中面对噪音、强光和拥挤人群时的感官过载与决策压力。",
    design: [
      "机制 01｜环境压力伤害：靠近道路时（噪音）持续掉血；进入强烈日照区域时屏幕逐步泛白并扣血；接近拥挤人群时血量快速下降。",
      "机制 02｜双资源约束：系统同时存在“血量条（Health bar）”和“倒计时（Count down）”，玩家必须在两者耗尽前完成到校目标。",
      "机制 03｜失败判定：当血量归零，或倒计时结束仍未到达学校，即判定本局失败；玩家需通过路径选择与风险规避优化通行策略。"
    ],
    contribution: [
      "将 Gameplay 页英文机制翻译并结构化为可执行策划条目，明确“触发条件—数值反馈—失败结果”的完整规则链。",
      "主导“噪音/阳光/人群”三类环境压力的玩法映射，把城市问题转换为可感知、可量化的游戏交互机制。",
      "结合玩家路径与反馈页结果，反推场地优化方向（入口引导、遮阴与缓冲节点、低刺激通行路径），形成“模拟—反馈—设计迭代”闭环。"
    ]
  }
];

const projectGrid = document.getElementById("projectGrid");
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
const bgParticlesCanvas = document.getElementById("bgParticles");
const ambientMoons = Array.from(document.querySelectorAll(".ambient-moon"));
const MODAL_ANIMATION_MS = 720;

let activeFilter = { group: "all", value: "all" };
let lastModalTrigger = null;
let isModalClosing = false;
let moonBlendLevel = 0;

const experiences = {
  "xingyue-camp": {
    title: "腾讯游戏星跃实战营 - 游戏关卡策划",
    period: "2026.03 ~ 2026.05",
    summary:
      "腾讯互娱面向高校的策划方向实战营。组建 5 人跨工种小组，在腾讯关卡、战斗、文案策划导师指导下，以仙侠题材动作关卡为命题，在 2 个月内完成约 30 分钟箱庭式动作关卡 Demo，从纸面策划案落地到 UE5 可玩版本。",
    tags: ["仙侠题材", "箱庭关卡", "UE5 可玩落地"],
    work: [
      "核心设计：作品《从御剑飞行开始》以御剑飞行为核心机制，构建“解谜 → 战斗 → 能力解锁 → 御剑爆发”的玩法循环。",
      "实现方法：依据设计框架撰写策划案，累计迭代 4 版，完成基础关卡流程与解谜设计；使用 SketchUp 场景建模，GitHub 协同开发，UE5 完成白盒搭建（Lumen、Sequencer、蓝图与基础 Gameplay 逻辑）。",
      "跨工种协作：配合战斗策划分层投放近战小怪、远程怨魂与 Boss；配合文案策划打磨场景叙事文本与剧情节奏。"
    ],
    outcome: [
      "项目成果：交付约 30 分钟、约 15 个空间节点的箱庭式动作关卡可玩 Demo，包含 12 个战斗节点与 1 场 Boss 战。",
      "完成“叙事 → 关卡 → 战斗 → 落地”的设计闭环。",
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
      "积累完整的“现场勘测—方案协助—资料整理—汇报呈现”实践经验。",
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
      "完成“景观空间设计 + 游戏化机制设计 + 团队统筹落地”闭环实践。"
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
    panel.innerHTML = `
      <img
        src="${project.thumbnail}"
        alt="${project.title} 预览图"
        loading="lazy"
        style="object-position: ${project.thumbnailPosition || "50% 50%"};"
      />
      <video muted loop playsinline preload="none" poster="${project.thumbnail}">
        <source src="${project.video}" type="video/mp4" />
      </video>
      <div class="hero-panel-overlay"><p>${project.title}</p></div>
    `;

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

  list.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="project-media">
        <img
          src="${project.thumbnail}"
          alt="${project.title} 缩略图"
          loading="lazy"
          style="object-position: ${project.thumbnailPosition || "50% 50%"};"
        />
        <video muted loop playsinline preload="none" poster="${project.thumbnail}">
          <source src="${project.video}" type="video/mp4" />
        </video>
      </div>
      <div class="project-overlay">
        <h3>${project.title}</h3>
        <p>${project.subtitle}</p>
        <div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      </div>
    `;

    const video = card.querySelector("video");
    card.addEventListener("mouseenter", () => {
      if (video) {
        video.play().catch(() => {});
      }
    });
    card.addEventListener("mouseleave", () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    card.addEventListener("click", () => renderDetail(project, card));
    projectGrid.appendChild(card);
  });
}

function renderDetail(project, triggerElement) {
  if (isModalClosing) return;
  modalTitle.textContent = project.title;
  modalSummary.textContent = project.summary;

  modalMeta.innerHTML = `
    <span>项目类型：${project.type}</span>
    <span>开发周期：${project.cycle}</span>
    <span>工具/引擎：${project.engine}</span>
    <span>平台：${project.platform}</span>
    <span>个人职责：${project.role}</span>
  `;

  modalDesign.innerHTML = project.design.map((item) => `<li>${item}</li>`).join("");
  modalContrib.innerHTML = project.contribution
    .map((item) => `<li>${item}</li>`)
    .join("");

  if (project.embedUrl) {
    modalIframe.src = project.embedUrl;
    modalIframe.classList.remove("hidden");
    modalVideo.classList.add("hidden");
    modalVideo.pause();
    modalVideoSource.src = "";
    modalVideo.load();
  } else {
    modalIframe.src = "";
    modalIframe.classList.add("hidden");
    modalVideo.classList.remove("hidden");
    modalVideo.setAttribute("poster", project.thumbnail);
    modalVideoSource.src = project.video;
    modalVideo.load();
    modalVideo
      .play()
      .catch(() => {});
  }

  projectModal.classList.remove("hidden");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.body.classList.add("modal-open");
  lastModalTrigger = triggerElement || null;

  if (triggerElement && projectModalPanel) {
    const fromRect = triggerElement.getBoundingClientRect();
    const panelRect = projectModalPanel.getBoundingClientRect();
    const deltaX =
      fromRect.left + fromRect.width / 2 - (panelRect.left + panelRect.width / 2);
    const deltaY =
      fromRect.top + fromRect.height / 2 - (panelRect.top + panelRect.height / 2);
    const scale = Math.max(
      Math.min(fromRect.width / panelRect.width, fromRect.height / panelRect.height),
      0.24
    );

    projectModalPanel.style.transition = "none";
    projectModalPanel.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;
    projectModalPanel.style.opacity = "0.32";

    requestAnimationFrame(() => {
      projectModalPanel.style.transition =
        "transform 0.72s cubic-bezier(0.2, 0.78, 0.2, 1), opacity 0.72s ease";
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
  modalVideo.pause();
  modalVideoSource.src = "";
  modalVideo.load();
  modalIframe.src = "";
  modalIframe.classList.add("hidden");
  modalVideo.classList.remove("hidden");
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
  const exp = experiences[expId];
  if (!exp) return;
  experienceModalTitle.textContent = exp.title;
  experienceModalPeriod.textContent = exp.period;
  experienceModalSummary.textContent = exp.summary;
  experienceModalTags.innerHTML = exp.tags.map((tag) => `<span>${tag}</span>`).join("");
  experienceModalWork.innerHTML = exp.work.map((item) => `<li>${item}</li>`).join("");
  experienceModalOutcome.innerHTML = exp.outcome
    .map((item) => `<li>${item}</li>`)
    .join("");
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
  const isSmallScreen = window.matchMedia("(max-width: 760px)").matches;
  const ua = navigator.userAgent || "";
  const isMobileUA = /Android|iPhone|iPad|iPod|Mobile/i.test(ua);
  return isSmallScreen || isMobileUA;
}

function openDocModal(title, url) {
  if (!url) return;

  // Mobile browsers often break in-iframe PDF scrolling (stuck on first page).
  // Open PDFs with the system viewer on mobile for reliable multi-page navigation.
  if (shouldOpenDocInNewTab()) {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  docModalTitle.textContent = title || "设计文档";
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
  const revealItems = document.querySelectorAll(".reveal-up");
  if (!revealItems.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );
  revealItems.forEach((item) => observer.observe(item));
}

function initAmbientParticles() {
  if (!bgParticlesCanvas) return;
  const ctx = bgParticlesCanvas.getContext("2d");
  if (!ctx) return;

  const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const particles = [];
  const PARTICLE_COUNT = motionReduced ? 56 : 180;
  const IMPULSE_Y_FACTOR = 0.34;
  const IMPULSE_X_FACTOR = 0.14;
  const IMPULSE_GAIN = 0.045;
  const IMPULSE_MAX = 2.2;
  let rafId = 0;
  let scrollImpulse = 0;
  let layerOffsetY = 0;
  let layerVelocityY = 0;
  let lastScrollY = window.scrollY || 0;

  const resize = () => {
    bgParticlesCanvas.width = window.innerWidth;
    bgParticlesCanvas.height = window.innerHeight;
  };

  const resetParticle = (particle, randomY = true) => {
    particle.x = Math.random() * bgParticlesCanvas.width;
    particle.y = randomY
      ? Math.random() * bgParticlesCanvas.height
      : bgParticlesCanvas.height + Math.random() * 60;
    particle.size = Math.random() * 1.9 + 0.45;
    particle.alpha = Math.random() * 0.5 + 0.14;
    particle.glow = particle.size * (Math.random() * 2.2 + 2.1);
    particle.speed = Math.random() * 0.14 + 0.04;
    particle.drift = (Math.random() - 0.5) * 0.24;
  };

  const initParticles = () => {
    particles.length = 0;
    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const particle = {};
      resetParticle(particle, true);
      particles.push(particle);
    }
  };

  const draw = () => {
    layerOffsetY += layerVelocityY;
    layerVelocityY *= 0.8;
    layerOffsetY *= 0.9;
    if (Math.abs(layerVelocityY) < 0.005) layerVelocityY = 0;
    if (Math.abs(layerOffsetY) < 0.01) layerOffsetY = 0;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, bgParticlesCanvas.width, bgParticlesCanvas.height);
    ctx.setTransform(1, 0, 0, 1, 0, layerOffsetY);
    for (const particle of particles) {
      const impulseY = scrollImpulse * IMPULSE_Y_FACTOR;
      const impulseX = scrollImpulse * IMPULSE_X_FACTOR;
      particle.y -= particle.speed + impulseY;
      particle.x += particle.drift + impulseX;

      if (particle.y < -12 || particle.x < -20 || particle.x > bgParticlesCanvas.width + 20) {
        resetParticle(particle, false);
      }

      const glowGradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.glow
      );
      const blendBoost = 1 + moonBlendLevel * 0.55;
      glowGradient.addColorStop(0, `rgba(245, 245, 255, ${Math.min(particle.alpha * 0.68 * blendBoost, 0.95)})`);
      glowGradient.addColorStop(1, "rgba(245, 245, 255, 0)");
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.glow, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.min((particle.alpha + 0.2) * blendBoost, 0.98)})`;
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    }
    scrollImpulse *= 0.94;
    if (Math.abs(scrollImpulse) < 0.01) scrollImpulse = 0;
    rafId = window.requestAnimationFrame(draw);
  };

  window.addEventListener(
    "scroll",
    () => {
      const nextY = window.scrollY || 0;
      const delta = nextY - lastScrollY;
      lastScrollY = nextY;
      const normalized = Math.max(-80, Math.min(80, delta));
      scrollImpulse += normalized * IMPULSE_GAIN;
      scrollImpulse = Math.max(-IMPULSE_MAX, Math.min(IMPULSE_MAX, scrollImpulse));
      layerVelocityY += normalized * 0.032;
      layerVelocityY = Math.max(-2.4, Math.min(2.4, layerVelocityY));
    },
    { passive: true }
  );

  resize();
  initParticles();
  draw();
  window.addEventListener("resize", () => {
    resize();
    initParticles();
  });
}

function initMoonScrollBoost() {
  if (!ambientMoons.length) return;
  let timeoutId = null;
  let lastY = window.scrollY || 0;
  let moonAngle = 0;
  let moonVelocity = 0.14;
  const BASE_VELOCITY = 0.14;
  const MAX_VELOCITY = 2.4;
  let floatPhase = 0;
  const START_SCALE = 1.95;
  const END_SCALE = 1;
  const MERGE_SCROLL_RANGE = 760;
  const CONTACT_START = 0.54;
  const CONTACT_END = 0.82;
  const DISSOLVE_START = 0.88;
  const DISSOLVE_END = 1.34;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

  const getMoonTarget = (moon) => {
    const isLeft = moon.classList.contains("ambient-moon-left");
    if (window.innerWidth <= 760) {
      return isLeft
        ? { startX: -16, startY: -11 }
        : { startX: 116, startY: 92 };
    }
    return isLeft
      ? { startX: -7, startY: -18 }
      : { startX: 108, startY: 112 };
  };

  const tick = () => {
    moonAngle += moonVelocity;
    moonVelocity += (BASE_VELOCITY - moonVelocity) * 0.06;
    floatPhase += 0.018;
    const rawScrollProgress = (window.scrollY || 0) / MERGE_SCROLL_RANGE;
    const scrollProgress = clamp(rawScrollProgress, 0, 1);
    const mergeProgress = easeOutCubic(scrollProgress);
    const contactRaw = clamp((scrollProgress - CONTACT_START) / (CONTACT_END - CONTACT_START), 0, 1);
    const contactProgress = easeInOutSine(contactRaw);
    const dissolveRaw = clamp((rawScrollProgress - DISSOLVE_START) / (DISSOLVE_END - DISSOLVE_START), 0, 1);
    const dissolveProgress = easeInOutSine(dissolveRaw);
    const centerGap = 12 * (1 - contactProgress);
    const baseScale = START_SCALE - (START_SCALE - END_SCALE) * mergeProgress;
    moonBlendLevel = dissolveProgress;

    ambientMoons.forEach((moon, index) => {
      const target = getMoonTarget(moon);
      const side = index === 0 ? -1 : 1;
      const centerTargetX = 50 + side * centerGap;
      const currentX = target.startX + (centerTargetX - target.startX) * mergeProgress;
      const currentY = target.startY + (28 - target.startY) * mergeProgress;
      const phaseOffset = index === 0 ? 0 : Math.PI * (1 - contactProgress);
      const floatY = Math.sin(floatPhase + phaseOffset) * (5.6 * (1 - mergeProgress));
      const shrinkFactor = Math.max(0, 1 - dissolveProgress);
      const finalScale = baseScale * shrinkFactor;
      const moonOpacity = (0.95 - mergeProgress * 0.05) * Math.pow(1 - dissolveProgress, 1.35);
      const rotateOffset = 0;

      moon.style.left = `${currentX.toFixed(2)}vw`;
      moon.style.top = `${currentY.toFixed(2)}vh`;
      moon.style.right = "auto";
      moon.style.bottom = "auto";
      moon.style.filter = `blur(${(dissolveProgress * 1.6).toFixed(2)}px)`;
      moon.style.mixBlendMode = dissolveProgress > 0.08 ? "screen" : "normal";
      moon.style.transform =
        `translate3d(-50%, ${floatY.toFixed(2)}px, 0) ` +
        `scale(${finalScale.toFixed(3)}) ` +
        `rotate(${(moonAngle + rotateOffset).toFixed(2)}deg)`;
      moon.style.opacity = `${Math.max(0, Math.min(1, moonOpacity)).toFixed(3)}`;
    });

    if (bgParticlesCanvas) {
      const particleOpacity = 0.6 + dissolveProgress * 0.34;
      bgParticlesCanvas.style.opacity = particleOpacity.toFixed(3);
    }

    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY || 0;
      const delta = y - lastY;
      lastY = y;
      const boost = Math.min(2.3, Math.abs(delta) * 0.085);
      moonVelocity = Math.max(BASE_VELOCITY, Math.min(MAX_VELOCITY, BASE_VELOCITY + boost));
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        moonVelocity = BASE_VELOCITY;
      }, 130);
    },
    { passive: true }
  );
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeFilter = {
      group: button.dataset.filterGroup,
      value: button.dataset.filter
    };
    renderProjects();
  });
});

closeProjectModal.addEventListener("click", hideProjectModal);
projectModalBackdrop.addEventListener("click", hideProjectModal);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideProjectModal();
    closeExperienceModalNow();
    closeDocModalNow();
  }
});
experienceTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const expId = trigger.dataset.expId;
    openExperienceModal(expId);
  });
});
closeExperienceModal.addEventListener("click", closeExperienceModalNow);
experienceModalBackdrop.addEventListener("click", closeExperienceModalNow);
docTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openDocModal(trigger.dataset.docTitle, trigger.dataset.docUrl);
  });
});
closeDocModal.addEventListener("click", closeDocModalNow);
docModalBackdrop.addEventListener("click", closeDocModalNow);

navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

window.addEventListener("scroll", () => {
  if (siteHeader) {
    siteHeader.classList.toggle("scrolled", window.scrollY > 24);
  }

  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`来自作品集网站的新留言 - ${name}`);
    const body = encodeURIComponent(
      `姓名：${name}\n邮箱：${email}\n\n留言内容：\n${message}`
    );
    window.location.href = `mailto:1102910102@qq.com?subject=${subject}&body=${body}`;
  });
}

renderProjects();
initRevealAnimations();
initAmbientParticles();
initMoonScrollBoost();
