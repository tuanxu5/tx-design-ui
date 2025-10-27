(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [8792],
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
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        parameters: { controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } } },
        decorators: [
          function (Story) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
                    href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap",
                    rel: "stylesheet",
                  }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    style: { fontFamily: "'Outfit', sans-serif" },
                    children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story, {}),
                  }),
                ],
              }
            );
          },
        ],
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
          "./stories/TxAnchor.stories": ["./src/stories/TxAnchor.stories.js", 5996, 4712],
          "./stories/TxAnchor.stories.js": ["./src/stories/TxAnchor.stories.js", 5996, 4712],
          "./stories/TxAvatar.stories": ["./src/stories/TxAvatar.stories.js", 5996, 8691, 9345, 8229, 7030, 2424],
          "./stories/TxAvatar.stories.js": ["./src/stories/TxAvatar.stories.js", 5996, 8691, 9345, 8229, 7030, 2424],
          "./stories/TxBadge.stories": ["./src/stories/TxBadge.stories.js", 5996, 8691, 3636],
          "./stories/TxBadge.stories.js": ["./src/stories/TxBadge.stories.js", 5996, 8691, 3636],
          "./stories/TxBreadcrumb.stories": ["./src/stories/TxBreadcrumb.stories.js", 5996, 3728],
          "./stories/TxBreadcrumb.stories.js": ["./src/stories/TxBreadcrumb.stories.js", 5996, 3728],
          "./stories/TxButton.stories": ["./src/stories/TxButton.stories.js", 5996, 8691, 9345, 8229, 7030, 9163],
          "./stories/TxButton.stories.js": ["./src/stories/TxButton.stories.js", 5996, 8691, 9345, 8229, 7030, 9163],
          "./stories/TxCalendar.stories": ["./src/stories/TxCalendar.stories.js", 5996, 6277],
          "./stories/TxCalendar.stories.js": ["./src/stories/TxCalendar.stories.js", 5996, 6277],
          "./stories/TxCard.stories": ["./src/stories/TxCard.stories.js", 5996, 8141],
          "./stories/TxCard.stories.js": ["./src/stories/TxCard.stories.js", 5996, 8141],
          "./stories/TxCarousel.stories": ["./src/stories/TxCarousel.stories.js", 5996, 9313],
          "./stories/TxCarousel.stories.js": ["./src/stories/TxCarousel.stories.js", 5996, 9313],
          "./stories/TxChart.stories": ["./src/stories/TxChart.stories.js", 5996, 6489],
          "./stories/TxChart.stories.js": ["./src/stories/TxChart.stories.js", 5996, 6489],
          "./stories/TxCheckbox.stories": ["./src/stories/TxCheckbox.stories.js", 5996, 8691, 9345, 8229, 7030, 8660],
          "./stories/TxCheckbox.stories.js": [
            "./src/stories/TxCheckbox.stories.js",
            5996,
            8691,
            9345,
            8229,
            7030,
            8660,
          ],
          "./stories/TxCode.stories": ["./src/stories/TxCode.stories.js", 5996, 3536],
          "./stories/TxCode.stories.js": ["./src/stories/TxCode.stories.js", 5996, 3536],
          "./stories/TxColorPicker.stories": [
            "./src/stories/TxColorPicker.stories.js",
            5996,
            8691,
            9345,
            8229,
            7030,
            3114,
          ],
          "./stories/TxColorPicker.stories.js": [
            "./src/stories/TxColorPicker.stories.js",
            5996,
            8691,
            9345,
            8229,
            7030,
            3114,
          ],
          "./stories/TxCopy.stories": ["./src/stories/TxCopy.stories.js", 5996, 9345, 432],
          "./stories/TxCopy.stories.js": ["./src/stories/TxCopy.stories.js", 5996, 9345, 432],
          "./stories/TxCountdown.stories": ["./src/stories/TxCountdown.stories.js", 5996, 676],
          "./stories/TxCountdown.stories.js": ["./src/stories/TxCountdown.stories.js", 5996, 676],
          "./stories/TxDatePicker.stories": [
            "./src/stories/TxDatePicker.stories.js",
            5996,
            8691,
            9345,
            8229,
            7030,
            4281,
          ],
          "./stories/TxDatePicker.stories.js": [
            "./src/stories/TxDatePicker.stories.js",
            5996,
            8691,
            9345,
            8229,
            7030,
            4281,
          ],
          "./stories/TxDateRangePicker.stories": ["./src/stories/TxDateRangePicker.stories.js", 5996, 3056],
          "./stories/TxDateRangePicker.stories.js": ["./src/stories/TxDateRangePicker.stories.js", 5996, 3056],
          "./stories/TxDivider.stories": ["./src/stories/TxDivider.stories.js", 5996, 350],
          "./stories/TxDivider.stories.js": ["./src/stories/TxDivider.stories.js", 5996, 350],
          "./stories/TxDnd.stories": ["./src/stories/TxDnd.stories.js", 5996, 9345, 1979],
          "./stories/TxDnd.stories.js": ["./src/stories/TxDnd.stories.js", 5996, 9345, 1979],
          "./stories/TxDrawer.stories": ["./src/stories/TxDrawer.stories.js", 5996, 9345, 1323, 8661],
          "./stories/TxDrawer.stories.js": ["./src/stories/TxDrawer.stories.js", 5996, 9345, 1323, 8661],
          "./stories/TxDropdown.stories": ["./src/stories/TxDropdown.stories.js", 5996, 9345, 2419, 8661],
          "./stories/TxDropdown.stories.js": ["./src/stories/TxDropdown.stories.js", 5996, 9345, 2419, 8661],
          "./stories/TxEditor.stories": ["./src/stories/TxEditor.stories.js", 5996, 1364],
          "./stories/TxEditor.stories.js": ["./src/stories/TxEditor.stories.js", 5996, 1364],
          "./stories/TxEmpty.stories": ["./src/stories/TxEmpty.stories.js", 5996, 8750],
          "./stories/TxEmpty.stories.js": ["./src/stories/TxEmpty.stories.js", 5996, 8750],
          "./stories/TxFlex.stories": ["./src/stories/TxFlex.stories.js", 5996, 8770],
          "./stories/TxFlex.stories.js": ["./src/stories/TxFlex.stories.js", 5996, 8770],
          "./stories/TxForm.stories": ["./src/stories/TxForm.stories.js", 5996, 9345, 8229, 2564, 8661],
          "./stories/TxForm.stories.js": ["./src/stories/TxForm.stories.js", 5996, 9345, 8229, 2564, 8661],
          "./stories/TxGrid.stories": ["./src/stories/TxGrid.stories.js", 5996, 2931],
          "./stories/TxGrid.stories.js": ["./src/stories/TxGrid.stories.js", 5996, 2931],
          "./stories/TxIconOutline.stories": ["./src/stories/TxIconOutline.stories.js", 9345, 8686],
          "./stories/TxIconOutline.stories.js": ["./src/stories/TxIconOutline.stories.js", 9345, 8686],
          "./stories/TxImage.stories": ["./src/stories/TxImage.stories.js", 5996, 8306],
          "./stories/TxImage.stories.js": ["./src/stories/TxImage.stories.js", 5996, 8306],
          "./stories/TxInput.stories": ["./src/stories/TxInput.stories.js", 5996, 9345, 9486, 8661],
          "./stories/TxInput.stories.js": ["./src/stories/TxInput.stories.js", 5996, 9345, 9486, 8661],
          "./stories/TxInputNumber.stories": [
            "./src/stories/TxInputNumber.stories.js",
            5996,
            8691,
            9345,
            8229,
            7030,
            4162,
          ],
          "./stories/TxInputNumber.stories.js": [
            "./src/stories/TxInputNumber.stories.js",
            5996,
            8691,
            9345,
            8229,
            7030,
            4162,
          ],
          "./stories/TxInputOtp.stories": ["./src/stories/TxInputOtp.stories.js", 5996, 6156],
          "./stories/TxInputOtp.stories.js": ["./src/stories/TxInputOtp.stories.js", 5996, 6156],
          "./stories/TxKbd.stories": ["./src/stories/TxKbd.stories.js", 5996, 3912],
          "./stories/TxKbd.stories.js": ["./src/stories/TxKbd.stories.js", 5996, 3912],
          "./stories/TxLightbox.stories": ["./src/stories/TxLightbox.stories.js", 5996, 9212],
          "./stories/TxLightbox.stories.js": ["./src/stories/TxLightbox.stories.js", 5996, 9212],
          "./stories/TxLink.stories": ["./src/stories/TxLink.stories.js", 5996, 3611],
          "./stories/TxLink.stories.js": ["./src/stories/TxLink.stories.js", 5996, 3611],
          "./stories/TxLoading.stories": ["./src/stories/TxLoading.stories.js", 5996, 5709],
          "./stories/TxLoading.stories.js": ["./src/stories/TxLoading.stories.js", 5996, 5709],
          "./stories/TxMap.stories": ["./src/stories/TxMap.stories.js", 5996, 2643],
          "./stories/TxMap.stories.js": ["./src/stories/TxMap.stories.js", 5996, 2643],
          "./stories/TxMenu.stories": ["./src/stories/TxMenu.stories.js", 5996, 2514],
          "./stories/TxMenu.stories.js": ["./src/stories/TxMenu.stories.js", 5996, 2514],
          "./stories/TxMessage.stories": ["./src/stories/TxMessage.stories.js", 5996, 9345, 2041, 8661],
          "./stories/TxMessage.stories.js": ["./src/stories/TxMessage.stories.js", 5996, 9345, 2041, 8661],
          "./stories/TxModal.stories": ["./src/stories/TxModal.stories.js", 5996, 9345, 3467, 8661],
          "./stories/TxModal.stories.js": ["./src/stories/TxModal.stories.js", 5996, 9345, 3467, 8661],
          "./stories/TxNotification.stories": ["./src/stories/TxNotification.stories.js", 5996, 9345, 3233, 8661],
          "./stories/TxNotification.stories.js": ["./src/stories/TxNotification.stories.js", 5996, 9345, 3233, 8661],
          "./stories/TxPagination.stories": ["./src/stories/TxPagination.stories.js", 5996, 9939],
          "./stories/TxPagination.stories.js": ["./src/stories/TxPagination.stories.js", 5996, 9939],
          "./stories/TxPopconfirm.stories": ["./src/stories/TxPopconfirm.stories.js", 5996, 9345, 4435, 8661],
          "./stories/TxPopconfirm.stories.js": ["./src/stories/TxPopconfirm.stories.js", 5996, 9345, 4435, 8661],
          "./stories/TxProgress.stories": ["./src/stories/TxProgress.stories.js", 5996, 9345, 5173, 8661],
          "./stories/TxProgress.stories.js": ["./src/stories/TxProgress.stories.js", 5996, 9345, 5173, 8661],
          "./stories/TxQrcode.stories": ["./src/stories/TxQrcode.stories.js", 5996, 5269],
          "./stories/TxQrcode.stories.js": ["./src/stories/TxQrcode.stories.js", 5996, 5269],
          "./stories/TxRadio.stories": ["./src/stories/TxRadio.stories.js", 5996, 8691, 9345, 8229, 7030, 9216],
          "./stories/TxRadio.stories.js": ["./src/stories/TxRadio.stories.js", 5996, 8691, 9345, 8229, 7030, 9216],
          "./stories/TxRate.stories": ["./src/stories/TxRate.stories.js", 5996, 1213],
          "./stories/TxRate.stories.js": ["./src/stories/TxRate.stories.js", 5996, 1213],
          "./stories/TxScrollProgress.stories": ["./src/stories/TxScrollProgress.stories.js", 5996, 9469],
          "./stories/TxScrollProgress.stories.js": ["./src/stories/TxScrollProgress.stories.js", 5996, 9469],
          "./stories/TxScrollShadow.stories": ["./src/stories/TxScrollShadow.stories.js", 5996, 1892],
          "./stories/TxScrollShadow.stories.js": ["./src/stories/TxScrollShadow.stories.js", 5996, 1892],
          "./stories/TxSegmented.stories": ["./src/stories/TxSegmented.stories.js", 5996, 1237],
          "./stories/TxSegmented.stories.js": ["./src/stories/TxSegmented.stories.js", 5996, 1237],
          "./stories/TxSelect.stories": ["./src/stories/TxSelect.stories.js", 5996, 8691, 9345, 8229, 7030, 7911],
          "./stories/TxSelect.stories.js": ["./src/stories/TxSelect.stories.js", 5996, 8691, 9345, 8229, 7030, 7911],
          "./stories/TxSkeleton.stories": ["./src/stories/TxSkeleton.stories.js", 5996, 9182],
          "./stories/TxSkeleton.stories.js": ["./src/stories/TxSkeleton.stories.js", 5996, 9182],
          "./stories/TxSlider.stories": ["./src/stories/TxSlider.stories.js", 5996, 2888],
          "./stories/TxSlider.stories.js": ["./src/stories/TxSlider.stories.js", 5996, 2888],
          "./stories/TxSnippet.stories": ["./src/stories/TxSnippet.stories.js", 5996, 7758],
          "./stories/TxSnippet.stories.js": ["./src/stories/TxSnippet.stories.js", 5996, 7758],
          "./stories/TxSpace.stories": ["./src/stories/TxSpace.stories.js", 5996, 7775],
          "./stories/TxSpace.stories.js": ["./src/stories/TxSpace.stories.js", 5996, 7775],
          "./stories/TxSplitter.stories": ["./src/stories/TxSplitter.stories.js", 5996, 7974],
          "./stories/TxSplitter.stories.js": ["./src/stories/TxSplitter.stories.js", 5996, 7974],
          "./stories/TxSteps.stories": ["./src/stories/TxSteps.stories.js", 5996, 9345, 5385, 8661],
          "./stories/TxSteps.stories.js": ["./src/stories/TxSteps.stories.js", 5996, 9345, 5385, 8661],
          "./stories/TxSwitch.stories": ["./src/stories/TxSwitch.stories.js", 5996, 2995],
          "./stories/TxSwitch.stories.js": ["./src/stories/TxSwitch.stories.js", 5996, 2995],
          "./stories/TxTable.stories": ["./src/stories/TxTable.stories.js", 5996, 9345, 3310, 8661],
          "./stories/TxTable.stories.js": ["./src/stories/TxTable.stories.js", 5996, 9345, 3310, 8661],
          "./stories/TxTabs.stories": ["./src/stories/TxTabs.stories.js", 5996, 463],
          "./stories/TxTabs.stories.js": ["./src/stories/TxTabs.stories.js", 5996, 463],
          "./stories/TxTag.stories": ["./src/stories/TxTag.stories.js", 5996, 4777],
          "./stories/TxTag.stories.js": ["./src/stories/TxTag.stories.js", 5996, 4777],
          "./stories/TxTextGradient.stories": ["./src/stories/TxTextGradient.stories.js", 5996, 7106],
          "./stories/TxTextGradient.stories.js": ["./src/stories/TxTextGradient.stories.js", 5996, 7106],
          "./stories/TxTextarea.stories": ["./src/stories/TxTextarea.stories.js", 5996, 6313],
          "./stories/TxTextarea.stories.js": ["./src/stories/TxTextarea.stories.js", 5996, 6313],
          "./stories/TxTimeInput.stories": ["./src/stories/TxTimeInput.stories.js", 5996, 2028],
          "./stories/TxTimeInput.stories.js": ["./src/stories/TxTimeInput.stories.js", 5996, 2028],
          "./stories/TxTimeline.stories": ["./src/stories/TxTimeline.stories.js", 5996, 8886],
          "./stories/TxTimeline.stories.js": ["./src/stories/TxTimeline.stories.js", 5996, 8886],
          "./stories/TxToggle.stories": ["./src/stories/TxToggle.stories.js", 5996, 2799],
          "./stories/TxToggle.stories.js": ["./src/stories/TxToggle.stories.js", 5996, 2799],
          "./stories/TxTooltip.stories": ["./src/stories/TxTooltip.stories.js", 5996, 9345, 8969, 8661],
          "./stories/TxTooltip.stories.js": ["./src/stories/TxTooltip.stories.js", 5996, 9345, 8969, 8661],
          "./stories/TxTour.stories": ["./src/stories/TxTour.stories.js", 5996, 1545],
          "./stories/TxTour.stories.js": ["./src/stories/TxTour.stories.js", 5996, 1545],
          "./stories/TxTransfer.stories": ["./src/stories/TxTransfer.stories.js", 5996, 6438],
          "./stories/TxTransfer.stories.js": ["./src/stories/TxTransfer.stories.js", 5996, 6438],
          "./stories/TxTypography.stories": ["./src/stories/TxTypography.stories.js", 5996, 3512],
          "./stories/TxTypography.stories.js": ["./src/stories/TxTypography.stories.js", 5996, 3512],
          "./stories/TxUpload.stories": ["./src/stories/TxUpload.stories.js", 5996, 9712],
          "./stories/TxUpload.stories.js": ["./src/stories/TxUpload.stories.js", 5996, 9712],
          "./stories/TxVideoPlayer.stories": ["./src/stories/TxVideoPlayer.stories.js", 5996, 7275],
          "./stories/TxVideoPlayer.stories.js": ["./src/stories/TxVideoPlayer.stories.js", 5996, 7275],
          "./stories/TxWatermark.stories": ["./src/stories/TxWatermark.stories.js", 5996, 3643],
          "./stories/TxWatermark.stories.js": ["./src/stories/TxWatermark.stories.js", 5996, 3643],
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
    __webpack_require__.O(0, [2083], () => {
      return (moduleId = "./storybook-config-entry.js"), __webpack_require__((__webpack_require__.s = moduleId));
      var moduleId;
    });
    __webpack_require__.O();
  },
]);
