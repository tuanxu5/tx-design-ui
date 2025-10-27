"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [8886],
  {
    "./src/stories/TxTimeline.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AlternateMode: () => AlternateMode,
          Basic: () => Basic,
          CustomContent: () => CustomContent,
          WithColors: () => WithColors,
          WithIcons: () => WithIcons,
          WithLabels: () => WithLabels,
          WithTime: () => WithTime,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_timeline_tx_timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-timeline/tx-timeline.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxTimeline",
        component: _components_tx_timeline_tx_timeline__WEBPACK_IMPORTED_MODULE_0__.o,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: { mode: { control: { type: "select" }, options: ["left", "right", "alternate"] } },
      };
      var basicItems = [
          { title: "Create a services site", description: "2015-09-01" },
          { title: "Solve initial network problems", description: "2015-09-01" },
          { title: "Technical testing", description: "2015-09-01" },
          { title: "Network problems being solved", description: "2015-09-01" },
        ],
        Basic = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { padding: "20px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_timeline_tx_timeline__WEBPACK_IMPORTED_MODULE_0__.o,
                { items: basicItems }
              ),
            });
          },
        },
        colorItems = [
          { title: "Create a services site", description: "This is the description", color: "success" },
          { title: "Solve initial network problems", description: "This is the description", color: "error" },
          { title: "Technical testing", description: "This is the description", color: "warning" },
          { title: "Network problems being solved", description: "This is the description", color: "processing" },
        ],
        WithColors = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { padding: "20px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_timeline_tx_timeline__WEBPACK_IMPORTED_MODULE_0__.o,
                { items: colorItems }
              ),
            });
          },
        },
        iconItems = [
          {
            title: "Success",
            description: "Operation completed successfully",
            color: "success",
            icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
                points: "20 6 9 17 4 12",
              }),
            }),
          },
          {
            title: "Error",
            description: "An error occurred during the operation",
            color: "error",
            icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                  x1: "18",
                  y1: "6",
                  x2: "6",
                  y2: "18",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                  x1: "6",
                  y1: "6",
                  x2: "18",
                  y2: "18",
                }),
              ],
            }),
          },
          {
            title: "Warning",
            description: "Please check the details",
            color: "warning",
            icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                  x1: "12",
                  y1: "9",
                  x2: "12",
                  y2: "13",
                }),
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("line", {
                  x1: "12",
                  y1: "17",
                  x2: "12.01",
                  y2: "17",
                }),
              ],
            }),
          },
          {
            title: "Processing",
            description: "Operation in progress",
            color: "processing",
            icon: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "10",
              }),
            }),
          },
        ],
        WithIcons = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { padding: "20px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_timeline_tx_timeline__WEBPACK_IMPORTED_MODULE_0__.o,
                { items: iconItems }
              ),
            });
          },
        },
        timeItems = [
          {
            title: "Project Initialized",
            description: "Set up project structure and dependencies",
            time: "2024-01-01 09:00",
            color: "success",
          },
          {
            title: "First Deployment",
            description: "Successfully deployed to production",
            time: "2024-01-15 14:30",
            color: "success",
          },
          {
            title: "Bug Reported",
            description: "Critical bug found in payment module",
            time: "2024-02-01 11:20",
            color: "error",
          },
          {
            title: "Bug Fixed",
            description: "Payment module bug resolved and deployed",
            time: "2024-02-02 16:45",
            color: "success",
          },
        ],
        WithTime = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { padding: "20px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_timeline_tx_timeline__WEBPACK_IMPORTED_MODULE_0__.o,
                { items: timeItems }
              ),
            });
          },
        },
        labelItems = [
          { title: "Q1 2024", description: "Project kickoff and planning", label: "2024-01", color: "success" },
          { title: "Q2 2024", description: "Development phase", label: "2024-04", color: "processing" },
          { title: "Q3 2024", description: "Testing and bug fixes", label: "2024-07", color: "warning" },
          { title: "Q4 2024", description: "Production release", label: "2024-10", color: "default" },
        ],
        WithLabels = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { padding: "20px", marginLeft: "120px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_timeline_tx_timeline__WEBPACK_IMPORTED_MODULE_0__.o,
                { items: labelItems, mode: "left" }
              ),
            });
          },
        },
        alternateItems = [
          { title: "Phase 1", description: "Planning and research", color: "success" },
          { title: "Phase 2", description: "Design and prototyping", color: "success" },
          { title: "Phase 3", description: "Development", color: "processing" },
          { title: "Phase 4", description: "Testing and deployment", color: "default" },
        ],
        AlternateMode = {
          render: function render() {
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { padding: "20px 100px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_timeline_tx_timeline__WEBPACK_IMPORTED_MODULE_0__.o,
                { items: alternateItems, mode: "alternate" }
              ),
            });
          },
        },
        CustomContent = {
          render: function render() {
            var items = [
              {
                color: "success",
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: { fontWeight: "600", marginBottom: "4px" },
                      children: "Create a services site 2015-09-01",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: { color: "#999", fontSize: "13px" },
                      children: "Technical testing 1",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: { color: "#999", fontSize: "13px" },
                      children: "Technical testing 2",
                    }),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                      style: { color: "#999", fontSize: "13px" },
                      children: "Technical testing 3 2015-09-01",
                    }),
                  ],
                }),
              },
              {
                color: "processing",
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    style: { fontWeight: "600", marginBottom: "4px" },
                    children: "Network problems being solved 2015-09-01",
                  }),
                }),
              },
              {
                children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                    style: { fontWeight: "600", marginBottom: "4px" },
                    children: "Create a services site 2015-09-01",
                  }),
                }),
              },
            ];
            return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              style: { padding: "20px" },
              children: (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
                _components_tx_timeline_tx_timeline__WEBPACK_IMPORTED_MODULE_0__.o,
                { items }
              ),
            });
          },
        };
      const __namedExportsOrder = [
        "Basic",
        "WithColors",
        "WithIcons",
        "WithTime",
        "WithLabels",
        "AlternateMode",
        "CustomContent",
      ];
      (Basic.parameters = {
        ...Basic.parameters,
        docs: {
          ...Basic.parameters?.docs,
          source: {
            originalSource:
              '{\n  render: () => <div style={{\n    padding: "20px"\n  }}>\n      <TxTimeline items={basicItems} />\n    </div>\n}',
            ...Basic.parameters?.docs?.source,
          },
        },
      }),
        (WithColors.parameters = {
          ...WithColors.parameters,
          docs: {
            ...WithColors.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    padding: "20px"\n  }}>\n      <TxTimeline items={colorItems} />\n    </div>\n}',
              ...WithColors.parameters?.docs?.source,
            },
          },
        }),
        (WithIcons.parameters = {
          ...WithIcons.parameters,
          docs: {
            ...WithIcons.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    padding: "20px"\n  }}>\n      <TxTimeline items={iconItems} />\n    </div>\n}',
              ...WithIcons.parameters?.docs?.source,
            },
          },
        }),
        (WithTime.parameters = {
          ...WithTime.parameters,
          docs: {
            ...WithTime.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    padding: "20px"\n  }}>\n      <TxTimeline items={timeItems} />\n    </div>\n}',
              ...WithTime.parameters?.docs?.source,
            },
          },
        }),
        (WithLabels.parameters = {
          ...WithLabels.parameters,
          docs: {
            ...WithLabels.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    padding: "20px",\n    marginLeft: "120px"\n  }}>\n      <TxTimeline items={labelItems} mode="left" />\n    </div>\n}',
              ...WithLabels.parameters?.docs?.source,
            },
          },
        }),
        (AlternateMode.parameters = {
          ...AlternateMode.parameters,
          docs: {
            ...AlternateMode.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => <div style={{\n    padding: "20px 100px"\n  }}>\n      <TxTimeline items={alternateItems} mode="alternate" />\n    </div>\n}',
              ...AlternateMode.parameters?.docs?.source,
            },
          },
        }),
        (CustomContent.parameters = {
          ...CustomContent.parameters,
          docs: {
            ...CustomContent.parameters?.docs,
            source: {
              originalSource:
                '{\n  render: () => {\n    const items = [{\n      color: "success",\n      children: <div>\n            <div style={{\n          fontWeight: "600",\n          marginBottom: "4px"\n        }}>Create a services site 2015-09-01</div>\n            <div style={{\n          color: "#999",\n          fontSize: "13px"\n        }}>Technical testing 1</div>\n            <div style={{\n          color: "#999",\n          fontSize: "13px"\n        }}>Technical testing 2</div>\n            <div style={{\n          color: "#999",\n          fontSize: "13px"\n        }}>Technical testing 3 2015-09-01</div>\n          </div>\n    }, {\n      color: "processing",\n      children: <div>\n            <div style={{\n          fontWeight: "600",\n          marginBottom: "4px"\n        }}>Network problems being solved 2015-09-01</div>\n          </div>\n    }, {\n      children: <div>\n            <div style={{\n          fontWeight: "600",\n          marginBottom: "4px"\n        }}>Create a services site 2015-09-01</div>\n          </div>\n    }];\n    return <div style={{\n      padding: "20px"\n    }}>\n        <TxTimeline items={items} />\n      </div>;\n  }\n}',
              ...CustomContent.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-timeline/tx-timeline.jsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, { o: () => TxTimeline });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
        _templateObject8,
        _templateObject9,
        _templateObject10,
        _templateObject11,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        taggedTemplateLiteral = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"
        ),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        colors = __webpack_require__("./src/theme/colors.js"),
        TimelineWrapper = styled_components_browser_esm.Ay.ul(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))
        ),
        TimelineItem = styled_components_browser_esm.Ay.li(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  padding-bottom: ",
              ';\n  padding-left: 28px;\n\n  &::before {\n    content: "";\n    position: absolute;\n    left: 6px;\n    top: 20px;\n    bottom: 0;\n    width: 2px;\n    background-color: ',
              ";\n    display: ",
              ";\n  }\n",
            ])),
          function (props) {
            return props.isLast ? "0" : "24px";
          },
          colors.A.borderDefault,
          function (props) {
            return props.isLast ? "none" : "block";
          }
        ),
        TimelineDot = styled_components_browser_esm.Ay.div(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  left: 0;\n  top: 4px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  border: 2px solid\n    ",
              ";\n  background-color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1;\n\n  ",
              "\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n",
            ])),
          function (props) {
            switch (props.color) {
              case "success":
                return colors.A.success[500];
              case "error":
                return colors.A.danger[500];
              case "warning":
                return colors.A.warning[500];
              case "processing":
                return colors.A.info[500];
              default:
                return colors.A.primary[500];
            }
          },
          function (props) {
            return (
              props.icon &&
              "\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: ".concat(
                "success" === props.color
                  ? colors.A.success[500]
                  : "error" === props.color
                  ? colors.A.danger[500]
                  : "warning" === props.color
                  ? colors.A.warning[500]
                  : "processing" === props.color
                  ? colors.A.info[500]
                  : colors.A.primary[500],
                ";\n    color: white;\n    font-size: 12px;\n  "
              )
            );
          }
        ),
        TimelineContent = styled_components_browser_esm.Ay.div(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)(["\n  position: relative;\n  top: -4px;\n"]))
        ),
        TimelineTitle = styled_components_browser_esm.Ay.div(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 14px;\n  font-weight: 600;\n  color: ",
              ";\n  margin-bottom: 4px;\n  line-height: 1.5;\n",
            ])),
          colors.A.textPrimary
        ),
        TimelineDescription = styled_components_browser_esm.Ay.div(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 13px;\n  color: ",
              ";\n  line-height: 1.5;\n  font-weight: 400;\n",
            ])),
          colors.A.textSecondary
        ),
        TimelineTime = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  font-size: 12px;\n  color: ",
              ";\n  margin-top: 4px;\n",
            ])),
          colors.A.textTertiary
        ),
        TimelineLabel = styled_components_browser_esm.Ay.div(
          _templateObject8 ||
            (_templateObject8 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  left: ",
              ";\n  right: ",
              ";\n  top: 0;\n  width: 100px;\n  text-align: ",
              ";\n  font-size: 12px;\n  color: ",
              ";\n",
            ])),
          function (props) {
            return "left" === props.mode ? "auto" : "-120px";
          },
          function (props) {
            return "left" === props.mode ? "-120px" : "auto";
          },
          function (props) {
            return "left" === props.mode ? "left" : "right";
          },
          colors.A.textTertiary
        ),
        TimelineAlternate = styled_components_browser_esm.Ay.ul(
          _templateObject9 ||
            (_templateObject9 = (0, taggedTemplateLiteral.A)([
              '\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n\n  &::before {\n    content: "";\n    position: absolute;\n    left: 50%;\n    top: 0;\n    bottom: 0;\n    width: 2px;\n    background-color: ',
              ";\n    transform: translateX(-50%);\n  }\n",
            ])),
          colors.A.borderDefault
        ),
        TimelineAlternateItem = styled_components_browser_esm.Ay.li(
          _templateObject10 ||
            (_templateObject10 = (0, taggedTemplateLiteral.A)([
              "\n  position: relative;\n  padding: ",
              ";\n  text-align: ",
              ";\n\n  &:last-child {\n    padding-bottom: 0;\n  }\n",
            ])),
          function (props) {
            return "left" === props.position ? "0 calc(50% + 28px) 24px 0" : "0 0 24px calc(50% + 28px)";
          },
          function (props) {
            return "left" === props.position ? "right" : "left";
          }
        ),
        TimelineAlternateDot = styled_components_browser_esm.Ay.div(
          _templateObject11 ||
            (_templateObject11 = (0, taggedTemplateLiteral.A)([
              "\n  position: absolute;\n  left: 50%;\n  top: 4px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  transform: translateX(-50%);\n  border: 2px solid\n    ",
              ";\n  background-color: white;\n  z-index: 1;\n\n  ",
              "\n\n  svg {\n    width: 12px;\n    height: 12px;\n  }\n",
            ])),
          function (props) {
            switch (props.color) {
              case "success":
                return colors.A.success[500];
              case "error":
                return colors.A.danger[500];
              case "warning":
                return colors.A.warning[500];
              case "processing":
                return colors.A.info[500];
              default:
                return colors.A.primary[500];
            }
          },
          function (props) {
            return (
              props.icon &&
              "\n    width: 20px;\n    height: 20px;\n    border: none;\n    background-color: ".concat(
                "success" === props.color
                  ? colors.A.success[500]
                  : "error" === props.color
                  ? colors.A.danger[500]
                  : "warning" === props.color
                  ? colors.A.warning[500]
                  : "processing" === props.color
                  ? colors.A.info[500]
                  : colors.A.primary[500],
                ";\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  "
              )
            );
          }
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["items", "mode", "className"],
        _excluded2 = ["title", "description", "children", "color", "icon", "label", "time", "isLast", "className"],
        TxTimeline = function TxTimeline(_ref) {
          var _ref$items = _ref.items,
            items = void 0 === _ref$items ? [] : _ref$items,
            _ref$mode = _ref.mode,
            mode = void 0 === _ref$mode ? "left" : _ref$mode,
            className = _ref.className,
            props = (0, objectWithoutProperties.A)(_ref, _excluded);
          return "alternate" === mode
            ? (0, jsx_runtime.jsx)(
                TimelineAlternate,
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({ className }, props),
                  {},
                  {
                    children: items.map(function (item, index) {
                      var position = index % 2 == 0 ? "left" : "right";
                      return (0,
                      jsx_runtime.jsxs)(TimelineAlternateItem, { position, children: [(0, jsx_runtime.jsx)(TimelineAlternateDot, { color: item.color, icon: item.icon, children: item.icon }), (0, jsx_runtime.jsxs)(TimelineContent, { children: [item.label && (0, jsx_runtime.jsx)(TimelineLabel, { mode: position, children: item.label }), item.title && (0, jsx_runtime.jsx)(TimelineTitle, { children: item.title }), item.description && (0, jsx_runtime.jsx)(TimelineDescription, { children: item.description }), item.children, item.time && (0, jsx_runtime.jsx)(TimelineTime, { children: item.time })] })] }, index);
                    }),
                  }
                )
              )
            : (0, jsx_runtime.jsx)(
                TimelineWrapper,
                (0, objectSpread2.A)(
                  (0, objectSpread2.A)({ className }, props),
                  {},
                  {
                    children: items.map(function (item, index) {
                      return (0,
                      jsx_runtime.jsxs)(TimelineItem, { isLast: index === items.length - 1, children: [(0, jsx_runtime.jsx)(TimelineDot, { color: item.color, icon: item.icon, children: item.icon }), (0, jsx_runtime.jsxs)(TimelineContent, { children: [item.label && (0, jsx_runtime.jsx)(TimelineLabel, { mode, children: item.label }), item.title && (0, jsx_runtime.jsx)(TimelineTitle, { children: item.title }), item.description && (0, jsx_runtime.jsx)(TimelineDescription, { children: item.description }), item.children, item.time && (0, jsx_runtime.jsx)(TimelineTime, { children: item.time })] })] }, index);
                    }),
                  }
                )
              );
        };
      TxTimeline.defaultProps = { items: [], mode: "left", className: "" };
      var TxTimelineItem = function TxTimelineItem(_ref2) {
        var title = _ref2.title,
          description = _ref2.description,
          children = _ref2.children,
          _ref2$color = _ref2.color,
          color = void 0 === _ref2$color ? "default" : _ref2$color,
          icon = _ref2.icon,
          label = _ref2.label,
          time = _ref2.time,
          _ref2$isLast = _ref2.isLast,
          isLast = void 0 !== _ref2$isLast && _ref2$isLast,
          className = _ref2.className,
          props = (0, objectWithoutProperties.A)(_ref2, _excluded2);
        return (0, jsx_runtime.jsxs)(
          TimelineItem,
          (0, objectSpread2.A)(
            (0, objectSpread2.A)({ isLast, className }, props),
            {},
            {
              children: [
                (0, jsx_runtime.jsx)(TimelineDot, { color, icon, children: icon }),
                (0, jsx_runtime.jsxs)(TimelineContent, {
                  children: [
                    label && (0, jsx_runtime.jsx)(TimelineLabel, { children: label }),
                    title && (0, jsx_runtime.jsx)(TimelineTitle, { children: title }),
                    description && (0, jsx_runtime.jsx)(TimelineDescription, { children: description }),
                    children,
                    time && (0, jsx_runtime.jsx)(TimelineTime, { children: time }),
                  ],
                }),
              ],
            }
          )
        );
      };
      (TxTimelineItem.defaultProps = {
        title: null,
        description: null,
        children: null,
        color: "default",
        icon: null,
        label: null,
        time: null,
        isLast: !1,
        className: "",
      }),
        (TxTimeline.Item = TxTimelineItem),
        (TxTimeline.__docgenInfo = {
          description: "",
          methods: [
            {
              name: "Item",
              docblock: null,
              modifiers: ["static"],
              params: [
                {
                  name: '{\n  title,\n  description,\n  children,\n  color = "default",\n  icon,\n  label,\n  time,\n  isLast = false,\n  className,\n  ...props\n}',
                  optional: !1,
                  type: null,
                },
              ],
              returns: null,
            },
          ],
          displayName: "TxTimeline",
          props: {
            items: {
              defaultValue: { value: "[]", computed: !1 },
              description: "",
              type: {
                name: "arrayOf",
                value: {
                  name: "shape",
                  value: {
                    title: { name: "node", required: !1 },
                    description: { name: "node", required: !1 },
                    children: { name: "node", required: !1 },
                    color: {
                      name: "enum",
                      value: [
                        { value: '"default"', computed: !1 },
                        { value: '"success"', computed: !1 },
                        { value: '"error"', computed: !1 },
                        { value: '"warning"', computed: !1 },
                        { value: '"processing"', computed: !1 },
                      ],
                      required: !1,
                    },
                    icon: { name: "node", required: !1 },
                    label: { name: "node", required: !1 },
                    time: { name: "node", required: !1 },
                  },
                },
              },
              required: !1,
            },
            mode: {
              defaultValue: { value: '"left"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"left"', computed: !1 },
                  { value: '"right"', computed: !1 },
                  { value: '"alternate"', computed: !1 },
                ],
              },
              required: !1,
            },
            className: {
              defaultValue: { value: '""', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
            },
          },
        }),
        (TxTimelineItem.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "TxTimelineItem",
          props: {
            color: {
              defaultValue: { value: '"default"', computed: !1 },
              description: "",
              type: {
                name: "enum",
                value: [
                  { value: '"default"', computed: !1 },
                  { value: '"success"', computed: !1 },
                  { value: '"error"', computed: !1 },
                  { value: '"warning"', computed: !1 },
                  { value: '"processing"', computed: !1 },
                ],
              },
              required: !1,
            },
            isLast: {
              defaultValue: { value: "false", computed: !1 },
              description: "",
              type: { name: "bool" },
              required: !1,
            },
            title: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            description: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            children: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            icon: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            label: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            time: {
              defaultValue: { value: "null", computed: !1 },
              description: "",
              type: { name: "node" },
              required: !1,
            },
            className: {
              defaultValue: { value: '""', computed: !1 },
              description: "",
              type: { name: "string" },
              required: !1,
            },
          },
        });
    },
    "./src/theme/colors.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => __WEBPACK_DEFAULT_EXPORT__ });
      var colors = {
        primary: "#03030f",
        primaryLight: "#03030f30",
        primaryBorder: "#0e0e13ff",
        danger: "#e45649",
        dangerLight: "#e4564920",
        dangerLighter: "#e4564915",
        dangerShadow: "#e4564930",
        dangerHover: "#e4564950",
        success: "#52c41a",
        warning: "#faad14",
        info: "#1890ff",
        link: "#1fa9ff",
        linkLight: "#1fa9ff30",
        linkLighter: "#1fa9ff50",
        textPrimary: "#1c252e",
        textSecondary: "#8c9bab",
        textTertiary: "#9ca3af",
        textDisabled: "#a0a1a7",
        textWhite: "#ffffff",
        bgWhite: "#ffffff",
        bgPrimary: "#03030f",
        bgFill: "#f7f8fa",
        bgFillLight: "#f3f4f6",
        bgDisabled: "#f3f3f4",
        bgPrimaryLight: "#03030f10",
        bgPrimaryLighter: "#03030f20",
        borderLight: "#eef0f1",
        borderDefault: "#d1d5db",
        borderDisabled: "#a0a1a7",
        borderFocus: "#d1d5db",
        borderHover: "#9ca3af",
        gradientPurple: "#6253e1",
        gradientBlue: "#04befe",
        placeholder: "#8c9bab",
        shadowDefault: "#03030f30",
      };
      "0px 0px 8px 2px ".concat(colors.primaryLight), "0px 0px 8px 2px ".concat(colors.dangerShadow);
      const __WEBPACK_DEFAULT_EXPORT__ = colors;
    },
  },
]);
