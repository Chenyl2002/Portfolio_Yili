const projects = [
  {
    id: "broken-home",
    title: "破碎之家",
    subtitle: "叙事解谜向关卡设计 · 氛围驱动 Demo",
    type: "团队项目",
    engine: "UE5",
    platform: "PC",
    cycle: "2 个月",
    role: "关卡策划 / 白盒搭建 / 叙事协作",
    tags: ["叙事解谜", "空间引导", "情绪节奏"],
    thumbnail:
      "./Image/WeChat711f392c1afddf18da8e1b8865a8de2c.jpg",
    thumbnailPosition: "50% 46%",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    embedUrl:
      "https://player.bilibili.com/player.html?bvid=BV1k41cBXEfU&page=1&autoplay=1",
    summary:
      "围绕废弃宅邸构建“探索-线索拼接-真相揭示”流程，重点验证关卡叙事信息层层解锁与玩家情绪递进。",
    design: [
      "以封闭空间与光照对比强化未知感，建立探索动机。",
      "通过线索道具与场景痕迹引导玩家推理事件真相。",
      "在中后段加入高压追逐段，拉升情绪峰值。"
    ],
    contribution: [
      "完成关卡主线流程与关键事件触发逻辑设计。",
      "使用 UE5 白盒与 Lumen 完成空间氛围搭建。",
      "与文案和美术协同，统一叙事表达与视觉语言。"
    ]
  },
  {
    id: "break-ice",
    title: "破冰起航",
    subtitle: "腾讯游戏星跃实战营 · 仙侠动作关卡 Demo",
    type: "个人项目",
    engine: "UE5",
    platform: "PC",
    cycle: "2 个月",
    role: "关卡策划 / 玩法落地",
    tags: ["箱庭动作关卡", "能力解锁", "Boss战"],
    thumbnail:
      "./Image/WeChata387371355de2ef25039aafe61d4bdfd.jpg",
    thumbnailPosition: "50% 52%",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    embedUrl:
      "https://player.bilibili.com/player.html?bvid=BV1oTXzBvEyA&page=1&autoplay=1",
    summary:
      "以“解谜-战斗-能力解锁-高潮挑战”为主循环，完成可玩 Demo 落地，验证动作关卡节奏与反馈设计。",
    design: [
      "设计多段式遭遇战，保证学习曲线和挑战递进。",
      "将御剑飞行作为高潮机制，提高阶段反馈。",
      "通过机关与战斗耦合提升关卡变化度。"
    ],
    contribution: [
      "推进策划案迭代并定义关键体验目标。",
      "完成 UE5 白盒搭建和基础蓝图交互配置。",
      "与战斗/文案策划协作，完成机制叙事闭环。"
    ]
  },
  {
    id: "ancient-temple",
    title: "山中古刹",
    subtitle: "古刹探索关卡 · 场景叙事与机关解谜",
    type: "团队项目",
    engine: "UE5",
    platform: "PC",
    cycle: "6 周",
    role: "关卡策划 / 场景流程设计",
    tags: ["古建场景", "机关谜题", "环境叙事"],
    thumbnail:
      "./Image/WeChat647d538c08a2e3ff20212847a48ba14a.jpg",
    thumbnailPosition: "50% 47%",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    embedUrl:
      "https://player.bilibili.com/player.html?bvid=BV1Bg5a6dEHL&page=1&autoplay=1",
    summary:
      "围绕“层层深入古刹遗迹”构建线性探索体验，通过机关解谜与空间回环提升沉浸感。",
    design: [
      "设定前殿-藏经阁-地宫三段式结构，形成明确推进目标。",
      "结合环境叙事碎片强化世界观信息传达。",
      "通过回环路径控制玩家节奏与资源消耗。"
    ],
    contribution: [
      "负责关卡节奏图和节点事件编排。",
      "完成关键场景白盒与交互触发设计。",
      "协助镜头演出与氛围参数调试。"
    ]
  },
  {
    id: "gamified-moston",
    title: "Gamified Moston",
    subtitle: "大学生创新创业大赛 · 第一负责人",
    type: "团队项目",
    engine: "多工具",
    platform: "跨场景",
    cycle: "1 年",
    role: "第一负责人 / 策划统筹 / 方案设计",
    tags: ["AR实景解谜", "双线叙事", "文化活化"],
    thumbnail:
      "./Image/WeChatea6415f433e42edff40767152968d6bb.jpg",
    thumbnailPosition: "50% 52%",
    video:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    embedUrl:
      "https://player.bilibili.com/player.html?bvid=BV1jRGb6GEwE&page=1&autoplay=1",
    summary:
      "以运河文化为主题打造线上线下融合体验，通过 AR 解谜、多人协作与智能 NPC 机制激活历史街区叙事。",
    design: [
      "规划御河公园区、古镇文化区、文化学镇三大玩法分区。",
      "将年画制作、漕运贸易等文化主题转化为互动任务链。",
      "构建过去与未来双线叙事，强化探索驱动力。"
    ],
    contribution: [
      "统筹跨学科团队，推进从概念到可视化呈现全流程。",
      "负责机制设计与场地探索逻辑，保障方案一致性。",
      "项目获国家级结项及多项国家/省级设计竞赛奖项。"
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
const MODAL_ANIMATION_MS = 720;

let activeFilter = { group: "all", value: "all" };
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

function openDocModal(title, url) {
  docModalTitle.textContent = title || "设计文档";
  docModalFrame.src = url || "";
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
