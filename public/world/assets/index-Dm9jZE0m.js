const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./threejs-override-KmpEGO8-.js","./three.core-BZngiA0R.js","./Game-DhoIPDrA.js","./resource-viewer-D-b15qFd.js","./resource-viewer-CayQ-B7l.css","./Game-DdpWbozj.css"])))=>i.map(i=>d[i]);
import { i as h, _ as p } from "./resource-viewer-D-b15qFd.js";
import { R as g } from "./three.core-BZngiA0R.js";
(async () => {
  (function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload")) return;
    for (const t of document.querySelectorAll('link[rel="modulepreload"]')) r(t);
    new MutationObserver((t) => {
      for (const e of t) if (e.type === "childList") for (const a of e.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function s(t) {
      const e = {};
      return t.integrity && (e.integrity = t.integrity), t.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? e.credentials = "include" : t.crossOrigin === "anonymous" ? e.credentials = "omit" : e.credentials = "same-origin", e;
    }
    function r(t) {
      if (t.ep) return;
      t.ep = true;
      const e = s(t);
      fetch(t.href, e);
    }
  })();
  function b(o) {
    let n, s;
    try {
      n = o == null ? void 0 : o.name, s = typeof o == "string" ? o : o == null ? void 0 : o.message;
    } catch {
    }
    const t = [
      "Error",
      "TypeError",
      "ReferenceError",
      "SyntaxError",
      "RangeError",
      "EvalError",
      "URIError",
      "AggregateError",
      "AbortError",
      "SecurityError",
      "NotSupportedError",
      "InvalidStateError",
      "OperationError",
      "NetworkError",
      "TimeoutError",
      "QuotaExceededError",
      "DataError",
      "CompileError",
      "LinkError",
      "RuntimeError",
      "GPUValidationError",
      "GPUInternalError",
      "GPUOutOfMemoryError"
    ].includes(n) ? n : "\u672A\u8BC6\u522B\u5F02\u5E38";
    let e = "\u8BE6\u60C5\u5DF2\u9690\u85CF\u3002";
    if (typeof s != "string" || !s.trim()) e = "\u6682\u65E0\u8BE6\u60C5\u3002";
    else if (s.length > 4096) e = "\u8BE6\u60C5\u8FC7\u957F\uFF0C\u65E0\u6CD5\u663E\u793A\u3002";
    else {
      const a = s.split(/[\r\n\u2028\u2029]/, 1)[0].trim();
      if ([
        "Graphics device lost",
        "Graphics context lost",
        "WebGL context lost",
        "Error creating WebGL context.",
        "WebGL is not supported",
        "WebGPUBackend: Unable to create WebGPU adapter.",
        "Failed to fetch",
        "Load failed",
        "WebAssembly is not defined",
        "null function or function signature mismatch",
        "memory access out of bounds",
        "unreachable",
        "Out of memory",
        "Maximum call stack size exceeded"
      ].includes(a)) e = a;
      else {
        const i = [
          "getSupportedExtensions",
          "getExtension",
          "getParameter",
          "getShaderPrecisionFormat",
          "getContext",
          "canvas",
          "adapter",
          "device"
        ];
        for (const l of [
          "null",
          "undefined"
        ]) for (const c of i) {
          const u = `Cannot read properties of ${l} (reading '${c}')`;
          a === u && (e = u);
        }
        /^(?:Failed to fetch dynamically imported module|error loading dynamically imported module):/i.test(a) ? e = "\u52A8\u6001\u6A21\u5757\u52A0\u8F7D\u5F02\u5E38\uFF0C\u5730\u5740\u5DF2\u9690\u85CF\u3002" : /^(?:fetch for |Failed to load |NetworkError when attempting to fetch resource)/i.test(a) ? e = "\u8D44\u6E90\u52A0\u8F7D\u5F02\u5E38\uFF0C\u5730\u5740\u5DF2\u9690\u85CF\u3002" : /^(?:WebAssembly|wasm)/i.test(a) ? e = "WebAssembly \u8FD0\u884C\u5F02\u5E38\uFF0C\u8BE6\u60C5\u5DF2\u9690\u85CF\u3002" : /^THREE\.|^Renderer:|^WebGL|^WebGPU/.test(a) && (e = "\u4E09\u7EF4\u8FD0\u884C\u5F02\u5E38\uFF0C\u8BE6\u60C5\u5DF2\u9690\u85CF\u3002");
      }
    }
    return `\u5F02\u5E38\u540D\u79F0\uFF1A${t}
\u5F02\u5E38\u8BE6\u60C5\uFF1A${e}`;
  }
  function E({ document: o, reload: n = () => window.location.reload(), report: s = (r) => console.error(r) }) {
    const r = o.querySelector(".js-graphics-fallback"), t = r.querySelector("h1"), e = r.querySelector("[data-fallback-status]"), a = r.querySelector("[data-fallback-retry]"), d = r.querySelector("[data-fallback-error]"), i = o.querySelector(".game");
    let l = false, c = false;
    return a.addEventListener("click", () => {
      if (!c) {
        c = true, a.disabled = true, a.setAttribute("aria-busy", "true"), e.textContent = "\u6B63\u5728\u91CD\u65B0\u8F7D\u5165\u9875\u9762\u5E76\u5C1D\u8BD5\u4E09\u7EF4\u573A\u666F\uFF1B\u5982\u679C\u4ECD\u4E0D\u53EF\u7528\uFF0C\u53EF\u7EE7\u7EED\u9605\u8BFB\u4E0B\u65B9\u4F5C\u54C1\u3002";
        try {
          n();
        } catch {
          c = false, a.disabled = false, a.removeAttribute("aria-busy"), e.textContent = "\u9875\u9762\u672A\u80FD\u91CD\u65B0\u8F7D\u5165\u3002\u53EF\u4F7F\u7528\u6D4F\u89C8\u5668\u5237\u65B0\uFF0C\u6216\u7EE7\u7EED\u9605\u8BFB\u4E0B\u65B9\u4F5C\u54C1\u3002";
        }
      }
    }), {
      show(u) {
        if (l) return false;
        l = true, o.documentElement.classList.add("is-graphics-fallback"), i.hidden = true, i.inert = true, i.setAttribute("aria-hidden", "true"), r.hidden = false, e.textContent = "\u4E09\u7EF4\u573A\u666F\u6682\u65F6\u65E0\u6CD5\u663E\u793A\uFF0C\u5DF2\u5207\u6362\u4E3A\u53EF\u76F4\u63A5\u9605\u8BFB\u7684\u4F5C\u54C1\u96C6\u3002\u9879\u76EE\u8D44\u6599\u4E0E\u8054\u7CFB\u65B9\u5F0F\u4ECD\u53EF\u4F7F\u7528\u3002";
        for (const f of r.querySelectorAll("img[data-fallback-src]")) f.src = f.dataset.fallbackSrc, f.removeAttribute("data-fallback-src");
        t.focus({
          preventScroll: true
        });
        const m = b(u);
        d && (d.textContent = m);
        try {
          s(`[graphics-fallback] ${m}`);
        } catch {
        }
        return true;
      }
    };
  }
  async function w({ createGame: o, fallback: n, onCreated: s = () => {
  } }) {
    let r;
    try {
      return r = await o((t) => n.show(t)), s(r), await r.ready, r;
    } catch (t) {
      try {
        r == null ? void 0 : r.failGraphics(t);
      } catch {
      }
      return n.show(t), null;
    }
  }
  const y = `
\u9648\u5B9C\u7406 \xB7 \u5173\u5361\u4E0E\u73A9\u6CD5\u8BBE\u8BA1\u4F5C\u54C1\u96C6

\u6B64\u9875\u9762\u662F\u6280\u672F\u9884\u89C8\uFF0C\u4E2A\u4EBA\u9879\u76EE\u804C\u8D23\u5728\u4F5C\u54C1\u96C6\u9875\u9762\u4E2D\u5206\u522B\u6807\u6CE8\u3002
\u539F\u7248\u4E16\u754C\u3001\u9A7E\u9A76\u3001\u7269\u7406\u4E0E\u4EA4\u4E92\u57FA\u7840\u7531 Bruno Simon \u521B\u4F5C\u3002
\u539F\u7248\u6E90\u7801\uFF1Ahttps://github.com/brunosimon/folio-2025
Copyright (c) 2025 Bruno Simon.
\u5F00\u6E90\u8BB8\u53EF\u4E0E\u7B2C\u4E09\u65B9\u7248\u6743\u58F0\u660E\u89C1\u201C\u5236\u4F5C\u4E0E\u6765\u6E90\u201D\u3002

\u6E32\u67D3\uFF1AThree.js\uFF08\u7248\u672C ${g}\uFF09
\u7269\u7406\uFF1ARapier\u3002\u97F3\u9891\uFF1AHowler.js\u3002\u97F3\u4E50\uFF1AKounine\uFF08CC0\uFF09\u3002
\u5B57\u4F53\uFF1ANoto Sans CJK\uFF08SIL \u5F00\u653E\u5B57\u4F53\u8BB8\u53EF\uFF09\u3002

\u5728\u7F51\u5740\u672B\u5C3E\u6DFB\u52A0 #debug \u53EF\u6253\u5F00\u5F00\u53D1\u8C03\u8BD5\u9762\u677F\u3002
\u9762\u677F\u4E2D\u7684\u5DE5\u7A0B\u53C2\u6570\u540D\u79F0\u6CBF\u7528\u4EE3\u7801\u6807\u8BC6\u7B26\uFF0C\u4FBF\u4E8E\u6838\u5BF9\u6E90\u7801\u3002
\u6309 V \u5207\u6362\u81EA\u7531\u89C6\u89D2\uFF0C\u6309 H \u663E\u793A\u6216\u9690\u85CF\u8C03\u8BD5\u9762\u677F\u3002
`;
  for (let o = 0; o < y.length; o++) y[o].match(/[╔║═╗╚╝╔╝]/);
  const S = h(), G = E({
    document
  });
  await w({
    fallback: G,
    createGame: async (o) => {
      document.fonts && await Promise.allSettled([
        document.fonts.load("400 20px Nunito"),
        document.fonts.load('700 20px "Amatic SC"'),
        document.fonts.load('500 20px "Pally-Medium"'),
        document.fonts.load('700 20px "Yili Sans"')
      ]), await p(() => import("./threejs-override-KmpEGO8-.js"), __vite__mapDeps([0,1]), import.meta.url);
      const { Game: n } = await p(async () => {
        const { Game: s } = await import("./Game-DhoIPDrA.js").then(async (m) => {
          await m.__tla;
          return m;
        }).then((r) => r.G);
        return {
          Game: s
        };
      }, __vite__mapDeps([2,3,4,1,5]), import.meta.url);
      return new n({
        onGraphicsFailure: o
      });
    },
    onCreated: (o) => {
      S.setGame(o);
    }
  });
})();
