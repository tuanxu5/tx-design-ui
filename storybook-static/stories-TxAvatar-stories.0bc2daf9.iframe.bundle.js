"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [2424, 8661],
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
    "./src/stories/TxAvatar.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Badge: () => Badge,
          Group: () => Group,
          Icon: () => Icon,
          PreviewAvatar: () => PreviewAvatar,
          Shape: () => Shape,
          Size: () => Size,
          Url: () => Url,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => TxAvatar_stories,
        });
      var dist = __webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),
        outline = __webpack_require__("./src/assets/icons/outline/index.js"),
        components = __webpack_require__("./src/components/index.js"),
        urlImageAvatar = "https://avatars.githubusercontent.com/u/124599?v=4",
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const TxAvatar_stories = {
        title: "tx-design-ui/Data Display/TxAvatar",
        component: components.aG,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { color: { control: "color" } },
        args: { onClick: dist.fn },
      };
      var PreviewAvatar = {
          render: function render(args) {
            return (0, jsx_runtime.jsx)("div", {
              className: "flex-center",
              children: (0, jsx_runtime.jsx)(components.aG, { children: "T" }),
            });
          },
          args: { onClick: function onClick() {} },
        },
        Size = {
          render: function render(args) {
            return (0, jsx_runtime.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, jsx_runtime.jsx)(components.aG, { size: 56, children: "T" }),
                (0, jsx_runtime.jsx)(components.aG, { size: 48, children: "T" }),
                (0, jsx_runtime.jsx)(components.aG, { size: "large", children: "T" }),
                (0, jsx_runtime.jsx)(components.aG, { size: "medium", children: "T" }),
                (0, jsx_runtime.jsx)(components.aG, { size: "small", children: "T" }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Shape = {
          render: function render(args) {
            return (0, jsx_runtime.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, jsx_runtime.jsx)(components.aG, { children: "T" }),
                (0, jsx_runtime.jsx)(components.aG, { shape: "square", children: "T" }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Icon = {
          render: function render(args) {
            return (0, jsx_runtime.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, jsx_runtime.jsx)(components.aG, { icon: (0, jsx_runtime.jsx)(outline.e.IconAdd, {}) }),
                (0, jsx_runtime.jsx)(components.aG, {
                  icon: (0, jsx_runtime.jsx)(outline.e.IconAdd, {}),
                  shape: "square",
                }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Url = {
          render: function render(args) {
            return (0, jsx_runtime.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, jsx_runtime.jsx)(components.aG, { url: urlImageAvatar, size: 40 }),
                (0, jsx_runtime.jsx)(components.aG, { url: urlImageAvatar, shape: "square", size: 40 }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Badge = {
          render: function render(args) {
            return (0, jsx_runtime.jsxs)("div", {
              className: "flex-center",
              children: [
                (0, jsx_runtime.jsx)(components.aG, { badge: 1, children: "T" }),
                (0, jsx_runtime.jsx)(components.aG, { badge: 1, shape: "square", children: "T" }),
                (0, jsx_runtime.jsx)(components.aG, { badge: "dot", children: "T" }),
                (0, jsx_runtime.jsx)(components.aG, { badge: "dot", shape: "square", children: "T" }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        },
        Group = {
          render: function render(args) {
            return (0, jsx_runtime.jsxs)("div", {
              className: "flex-column",
              children: [
                (0, jsx_runtime.jsxs)(components.aG.Group, {
                  children: [
                    (0, jsx_runtime.jsx)(components.aG, { children: "T" }),
                    (0, jsx_runtime.jsx)(components.aG, { children: "U" }),
                    (0, jsx_runtime.jsx)(components.aG, { children: "A" }),
                    (0, jsx_runtime.jsx)(components.aG, { children: "N" }),
                  ],
                }),
                (0, jsx_runtime.jsxs)(components.aG.Group, {
                  max: 2,
                  children: [
                    (0, jsx_runtime.jsx)(components.aG, { children: "T" }),
                    (0, jsx_runtime.jsx)(components.aG, { children: "U" }),
                    (0, jsx_runtime.jsx)(components.aG, { children: "A" }),
                    (0, jsx_runtime.jsx)(components.aG, { children: "N" }),
                  ],
                }),
              ],
            });
          },
          args: { onClick: function onClick() {} },
        };
      const __namedExportsOrder = ["PreviewAvatar", "Size", "Shape", "Icon", "Url", "Badge", "Group"];
      (PreviewAvatar.parameters = {
        ...PreviewAvatar.parameters,
        docs: {
          ...PreviewAvatar.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: args => <div className="flex-center">\n      <TxAvatar>T</TxAvatar>\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
            ...PreviewAvatar.parameters?.docs?.source,
          },
        },
      }),
        (Size.parameters = {
          ...Size.parameters,
          docs: {
            ...Size.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxAvatar size={56}>T</TxAvatar>\n      <TxAvatar size={48}>T</TxAvatar>\n      <TxAvatar size="large">T</TxAvatar>\n      <TxAvatar size="medium">T</TxAvatar>\n      <TxAvatar size="small">T</TxAvatar>\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Size.parameters?.docs?.source,
            },
          },
        }),
        (Shape.parameters = {
          ...Shape.parameters,
          docs: {
            ...Shape.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxAvatar>T</TxAvatar>\n      <TxAvatar shape="square">T</TxAvatar>\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Shape.parameters?.docs?.source,
            },
          },
        }),
        (Icon.parameters = {
          ...Icon.parameters,
          docs: {
            ...Icon.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxAvatar icon={<TxIconOutline.IconAdd />} />\n      <TxAvatar icon={<TxIconOutline.IconAdd />} shape="square" />\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Icon.parameters?.docs?.source,
            },
          },
        }),
        (Url.parameters = {
          ...Url.parameters,
          docs: {
            ...Url.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxAvatar url={urlImageAvatar} size={40} />\n      <TxAvatar url={urlImageAvatar} shape="square" size={40} />\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Url.parameters?.docs?.source,
            },
          },
        }),
        (Badge.parameters = {
          ...Badge.parameters,
          docs: {
            ...Badge.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-center">\n      <TxAvatar badge={1}>T</TxAvatar>\n      <TxAvatar badge={1} shape="square">\n        T\n      </TxAvatar>\n      <TxAvatar badge="dot">T</TxAvatar>\n      <TxAvatar badge="dot" shape="square">\n        T\n      </TxAvatar>\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Badge.parameters?.docs?.source,
            },
          },
        }),
        (Group.parameters = {
          ...Group.parameters,
          docs: {
            ...Group.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: args => <div className="flex-column">\n      <TxAvatar.Group>\n        <TxAvatar>T</TxAvatar>\n        <TxAvatar>U</TxAvatar>\n        <TxAvatar>A</TxAvatar>\n        <TxAvatar>N</TxAvatar>\n      </TxAvatar.Group>\n      <TxAvatar.Group max={2}>\n        <TxAvatar>T</TxAvatar>\n        <TxAvatar>U</TxAvatar>\n        <TxAvatar>A</TxAvatar>\n        <TxAvatar>N</TxAvatar>\n      </TxAvatar.Group>\n    </div>,\n  args: {\n    onClick: () => {}\n  }\n}',
              ...Group.parameters?.docs?.source,
            },
          },
        });
    },
  },
]);
