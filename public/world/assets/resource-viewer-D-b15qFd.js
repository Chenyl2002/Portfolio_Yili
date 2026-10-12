const Ce = "modulepreload", Le = function(d, i) {
  return new URL(d, i).href;
}, ve = {}, Re = function(i, s, R) {
  let T = Promise.resolve();
  if (s && s.length > 0) {
    let A = function(b) {
      return Promise.all(b.map((E) => Promise.resolve(E).then((n) => ({ status: "fulfilled", value: n }), (n) => ({ status: "rejected", reason: n }))));
    };
    const m = document.getElementsByTagName("link"), k = document.querySelector("meta[property=csp-nonce]"), j = (k == null ? void 0 : k.nonce) || (k == null ? void 0 : k.getAttribute("nonce"));
    T = A(s.map((b) => {
      if (b = Le(b, R), b in ve) return;
      ve[b] = true;
      const E = b.endsWith(".css"), n = E ? '[rel="stylesheet"]' : "";
      if (R) for (let L = m.length - 1; L >= 0; L--) {
        const C = m[L];
        if (C.href === b && (!E || C.rel === "stylesheet")) return;
      }
      else if (document.querySelector(`link[href="${b}"]${n}`)) return;
      const c = document.createElement("link");
      if (c.rel = E ? "stylesheet" : Ce, E || (c.as = "script"), c.crossOrigin = "", c.href = b, j && c.setAttribute("nonce", j), document.head.appendChild(c), E) return new Promise((L, C) => {
        c.addEventListener("load", L), c.addEventListener("error", () => C(new Error(`Unable to preload CSS for ${b}`)));
      });
    }));
  }
  function D(m) {
    const k = new Event("vite:preloadError", { cancelable: true });
    if (k.payload = m, window.dispatchEvent(k), !k.defaultPrevented) throw m;
  }
  return T.then((m) => {
    for (const k of m || []) k.status === "rejected" && D(k.reason);
    return i().catch(D);
  });
}, S = (d, i) => ({ url: `./Portfolio/${d}.pdf#page=${i}`, label: `\u67E5\u770B\u8BBE\u8BA1\u539F\u7A3F \xB7 \u7B2C${i}\u9875` }), J = { url: "./Portfolio/doc-ancient-temple.docx", label: "\u4E0B\u8F7D\u539F\u7B56\u5212\u8349\u7A3F" }, xe = [{ id: "broken-home", title: "\u7834\u788E\u4E4B\u5BB6", color: "#e9b976", theme: "\u5FAE\u7F29\u5BB6\u5EAD \xB7 \u60C5\u7EEA\u955C\u8EAB", role: "\u4E2A\u4EBA\u9879\u76EE \xB7 \u5173\u5361\u4E0E\u84DD\u56FE\u72EC\u7ACB\u5B8C\u6210", attributes: { role: ["\u4E2A\u4EBA\u767D\u76D2", "\u865A\u5E7B\u5F15\u64CE 5"], at: ["\u5FAE\u7F29\u5BB6\u5EAD", "\u7B2C\u4E09\u4EBA\u79F0\u89E3\u8C1C"], with: ["\u60C5\u7EEA\u955C\u8EAB", "\u56DE\u653E\u8FC7\u53BB3\u79D2"] }, overview: { key: "overview", section: "\u5173\u5361\u76EE\u6807", title: "\u548C\u4E09\u79D2\u524D\u7684\u81EA\u5DF1\u4E00\u8D77\u89E3\u8C1C", asset: "yili-01.webp", assetLocation: "static/projects/images", kind: "\u539F\u9879\u76EE\u6F14\u793A\u753B\u9762", points: [["\u73A9\u5BB6\u76EE\u6807", `\u7A7F\u8D8A\u5FAE\u7F29\u5BB6\u5EAD
\u4E0E\u8FC7\u53BB\u7684\u81EA\u5DF1\u534F\u4F5C`], ["\u6838\u5FC3\u89C4\u5219", `\u955C\u8EAB\u91CD\u653E\u8FC7\u53BB3\u79D2
\u8BA9\u65E7\u52A8\u4F5C\u6210\u4E3A\u89E3\u9898\u8D44\u6E90`]], source: "\u300A\u7834\u788E\u4E4B\u5BB6\u300B\u5173\u5361\u8BF4\u660E \xB7 \u7B2C2\u30014\u9875\uFF1B\u753B\u9762\u6CBF\u7528\u539F\u9879\u76EE\u5C01\u9762", sourceShort: "\u76EE\u6807\u4E0E\u673A\u5236 \xB7 \u539F\u7A3F\u7B2C2\u30014\u9875", sourcePages: [2, 4], link: S("doc-broken-home", 2) }, cards: [{ key: "route", section: "\u7A7A\u95F4\u4E0E\u8282\u594F", title: "\u4E09\u6BB5\u7A7A\u95F4\uFF0C\u9010\u6B65\u589E\u52A0\u534F\u4F5C\u8981\u6C42", asset: "broken-p07-route.png", kind: "\u539F\u5173\u5361\u52A8\u7EBF\u56FE", points: [["\u7A7A\u95F4\u9012\u8FDB", `\u5E8A\u94FA\u4E0E\u5E8A\u5934\u67DC
\u8863\u67DC\u4E0E\u5730\u9762
\u6905\u5B50\u4E0E\u684C\u9762`], ["\u6559\u5B66\u8282\u594F", `\u5148\u5B66\u955C\u8EAB\u7EF4\u6301\u673A\u5173
\u518D\u52A0\u5165\u9650\u65F6\u4E0E\u53E0\u529B`]], source: "\u300A\u7834\u788E\u4E4B\u5BB6\u300B\u5173\u5361\u8BF4\u660E \xB7 \u7B2C5\u30017\u9875", sourceShort: "\u539F\u52A8\u7EBF\u56FE \xB7 \u539F\u7A3F\u7B2C5\u30017\u9875", sourcePages: [5, 7], link: S("doc-broken-home", 7) }, { key: "mirror", section: "\u673A\u5236\u62C6\u89E3", title: "\u7528\u955C\u8EAB\u7EF4\u6301\u673A\u5173\uFF0C\u672C\u4F53\u7EE7\u7EED\u524D\u8FDB", asset: "broken-p09-mirror-fan-only.png", kind: "\u539F\u767D\u76D2\u622A\u56FE", points: [["\u73A9\u5BB6\u64CD\u4F5C", `\u5148\u8E29\u673A\u5173\uFF0C\u518D\u751F\u6210\u955C\u8EAB
\u8BA9\u65E7\u52A8\u4F5C\u7EE7\u7EED\u8E29\u4F4F\u6309\u94AE`], ["\u7A7A\u95F4\u7ED3\u679C", `\u955C\u8EAB\u7EF4\u6301\u98CE\u6247\u6C14\u6D41
\u672C\u4F53\u501F\u6C14\u6D41\u4E0A\u5347`]], source: "\u300A\u7834\u788E\u4E4B\u5BB6\u300B\u5173\u5361\u8BF4\u660E \xB7 \u7B2C2\u30019\u9875", sourceShort: "\u539F\u767D\u76D2 \xB7 \u539F\u7A3F\u7B2C2\u30019\u9875", sourcePages: [2, 9], link: S("doc-broken-home", 9) }, { key: "cooperate", section: "\u7EC4\u5408\u6311\u6218", title: "\u628A\u53CC\u4EBA\u95E8\u69DB\u53D8\u6210\u9020\u8DEF\u8C1C\u9898", asset: "broken-p13-car-cooperation.png", assetCrop: [0, 0, 810, 434], kind: "\u539F\u767D\u76D2\u622A\u56FE", points: [["\u534F\u4F5C\u89C4\u5219", `\u672C\u4F53\u4E0E\u955C\u8EAB\u5171\u540C\u538B\u91CD
\u542F\u52A8\u56DB\u9A71\u8F66\u62C9\u5F00\u62BD\u5C49`], ["\u6311\u6218\u9012\u8FDB", `\u5F00\u8DEF\u540E\u518D\u6D88\u9664\u963B\u6321
\u628A\u534F\u4F5C\u8F6C\u6210\u7A7A\u95F4\u53D8\u5316`]], source: "\u300A\u7834\u788E\u4E4B\u5BB6\u300B\u5173\u5361\u8BF4\u660E \xB7 \u7B2C13\u9875", sourceShort: "\u539F\u767D\u76D2 \xB7 \u539F\u7A3F\u7B2C13\u9875", sourcePages: [13], link: S("doc-broken-home", 13) }, { key: "role", section: "\u804C\u8D23\u4E0E\u8FB9\u754C", title: "\u72EC\u7ACB\u5B8C\u6210\u5173\u5361\u4E0E\u673A\u5173\u84DD\u56FE", asset: "broken-p01-role.png", kind: "\u539F\u6587\u6863\u9996\u9875", points: [["\u672C\u4EBA\u8D1F\u8D23", `\u5173\u5361\u8BBE\u8BA1\u4E0E\u767D\u76D2
\u673A\u5173\u84DD\u56FE\u903B\u8F91`], ["\u7D20\u6750\u8FB9\u754C", `\u97F3\u6548\u3001\u90E8\u5206\u6A21\u578B
\u89D2\u8272\u52A8\u4F5C\u4F7F\u7528\u5916\u90E8\u8D44\u6E90`]], source: "\u804C\u8D23\uFF1A\u539F\u6587\u6863\u7B2C1\u9875\u3001\u539F\u7AD9\u9879\u76EE\u8BF4\u660E\uFF1B\u8D44\u6E90\uFF1A\u7B2C15\u9875", sourceShort: "\u804C\u8D23\u4E0E\u8D44\u6E90 \xB7 \u539F\u7A3F\u7B2C1\u300115\u9875", sourcePages: [1, 15], link: S("doc-broken-home", 1) }] }, { id: "icebreaking", title: "\u7834\u51B0\u542F\u822A", color: "#8ecde3", theme: "\u5DE5\u4E1A\u6E2F\u53E3 \xB7 \u51BB\u7ED3\u8FD0\u52A8", role: "\u4E2A\u4EBA\u9879\u76EE \xB7 \u5173\u5361\u4E0E\u84DD\u56FE\u72EC\u7ACB\u5B8C\u6210", attributes: { role: ["\u4E2A\u4EBA\u767D\u76D2", "\u865A\u5E7B\u5F15\u64CE 5"], at: ["\u5DE5\u4E1A\u6E2F\u53E3", "\u98DE\u8247\u5192\u9669\u89E3\u8C1C"], with: ["\u51BB\u7ED3\u8FD0\u52A8", "\u65F6\u5E8F\u4E0E\u901A\u8DEF"] }, overview: { key: "overview", section: "\u5173\u5361\u76EE\u6807", title: "\u7528\u51BB\u7ED3\u80FD\u529B\u91CD\u65B0\u6253\u901A\u6E2F\u53E3", asset: "yili-02.webp", assetLocation: "static/projects/images", kind: "\u539F\u9879\u76EE\u6F14\u793A\u753B\u9762", points: [["\u73A9\u5BB6\u76EE\u6807", `\u91CD\u8FD4\u5DE5\u4E1A\u6E2F\u53E3
\u542F\u52A8\u98DE\u8247\u524D\u5F80\u4E3B\u57CE`], ["\u6838\u5FC3\u89C4\u5219", `\u505C\u6B62\u673A\u5173\u8FD0\u52A8
\u628A\u8FD0\u52A8\u88C5\u7F6E\u53D8\u6210\u901A\u8DEF`]], boundary: "\u542F\u822A\u8FC7\u573A\u3001\u5267\u60C5\u8BED\u97F3\u672A\u5B8C\u6210", source: "\u300A\u7834\u51B0\u542F\u822A\u300B\u5173\u5361\u8BF4\u660E \xB7 \u7B2C2\u30014\u300118\u9875\uFF1B\u753B\u9762\u6CBF\u7528\u539F\u9879\u76EE\u5C01\u9762", sourceShort: "\u76EE\u6807\u4E0E\u673A\u5236 \xB7 \u539F\u7A3F\u7B2C2\u30014\u9875", sourcePages: [2, 4, 18], link: S("doc-icebreaking", 2) }, cards: [{ key: "route", section: "\u7A7A\u95F4\u4E0E\u8282\u594F", title: "\u4ECE\u6E2F\u53E3\u6559\u5B66\u5230\u98DE\u8247\u7EFC\u5408\u6311\u6218", asset: "ice-p07-port-route.png", kind: "\u539F\u5173\u5361\u52A8\u7EBF\u56FE", points: [["\u4E09\u6BB5\u8DEF\u7EBF", `\u5165\u53E3\u4E0E\u88C5\u8D27\u533A
\u98DE\u8247\u6E2F\u53E3
\u98DE\u8247\u5185\u90E8`], ["\u80FD\u529B\u9012\u8FDB", `\u524D\u671F\u5DF2\u6709\u9650\u65F6\u51BB\u7ED3
\u540E\u671F\u7EC4\u5408\u673A\u5173\u4E0E\u65F6\u5E8F`]], source: "\u300A\u7834\u51B0\u542F\u822A\u300B\u5173\u5361\u8BF4\u660E \xB7 \u7B2C5\u30017\u9875\uFF1B\u524D\u671F\u9650\u65F6\u89C1\u7B2C9\u300110\u9875\uFF0C\u6301\u7EED\u51BB\u7ED3\u89C1\u7B2C11\u9875", sourceShort: "\u8DEF\u7EBF\u7B2C5\u30017\u9875 \xB7 \u89C4\u5219\u7B2C9\u201311\u9875", sourcePages: [5, 7, 9, 10, 11], link: S("doc-icebreaking", 7) }, { key: "minecart", section: "\u673A\u5236\u62C6\u89E3", title: "\u51BB\u7ED3\u77FF\u8F66\uFF0C\u62FC\u51FA\u4E8C\u5C42\u901A\u8DEF", asset: "ice-p11-minecart.png", assetCrop: [830, 0, 806, 436], kind: "\u539F\u767D\u76D2\u622A\u56FE", points: [["\u73A9\u5BB6\u64CD\u4F5C", `\u62C9\u6746\u542F\u52A8\u77FF\u8F66
\u6309\u5408\u9002\u4F4D\u7F6E\u4F9D\u6B21\u51BB\u7ED3`], ["\u9020\u8DEF\u89C4\u5219", `\u539F\u89C4\u5219\u4E3A\u6301\u7EED\u51BB\u7ED3
\u591A\u8F86\u77FF\u8F66\u62FC\u6210\u4E8C\u5C42\u901A\u8DEF`]], source: "\u300A\u7834\u51B0\u542F\u822A\u300B\u5173\u5361\u8BF4\u660E \xB7 \u7B2C11\u9875", sourceShort: "\u539F\u767D\u76D2 \xB7 \u539F\u7A3F\u7B2C11\u9875", sourcePages: [11], link: S("doc-icebreaking", 11) }, { key: "airship", section: "\u7EC4\u5408\u6311\u6218", title: "\u7EC4\u5408\u51BB\u7ED3\u673A\u5173\uFF0C\u6536\u7D27\u65F6\u5E8F\u7A97\u53E3", asset: "ice-p07-airship-floors.png", kind: "\u539F\u98DE\u8247\u8DEF\u7EBF\u56FE", points: [["\u7EC4\u5408\u6311\u6218", `\u4F20\u8F93\u5E26\u4E0E\u98CE\u6247\u51BB\u7ED36\u79D2
\u8FDB\u9636\u4F20\u8F93\u5E26\u7F29\u77ED\u81F33\u79D2`], ["\u7EFC\u5408\u8FD0\u7528", `\u7ED3\u5408\u673A\u5173\u987A\u5E8F\u4E0E\u6500\u722C
\u9010\u6B65\u62B5\u8FBE\u9A7E\u9A76\u5BA4`]], source: "\u8DEF\u7EBF\uFF1A\u539F\u6587\u6863\u7B2C7\u9875\uFF1B\u540E\u671F\u7EC4\u5408\u89C4\u5219\uFF1A\u7B2C13\u300115\u201317\u9875\u3002\u524D\u671F\u7B2C9\u9875\u540A\u673A\u5DF2\u4E3A3\u79D2\u3001\u7B2C10\u9875\u540A\u6865\u5DF2\u4E3A6\u79D2\uFF1B\u7B2C11\u9875\u77FF\u8F66\u4E3A\u6301\u7EED\u51BB\u7ED3\u3002", sourceShort: "\u539F\u8DEF\u7EBF\u56FE \xB7 \u89C4\u5219\u89C1\u7B2C13\u300115\u201317\u9875", sourcePages: [7, 13, 15, 16, 17], link: S("doc-icebreaking", 13) }, { key: "scope", section: "\u804C\u8D23\u4E0E\u8FB9\u754C", title: "\u5B8C\u6210\u8303\u56F4\u4E0E\u672A\u5B8C\u6210\u9879", asset: "ice-p18-scope.png", kind: "\u539F\u6587\u6863\u8D44\u6E90\u4E0E\u672A\u5B8C\u6210\u8BF4\u660E", points: [["\u672C\u4EBA\u8D1F\u8D23", `\u5173\u5361\u767D\u76D2
\u673A\u5173\u903B\u8F91\u4E0E\u84DD\u56FE`], ["\u672A\u5B8C\u6210\u9879", `\u98DE\u8247\u542F\u822A\u8FC7\u573A\u52A8\u753B
\u6E38\u620F\u5267\u60C5\u8BED\u97F3`]], source: "\u804C\u8D23\uFF1A\u539F\u6587\u6863\u7B2C1\u9875\u3001\u539F\u7AD9\u9879\u76EE\u8BF4\u660E\uFF1B\u672A\u5B8C\u6210\uFF1A\u7B2C18\u9875", sourceShort: "\u804C\u8D23\u4E0E\u72B6\u6001 \xB7 \u539F\u7A3F\u7B2C1\u300118\u9875", sourcePages: [1, 18], link: S("doc-icebreaking", 18) }] }, { id: "ancient-temple", title: "\u5C71\u4E2D\u53E4\u5239", color: "#b6c89b", theme: "\u53E4\u5239\u7BB1\u5EAD \xB7 \u5FA1\u5251\u4E0E\u7B26\u7B93", role: "\u56E2\u961F\u9879\u76EE \xB7 \u672C\u4EBA\u8D1F\u8D23\u53E4\u5239\u767D\u76D2\u4E0E\u673A\u5173\u84DD\u56FE", attributes: { role: ["\u56E2\u961F\u9879\u76EE", "\u53E4\u5239\u767D\u76D2\u4E0E\u84DD\u56FE"], at: ["\u7BB1\u5EAD\u63A2\u7D22", "\u5FA1\u5251\u4E0E\u7B26\u7B93"], with: ["\u9635\u6CD5\u5207\u6362", "\u5854\u697C\u9650\u65F6\u6311\u6218"] }, overview: { key: "overview", section: "\u5173\u5361\u76EE\u6807", title: "\u8BA9\u5FA1\u5251\u5B66\u4E60\u878D\u5165\u53E4\u5239\u7BB1\u5EAD", asset: "yili-03.jpg", assetLocation: "static/projects/images", kind: "\u539F\u56E2\u961F\u9879\u76EE\u6F14\u793A\u753B\u9762", points: [["\u80FD\u529B\u76EE\u6807", `\u56F4\u7ED5\u5251\u4E0E\u7B26\u7B93\u89E3\u8C1C
\u9010\u6B65\u6062\u590D\u5FA1\u5251\u80FD\u529B`], ["\u7A7A\u95F4\u7EC4\u7EC7", `\u6CBF\u53E4\u5239\u95ED\u73AF\u63A2\u7D22
\u7A7F\u63D2\u6218\u6597\u4E0E\u80FD\u529B\u6821\u9A8C`]], boundary: "\u56E2\u961F\u9879\u76EE \xB7 \u8349\u7A3F\u5B58\u5728\u7248\u672C\u5DEE\u5F02", source: "\u300A\u4ECE\u5FA1\u5251\u98DE\u884C\u5F00\u59CB\u300B\u7B2C\u4E09\u7248\u8349\u7A3F \xB7 \u7EA6\u675F\u3001\u73A9\u6CD5\u4E0E\u6D41\u7A0B\uFF1B\u804C\u8D23\u636E\u539F\u7AD9\u8BF4\u660E", sourceShort: "\u5173\u5361\u76EE\u6807 \xB7 \u539F\u7B2C\u4E09\u7248\u8349\u7A3F", sourcePages: [1, 2, 3, 4], link: J }, cards: [{ key: "route", section: "\u7A7A\u95F4\u4E0E\u8282\u594F", title: "\u524D\u6BBF\u5165\u95E8\uFF0C\u518D\u8FDB\u5165\u7BB1\u5EAD\u5FAA\u73AF", asset: "ancient-flow-tutorial.png", kind: "\u539F\u8349\u7A3F\u903B\u8F91\u56FE\u5C40\u90E8", points: [["\u63A2\u7D22\u8DEF\u7EBF", `\u524D\u6BBF\u4E0E\u504F\u6BBF
\u5730\u4E0B\u5BAB\u6BBF\u4E0E\u901A\u9053
\u7ECF\u504F\u6BBF\u4E8C\u8FDB\u5165\u5927\u6BBF`], ["\u80FD\u529B\u6559\u5B66", `\u4ECE\u7834\u7B26\u5F00\u95E8
\u5230\u9635\u6CD5\u5207\u6362`]], source: "\u300A\u4ECE\u5FA1\u5251\u98DE\u884C\u5F00\u59CB\u300B\u7B2C\u4E09\u7248\u8349\u7A3F \xB7 \u6B63\u6587\u4E0E\u6D41\u7A0B\u56FE", sourceShort: "\u539F\u903B\u8F91\u56FE\u5C40\u90E8 \xB7 \u7B2C\u4E09\u7248\u8349\u7A3F", sourcePages: [1, 2, 4], link: J }, { key: "switch", section: "\u673A\u5236\u62C6\u89E3", title: "\u7528\u540C\u65F6\u547D\u4E2D\u9A8C\u8BC1\u5FA1\u5251\u80FD\u529B", asset: "ancient-p02-mechanism-text.png", kind: "\u636E\u539F\u7B56\u5212\u8349\u7A3F\u8F6C\u5199\u7684\u673A\u5236\u793A\u610F", diagram: "temple-three-seals", points: [["\u6311\u6218\u89C4\u5219", `\u5355\u72EC\u51FB\u7834\u4E00\u5904\u7B26\u7B93
\u7B26\u7B93\u4F1A\u7ACB\u5373\u91CD\u65B0\u751F\u6210`], ["\u80FD\u529B\u8FD0\u7528", `\u627E\u5BF9\u89D2\u5EA6\u540C\u65F6\u51FB\u7834\u4E09\u5904
\u6253\u5F00\u901A\u5F80\u5C4B\u9876\u7684\u7A97\u6237`]], boundary: "\u7B2C\u4E09\u7248\u8349\u7A3F \xB7 \u89C4\u5219\u672A\u5B9A\u7A3F", source: "\u300A\u4ECE\u5FA1\u5251\u98DE\u884C\u5F00\u59CB\u300B\u7B2C\u4E09\u7248\u8349\u7A3F \xB7 \u5927\u6BBF\u5FA1\u5251\u6559\u5B66\u6BB5\uFF1B\u6D41\u7A0B\u6587\u5B57\u6309\u539F\u7A3F\u8F6C\u5199\uFF0C\u975E\u5B9E\u673A\u622A\u56FE", sourceShort: "\u539F\u8349\u7A3F\u7B2C2\u9875 \xB7 \u673A\u5236\u8F6C\u5199\u793A\u610F", sourcePages: [2], link: J }, { key: "towers", section: "\u7EC4\u5408\u6311\u6218", title: "\u7528\u56DB\u5EA7\u5854\u697C\u4E32\u8D77\u9650\u65F6\u6821\u9A8C", asset: "ancient-flow-lower.png", kind: "\u539F\u8349\u7A3F\u903B\u8F91\u56FE\u5C40\u90E8", points: [["\u7EC4\u5408\u6311\u6218", `\u56DB\u5EA7\u5854\u697C\u9650\u65F6\u653E\u7F6E\u9635\u76D8
\u5FA1\u5251\u98DE\u884C\u4E0E\u6218\u6597\u7A7F\u63D2`], ["\u56DE\u5230\u4E3B\u7EBF", `\u89E3\u9664\u5C01\u5370\u3001\u53D6\u5F97\u5B9D\u7269
\u5EAD\u9662\u5934\u76EE\u6218\u540E\u8FD4\u56DE\u524D\u6BBF`]], source: "\u300A\u4ECE\u5FA1\u5251\u98DE\u884C\u5F00\u59CB\u300B\u7B2C\u4E09\u7248\u8349\u7A3F \xB7 \u5854\u697C\u6BB5\u4E0E\u6D41\u7A0B\u56FE", sourceShort: "\u539F\u903B\u8F91\u56FE\u5C40\u90E8 \xB7 \u7B2C\u4E09\u7248\u8349\u7A3F", sourcePages: [2, 3, 4], link: J }, { key: "role", section: "\u804C\u8D23\u4E0E\u8FB9\u754C", title: "\u56E2\u961F\u534F\u4F5C\u4E2D\u7684\u5173\u5361\u804C\u8D23", asset: "yili-03.jpg", assetLocation: "static/projects/images", kind: "\u539F\u56E2\u961F\u9879\u76EE\u6F14\u793A\u753B\u9762", points: [["\u672C\u4EBA\u8D1F\u8D23", `\u53E4\u5239\u533A\u57DF\u767D\u76D2
\u89E3\u8C1C\u673A\u5173\u903B\u8F91\u4E0E\u84DD\u56FE`], ["\u534F\u4F5C\u8303\u56F4", `\u4E0E\u7F8E\u672F\u3001\u7A0B\u5E8F\u534F\u4F5C
\u63A8\u8FDB\u5173\u5361\u5B9E\u73B0`]], boundary: "\u8349\u7A3F\u4FDD\u7559\u201C\u4E09\u94A5\u5319 / \u56DB\u9635\u76D8\u201D\u5DEE\u5F02", source: "\u804C\u8D23\u636E\u539F\u7AD9\u9879\u76EE\u8BF4\u660E\uFF1B\u7B56\u5212\u8349\u7A3F\u542B\u201C\u4E09\u94A5\u5319/\u56DB\u9635\u76D8\u201D\u5DEE\u5F02", sourceShort: "\u804C\u8D23\u636E\u539F\u7AD9 \xB7 \u539F\u7A3F\u4FDD\u7559\u7248\u672C\u5DEE\u5F02", sourcePages: [1, 2, 3, 4], link: J }] }, { id: "moston", title: "Gamified Moston", color: "#cbd386", theme: "\u57CE\u5E02\u666F\u89C2 \xB7 \u7A7A\u95F4\u4E0E\u73A9\u6CD5\u6A21\u62DF", role: "\u4E2A\u4EBA\u9879\u76EE \xB7 \u7A7A\u95F4\u5206\u6790\u4E0E\u6E38\u620F\u6A21\u62DF", attributes: { role: ["\u4E2A\u4EBA\u9879\u76EE", "\u7A7A\u95F4\u4E0E\u6E38\u620F\u6A21\u62DF"], at: ["\u57CE\u5E02\u666F\u89C2", "\u5305\u5BB9\u6027\u8BBE\u8BA1\u63A2\u7D22"], with: ["\u9650\u65F6\u5230\u6821", "\u8DEF\u5F84\u4E0E\u53CD\u9988"] }, overview: { key: "overview", section: "\u7814\u7A76\u76EE\u6807", title: "\u7528\u6E38\u620F\u6A21\u62DF\u89C2\u5BDF\u7A7A\u95F4\u9009\u62E9", asset: "yili-04.jpg", assetLocation: "static/projects/images", kind: "\u539F\u9879\u76EE\u6F14\u793A\u753B\u9762", points: [["\u7814\u7A76\u95EE\u9898", `\u540C\u4E00\u573A\u5730\u4E0E\u5230\u6821\u4EFB\u52A1
\u4E0D\u540C\u89D2\u8272\u5982\u4F55\u9009\u62E9\u8DEF\u7EBF`], ["\u7814\u7A76\u94FE\u6761", `\u73AF\u5883\u89C4\u5219\u8FDB\u5165\u6A21\u62DF
\u8BB0\u5F55\u8DEF\u5F84\uFF0C\u518D\u6574\u7406\u53CD\u9988`]], boundary: "\u8BBE\u8BA1\u6A21\u62DF \xB7 \u672A\u8BC1\u660E\u73B0\u5B9E\u6539\u5584\u6548\u679C", source: "Chen_YIli_LA2B \xB7 \u7B2C40\u201343\u9875\uFF1B\u753B\u9762\u6CBF\u7528\u539F\u9879\u76EE\u5C01\u9762", sourceShort: "\u7814\u7A76\u8303\u56F4 \xB7 LA2B\u7B2C40\u201343\u9875", sourcePages: [40, 41, 42, 43], link: S("doc-moston", 40) }, cards: [{ key: "gameplay", section: "\u6A21\u62DF\u89C4\u5219", title: "\u628A\u73AF\u5883\u611F\u53D7\u8F6C\u6210\u4EFB\u52A1\u7EA6\u675F", asset: "moston-p40.png", kind: "\u539F\u8BBE\u8BA1\u6A21\u62DF\u753B\u9762", points: [["\u4EFB\u52A1\u89C4\u5219", `\u751F\u547D\u6761\u4E0E\u5012\u8BA1\u65F6
\u9650\u5B9A\u65F6\u95F4\u62B5\u8FBE\u5B66\u6821`], ["\u6A21\u62DF\u53D8\u91CF", `\u5F3A\u5149\u3001\u9053\u8DEF\u566A\u58F0\u4E0E\u4EBA\u7FA4
\u5F71\u54CD\u6E38\u620F\u4E2D\u7684\u751F\u547D\u503C`]], source: "Chen_YIli_LA2B \xB7 \u7B2C40\u9875 \xB7 \u73A9\u6CD5\u89C4\u5219", sourceShort: "\u539F\u6A21\u62DF\u753B\u9762 \xB7 LA2B\u7B2C40\u9875", sourcePages: [40], link: S("doc-moston", 40) }, { key: "path", section: "\u8DEF\u5F84\u6BD4\u8F83", title: "\u6BD4\u8F83\u4E09\u79CD\u626E\u6F14\u89D2\u8272\u7684\u8DEF\u7EBF", asset: "moston-p41.png", kind: "\u539F\u6A21\u62DF\u8DEF\u5F84\u53E0\u56FE", points: [["\u626E\u6F14\u89D2\u8272", `\u7279\u6B8A\u6559\u80B2\u9700\u6C42\u5B66\u751F
\u5176\u4ED6\u884C\u4EBA\u4E0E\u6E38\u5BA2`], ["\u89C2\u5BDF\u5BF9\u8C61", `\u4ECE\u8D77\u70B9\u524D\u5F80\u5B66\u6821
\u6BD4\u8F83\u8DEF\u5F84\u9009\u62E9\u5DEE\u5F02`]], source: "Chen_YIli_LA2B \xB7 \u7B2C41\u9875 \xB7 \u73A9\u5BB6\u8DEF\u5F84\uFF1B\u89D2\u8272\u626E\u6F14\u4E0D\u4EE3\u8868\u53C2\u4E0E\u8005\u672C\u4EBA\u7684\u8EAB\u4EFD", sourceShort: "\u539F\u8DEF\u5F84\u53E0\u56FE \xB7 LA2B\u7B2C41\u9875", sourcePages: [41], link: S("doc-moston", 41) }, { key: "feedback", section: "\u8DEF\u5F84\u4E0E\u53CD\u9988", title: "\u8BA9\u9009\u8DEF\u8BB0\u5F55\u5BF9\u5E94\u5177\u4F53\u53CD\u9988", asset: "moston-p42.png", kind: "\u539F\u6A21\u62DF\u53CD\u9988\u56FE", points: [["\u8DEF\u7EBF\u53CD\u9988", `\u5165\u53E3\u5F15\u5BFC\u4E0D\u6E05
\u9009\u62E9\u907F\u6652\u3001\u907F\u566A\u7684\u8DEF\u5F84`], ["\u7A7A\u95F4\u5438\u5F15", `\u6865\u3001\u5496\u5561\u5E97\u4E0E\u5E7F\u573A
\u5438\u5F15\u4E0D\u540C\u89D2\u8272\u63A2\u7D22`]], source: "Chen_YIli_LA2B \xB7 \u7B2C42\u9875 \xB7 \u73A9\u5BB6\u53CD\u9988", sourceShort: "\u539F\u53CD\u9988\u56FE \xB7 LA2B\u7B2C42\u9875", sourcePages: [42], link: S("doc-moston", 42) }, { key: "reflection", section: "\u8BBE\u8BA1\u56DE\u5E94\u4E0E\u8FB9\u754C", title: "\u4ECE\u6A21\u62DF\u53CD\u9988\u5F62\u6210\u7A7A\u95F4\u5EFA\u8BAE", asset: "moston-p43.png", kind: "\u539F\u8BBE\u8BA1\u6A21\u62DF\u53CD\u601D\u9875", points: [["\u672C\u4EBA\u8D1F\u8D23", `\u573A\u5730\u8C03\u7814\u3001\u7A7A\u95F4\u5206\u6790
\u6E38\u620F\u6A21\u62DF\u4E0E\u65B9\u6848\u8F93\u51FA`], ["\u8BBE\u8BA1\u56DE\u5E94", `\u52A0\u5F3A\u5BFC\u5411\u3001\u906E\u836B\u4E0E\u4F11\u61A9
\u5EFA\u8BAE\u6765\u81EA\u672C\u6B21\u6A21\u62DF\u53CD\u9988`]], boundary: "\u8BBE\u8BA1\u6A21\u62DF \xB7 \u672A\u8BC1\u660E\u73B0\u5B9E\u6539\u5584\u6548\u679C", source: "Chen_YIli_LA2B \xB7 \u7B2C43\u9875\uFF1B\u804C\u8D23\u636E\u539F\u7AD9\u9879\u76EE\u8BF4\u660E", sourceShort: "\u539F\u53CD\u601D\u9875 \xB7 LA2B\u7B2C43\u9875", sourcePages: [43], link: S("doc-moston", 43) }] }], Se = [{ title: "\u7834\u788E\u4E4B\u5BB6", titleSmall: ["\u7834\u788E\u4E4B\u5BB6"], url: "https://www.bilibili.com/video/BV1k41cBXEfU/", attributes: { role: ["\u72EC\u7ACB\u8BBE\u8BA1", "\u865A\u5E7B\u5F15\u64CE 5"] }, distinctions: [], images: ["yili-01.webp"] }, { title: "\u7834\u51B0\u542F\u822A", titleSmall: ["\u7834\u51B0\u542F\u822A"], url: "https://www.bilibili.com/video/BV1oTXzBvEyA/", attributes: { role: ["\u72EC\u7ACB\u8BBE\u8BA1", "\u865A\u5E7B\u5F15\u64CE 5"] }, distinctions: [], images: ["yili-02.webp"] }, { title: "\u5C71\u4E2D\u53E4\u5239", titleSmall: ["\u5C71\u4E2D\u53E4\u5239"], url: "https://www.bilibili.com/video/BV1Bg5a6dEHL/", attributes: { role: ["\u56E2\u961F \xB7 \u5173\u5361\u8BBE\u8BA1", "\u865A\u5E7B\u5F15\u64CE 5"] }, distinctions: [], images: ["yili-03.jpg"] }, { title: "Gamified Moston", titleSmall: ["Gamified", "Moston"], url: "https://www.bilibili.com/video/BV1jRGb6GEwE/", attributes: { role: ["\u72EC\u7ACB\u8BBE\u8BA1", "\u7A7A\u95F4\u4E0E\u6E38\u620F\u6A21\u62DF"] }, distinctions: [], images: ["yili-04.jpg"] }], Ae = Se.map((d, i) => {
  const s = xe[i];
  return { ...d, attributes: s.attributes, originalCover: d.images[0], images: [s.overview, ...s.cards].map((R) => `${s.id}-${R.key}.webp`), evidence: [s.overview, ...s.cards] };
}), Be = [{ id: "qq", name: "QQ", value: "1102910102", source: "discord", offset: [-7.848503, -7393e-6], url: "./contact/qq.html", align: "right" }, { id: "wechat", name: "\u5FAE\u4FE1", value: "13358521997", source: "linkedIn", offset: [-7.06765, -3.412827], url: "./contact/wechat.html", align: "right" }, { id: "email", name: "\u7535\u5B50\u90AE\u7BB1", value: "chenyili2024@gmail.com", source: "mail", offset: [1.714041, -7.659058], url: "./contact/email.html", align: "left" }, { id: "bilibili", name: "B\u7AD9\u4E3B\u9875", value: "https://space.bilibili.com/129912981", source: "youtube", offset: [4.881779, -6.145515], url: "./contact/bilibili.html", align: "left" }, { id: "phone", name: "\u7535\u8BDD", value: "13358521997", source: "twitch", offset: [-1.764755, -7.64753], url: "./contact/phone.html", align: "right" }, { id: "resume", name: "\u4E2A\u4EBA\u7B80\u5386", source: "bluesky", offset: [7.069563, -3.408871], url: "./Portfolio/chen-yili-resume-original.pdf", description: "\u672C\u6B21\u63D0\u4F9B\u7684\u7B80\u5386\u539F\u7A3F \xB7 2 \u9875\uFF0C\u4FDD\u7559\u539F\u6587\u4E0E\u539F\u6709\u8054\u7CFB\u65B9\u5F0F\u3002\u5F53\u524D\u8054\u7CFB\u90AE\u7BB1\uFF1Achenyili2024@gmail.com\u3002", align: "left" }, { id: "portfolio", name: "\u4F5C\u54C1\u96C6\u5408\u8F91", source: "x", offset: [7.848513, 0], url: "./Portfolio/chen-yili-level-design-collection.pdf", description: "\u7834\u788E\u4E4B\u5BB6 + \u7834\u51B0\u542F\u822A \xB7 33\u9875\u5173\u5361\u8BF4\u660E\u3002\u4FDD\u7559\u672C\u6B21\u63D0\u4F9B\u7684\u539F\u7A3F\u3002", align: "left" }];
function Pe(d, i, s, R, T, D) {
  if (new URLSearchParams(i.location.search || "").get("resourceDiagnostics") !== "1") return null;
  const m = [], k = /* @__PURE__ */ new Set(), j = 80;
  let A = false, b = 0, E = 0;
  const n = () => {
    var _a, _b;
    return ((_b = (_a = i.performance) == null ? void 0 : _a.now) == null ? void 0 : _b.call(_a)) ?? 0;
  }, c = () => {
    var _a;
    E++;
    for (const r of k) (_a = i.cancelAnimationFrame) == null ? void 0 : _a.call(i, r);
    k.clear();
  }, L = (r, p = {}) => {
    if (!A) return;
    const v = { stage: r, time: n(), session: b };
    for (const I of ["request", "target", "displayed"]) Number.isFinite(p[I]) && (v[I] = p[I]);
    m.push(v), m.length > j && m.shift();
  }, C = (r) => /url\(/i.test(r || "") ? "[url omitted]" : String(r || "").slice(0, 160), $ = (r) => {
    if (!r) return null;
    const p = r.getBoundingClientRect(), v = i.getComputedStyle(r), I = {}, Q = {};
    for (const F of ["x", "y", "width", "height"]) I[F] = p[F];
    for (const F of ["display", "visibility", "opacity", "transform", "filter", "contain", "overflowX", "overflowY", "isolation", "zIndex", "clipPath"]) Q[F] = C(v[F]);
    return { bounds: I, styles: Q, hidden: !!r.hidden, scrollTop: r.scrollTop, scrollLeft: r.scrollLeft };
  };
  return i.__resourceDiagnostics = Object.freeze({ snapshot: () => {
    const r = s.querySelector(".site-resource-page-feedback"), p = s.querySelector(".site-resource-page-content img");
    return { time: n(), active: A, session: b, eventLimit: j, events: m.map((v) => ({ ...v })), layout: { dialog: $(s), header: $(R), status: $(T), body: $(D), feedback: $(r), image: $(p) }, feedback: r ? { hidden: !!r.hidden, state: ["idle", "loading", "error", "ready"].includes(r.dataset.state) ? r.dataset.state : "unknown" } : null, image: p ? { complete: p.complete, naturalWidth: p.naturalWidth, naturalHeight: p.naturalHeight } : null, backdropFilter: C(i.getComputedStyle(s, "::backdrop").backdropFilter), visibilityState: d.visibilityState };
  } }), { begin() {
    c(), A = true, b++, L("open");
  }, request(r) {
    c(), L("request", r);
  }, record: L, afterCommit(r) {
    if (!A || !i.requestAnimationFrame) return;
    const p = b, v = E, I = i.requestAnimationFrame(() => {
      k.delete(I), A && b === p && E === v && L("animation-frame-callback", r);
    });
    k.add(I);
  }, stop() {
    L("close"), A = false, c();
  } };
}
let Z;
function $e(d, i = "\u4F5C\u54C1\u8D44\u6599", s = "") {
  return (Z == null ? void 0 : Z.open(d, i, false, s)) ?? false;
}
function Ie({ document: d = document, window: i = window } = {}) {
  if (Z) return Z;
  let s, R, T, D, m = 0, k = false, j, A, b, E;
  const n = (e, t, o) => {
    const a = d.createElement(e);
    return t && (a.textContent = t), o && (a.className = o), a;
  }, c = n("dialog", "", "site-resource-dialog material-ui-frame");
  c.setAttribute("aria-labelledby", "site-resource-title");
  const L = n("header", "", "site-resource-header"), C = n("h2", "", "site-resource-title");
  C.id = "site-resource-title";
  const $ = n("button", "\u5173\u95ED\u8D44\u6599", "site-resource-close");
  $.type = "button", $.setAttribute("aria-label", "\u5173\u95ED\u8D44\u6599\uFF0C\u8FD4\u56DE\u539F\u754C\u9762");
  const r = n("div", "", "site-resource-body"), p = n("p", "", "site-resource-status");
  p.setAttribute("role", "status"), L.append(C, $), c.append(L, p, r), d.body.append(c);
  const v = Pe(d, i, c, L, p, r);
  for (const e of ["tl", "tr", "bl", "br"]) {
    const t = n("img", "", `material-corner material-corner-${e}`);
    t.src = "./ui/materials/brass-corner.png", t.alt = "", t.setAttribute("aria-hidden", "true"), c.append(t);
  }
  const I = () => {
    var _a, _b, _c;
    if (s == null ? void 0 : s.inputs) {
      for (const e of s.inputs.actions.values()) e.active = false, e.value = 0, e.trigger = null, e.activeKeys.clear();
      s.inputs.keyboard && (s.inputs.keyboard.pressed.length = 0), s.inputs.nipple && (s.inputs.nipple.active = false, s.inputs.nipple.progress = 0), (_b = (_a = s.player) == null ? void 0 : _a.suspensions) == null ? void 0 : _b.fill("low"), (_c = s.inputs.pointer) == null ? void 0 : _c.reset();
    }
  }, Q = () => {
    !(s == null ? void 0 : s.inputs) || R || (R = [...s.inputs.filters], I(), s.inputs.filters.clear(), s.inputs.filters.add("siteResource"));
  }, F = () => {
    var _a, _b;
    v == null ? void 0 : v.stop(), b == null ? void 0 : b(), b = null, E == null ? void 0 : E(), E = null, m++, D = null, A = null, c.open && c.close(), r.replaceChildren(), p.textContent = "";
    const e = !(s == null ? void 0 : s.inputs) || s.inputs.filters.has("siteResource") && !s.graphicsFailed && !((_a = s.player) == null ? void 0 : _a.respawning);
    if (R && e) {
      I(), s.inputs.filters.clear();
      for (const t of R) s.inputs.filters.add(t);
    }
    R = null, e || ((_b = s == null ? void 0 : s.inputs) == null ? void 0 : _b.filters.delete("siteResource")), e && (T == null ? void 0 : T.isConnected) && T.focus({ preventScroll: true });
  }, O = () => {
    var _a;
    c.open && (F(), ((_a = i.history.state) == null ? void 0 : _a.siteResource) && (k = true, i.history.back()));
  };
  $.addEventListener("click", O), c.addEventListener("cancel", (e) => {
    e.preventDefault(), O();
  }), c.addEventListener("click", (e) => {
    e.target === c && O();
  });
  for (const e of ["keydown", "keyup"]) i.addEventListener(e, (t) => {
    var _a, _b;
    if (c.open) {
      if (t.stopImmediatePropagation(), e === "keydown" && t.key === "Enter" && (A == null ? void 0 : A.input) === d.activeElement) {
        t.preventDefault(), t.repeat || A.commit();
        return;
      }
      if (t.key === "Escape" && (t.preventDefault(), e === "keyup" && O()), e === "keydown" && t.key === "Tab") {
        const o = [...c.querySelectorAll('button:not(:disabled),input:not(:disabled),textarea,summary,[tabindex="0"]')].filter((g) => !g.hidden), a = o.indexOf(d.activeElement);
        (t.shiftKey && a <= 0 || !t.shiftKey && a === o.length - 1) && (t.preventDefault(), (_a = o[t.shiftKey ? o.length - 1 : 0]) == null ? void 0 : _a.focus());
      }
      e === "keydown" && (t.key === "Enter" || t.key === " ") && ((_b = d.activeElement) == null ? void 0 : _b.matches("button")) && (t.preventDefault(), t.repeat || d.activeElement.click());
    }
  }, true);
  const ne = (e, t = "\u590D\u5236\u5730\u5740") => {
    const o = m, a = n("div", "", "site-resource-copy"), g = n("input");
    g.readOnly = true, g.value = e, g.setAttribute("aria-label", t === "\u590D\u5236\u90AE\u7BB1" ? "\u90AE\u7BB1\u5730\u5740" : t.replace(/^复制/, "") || "\u6765\u6E90\u5730\u5740");
    const f = n("button", t);
    return f.type = "button", f.addEventListener("click", async () => {
      try {
        await i.navigator.clipboard.writeText(e), o === m && (p.textContent = "\u5DF2\u590D\u5236");
      } catch {
        o === m && (g.focus(), g.select(), p.textContent = "\u65E0\u6CD5\u81EA\u52A8\u590D\u5236\uFF0C\u8BF7\u590D\u5236\u5DF2\u9009\u4E2D\u7684\u5730\u5740\u3002");
      }
    }), a.append(g, f), a;
  }, de = (e, t) => {
    const o = m, a = n("img");
    return a.alt = t, a.src = e, a.decoding = "async", a.addEventListener("error", () => {
      o === m && a.isConnected && (p.textContent = "\u56FE\u7247\u6682\u65F6\u65E0\u6CD5\u52A0\u8F7D\u3002\u4F60\u53EF\u4EE5\u5173\u95ED\u540E\u91CD\u8BD5\u3002");
    }), a;
  }, pe = (e, t, o) => {
    const a = n("div", "", "site-resource-image-reader"), g = n("nav", "", "site-resource-image-controls");
    g.setAttribute("aria-label", "\u8D44\u6599\u56FE\u7F29\u653E");
    const f = n("button", "\u7F29\u5C0F"), l = n("button", "\u653E\u5927"), u = n("button", "\u9002\u5E94\u5BBD\u5EA6"), B = n("span"), h = n("div", "", "site-resource-image-viewport"), U = o || de(e, t);
    h.tabIndex = 0, h.setAttribute("aria-label", "\u8D44\u6599\u56FE\uFF0C\u53EF\u6EDA\u52A8\u67E5\u770B\u653E\u5927\u5185\u5BB9"), B.setAttribute("aria-live", "polite");
    let w = 1;
    const y = () => {
      U.style.width = `${w * 100}%`, U.style.maxWidth = "none", B.textContent = `${w * 100}%`, f.disabled = w <= 1, l.disabled = w >= 4;
    };
    for (const _ of [f, l, u]) _.type = "button";
    return f.addEventListener("click", () => {
      w = Math.max(1, w - 0.5), y();
    }), l.addEventListener("click", () => {
      w = Math.min(4, w + 0.5), y();
    }), u.addEventListener("click", () => {
      w = 1, y(), h.scrollLeft = h.scrollTop = 0;
    }), g.append(f, l, u, B), h.append(U), a.append(g, h), y(), a;
  }, we = (e, t) => {
    var _a;
    const o = (_a = new URL(e.url).pathname.match(/^\/video\/(BV[A-Za-z0-9]+)\/?$/)) == null ? void 0 : _a[1];
    if (!o) return;
    const a = n("section", "", "site-resource-video"), g = n("div", "", "site-resource-video-controls"), f = n("button", "\u52A0\u8F7D\u5B98\u65B9\u64AD\u653E\u5668"), l = n("button", "\u6536\u8D77\u64AD\u653E\u5668");
    f.type = l.type = "button", l.hidden = true;
    const u = n("div", "", "site-resource-video-host"), B = de(new URL(`./projects/images/${e.originalCover}`, d.baseURI).href, `${e.title} \xB7 \u539F\u9879\u76EE\u5C01\u9762`);
    let h;
    const U = () => t === m && c.open, w = () => {
      h && (h.src = "about:blank", h.remove(), h = null), u.replaceChildren(), B.hidden = false, l.hidden = true, f.disabled = false;
    };
    b = w, f.addEventListener("click", () => {
      if (!U() || h) return;
      const y = n("iframe");
      y.title = `${e.title} \xB7 \u54D4\u54E9\u54D4\u54E9\u5B98\u65B9\u64AD\u653E\u5668`, y.tabIndex = 0, y.setAttribute("sandbox", "allow-scripts allow-same-origin allow-presentation"), y.setAttribute("allow", "fullscreen; encrypted-media"), y.setAttribute("allowfullscreen", ""), y.referrerPolicy = "strict-origin-when-cross-origin";
      const _ = new URL("https://player.bilibili.com/player.html");
      _.search = new URLSearchParams({ bvid: o, p: "1", autoplay: "0", muted: "1", danmaku: "0", poster: "1" }).toString(), y.addEventListener("load", () => {
        U() && h === y && (p.textContent = "\u64AD\u653E\u5668\u9875\u9762\u5DF2\u54CD\u5E94\u3002\u8BF7\u5728\u64AD\u653E\u5668\u5185\u70B9\u51FB\u64AD\u653E\u5E76\u81EA\u884C\u5F00\u542F\u58F0\u97F3\uFF1B\u9875\u9762\u54CD\u5E94\u4E0D\u4EE3\u8868\u89C6\u9891\u5DF2\u6210\u529F\u64AD\u653E\u3002");
      }), y.addEventListener("error", () => {
        !U() || h !== y || (w(), p.textContent = "\u64AD\u653E\u5668\u52A0\u8F7D\u5931\u8D25\uFF0C\u5DF2\u6536\u8D77\u3002\u53EF\u91CD\u65B0\u52A0\u8F7D\uFF0C\u6216\u590D\u5236\u4E0B\u65B9\u5730\u5740\u81EA\u884C\u67E5\u9605\u3002", f.focus({ preventScroll: true }));
      }), h = y, y.src = _.href, u.replaceChildren(y), B.hidden = true, f.disabled = true, l.hidden = false, p.textContent = "\u6B63\u5728\u8BF7\u6C42\u5B98\u65B9\u64AD\u653E\u5668\uFF1B\u662F\u5426\u53EF\u64AD\u653E\u4EE5\u64AD\u653E\u5668\u5B9E\u9645\u753B\u9762\u4E3A\u51C6\u3002", l.focus({ preventScroll: true });
    }), l.addEventListener("click", () => {
      U() && (w(), p.textContent = "\u64AD\u653E\u5668\u5DF2\u6536\u8D77\u3002", f.focus({ preventScroll: true }));
    }), g.append(f, l), a.append(g, n("p", "\u70B9\u51FB\u201C\u52A0\u8F7D\u5B98\u65B9\u64AD\u653E\u5668\u201D\u624D\u4F1A\u8FDE\u63A5\u54D4\u54E9\u54D4\u54E9\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u64AD\u653E\u3002\u64AD\u653E\u53EF\u80FD\u53D7\u5E73\u53F0\u3001\u7F51\u7EDC\u3001\u5730\u533A\u6216\u767B\u5F55\u9650\u5236\uFF1B\u7A7A\u767D\u6216\u65E0\u6CD5\u64AD\u653E\u65F6\uFF0C\u53EF\u6536\u8D77\u540E\u91CD\u8BD5\uFF0C\u6216\u590D\u5236\u4E0B\u65B9\u5730\u5740\u3002\u64AD\u653E\u5668\u5185 Esc \u7531\u5E73\u53F0\u5904\u7406\uFF0C\u53EF\u7528\u4E0A\u65B9\u201C\u6536\u8D77\u64AD\u653E\u5668\u201D\u6216\u53F3\u4E0A\u89D2\u201C\u5173\u95ED\u8D44\u6599\u201D\u9000\u51FA\u3002"), B, u), r.append(a);
  }, fe = async (e) => {
    const t = await i.fetch(e, { credentials: "same-origin", redirect: "error" });
    if (!t.ok) throw new Error(`HTTP ${t.status}`);
    return t.text();
  }, me = (e) => {
    const t = m, o = n("button", "\u4E0B\u8F7D\u539F\u6587\u4EF6");
    return o.type = "button", o.addEventListener("click", async () => {
      o.disabled = true;
      try {
        const a = await i.fetch(e, { credentials: "same-origin", redirect: "error" });
        if (!a.ok) throw new Error("download unavailable");
        const g = await a.blob(), f = i.URL.createObjectURL(g), l = n("a");
        l.href = f, l.download = decodeURIComponent(e.pathname.split("/").pop()), l.dataset.resourceDownload = "true", d.body.append(l), l.click(), l.remove(), i.setTimeout(() => i.URL.revokeObjectURL(f), 6e4), t === m && (p.textContent = "\u5DF2\u8BF7\u6C42\u4E0B\u8F7D\u539F\u6587\u4EF6\u3002");
      } catch {
        t === m && (p.textContent = "\u4E0B\u8F7D\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002");
      } finally {
        o.disabled = false;
      }
    }), o;
  }, Ee = async (e, t) => {
    const o = new URL(e.url, d.baseURI), a = decodeURIComponent(o.pathname.split("/").pop()), g = o.origin === i.location.origin, f = Be.find((l) => l.value && new URL(l.url, d.baseURI).href === o.href);
    if (f) C.textContent = `${f.name} \xB7 \u9648\u5B9C\u7406`, r.append(n("p", f.id === "bilibili" ? "B\u7AD9\u4E3B\u9875 \xB7 \u7528\u6237ID 129912981" : "\u5173\u5361\u4E0E\u73A9\u6CD5\u8BBE\u8BA1 \xB7 \u9879\u76EE\u4EA4\u6D41\u4E0E\u5408\u4F5C")), r.append(ne(f.value, `\u590D\u5236${f.name}`)), r.append(n("p", f.id === "bilibili" ? "\u590D\u5236\u4E3B\u9875\u5730\u5740\u540E\uFF0C\u53EF\u5728\u4F60\u9009\u62E9\u7684\u6D4F\u89C8\u5668\u4E2D\u67E5\u770B\u3002" : f.id === "wechat" ? "\u590D\u5236\u5FAE\u4FE1\u53F7\u540E\uFF0C\u53EF\u5728\u5FAE\u4FE1\u4E2D\u641C\u7D22\u6DFB\u52A0\u3002" : f.id === "qq" ? "\u590D\u5236QQ\u53F7\u540E\uFF0C\u53EF\u5728QQ\u4E2D\u641C\u7D22\u6DFB\u52A0\u3002" : f.id === "phone" ? "\u590D\u5236\u7535\u8BDD\u53F7\u7801\u540E\uFF0C\u53EF\u5728\u7535\u8BDD\u5E94\u7528\u4E2D\u8054\u7CFB\u3002" : "\u590D\u5236\u90AE\u7BB1\u540E\uFF0C\u53EF\u5728\u4F60\u5E38\u7528\u7684\u90AE\u4EF6\u5E94\u7528\u4E2D\u64B0\u5199\u90AE\u4EF6\u3002"));
    else if (o.protocol === "mailto:") C.textContent = "\u8054\u7CFB\u9648\u5B9C\u7406", r.append(n("p", "\u5173\u5361\u4E0E\u73A9\u6CD5\u8BBE\u8BA1 \xB7 \u9879\u76EE\u4EA4\u6D41\u4E0E\u5408\u4F5C"), ne(o.pathname, "\u590D\u5236\u90AE\u7BB1"), n("p", "\u590D\u5236\u90AE\u7BB1\u540E\uFF0C\u53EF\u5728\u4F60\u5E38\u7528\u7684\u90AE\u4EF6\u5E94\u7528\u4E2D\u64B0\u5199\u90AE\u4EF6\u3002"));
    else if (g && /\.(pdf|docx)$/i.test(a)) {
      p.textContent = "\u6B63\u5728\u8BFB\u53D6\u7AD9\u5185\u6587\u6863\u2026";
      const l = JSON.parse(await fe(new URL("./resource-previews/manifest.json", d.baseURI)));
      if (t !== m) return;
      const u = l[a];
      if (!u) throw new Error("No local document preview");
      const B = { "chen-yili-resume-original.pdf": ["\u9648\u5B9C\u7406 \xB7 \u7B80\u5386\u539F\u7A3F\uFF082 \u9875\uFF09", "\u8FD9\u662F\u672C\u6B21\u63D0\u4F9B\u7684 2 \u9875\u7B80\u5386\u539F\u7A3F\uFF0C\u4FDD\u7559\u539F\u6587\uFF1B\u5176\u4E2D\u8054\u7CFB\u65B9\u5F0F\u53EF\u80FD\u4E0E\u672C\u7AD9\u4E0D\u540C\u3002\u5F53\u524D\u8054\u7CFB\u90AE\u7BB1\uFF1Achenyili2024@gmail.com\u3002"], "resume.pdf": ["\u9648\u5B9C\u7406 \xB7 \u5386\u53F2\u7B80\u5386\u539F\u7A3F\uFF082 \u9875\uFF09", "\u8FD9\u662F\u6B64\u524D\u53D1\u5E03\u7684\u5386\u53F2\u7B80\u5386\uFF0C\u4FDD\u7559\u539F\u6587\uFF1B\u4E0D\u4EE3\u8868\u672C\u6B21\u7B80\u5386\u6216\u5F53\u524D\u4EFB\u804C\u72B6\u6001\u3002\u5F53\u524D\u8054\u7CFB\u90AE\u7BB1\uFF1Achenyili2024@gmail.com\u3002"], "chen-yili-level-design-collection.pdf": ["\u4F5C\u54C1\u96C6\u6587\u6863\u5408\u8F91 \xB7 \u7834\u788E\u4E4B\u5BB6\u4E0E\u7834\u51B0\u542F\u822A\uFF0833 \u9875\uFF09", "\u8FD9\u4EFD 33 \u9875\u5408\u8F91\u5305\u542B\u300A\u7834\u788E\u4E4B\u5BB6\u300B\u548C\u300A\u7834\u51B0\u542F\u822A\u300B\u7684\u5173\u5361\u8BF4\u660E\uFF0C\u4E0D\u662F\u4E2A\u4EBA\u7B80\u5386\u3002"] }[a];
      if (C.textContent = (B == null ? void 0 : B[0]) || (e.title === "\u4F5C\u54C1\u8D44\u6599" ? a : e.title), B && r.append(n("p", B[1], "site-resource-context")), p.textContent = u.kind === "pdf" ? "\u539F\u6587\u6863\u9010\u9875\u9884\u89C8 \xB7 \u5185\u5BB9\u4FDD\u6301\u539F\u6837" : "\u539F\u7B56\u5212\u8349\u7A3F \xB7 \u4EE5\u4E0B\u4E3A\u539F\u6587\u6587\u5B57\uFF0C\u56FE\u8868\u4E0E\u6392\u7248\u8BF7\u67E5\u770B\u4E0B\u8F7D\u7684\u539F\u6587\u4EF6", u.kind === "pdf") {
        let h = Math.max(1, Math.min(u.pages.length, Math.floor(Number(new URLSearchParams(o.hash.slice(1)).get("page"))) || 1));
        const U = n("nav", "", "site-resource-pages");
        U.setAttribute("aria-label", "\u6587\u6863\u7FFB\u9875");
        const w = n("button", "\u4E0A\u4E00\u9875"), y = n("button", "\u4E0B\u4E00\u9875"), _ = n("button", "\u8DF3\u8F6C"), be = n("span"), P = n("input");
        P.type = "number", P.min = "1", P.max = String(u.pages.length), P.setAttribute("aria-label", "\u9875\u7801"), P.setAttribute("title", "\u8F93\u5165\u9875\u7801\u540E\u6309 Enter \u6216\u70B9\u51FB\u8DF3\u8F6C"), P.inputMode = "numeric", P.enterKeyHint = "go";
        const z = n("figure", "", "site-resource-page"), M = n("div", "", "site-resource-page-feedback"), ee = n("p"), te = n("button", "\u91CD\u65B0\u52A0\u8F7D\u672C\u9875");
        M.setAttribute("role", "status"), M.setAttribute("aria-live", "polite"), te.type = "button", M.append(ee, te);
        const ge = n("div", "", "site-resource-page-content");
        z.append(M, ge);
        let se = 0, W = null, ie;
        const ae = (G) => t === m && c.open && G === se;
        E = () => {
          se++, ie == null ? void 0 : ie();
        };
        const H = () => {
          if (t !== m || !c.open) return;
          const G = ++se, q = h;
          ie == null ? void 0 : ie();
          const N = { request: G, target: q, displayed: W };
          v == null ? void 0 : v.request(N), w.disabled = h <= 1, y.disabled = h >= u.pages.length, be.textContent = `/ ${u.pages.length} \u9875`, P.value = String(h), z.setAttribute("aria-busy", "true"), M.hidden = false, M.dataset.state = "loading", r.scrollTop = 0, ee.textContent = `\u6B63\u5728\u52A0\u8F7D\u7B2C ${q} / ${u.pages.length} \u9875\u2026${W ? ` \u4E0B\u65B9\u4ECD\u663E\u793A\u7B2C ${W} \u9875\u3002` : "\u56FE\u50CF\u51C6\u5907\u597D\u540E\u4F1A\u663E\u793A\u5728\u8FD9\u91CC\u3002"}\u52A0\u8F7D\u9700\u8981\u4E00\u4E9B\u65F6\u95F4\uFF0C\u53EF\u7A0D\u5019\u6216\u91CD\u65B0\u52A0\u8F7D\u3002`;
          const x = n("img");
          x.alt = `${a} \xB7 \u7B2C ${q} \u9875`, x.decoding = "async";
          let V = false, ye = false, ke;
          const le = () => {
            var _a;
            (_a = i.clearTimeout) == null ? void 0 : _a.call(i, ke), x.removeEventListener("load", ue), x.removeEventListener("error", K);
          }, K = (X) => {
            !ae(G) || V || (V = true, le(), z.setAttribute("aria-busy", "false"), v == null ? void 0 : v.record(X === "timeout" ? "timeout" : "error", N), M.dataset.state = "error", ee.textContent = `\u7B2C ${q} \u9875${X === "timeout" ? "\u52A0\u8F7D\u8D85\u65F6" : "\u52A0\u8F7D\u5931\u8D25"}\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u3002${W ? ` \u4E0B\u65B9\u4ECD\u663E\u793A\u7B2C ${W} \u9875\u3002` : "\u5F53\u524D\u5C1A\u672A\u663E\u793A\u4EFB\u4F55\u9875\u9762\u3002"}`);
          }, ue = async () => {
            var _a;
            if (!ae(G) || V || ye) return;
            ye = true, v == null ? void 0 : v.record("load", N);
            try {
              if (v == null ? void 0 : v.record("decode-start", N), typeof x.decode == "function" && await x.decode(), !x.naturalWidth) throw new Error("Empty page image");
            } catch {
              K();
              return;
            }
            if (!ae(G) || V) return;
            V = true, le(), v == null ? void 0 : v.record("decode-ready", N);
            const X = n("details");
            X.append(n("summary", "\u9605\u8BFB\u672C\u9875\u6587\u5B57"), n("pre", ((_a = u.textPages) == null ? void 0 : _a[q - 1]) || "\u6B64\u9875\u672A\u63D0\u53D6\u5230\u53EF\u8BFB\u6587\u5B57\uFF0C\u8BF7\u67E5\u770B\u539F\u9875\u56FE\u50CF\u3002")), ge.replaceChildren(pe(x.src, x.alt, x), X), W = q, z.setAttribute("aria-busy", "false"), M.hidden = true, M.dataset.state = "ready", ee.textContent = "", d.activeElement === te && P.focus({ preventScroll: true }), p.textContent = `\u539F\u6587\u6863\u9010\u9875\u9884\u89C8 \xB7 \u5DF2\u663E\u793A\u7B2C ${q} / ${u.pages.length} \u9875 \xB7 \u5185\u5BB9\u4FDD\u6301\u539F\u6837`, v == null ? void 0 : v.record("dom-commit", { ...N, displayed: q }), v == null ? void 0 : v.afterCommit({ ...N, displayed: q });
          };
          ie = () => {
            V = true, le();
          }, x.addEventListener("load", ue), x.addEventListener("error", K), ke = i.setTimeout(() => K("timeout"), 3e4), x.src = new URL(u.pages[q - 1], d.baseURI).href, x.complete && (x.naturalWidth ? ue() : K());
        };
        te.addEventListener("click", H), w.type = y.type = "button", w.addEventListener("click", () => {
          h > 1 && (h--, H());
        }), y.addEventListener("click", () => {
          h < u.pages.length && (h++, H());
        });
        const ce = () => {
          t !== m || !c.open || (h = Math.max(1, Math.min(u.pages.length, Math.floor(Number(P.value)) || 1)), H());
        };
        A = { input: P, commit: ce }, P.addEventListener("change", ce), _.type = "button", _.addEventListener("click", ce), U.append(w, P, be, _, y, me(o)), r.append(U, z), H();
      } else {
        r.append(me(o));
        for (const h of u.paragraphs) r.append(n("p", h));
      }
    } else if (g && /\.(png|jpe?g|webp)$/i.test(a)) r.append(pe(o.href, e.title || "\u539F\u9879\u76EE\u8D44\u6599\u56FE"));
    else if (g && /\.(txt|json|html)$/i.test(a)) {
      p.textContent = "\u6B63\u5728\u8BFB\u53D6\u6765\u6E90\u2026";
      const l = await fe(o);
      if (t !== m) return;
      if (a.endsWith(".html")) {
        const u = new i.DOMParser().parseFromString(l, "text/html"), B = o.hash ? u.getElementById(o.hash.slice(1)) : u.body;
        for (const h of (B || u.body).querySelectorAll("h1,h2,p,li,small")) r.append(n(h.tagName.toLowerCase(), h.textContent));
      } else r.append(n("pre", l));
      p.textContent = "\u7AD9\u5185\u6765\u6E90\u8D44\u6599";
    } else {
      const l = Ae.find((u) => u.url === e.url || u.url.replace(/\/$/, "") === o.href.replace(/\/$/, ""));
      if (l) C.textContent = `${l.title} \xB7 \u6F14\u793A\u8D44\u6599`, we(l, t);
      else if (o.hostname === "github.com" && o.pathname === "/brunosimon/folio-2025") {
        C.textContent = "\u5F00\u6E90\u57FA\u7840 \xB7 Bruno Simon", r.append(n("p", "\u539F\u7248\u4E09\u7EF4\u4E16\u754C\u4E0E\u9A7E\u9A76\u7CFB\u7EDF\u57FA\u4E8E Bruno Simon \u7684 folio-2025 \u5F00\u6E90\u9879\u76EE\u3002Copyright (c) 2025 Bruno Simon\u3002MIT \u8BB8\u53EF\u3002"));
        const u = n("button", "\u9605\u8BFB\u5F00\u6E90\u8BB8\u53EF");
        u.addEventListener("click", () => Y("./licenses/bruno-MIT.txt", "MIT \u5F00\u6E90\u8BB8\u53EF")), r.append(u);
      } else r.append(n("p", "\u8BE5\u6765\u6E90\u5C1A\u65E0\u53EF\u7528\u7684\u7AD9\u5185\u9884\u89C8\u3002\u6765\u6E90\u5730\u5740\u4FDD\u7559\u5982\u4E0B\uFF0C\u53EF\u590D\u5236\u67E5\u9605\u3002"));
      r.append(ne(o.href));
    }
  }, Y = (e, t = "\u4F5C\u54C1\u8D44\u6599", o = false, a = "") => {
    if (k) return j = [e, t, o, a], true;
    let g;
    try {
      g = new URL(e, d.baseURI);
    } catch {
      return false;
    }
    if (!["http:", "https:", "mailto:"].includes(g.protocol)) return false;
    const f = c.open;
    if (f || (T = d.activeElement, Q(), c.showModal()), D = { url: e, title: t, description: a }, !o) {
      const u = { ...i.history.state, siteResource: D };
      i.history[f ? "replaceState" : "pushState"](u, "");
    }
    b == null ? void 0 : b(), b = null, E == null ? void 0 : E(), E = null;
    const l = ++m;
    return A = null, v == null ? void 0 : v.begin(), C.textContent = t, p.textContent = "", r.replaceChildren(), r.scrollTop = 0, a && r.append(n("p", a, "site-resource-context")), $.focus({ preventScroll: true }), Ee(D, l).catch(() => {
      l === m && (b == null ? void 0 : b(), b = null, p.textContent = "\u8D44\u6599\u6682\u65F6\u65E0\u6CD5\u52A0\u8F7D\u3002\u8BF7\u5173\u95ED\u540E\u91CD\u8BD5\u3002");
    }), true;
  };
  i.addEventListener("popstate", () => {
    var _a;
    k = false;
    const e = (_a = i.history.state) == null ? void 0 : _a.siteResource;
    if (e ? Y(e.url, e.title, true, e.description) : F(), j) {
      const t = j;
      j = null, Y(...t);
    }
  });
  const oe = (e) => {
    const t = e.getAttribute("href");
    !t || t.startsWith("#") || e.dataset.resourceDownload || (e.dataset.resourceUrl = t, e.removeAttribute("href"), e.removeAttribute("target"), e.setAttribute("role", "button"), e.tabIndex = 0, e.setAttribute("aria-haspopup", "dialog"));
  }, he = (e) => {
    e.nodeType === 1 && (e.matches("a[href]") && oe(e), e.querySelectorAll("a[href]").forEach(oe));
  };
  he(d.body), new i.MutationObserver((e) => {
    for (const t of e) if (t.type === "attributes") oe(t.target);
    else for (const o of t.addedNodes) he(o);
  }).observe(d.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["href"] });
  const re = (e) => {
    var _a, _b;
    const t = (_b = (_a = e.target).closest) == null ? void 0 : _b.call(_a, "a[data-resource-url],a[href]");
    if (!t || t.dataset.resourceDownload) return;
    const o = t.getAttribute("href") || t.dataset.resourceUrl;
    !o || o.startsWith("#") || (e.preventDefault(), e.stopImmediatePropagation(), Y(o, t.textContent.trim().replace(/↗/g, "").trim() || "\u4F5C\u54C1\u8D44\u6599"));
  };
  return d.addEventListener("click", re, true), d.addEventListener("auxclick", re, true), d.addEventListener("keydown", (e) => {
    ["Enter", " "].includes(e.key) && e.target.matches("a[data-resource-url]") && re(e);
  }, true), Z = { open: Y, close: O, dialog: c, setGame(e) {
    var _a, _b, _c, _d;
    s = e, (_b = (_a = s.inputs) == null ? void 0 : _a.addActions) == null ? void 0 : _b.call(_a, [{ name: "siteResourceClose", categories: ["siteResource"], keys: ["Gamepad.cross", "Gamepad.start"] }]), (_d = (_c = s.inputs) == null ? void 0 : _c.events) == null ? void 0 : _d.on("siteResourceClose", (t) => {
      t.active && c.open && O();
    }), c.open && Q();
  } }, Z;
}
export {
  Re as _,
  xe as a,
  Ie as i,
  $e as o,
  Ae as p,
  Be as s
};
