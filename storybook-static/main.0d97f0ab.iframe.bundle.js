(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [792],
  {
    "./node_modules/@storybook/instrumenter/dist sync recursive": module => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = "./node_modules/@storybook/instrumenter/dist sync recursive"),
        (module.exports = webpackEmptyContext);
    },
    "./storybook-config-entry.js": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global"),
        external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("storybook/internal/preview-api"),
        external_STORYBOOK_MODULE_CHANNELS_ = __webpack_require__("storybook/internal/channels");
      const importers = [
        async path => {
          if (!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path)) return;
          const pathRemainder = path.substring(6);
          return __webpack_require__(
            "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$"
          )("./" + pathRemainder);
        },
        async path => {
          if (
            !/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(
              path
            )
          )
            return;
          const pathRemainder = path.substring(6);
          return __webpack_require__(
            "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$"
          )("./" + pathRemainder);
        },
      ];
      const channel = (0, external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({ page: "preview" });
      external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),
        "DEVELOPMENT" === external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE &&
          (window.__STORYBOOK_SERVER_CHANNEL__ = channel);
      const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb(
        async function importFn(path) {
          for (let i = 0; i < importers.length; i++) {
            const moduleExports = await ((x = () => importers[i](path)), x());
            if (moduleExports) return moduleExports;
          }
          var x;
        },
        () =>
          (0, external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([
            __webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),
            __webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),
            __webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),
            __webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),
            __webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),
            __webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),
            __webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs"),
            __webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),
            __webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),
            __webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),
            __webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),
            __webpack_require__("./.storybook/preview.js"),
          ])
      );
      (window.__STORYBOOK_PREVIEW__ = preview),
        (window.__STORYBOOK_STORY_STORE__ = preview.storyStore),
        (window.__STORYBOOK_ADDONS_CHANNEL__ = channel);
    },
    "./node_modules/@storybook/test/dist sync recursive": module => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id = "./node_modules/@storybook/test/dist sync recursive"),
        (module.exports = webpackEmptyContext);
    },
    "./.storybook/preview.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, { default: () => __WEBPACK_DEFAULT_EXPORT__ });
      const __WEBPACK_DEFAULT_EXPORT__ = {
        parameters: { controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } } },
      };
    },
    "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":
      module => {
        function webpackEmptyAsyncContext(req) {
          return Promise.resolve().then(() => {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        }
        (webpackEmptyAsyncContext.keys = () => []),
          (webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext),
          (webpackEmptyAsyncContext.id =
            "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$"),
          (module.exports = webpackEmptyAsyncContext);
      },
    "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          "./stories/IconLibrary.stories": ["./src/stories/IconLibrary.stories.js", 817, 88, 982, 661],
          "./stories/IconLibrary.stories.js": ["./src/stories/IconLibrary.stories.js", 817, 88, 982, 661],
          "./stories/TxAnchor.stories": ["./src/stories/TxAnchor.stories.js", 817, 712],
          "./stories/TxAnchor.stories.js": ["./src/stories/TxAnchor.stories.js", 817, 712],
          "./stories/TxAvatar.stories": ["./src/stories/TxAvatar.stories.js", 817, 691, 88, 229, 868, 424],
          "./stories/TxAvatar.stories.js": ["./src/stories/TxAvatar.stories.js", 817, 691, 88, 229, 868, 424],
          "./stories/TxBadge.stories": ["./src/stories/TxBadge.stories.js", 817, 691, 636],
          "./stories/TxBadge.stories.js": ["./src/stories/TxBadge.stories.js", 817, 691, 636],
          "./stories/TxBreadcrumb.stories": ["./src/stories/TxBreadcrumb.stories.js", 817, 728],
          "./stories/TxBreadcrumb.stories.js": ["./src/stories/TxBreadcrumb.stories.js", 817, 728],
          "./stories/TxButton.stories": ["./src/stories/TxButton.stories.js", 817, 691, 88, 229, 868, 163],
          "./stories/TxButton.stories.js": ["./src/stories/TxButton.stories.js", 817, 691, 88, 229, 868, 163],
          "./stories/TxCarousel.stories": ["./src/stories/TxCarousel.stories.js", 817, 313],
          "./stories/TxCarousel.stories.js": ["./src/stories/TxCarousel.stories.js", 817, 313],
          "./stories/TxCheckbox.stories": ["./src/stories/TxCheckbox.stories.js", 817, 691, 88, 229, 868, 660],
          "./stories/TxCheckbox.stories.js": ["./src/stories/TxCheckbox.stories.js", 817, 691, 88, 229, 868, 660],
          "./stories/TxColorPicker.stories": ["./src/stories/TxColorPicker.stories.js", 817, 691, 88, 229, 868, 114],
          "./stories/TxColorPicker.stories.js": ["./src/stories/TxColorPicker.stories.js", 817, 691, 88, 229, 868, 114],
          "./stories/TxDatePicker.stories": ["./src/stories/TxDatePicker.stories.js", 817, 691, 88, 229, 868, 281],
          "./stories/TxDatePicker.stories.js": ["./src/stories/TxDatePicker.stories.js", 817, 691, 88, 229, 868, 281],
          "./stories/TxDrawer.stories": ["./src/stories/TxDrawer.stories.js", 817, 88, 323, 661],
          "./stories/TxDrawer.stories.js": ["./src/stories/TxDrawer.stories.js", 817, 88, 323, 661],
          "./stories/TxDropdown.stories": ["./src/stories/TxDropdown.stories.js", 817, 88, 419, 661],
          "./stories/TxDropdown.stories.js": ["./src/stories/TxDropdown.stories.js", 817, 88, 419, 661],
          "./stories/TxForm.stories": ["./src/stories/TxForm.stories.js", 817, 88, 229, 564, 661],
          "./stories/TxForm.stories.js": ["./src/stories/TxForm.stories.js", 817, 88, 229, 564, 661],
          "./stories/TxInput.stories": ["./src/stories/TxInput.stories.js", 817, 88, 486, 661],
          "./stories/TxInput.stories.js": ["./src/stories/TxInput.stories.js", 817, 88, 486, 661],
          "./stories/TxInputNumber.stories": ["./src/stories/TxInputNumber.stories.js", 817, 691, 88, 229, 868, 162],
          "./stories/TxInputNumber.stories.js": ["./src/stories/TxInputNumber.stories.js", 817, 691, 88, 229, 868, 162],
          "./stories/TxLoading.stories": ["./src/stories/TxLoading.stories.js", 817, 709],
          "./stories/TxLoading.stories.js": ["./src/stories/TxLoading.stories.js", 817, 709],
          "./stories/TxMenu.stories": ["./src/stories/TxMenu.stories.js", 817, 514],
          "./stories/TxMenu.stories.js": ["./src/stories/TxMenu.stories.js", 817, 514],
          "./stories/TxMessage.stories": ["./src/stories/TxMessage.stories.js", 817, 88, 41, 661],
          "./stories/TxMessage.stories.js": ["./src/stories/TxMessage.stories.js", 817, 88, 41, 661],
          "./stories/TxModal.stories": ["./src/stories/TxModal.stories.js", 817, 88, 467, 661],
          "./stories/TxModal.stories.js": ["./src/stories/TxModal.stories.js", 817, 88, 467, 661],
          "./stories/TxNotification.stories": ["./src/stories/TxNotification.stories.js", 817, 88, 233, 661],
          "./stories/TxNotification.stories.js": ["./src/stories/TxNotification.stories.js", 817, 88, 233, 661],
          "./stories/TxPagination.stories": ["./src/stories/TxPagination.stories.js", 817, 939],
          "./stories/TxPagination.stories.js": ["./src/stories/TxPagination.stories.js", 817, 939],
          "./stories/TxPopconfirm.stories": ["./src/stories/TxPopconfirm.stories.js", 817, 88, 435, 661],
          "./stories/TxPopconfirm.stories.js": ["./src/stories/TxPopconfirm.stories.js", 817, 88, 435, 661],
          "./stories/TxProgress.stories": ["./src/stories/TxProgress.stories.js", 817, 88, 173, 661],
          "./stories/TxProgress.stories.js": ["./src/stories/TxProgress.stories.js", 817, 88, 173, 661],
          "./stories/TxRadio.stories": ["./src/stories/TxRadio.stories.js", 817, 691, 88, 229, 868, 216],
          "./stories/TxRadio.stories.js": ["./src/stories/TxRadio.stories.js", 817, 691, 88, 229, 868, 216],
          "./stories/TxSelect.stories": ["./src/stories/TxSelect.stories.js", 817, 691, 88, 229, 868, 911],
          "./stories/TxSelect.stories.js": ["./src/stories/TxSelect.stories.js", 817, 691, 88, 229, 868, 911],
          "./stories/TxSlider.stories": ["./src/stories/TxSlider.stories.js", 817, 888],
          "./stories/TxSlider.stories.js": ["./src/stories/TxSlider.stories.js", 817, 888],
          "./stories/TxSteps.stories": ["./src/stories/TxSteps.stories.js", 817, 88, 385, 661],
          "./stories/TxSteps.stories.js": ["./src/stories/TxSteps.stories.js", 817, 88, 385, 661],
          "./stories/TxSwitch.stories": ["./src/stories/TxSwitch.stories.js", 817, 995],
          "./stories/TxSwitch.stories.js": ["./src/stories/TxSwitch.stories.js", 817, 995],
          "./stories/TxTable.stories": ["./src/stories/TxTable.stories.js", 817, 88, 310, 661],
          "./stories/TxTable.stories.js": ["./src/stories/TxTable.stories.js", 817, 88, 310, 661],
          "./stories/TxTabs.stories": ["./src/stories/TxTabs.stories.js", 817, 463],
          "./stories/TxTabs.stories.js": ["./src/stories/TxTabs.stories.js", 817, 463],
          "./stories/TxTag.stories": ["./src/stories/TxTag.stories.js", 817, 777],
          "./stories/TxTag.stories.js": ["./src/stories/TxTag.stories.js", 817, 777],
          "./stories/TxTimeline.stories": ["./src/stories/TxTimeline.stories.js", 817, 886],
          "./stories/TxTimeline.stories.js": ["./src/stories/TxTimeline.stories.js", 817, 886],
          "./stories/TxTooltip.stories": ["./src/stories/TxTooltip.stories.js", 817, 88, 969, 661],
          "./stories/TxTooltip.stories.js": ["./src/stories/TxTooltip.stories.js", 817, 88, 969, 661],
          "./stories/TxUpload.stories": ["./src/stories/TxUpload.stories.js", 817, 331],
          "./stories/TxUpload.stories.js": ["./src/stories/TxUpload.stories.js", 817, 331],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            });
          var ids = map[req],
            id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => __webpack_require__(id));
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            "./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$"),
          (module.exports = webpackAsyncContext);
      },
    "storybook/internal/channels": module => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_CHANNELS__;
    },
    "storybook/internal/client-logger": module => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;
    },
    "storybook/internal/preview-errors": module => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
    },
    "storybook/internal/core-events": module => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;
    },
    "@storybook/global": module => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_GLOBAL__;
    },
    "storybook/internal/preview-api": module => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_PREVIEW_API__;
    },
  },
  __webpack_require__ => {
    __webpack_require__.O(0, [410], () => {
      return (moduleId = "./storybook-config-entry.js"), __webpack_require__((__webpack_require__.s = moduleId));
      var moduleId;
    });
    __webpack_require__.O();
  },
]);
