"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [9163, 8661],
  {
    "./node_modules/@storybook/addon-actions/dist/index.mjs": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__("storybook/internal/preview-api"),
        __webpack_require__("storybook/internal/preview-errors"),
        __webpack_require__("@storybook/global");
    },
    "./src/stories/TxButton.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Danger: () => Danger,
          Disabled: () => Disabled,
          GradientBackground: () => GradientBackground,
          Icon: () => Icon,
          Loading: () => Loading,
          PreviewButton: () => PreviewButton,
          Shape: () => Shape,
          Size: () => Size,
          Type: () => Type,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/@storybook/addon-actions/dist/index.mjs"
        ),
        _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/assets/icons/outline/index.js"),
        _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/index.js"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Entry/TxButton",
        component: _components__WEBPACK_IMPORTED_MODULE_2__.jX,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { backgroundColor: { control: "color" }, color: { control: "color" } },
        args: { label: "Click me", onClick: _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.fn },
      };
      var PreviewButton = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "flex-center",
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _components__WEBPACK_IMPORTED_MODULE_2__.jX,
                { label: "Primary" }
              ),
            });
          },
          args: { onClick: function onClick() {} },
        },
        Type = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  label: "Primary",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "secondary",
                  label: "Secondary",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "dashed",
                  label: "Dashed",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "filled",
                  label: "Filled",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "text",
                  label: "Text",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "link",
                  label: "Link",
                }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Disabled = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  disabled: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "secondary",
                  label: "Secondary",
                  disabled: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "dashed",
                  label: "Dashed",
                  disabled: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "filled",
                  label: "Filled",
                  disabled: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "text",
                  label: "Text",
                  disabled: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "link",
                  label: "Link",
                  disabled: !0,
                }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Loading = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  loading: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "secondary",
                  label: "Secondary",
                  loading: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "dashed",
                  label: "Dashed",
                  loading: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "filled",
                  label: "Filled",
                  loading: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "text",
                  label: "Text",
                  loading: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "link",
                  label: "Link",
                  loading: !0,
                }),
              ],
            });
          },
          args: {
            onClick: function onClick() {
              console.log("Click me");
            },
          },
        },
        Danger = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  label: "Primary",
                  danger: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "secondary",
                  label: "Secondary",
                  danger: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "dashed",
                  label: "Dashed",
                  danger: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "filled",
                  label: "Filled",
                  danger: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "text",
                  label: "Text",
                  danger: !0,
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  type: "link",
                  label: "Link",
                  danger: !0,
                }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Size = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  label: "Large",
                  size: "large",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  label: "Medium",
                  size: "medium",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  label: "Small",
                  size: "small",
                }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Icon = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  label: "Icon",
                  prefix: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconAdd,
                    {}
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  label: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconAdd,
                    {}
                  ),
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  label: "Icon",
                  suffix: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconAdd,
                    {}
                  ),
                }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Shape = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  label: "Default",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  label: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    _assets_icons_outline__WEBPACK_IMPORTED_MODULE_1__.e.IconAdd,
                    {}
                  ),
                  shape: "circle",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.jX, {
                  label: "Circle",
                  shape: "circle",
                }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        GradientBackground = {
          render: function render(args) {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "flex-center",
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                _components__WEBPACK_IMPORTED_MODULE_2__.jX,
                { label: "Default", gradientBackground: { degree: 135, colors: ["#6253e1", "#04befe"] } }
              ),
            });
          },
          args: { onClick: function onClick() {} },
        };
      const __namedExportsOrder = [
        "PreviewButton",
        "Type",
        "Disabled",
        "Loading",
        "Danger",
        "Size",
        "Icon",
        "Shape",
        "GradientBackground",
      ];
      (PreviewButton.parameters = {
        ...PreviewButton.parameters,
        docs: {
          ...PreviewButton.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: args => <div className="flex-center">\n      <TxButton label="Primary" />\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
            ...PreviewButton.parameters?.docs?.source,
          },
        },
      }),
        (Type.parameters = {
          ...Type.parameters,
          docs: {
            ...Type.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxButton label="Primary" />\n      <TxButton type="secondary" label="Secondary" />\n      <TxButton type="dashed" label="Dashed" />\n      <TxButton type="filled" label="Filled" />\n      <TxButton type="text" label="Text" />\n      <TxButton type="link" label="Link" />\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Type.parameters?.docs?.source,
            },
          },
        }),
        (Disabled.parameters = {
          ...Disabled.parameters,
          docs: {
            ...Disabled.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxButton disabled />\n      <TxButton type="secondary" label="Secondary" disabled />\n      <TxButton type="dashed" label="Dashed" disabled />\n      <TxButton type="filled" label="Filled" disabled />\n      <TxButton type="text" label="Text" disabled />\n      <TxButton type="link" label="Link" disabled />\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Disabled.parameters?.docs?.source,
            },
          },
        }),
        (Loading.parameters = {
          ...Loading.parameters,
          docs: {
            ...Loading.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxButton loading />\n      <TxButton type="secondary" label="Secondary" loading />\n      <TxButton type="dashed" label="Dashed" loading />\n      <TxButton type="filled" label="Filled" loading />\n      <TxButton type="text" label="Text" loading />\n      <TxButton type="link" label="Link" loading />\n    </div>,\n  args: {\n    onClick: () => {\n      console.log("Click me");\n    }\n  }\n}',
              ...Loading.parameters?.docs?.source,
            },
          },
        }),
        (Danger.parameters = {
          ...Danger.parameters,
          docs: {
            ...Danger.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxButton label="Primary" danger />\n      <TxButton type="secondary" label="Secondary" danger />\n      <TxButton type="dashed" label="Dashed" danger />\n      <TxButton type="filled" label="Filled" danger />\n      <TxButton type="text" label="Text" danger />\n      <TxButton type="link" label="Link" danger />\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Danger.parameters?.docs?.source,
            },
          },
        }),
        (Size.parameters = {
          ...Size.parameters,
          docs: {
            ...Size.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxButton label="Large" size="large" />\n      <TxButton label="Medium" size="medium" />\n      <TxButton label="Small" size="small" />\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Size.parameters?.docs?.source,
            },
          },
        }),
        (Icon.parameters = {
          ...Icon.parameters,
          docs: {
            ...Icon.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxButton label="Icon" prefix={<TxIconOutline.IconAdd />} />\n      <TxButton label={<TxIconOutline.IconAdd />} />\n      <TxButton label="Icon" suffix={<TxIconOutline.IconAdd />} />\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Icon.parameters?.docs?.source,
            },
          },
        }),
        (Shape.parameters = {
          ...Shape.parameters,
          docs: {
            ...Shape.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxButton label="Default" />\n      <TxButton label={<TxIconOutline.IconAdd />} shape="circle" />\n      <TxButton label="Circle" shape="circle" />\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Shape.parameters?.docs?.source,
            },
          },
        }),
        (GradientBackground.parameters = {
          ...GradientBackground.parameters,
          docs: {
            ...GradientBackground.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => {\n    const gradientBackground = {\n      degree: 135,\n      colors: ["#6253e1", "#04befe"]\n    };\n    return <div className="flex-center">\n        <TxButton label="Default" gradientBackground={gradientBackground} />\n      </div>;\n  },\n  args: {\n    onClick: () => {}\n  }\n}',
              ...GradientBackground.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
