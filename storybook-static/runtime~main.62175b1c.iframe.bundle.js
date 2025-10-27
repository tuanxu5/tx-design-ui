(() => {
  "use strict";
  var deferred,
    leafPrototypes,
    getProto,
    inProgress,
    __webpack_modules__ = {},
    __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (void 0 !== cachedModule) return cachedModule.exports;
    var module = (__webpack_module_cache__[moduleId] = { id: moduleId, loaded: !1, exports: {} });
    return (
      __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__),
      (module.loaded = !0),
      module.exports
    );
  }
  (__webpack_require__.m = __webpack_modules__),
    (__webpack_require__.amdO = {}),
    (deferred = []),
    (__webpack_require__.O = (result, chunkIds, fn, priority) => {
      if (!chunkIds) {
        var notFulfilled = 1 / 0;
        for (i = 0; i < deferred.length; i++) {
          for (var [chunkIds, fn, priority] = deferred[i], fulfilled = !0, j = 0; j < chunkIds.length; j++)
            (!1 & priority || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every(key => __webpack_require__.O[key](chunkIds[j]))
              ? chunkIds.splice(j--, 1)
              : ((fulfilled = !1), priority < notFulfilled && (notFulfilled = priority));
          if (fulfilled) {
            deferred.splice(i--, 1);
            var r = fn();
            void 0 !== r && (result = r);
          }
        }
        return result;
      }
      priority = priority || 0;
      for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
      deferred[i] = [chunkIds, fn, priority];
    }),
    (__webpack_require__.n = module => {
      var getter = module && module.__esModule ? () => module.default : () => module;
      return __webpack_require__.d(getter, { a: getter }), getter;
    }),
    (getProto = Object.getPrototypeOf ? obj => Object.getPrototypeOf(obj) : obj => obj.__proto__),
    (__webpack_require__.t = function (value, mode) {
      if ((1 & mode && (value = this(value)), 8 & mode)) return value;
      if ("object" == typeof value && value) {
        if (4 & mode && value.__esModule) return value;
        if (16 & mode && "function" == typeof value.then) return value;
      }
      var ns = Object.create(null);
      __webpack_require__.r(ns);
      var def = {};
      leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
      for (
        var current = 2 & mode && value;
        "object" == typeof current && !~leafPrototypes.indexOf(current);
        current = getProto(current)
      )
        Object.getOwnPropertyNames(current).forEach(key => (def[key] = () => value[key]));
      return (def.default = () => value), __webpack_require__.d(ns, def), ns;
    }),
    (__webpack_require__.d = (exports, definition) => {
      for (var key in definition)
        __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key) &&
          Object.defineProperty(exports, key, { enumerable: !0, get: definition[key] });
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = chunkId =>
      Promise.all(
        Object.keys(__webpack_require__.f).reduce(
          (promises, key) => (__webpack_require__.f[key](chunkId, promises), promises),
          []
        )
      )),
    (__webpack_require__.u = chunkId =>
      (({
        350: "stories-TxDivider-stories",
        432: "stories-TxCopy-stories",
        463: "stories-TxTabs-stories",
        676: "stories-TxCountdown-stories",
        715: "stories-TxAlert-stories",
        1213: "stories-TxRate-stories",
        1237: "stories-TxSegmented-stories",
        1364: "stories-TxEditor-stories",
        1545: "stories-TxTour-stories",
        1892: "stories-TxScrollShadow-stories",
        1979: "stories-TxDnd-stories",
        2028: "stories-TxTimeInput-stories",
        2424: "stories-TxAvatar-stories",
        2514: "stories-TxMenu-stories",
        2643: "stories-TxMap-stories",
        2799: "stories-TxToggle-stories",
        2888: "stories-TxSlider-stories",
        2931: "stories-TxGrid-stories",
        2995: "stories-TxSwitch-stories",
        3056: "stories-TxDateRangePicker-stories",
        3114: "stories-TxColorPicker-stories",
        3512: "stories-TxTypography-stories",
        3536: "stories-TxCode-stories",
        3611: "stories-TxLink-stories",
        3636: "stories-TxBadge-stories",
        3643: "stories-TxWatermark-stories",
        3728: "stories-TxBreadcrumb-stories",
        3912: "stories-TxKbd-stories",
        4162: "stories-TxInputNumber-stories",
        4167: "stories-TxBackTop-stories",
        4281: "stories-TxDatePicker-stories",
        4712: "stories-TxAnchor-stories",
        4777: "stories-TxTag-stories",
        5269: "stories-TxQrcode-stories",
        5709: "stories-TxLoading-stories",
        6156: "stories-TxInputOtp-stories",
        6277: "stories-TxCalendar-stories",
        6313: "stories-TxTextarea-stories",
        6438: "stories-TxTransfer-stories",
        6489: "stories-TxChart-stories",
        7106: "stories-TxTextGradient-stories",
        7275: "stories-TxVideoPlayer-stories",
        7758: "stories-TxSnippet-stories",
        7775: "stories-TxSpace-stories",
        7911: "stories-TxSelect-stories",
        7974: "stories-TxSplitter-stories",
        8141: "stories-TxCard-stories",
        8165: "stories-TxLayout-stories",
        8306: "stories-TxImage-stories",
        8660: "stories-TxCheckbox-stories",
        8661: "stories-TxForm-stories",
        8686: "stories-TxIconOutline-stories",
        8750: "stories-TxEmpty-stories",
        8770: "stories-TxFlex-stories",
        8886: "stories-TxTimeline-stories",
        9163: "stories-TxButton-stories",
        9182: "stories-TxSkeleton-stories",
        9212: "stories-TxLightbox-stories",
        9216: "stories-TxRadio-stories",
        9313: "stories-TxCarousel-stories",
        9468: "stories-TxIconFilled-stories",
        9469: "stories-TxScrollProgress-stories",
        9712: "stories-TxUpload-stories",
        9939: "stories-TxPagination-stories",
      }[chunkId] || chunkId) +
      "." +
      {
        350: "fad730ff",
        432: "b5ff1fc2",
        463: "2cd8e15c",
        676: "3d34bba8",
        715: "72d2e850",
        1213: "4a78e7f0",
        1237: "d3652b09",
        1323: "8700a86b",
        1338: "f3f4276d",
        1364: "c296bb61",
        1545: "73610552",
        1892: "d98ad37b",
        1979: "1be291a5",
        2028: "ebb21352",
        2041: "696d98f6",
        2419: "b6d462a8",
        2424: "0bc2daf9",
        2514: "374045fc",
        2643: "c6917d33",
        2799: "5cd326ef",
        2888: "20ce8952",
        2931: "72ac7c23",
        2995: "7ac8fdbc",
        3056: "ad57afa2",
        3114: "1d6368ec",
        3233: "98ad22df",
        3307: "f9e172e4",
        3310: "77be35c1",
        3467: "44554da9",
        3512: "e9c4ccb5",
        3536: "283dd077",
        3611: "025dc96d",
        3636: "7ee35940",
        3643: "e3bd15ba",
        3728: "ae85d4cd",
        3912: "e86af015",
        4162: "29a4fa9b",
        4167: "509e2e7f",
        4281: "f001aba3",
        4435: "16a76b88",
        4712: "797d53b3",
        4777: "870ba9ff",
        5173: "6f144676",
        5269: "3359216c",
        5385: "205f328c",
        5709: "bc9ca9e5",
        6025: "93544dba",
        6156: "e98833dc",
        6277: "348785a2",
        6313: "ec22706e",
        6438: "9f313b09",
        6489: "e0b94bb4",
        7030: "24e2427a",
        7106: "6e69adcd",
        7122: "75986955",
        7227: "6d268b18",
        7275: "f8327e2e",
        7364: "77e93fd2",
        7560: "db65868f",
        7758: "2509543e",
        7775: "614d7192",
        7911: "324c1c5e",
        7974: "bc670b93",
        8141: "08c2deab",
        8165: "df2909f5",
        8229: "133126be",
        8231: "015a8a92",
        8306: "5fb81231",
        8660: "7f0cff37",
        8661: "6f7b2c4a",
        8686: "2c69ee20",
        8691: "eca62b2a",
        8735: "4f8bd0e1",
        8750: "23fa1d7d",
        8770: "fa03bc3a",
        8886: "f1e7cbea",
        8969: "94bb47cf",
        9163: "8f74fc6b",
        9182: "dd0c04e1",
        9212: "fedd8d84",
        9216: "5aaf8d12",
        9253: "3fcd4542",
        9313: "13f9dc69",
        9345: "6e60832b",
        9468: "f3bffab4",
        9469: "3f5705aa",
        9486: "23eeb107",
        9712: "012b694c",
        9939: "2fd5c0ee",
      }[chunkId] +
      ".iframe.bundle.js")),
    (__webpack_require__.miniCssF = chunkId =>
      "static/css/" +
      {
        463: "stories-TxTabs-stories",
        2424: "stories-TxAvatar-stories",
        2514: "stories-TxMenu-stories",
        3114: "stories-TxColorPicker-stories",
        3728: "stories-TxBreadcrumb-stories",
        4162: "stories-TxInputNumber-stories",
        4281: "stories-TxDatePicker-stories",
        4712: "stories-TxAnchor-stories",
        4777: "stories-TxTag-stories",
        5709: "stories-TxLoading-stories",
        7911: "stories-TxSelect-stories",
        8660: "stories-TxCheckbox-stories",
        8661: "stories-TxForm-stories",
        9163: "stories-TxButton-stories",
        9216: "stories-TxRadio-stories",
        9939: "stories-TxPagination-stories",
      }[chunkId] +
      "." +
      {
        463: "4549d3d8",
        2424: "4549d3d8",
        2514: "4549d3d8",
        3114: "4549d3d8",
        3728: "4549d3d8",
        4162: "4549d3d8",
        4281: "4549d3d8",
        4712: "4549d3d8",
        4777: "4549d3d8",
        5709: "4549d3d8",
        7911: "4549d3d8",
        8660: "4549d3d8",
        8661: "4549d3d8",
        9163: "4549d3d8",
        9216: "4549d3d8",
        9939: "4549d3d8",
      }[chunkId] +
      ".chunk.css"),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.hmd = module => (
      (module = Object.create(module)).children || (module.children = []),
      Object.defineProperty(module, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + module.id
          );
        },
      }),
      module
    )),
    (__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)),
    (inProgress = {}),
    (__webpack_require__.l = (url, done, key, chunkId) => {
      if (inProgress[url]) inProgress[url].push(done);
      else {
        var script, needAttach;
        if (void 0 !== key)
          for (var scripts = document.getElementsByTagName("script"), i = 0; i < scripts.length; i++) {
            var s = scripts[i];
            if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == "tx-design-ui:" + key) {
              script = s;
              break;
            }
          }
        script ||
          ((needAttach = !0),
          ((script = document.createElement("script")).charset = "utf-8"),
          (script.timeout = 120),
          __webpack_require__.nc && script.setAttribute("nonce", __webpack_require__.nc),
          script.setAttribute("data-webpack", "tx-design-ui:" + key),
          (script.src = url)),
          (inProgress[url] = [done]);
        var onScriptComplete = (prev, event) => {
            (script.onerror = script.onload = null), clearTimeout(timeout);
            var doneFns = inProgress[url];
            if (
              (delete inProgress[url],
              script.parentNode && script.parentNode.removeChild(script),
              doneFns && doneFns.forEach(fn => fn(event)),
              prev)
            )
              return prev(event);
          },
          timeout = setTimeout(onScriptComplete.bind(null, void 0, { type: "timeout", target: script }), 12e4);
        (script.onerror = onScriptComplete.bind(null, script.onerror)),
          (script.onload = onScriptComplete.bind(null, script.onload)),
          needAttach && document.head.appendChild(script);
      }
    }),
    (__webpack_require__.r = exports => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(exports, "__esModule", { value: !0 });
    }),
    (__webpack_require__.nmd = module => ((module.paths = []), module.children || (module.children = []), module)),
    (__webpack_require__.p = ""),
    (() => {
      if ("undefined" != typeof document) {
        var loadStylesheet = chunkId =>
            new Promise((resolve, reject) => {
              var href = __webpack_require__.miniCssF(chunkId),
                fullhref = __webpack_require__.p + href;
              if (
                ((href, fullhref) => {
                  for (
                    var existingLinkTags = document.getElementsByTagName("link"), i = 0;
                    i < existingLinkTags.length;
                    i++
                  ) {
                    var dataHref = (tag = existingLinkTags[i]).getAttribute("data-href") || tag.getAttribute("href");
                    if ("stylesheet" === tag.rel && (dataHref === href || dataHref === fullhref)) return tag;
                  }
                  var existingStyleTags = document.getElementsByTagName("style");
                  for (i = 0; i < existingStyleTags.length; i++) {
                    var tag;
                    if (
                      (dataHref = (tag = existingStyleTags[i]).getAttribute("data-href")) === href ||
                      dataHref === fullhref
                    )
                      return tag;
                  }
                })(href, fullhref)
              )
                return resolve();
              ((chunkId, fullhref, oldTag, resolve, reject) => {
                var linkTag = document.createElement("link");
                (linkTag.rel = "stylesheet"),
                  (linkTag.type = "text/css"),
                  __webpack_require__.nc && (linkTag.nonce = __webpack_require__.nc),
                  (linkTag.onerror = linkTag.onload =
                    event => {
                      if (((linkTag.onerror = linkTag.onload = null), "load" === event.type)) resolve();
                      else {
                        var errorType = event && event.type,
                          realHref = (event && event.target && event.target.href) || fullhref,
                          err = new Error(
                            "Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")"
                          );
                        (err.name = "ChunkLoadError"),
                          (err.code = "CSS_CHUNK_LOAD_FAILED"),
                          (err.type = errorType),
                          (err.request = realHref),
                          linkTag.parentNode && linkTag.parentNode.removeChild(linkTag),
                          reject(err);
                      }
                    }),
                  (linkTag.href = fullhref),
                  oldTag
                    ? oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling)
                    : document.head.appendChild(linkTag);
              })(chunkId, fullhref, null, resolve, reject);
            }),
          installedCssChunks = { 5354: 0 };
        __webpack_require__.f.miniCss = (chunkId, promises) => {
          installedCssChunks[chunkId]
            ? promises.push(installedCssChunks[chunkId])
            : 0 !== installedCssChunks[chunkId] &&
              {
                463: 1,
                2424: 1,
                2514: 1,
                3114: 1,
                3728: 1,
                4162: 1,
                4281: 1,
                4712: 1,
                4777: 1,
                5709: 1,
                7911: 1,
                8660: 1,
                8661: 1,
                9163: 1,
                9216: 1,
                9939: 1,
              }[chunkId] &&
              promises.push(
                (installedCssChunks[chunkId] = loadStylesheet(chunkId).then(
                  () => {
                    installedCssChunks[chunkId] = 0;
                  },
                  e => {
                    throw (delete installedCssChunks[chunkId], e);
                  }
                ))
              );
        };
      }
    })(),
    (() => {
      var installedChunks = { 5354: 0 };
      (__webpack_require__.f.j = (chunkId, promises) => {
        var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : void 0;
        if (0 !== installedChunkData)
          if (installedChunkData) promises.push(installedChunkData[2]);
          else if (/^(5354|8661)$/.test(chunkId)) installedChunks[chunkId] = 0;
          else {
            var promise = new Promise(
              (resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject])
            );
            promises.push((installedChunkData[2] = promise));
            var url = __webpack_require__.p + __webpack_require__.u(chunkId),
              error = new Error();
            __webpack_require__.l(
              url,
              event => {
                if (
                  __webpack_require__.o(installedChunks, chunkId) &&
                  (0 !== (installedChunkData = installedChunks[chunkId]) && (installedChunks[chunkId] = void 0),
                  installedChunkData)
                ) {
                  var errorType = event && ("load" === event.type ? "missing" : event.type),
                    realSrc = event && event.target && event.target.src;
                  (error.message = "Loading chunk " + chunkId + " failed.\n(" + errorType + ": " + realSrc + ")"),
                    (error.name = "ChunkLoadError"),
                    (error.type = errorType),
                    (error.request = realSrc),
                    installedChunkData[1](error);
                }
              },
              "chunk-" + chunkId,
              chunkId
            );
          }
      }),
        (__webpack_require__.O.j = chunkId => 0 === installedChunks[chunkId]);
      var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
          var moduleId,
            chunkId,
            [chunkIds, moreModules, runtime] = data,
            i = 0;
          if (chunkIds.some(id => 0 !== installedChunks[id])) {
            for (moduleId in moreModules)
              __webpack_require__.o(moreModules, moduleId) && (__webpack_require__.m[moduleId] = moreModules[moduleId]);
            if (runtime) var result = runtime(__webpack_require__);
          }
          for (parentChunkLoadingFunction && parentChunkLoadingFunction(data); i < chunkIds.length; i++)
            (chunkId = chunkIds[i]),
              __webpack_require__.o(installedChunks, chunkId) &&
                installedChunks[chunkId] &&
                installedChunks[chunkId][0](),
              (installedChunks[chunkId] = 0);
          return __webpack_require__.O(result);
        },
        chunkLoadingGlobal = (self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []);
      chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0)),
        (chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal)));
    })(),
    (__webpack_require__.nc = void 0);
})();
