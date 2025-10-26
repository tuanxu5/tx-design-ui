"use strict";
(self.webpackChunktx_design_ui = self.webpackChunktx_design_ui || []).push([
  [310],
  {
    "./src/stories/TxTable.stories.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Alignment: () => Alignment,
          BasicUsage: () => BasicUsage,
          EmptyState: () => EmptyState,
          Preview: () => Preview,
          Sizes: () => Sizes,
          WithActions: () => WithActions,
          WithTags: () => WithTags,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./src/components/tx-button/tx-button.jsx"
        ),
        _components_tx_table_tx_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./src/components/tx-table/tx-table.jsx"
        ),
        _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./src/components/tx-tag/tx-tag.jsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "tx-design-ui/Data Display/TxTable",
        component: _components_tx_table_tx_table__WEBPACK_IMPORTED_MODULE_1__.A,
        parameters: { layout: "centered" },
        tags: ["autodocs"],
        argTypes: {
          size: { control: "select", options: ["small", "medium", "large"] },
          bordered: { control: "boolean" },
          hoverable: { control: "boolean" },
          emptyText: { control: "text" },
        },
      };
      var basicColumns = [
          { title: "Name", dataIndex: "name", key: "name" },
          { title: "Age", dataIndex: "age", key: "age" },
          { title: "Address", dataIndex: "address", key: "address" },
        ],
        basicData = [
          { key: "1", name: "John Brown", age: 32, address: "New York No. 1 Lake Park" },
          { key: "2", name: "Jim Green", age: 42, address: "London No. 1 Lake Park" },
          { key: "3", name: "Joe Black", age: 32, address: "Sidney No. 1 Lake Park" },
        ],
        Preview = {
          args: { columns: basicColumns, dataSource: basicData, size: "medium", bordered: !0, hoverable: !0 },
        },
        BasicUsage = function BasicUsage() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            _components_tx_table_tx_table__WEBPACK_IMPORTED_MODULE_1__.A,
            { columns: basicColumns, dataSource: basicData }
          );
        },
        WithActions = function WithActions() {
          var columns = [
            { title: "Name", dataIndex: "name", key: "name" },
            { title: "Age", dataIndex: "age", key: "age" },
            { title: "Address", dataIndex: "address", key: "address" },
            {
              title: "Action",
              key: "action",
              render: function render(_, record) {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  style: { display: "flex", gap: "8px" },
                  children: [
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.A,
                      {
                        size: "small",
                        onClick: function onClick() {
                          return console.log("Edit", record);
                        },
                        children: "Edit",
                      }
                    ),
                    (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                      _components_tx_button_tx_button__WEBPACK_IMPORTED_MODULE_0__.A,
                      {
                        size: "small",
                        type: "danger",
                        onClick: function onClick() {
                          return console.log("Delete", record);
                        },
                        children: "Delete",
                      }
                    ),
                  ],
                });
              },
            },
          ];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            _components_tx_table_tx_table__WEBPACK_IMPORTED_MODULE_1__.A,
            { columns, dataSource: basicData }
          );
        },
        WithTags = function WithTags() {
          var columns = [
            { title: "Name", dataIndex: "name", key: "name" },
            { title: "Age", dataIndex: "age", key: "age" },
            {
              title: "Status",
              dataIndex: "status",
              key: "status",
              render: function render(status) {
                return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                  _components_tx_tag_tx_tag__WEBPACK_IMPORTED_MODULE_2__.A,
                  {
                    color: { active: "success", pending: "warning", inactive: "default" }[status],
                    children: status.toUpperCase(),
                  }
                );
              },
            },
            { title: "Address", dataIndex: "address", key: "address" },
          ];
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            _components_tx_table_tx_table__WEBPACK_IMPORTED_MODULE_1__.A,
            {
              columns,
              dataSource: [
                { key: "1", name: "John Brown", age: 32, status: "active", address: "New York No. 1 Lake Park" },
                { key: "2", name: "Jim Green", age: 42, status: "pending", address: "London No. 1 Lake Park" },
                { key: "3", name: "Joe Black", age: 32, status: "inactive", address: "Sidney No. 1 Lake Park" },
              ],
            }
          );
        },
        Sizes = function Sizes() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            style: { display: "flex", flexDirection: "column", gap: "24px" },
            children: [
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", { children: "Small" }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    _components_tx_table_tx_table__WEBPACK_IMPORTED_MODULE_1__.A,
                    { columns: basicColumns, dataSource: basicData, size: "small" }
                  ),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", { children: "Medium (Default)" }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    _components_tx_table_tx_table__WEBPACK_IMPORTED_MODULE_1__.A,
                    { columns: basicColumns, dataSource: basicData, size: "medium" }
                  ),
                ],
              }),
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                children: [
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", { children: "Large" }),
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
                    _components_tx_table_tx_table__WEBPACK_IMPORTED_MODULE_1__.A,
                    { columns: basicColumns, dataSource: basicData, size: "large" }
                  ),
                ],
              }),
            ],
          });
        },
        Alignment = function Alignment() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            _components_tx_table_tx_table__WEBPACK_IMPORTED_MODULE_1__.A,
            {
              columns: [
                { title: "Name (Left)", dataIndex: "name", key: "name", align: "left" },
                { title: "Age (Center)", dataIndex: "age", key: "age", align: "center" },
                { title: "Address (Right)", dataIndex: "address", key: "address", align: "right" },
              ],
              dataSource: basicData,
            }
          );
        },
        EmptyState = function EmptyState() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(
            _components_tx_table_tx_table__WEBPACK_IMPORTED_MODULE_1__.A,
            { columns: basicColumns, dataSource: [], emptyText: "No data available" }
          );
        };
      const __namedExportsOrder = [
        "Preview",
        "BasicUsage",
        "WithActions",
        "WithTags",
        "Sizes",
        "Alignment",
        "EmptyState",
      ];
      (Preview.parameters = {
        ...Preview.parameters,
        docs: {
          ...Preview.parameters?.docs,
          source: {
            originalSource:
              '{\n  args: {\n    columns: basicColumns,\n    dataSource: basicData,\n    size: "medium",\n    bordered: true,\n    hoverable: true\n  }\n}',
            ...Preview.parameters?.docs?.source,
          },
        },
      }),
        (BasicUsage.parameters = {
          ...BasicUsage.parameters,
          docs: {
            ...BasicUsage.parameters?.docs,
            source: {
              originalSource: "() => {\n  return <TxTable columns={basicColumns} dataSource={basicData} />;\n}",
              ...BasicUsage.parameters?.docs?.source,
            },
          },
        }),
        (WithActions.parameters = {
          ...WithActions.parameters,
          docs: {
            ...WithActions.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const columns = [{\n    title: "Name",\n    dataIndex: "name",\n    key: "name"\n  }, {\n    title: "Age",\n    dataIndex: "age",\n    key: "age"\n  }, {\n    title: "Address",\n    dataIndex: "address",\n    key: "address"\n  }, {\n    title: "Action",\n    key: "action",\n    render: (_, record) => <div style={{\n      display: "flex",\n      gap: "8px"\n    }}>\n          <TxButton size="small" onClick={() => console.log("Edit", record)}>\n            Edit\n          </TxButton>\n          <TxButton size="small" type="danger" onClick={() => console.log("Delete", record)}>\n            Delete\n          </TxButton>\n        </div>\n  }];\n  return <TxTable columns={columns} dataSource={basicData} />;\n}',
              ...WithActions.parameters?.docs?.source,
            },
          },
        }),
        (WithTags.parameters = {
          ...WithTags.parameters,
          docs: {
            ...WithTags.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const columns = [{\n    title: "Name",\n    dataIndex: "name",\n    key: "name"\n  }, {\n    title: "Age",\n    dataIndex: "age",\n    key: "age"\n  }, {\n    title: "Status",\n    dataIndex: "status",\n    key: "status",\n    render: status => {\n      const colorMap = {\n        active: "success",\n        pending: "warning",\n        inactive: "default"\n      };\n      return <TxTag color={colorMap[status]}>{status.toUpperCase()}</TxTag>;\n    }\n  }, {\n    title: "Address",\n    dataIndex: "address",\n    key: "address"\n  }];\n  const data = [{\n    key: "1",\n    name: "John Brown",\n    age: 32,\n    status: "active",\n    address: "New York No. 1 Lake Park"\n  }, {\n    key: "2",\n    name: "Jim Green",\n    age: 42,\n    status: "pending",\n    address: "London No. 1 Lake Park"\n  }, {\n    key: "3",\n    name: "Joe Black",\n    age: 32,\n    status: "inactive",\n    address: "Sidney No. 1 Lake Park"\n  }];\n  return <TxTable columns={columns} dataSource={data} />;\n}',
              ...WithTags.parameters?.docs?.source,
            },
          },
        }),
        (Sizes.parameters = {
          ...Sizes.parameters,
          docs: {
            ...Sizes.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <div style={{\n    display: "flex",\n    flexDirection: "column",\n    gap: "24px"\n  }}>\n      <div>\n        <h4>Small</h4>\n        <TxTable columns={basicColumns} dataSource={basicData} size="small" />\n      </div>\n      <div>\n        <h4>Medium (Default)</h4>\n        <TxTable columns={basicColumns} dataSource={basicData} size="medium" />\n      </div>\n      <div>\n        <h4>Large</h4>\n        <TxTable columns={basicColumns} dataSource={basicData} size="large" />\n      </div>\n    </div>;\n}',
              ...Sizes.parameters?.docs?.source,
            },
          },
        }),
        (Alignment.parameters = {
          ...Alignment.parameters,
          docs: {
            ...Alignment.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  const columns = [{\n    title: "Name (Left)",\n    dataIndex: "name",\n    key: "name",\n    align: "left"\n  }, {\n    title: "Age (Center)",\n    dataIndex: "age",\n    key: "age",\n    align: "center"\n  }, {\n    title: "Address (Right)",\n    dataIndex: "address",\n    key: "address",\n    align: "right"\n  }];\n  return <TxTable columns={columns} dataSource={basicData} />;\n}',
              ...Alignment.parameters?.docs?.source,
            },
          },
        }),
        (EmptyState.parameters = {
          ...EmptyState.parameters,
          docs: {
            ...EmptyState.parameters?.docs,
            source: {
              originalSource:
                '() => {\n  return <TxTable columns={basicColumns} dataSource={[]} emptyText="No data available" />;\n}',
              ...EmptyState.parameters?.docs?.source,
            },
          },
        });
    },
    "./src/components/tx-button/tx-button.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_button });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        objectSpread2 = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),
        objectWithoutProperties = __webpack_require__(
          "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        ),
        taggedTemplateLiteral =
          (__webpack_require__("./node_modules/react/index.js"),
          __webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js")),
        styled_components_browser_esm = __webpack_require__(
          "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        ),
        icons = __webpack_require__("./src/assets/icons/index.js");
      __webpack_require__("./src/styles/shorten.scss");
      const styled = styled_components_browser_esm.Ay.button(
        _templateObject ||
          (_templateObject = (0, taggedTemplateLiteral.A)([
            "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: ",
            ";\n  border: ",
            ";\n  border-radius: ",
            ";\n  font-size: 14px;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  text-align: center;\n  user-select: none;\n  touch-action: manipulation;\n  font-weight: 500;\n  padding: ",
            ";\n  transition: background-color 0.25s ease, transform 0.25s ease;\n  background: ",
            ";\n\n  &.tx-ui-tx-button {\n    &:hover {\n      opacity: 0.8;\n      box-shadow: 0px 0px 8px 2px #03030f30;\n    }\n\n    &:active {\n      transform: scale(0.98);\n    }\n\n    &.tx-ui-tx-button--large {\n      font-size: 16px;\n      padding: ",
            ";\n    }\n\n    &.tx-ui-tx-button--small {\n      font-size: 12px;\n      padding: ",
            ";\n    }\n\n    &.tx-ui-tx-button--danger {\n      background-color: #e45649 !important;\n      border: 1px solid #e45649 !important;\n      color: #ffffff;\n    }\n\n    &.tx-ui-tx-button--disabled {\n      background-color: #f3f3f4 !important;\n      border: 1px solid #a0a1a7 !important;\n      color: #a0a1a7;\n      outline: none;\n      cursor: not-allowed;\n      &:hover {\n        opacity: 1;\n        box-shadow: none;\n      }\n\n      &:active {\n        transform: none;\n      }\n    }\n\n    &.tx-ui-tx-button--loading {\n      opacity: 0.7;\n      cursor: not-allowed;\n      &:hover {\n        box-shadow: none;\n      }\n\n      &:active {\n        transform: none;\n      }\n    }\n  }\n\n  &.tx-ui-tx-button--secondary {\n    background: #ffffff;\n    border: 1px solid #03030f;\n    color: #03030f;\n    &:hover {\n      opacity: 0.9;\n      background: #03030f;\n      color: #ffffff;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n\n      &:hover {\n        background: #e45649 !important;\n        box-shadow: 0px 0px 8px 2px #e4564930;\n        color: #ffffff;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      &:hover {\n        color: #a0a1a7;\n      }\n    }\n\n    &.tx-ui-tx-button--loading {\n      opacity: 0.7;\n    }\n  }\n\n  &.tx-ui-tx-button--dashed {\n    background: #ffffff;\n    border: 1px dashed #03030f;\n    color: #03030f;\n\n    &:hover {\n      border: 1px dashed #1fa9ff;\n      color: #1fa9ff;\n      box-shadow: 0px 0px 8px 2px #1fa9ff30;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n\n      &:hover {\n        background: #e4564915 !important;\n        box-shadow: 0px 0px 8px 2px #e4564930;\n        color: #e45649;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      &:hover {\n        color: #a0a1a7;\n      }\n    }\n  }\n\n  &.tx-ui-tx-button--filled {\n    background: #03030f20;\n    border: 1px solid #03030f00;\n    color: #03030f;\n    &:hover {\n      opacity: 0.9;\n      box-shadow: none;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #e4564920 !important;\n      color: #e45649;\n      border: 1px solid transparent !important;\n    }\n\n    &.tx-ui-tx-button--disabled {\n      border: 1px solid #03030f00 !important;\n    }\n\n    &.tx-ui-tx-button--loading {\n      opacity: 0.7;\n    }\n  }\n\n  &.tx-ui-tx-button--text {\n    background: white;\n    border: 1px solid #ffffff;\n    background: #ffffff;\n    color: #03030f;\n    &:hover {\n      background: #03030f10;\n      box-shadow: none;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n      border: 1px solid transparent !important;\n      &:hover {\n        background: #e4564915 !important;\n        box-shadow: none;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      border: 1px solid #ffffff !important;\n      background: #ffffff !important;\n    }\n  }\n\n  &.tx-ui-tx-button--link {\n    background: white;\n    border: none;\n    background: #ffffff;\n    border: 1px solid #ffffff;\n    color: #1fa9ff;\n    &:hover {\n      box-shadow: none;\n      border: none;\n    }\n\n    &.tx-ui-tx-button--danger {\n      background: #ffffff !important;\n      color: #e45649;\n      border: 1px solid transparent !important;\n      &:hover {\n        border: 1px solid transparent !important;\n      }\n    }\n\n    &.tx-ui-tx-button--disabled {\n      border: 1px solid #ffffff !important;\n      background: #ffffff !important;\n    }\n  }\n",
          ])),
        function (props) {
          return props.color || "#ffffff";
        },
        function (props) {
          return props.gradientBackground ? "1px solid #ffffff" : "1px solid #0e0e13ff";
        },
        function (props) {
          return "circle" === props.shape ? "100px" : "10px";
        },
        function (props) {
          return "circle" === props.shape ? "12px 12px !important" : "12px 22px !important";
        },
        function (props) {
          return props.gradientBackground
            ? "linear-gradient("
                .concat(props.gradientBackground.degree || 135, "deg, ")
                .concat(
                  props.gradientBackground.colors && props.gradientBackground.colors.length > 0
                    ? props.gradientBackground.colors.join(", ")
                    : ["#6253e1", "#04befe"].join(", "),
                  ")"
                )
            : props.backgroundColor || "#03030f";
        },
        function (props) {
          return "circle" === props.shape ? "14px 14px !important" : "14px 24px !important";
        },
        function (props) {
          return "circle" === props.shape ? "10px 10px !important" : "10px 20px !important";
        }
      );
      var rotate = (0, styled_components_browser_esm.i7)(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n",
            ]))
        ),
        LoadingRotatingIcon = (0, styled_components_browser_esm.Ay)(icons.A.IconLoader01)(
          _templateObject3 ||
            (_templateObject3 = (0, taggedTemplateLiteral.A)(["\n  animation: ", " 1s linear infinite;\n"])),
          rotate
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = [
          "label",
          "onClick",
          "background",
          "color",
          "primary",
          "size",
          "type",
          "disabled",
          "prefix",
          "suffix",
          "shape",
          "loading",
          "danger",
          "gradientBackground",
        ],
        TxButton = function TxButton(_ref) {
          var _ref$label = _ref.label,
            label = void 0 === _ref$label ? "Click Me" : _ref$label,
            onClick = _ref.onClick,
            background = _ref.background,
            color = _ref.color,
            size = (_ref.primary, _ref.size),
            type = _ref.type,
            disabled = _ref.disabled,
            prefix = _ref.prefix,
            suffix = _ref.suffix,
            shape = _ref.shape,
            loading = _ref.loading,
            danger = _ref.danger,
            gradientBackground = _ref.gradientBackground,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          return (0, jsx_runtime.jsxs)(
            styled,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)(
                {
                  onClick,
                  className: [
                    "tx-ui-tx-button",
                    disabled && "tx-ui-tx-button--disabled",
                    loading && "tx-ui-tx-button--loading",
                    danger && "tx-ui-tx-button--danger",
                    "tx-ui-tx-button--".concat(size),
                    "tx-ui-tx-button--".concat(type),
                  ].join(" "),
                  style: {
                    padding: "10px 20px",
                    background: background || "defaultBackground",
                    color: color || "defaultColor",
                  },
                  disabled: loading,
                  shape,
                  danger,
                  gradientBackground: gradientBackground && gradientBackground,
                },
                rest
              ),
              {},
              {
                children: [
                  loading && (0, jsx_runtime.jsx)(LoadingRotatingIcon, {}),
                  prefix && !loading && prefix,
                  label,
                  suffix && suffix,
                ],
              }
            )
          );
        };
      TxButton.defaultProps = { backgroundColor: null, type: "primary", size: "medium", onClick: void 0 };
      const tx_button = TxButton;
      TxButton.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxButton",
        props: {
          label: {
            defaultValue: { value: '"Click Me"', computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          backgroundColor: {
            defaultValue: { value: "null", computed: !1 },
            description: "",
            type: { name: "string" },
            required: !1,
          },
          type: {
            defaultValue: { value: '"primary"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"primary"', computed: !1 },
                { value: '"secondary"', computed: !1 },
                { value: '"filled"', computed: !1 },
                { value: '"text"', computed: !1 },
                { value: '"link"', computed: !1 },
                { value: '"dashed"', computed: !1 },
              ],
            },
            required: !1,
          },
          size: {
            defaultValue: { value: '"medium"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"small"', computed: !1 },
                { value: '"medium"', computed: !1 },
                { value: '"large"', computed: !1 },
              ],
            },
            required: !1,
          },
          onClick: {
            defaultValue: { value: "undefined", computed: !0 },
            description: "",
            type: { name: "func" },
            required: !1,
          },
          loading: { description: "", type: { name: "bool" }, required: !1 },
          danger: { description: "", type: { name: "bool" }, required: !1 },
          shape: {
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"default"', computed: !1 },
                { value: '"circle"', computed: !1 },
              ],
            },
            required: !1,
          },
          prefix: { description: "", type: { name: "node" }, required: !1 },
          suffix: { description: "", type: { name: "node" }, required: !1 },
          gradientBackground: {
            description: "",
            type: {
              name: "shape",
              value: {
                degree: { name: "number", required: !1 },
                colors: { name: "arrayOf", value: { name: "string" }, required: !1 },
              },
            },
            required: !1,
          },
        },
      };
    },
    "./src/components/tx-table/tx-table.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_table });
      var _templateObject,
        _templateObject2,
        _templateObject3,
        _templateObject4,
        _templateObject5,
        _templateObject6,
        _templateObject7,
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
        colors = (__webpack_require__("./src/styles/shorten.scss"), __webpack_require__("./src/theme/colors.js")),
        StyledTableWrapper = styled_components_browser_esm.Ay.div(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  width: 100%;\n  overflow-x: auto;\n  border: 1px solid ",
              ";\n  border-radius: 12px;\n",
            ])),
          colors.A.borderLight
        ),
        StyledTable = styled_components_browser_esm.Ay.table(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 14px;\n  background: ",
              ";\n",
            ])),
          colors.A.bgWhite
        ),
        StyledTableHead = styled_components_browser_esm.Ay.thead(
          _templateObject3 || (_templateObject3 = (0, taggedTemplateLiteral.A)(["\n  background-color: ", ";\n"])),
          colors.A.bgFill
        ),
        StyledTableRow = styled_components_browser_esm.Ay.tr(
          _templateObject4 ||
            (_templateObject4 = (0, taggedTemplateLiteral.A)([
              "\n  border-bottom: 1px solid ",
              ";\n  transition: background-color 0.2s ease;\n\n  &:last-child {\n    border-bottom: none;\n  }\n\n  ",
              "\n",
            ])),
          colors.A.borderLight,
          function (props) {
            return (
              props.hoverable &&
              "\n    &:hover {\n      background-color: ".concat(colors.A.bgFillLight, ";\n    }\n  ")
            );
          }
        ),
        StyledTableHeader = styled_components_browser_esm.Ay.th(
          _templateObject5 ||
            (_templateObject5 = (0, taggedTemplateLiteral.A)([
              "\n  padding: ",
              ";\n  text-align: ",
              ";\n  font-weight: 600;\n  color: ",
              ";\n  white-space: nowrap;\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "8px 12px";
              case "large":
                return "20px 16px";
              default:
                return "12px 16px";
            }
          },
          function (props) {
            return props.align || "left";
          },
          colors.A.textPrimary
        ),
        StyledTableCell = styled_components_browser_esm.Ay.td(
          _templateObject6 ||
            (_templateObject6 = (0, taggedTemplateLiteral.A)([
              "\n  padding: ",
              ";\n  text-align: ",
              ";\n  color: ",
              ";\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "8px 12px";
              case "large":
                return "20px 16px";
              default:
                return "12px 16px";
            }
          },
          function (props) {
            return props.align || "left";
          },
          colors.A.textSecondary
        ),
        StyledEmptyText = styled_components_browser_esm.Ay.div(
          _templateObject7 ||
            (_templateObject7 = (0, taggedTemplateLiteral.A)([
              "\n  padding: 48px 24px;\n  text-align: center;\n  color: ",
              ";\n  font-size: 14px;\n",
            ])),
          colors.A.textTertiary
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["columns", "dataSource", "size", "bordered", "hoverable", "emptyText"],
        TxTable = function TxTable(_ref) {
          var _ref$columns = _ref.columns,
            columns = void 0 === _ref$columns ? [] : _ref$columns,
            _ref$dataSource = _ref.dataSource,
            dataSource = void 0 === _ref$dataSource ? [] : _ref$dataSource,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            _ref$bordered = _ref.bordered,
            bordered = void 0 === _ref$bordered || _ref$bordered,
            _ref$hoverable = _ref.hoverable,
            hoverable = void 0 === _ref$hoverable || _ref$hoverable,
            _ref$emptyText = _ref.emptyText,
            emptyText = void 0 === _ref$emptyText ? "No data" : _ref$emptyText,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          return (0, jsx_runtime.jsx)(
            StyledTableWrapper,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({ bordered }, rest),
              {},
              {
                children: (0, jsx_runtime.jsxs)(StyledTable, {
                  children: [
                    (0, jsx_runtime.jsx)(StyledTableHead, {
                      children: (0, jsx_runtime.jsx)(StyledTableRow, {
                        children: columns.map(function (column, index) {
                          return (0,
                          jsx_runtime.jsx)(StyledTableHeader, { align: column.align, size, children: column.title }, column.key || index);
                        }),
                      }),
                    }),
                    (0, jsx_runtime.jsx)("tbody", {
                      children:
                        dataSource.length > 0
                          ? dataSource.map(function (record, rowIndex) {
                              return (0, jsx_runtime.jsx)(
                                StyledTableRow,
                                {
                                  hoverable,
                                  children: columns.map(function (column, colIndex) {
                                    return (0,
                                    jsx_runtime.jsx)(StyledTableCell, { align: column.align, size, children: column.render ? column.render(record[column.dataIndex], record, rowIndex) : record[column.dataIndex] }, column.key || colIndex);
                                  }),
                                },
                                record.key || rowIndex
                              );
                            })
                          : (0, jsx_runtime.jsx)("tr", {
                              children: (0, jsx_runtime.jsx)("td", {
                                colSpan: columns.length,
                                children: (0, jsx_runtime.jsx)(StyledEmptyText, { children: emptyText }),
                              }),
                            }),
                    }),
                  ],
                }),
              }
            )
          );
        };
      TxTable.defaultProps = {
        columns: [],
        dataSource: [],
        size: "medium",
        bordered: !0,
        hoverable: !0,
        emptyText: "No data",
      };
      const tx_table = TxTable;
      TxTable.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxTable",
        props: {
          columns: {
            defaultValue: { value: "[]", computed: !1 },
            description: "",
            type: {
              name: "arrayOf",
              value: {
                name: "shape",
                value: {
                  title: { name: "union", value: [{ name: "string" }, { name: "node" }], required: !1 },
                  dataIndex: { name: "string", required: !1 },
                  key: { name: "string", required: !1 },
                  align: {
                    name: "enum",
                    value: [
                      { value: '"left"', computed: !1 },
                      { value: '"center"', computed: !1 },
                      { value: '"right"', computed: !1 },
                    ],
                    required: !1,
                  },
                  render: { name: "func", required: !1 },
                },
              },
            },
            required: !1,
          },
          dataSource: {
            defaultValue: { value: "[]", computed: !1 },
            description: "",
            type: { name: "array" },
            required: !1,
          },
          size: {
            defaultValue: { value: '"medium"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"small"', computed: !1 },
                { value: '"medium"', computed: !1 },
                { value: '"large"', computed: !1 },
              ],
            },
            required: !1,
          },
          bordered: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          hoverable: {
            defaultValue: { value: "true", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          emptyText: {
            defaultValue: { value: '"No data"', computed: !1 },
            description: "",
            type: { name: "union", value: [{ name: "string" }, { name: "node" }] },
            required: !1,
          },
        },
      };
    },
    "./src/components/tx-tag/tx-tag.jsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.d(__webpack_exports__, { A: () => tx_tag });
      var _templateObject,
        _templateObject2,
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
        colors = (__webpack_require__("./src/styles/shorten.scss"), __webpack_require__("./src/theme/colors.js")),
        StyledTag = styled_components_browser_esm.Ay.span(
          _templateObject ||
            (_templateObject = (0, taggedTemplateLiteral.A)([
              "\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: ",
              ";\n  border-radius: 4px;\n  font-size: ",
              ";\n  font-weight: 400;\n  line-height: 1.5;\n  border: 1px solid transparent;\n  transition: all 0.2s ease;\n  cursor: ",
              ";\n\n  /* Color variants */\n  ",
              "\n",
            ])),
          function (props) {
            switch (props.size) {
              case "small":
                return "2px 8px";
              case "large":
                return "6px 16px";
              default:
                return "4px 12px";
            }
          },
          function (props) {
            switch (props.size) {
              case "small":
                return "12px";
              case "large":
                return "16px";
              default:
                return "14px";
            }
          },
          function (props) {
            return props.closable ? "default" : "inherit";
          },
          function (props) {
            var colorMap = {
                default: { bg: colors.A.bgFill, color: colors.A.textPrimary, border: colors.A.borderDefault },
                primary: { bg: colors.A.primaryLight, color: colors.A.primary, border: colors.A.primary },
                success: { bg: "".concat(colors.A.success, "15"), color: colors.A.success, border: colors.A.success },
                warning: { bg: "".concat(colors.A.warning, "15"), color: colors.A.warning, border: colors.A.warning },
                danger: { bg: colors.A.dangerLight, color: colors.A.danger, border: colors.A.danger },
                info: { bg: "".concat(colors.A.info, "15"), color: colors.A.info, border: colors.A.info },
              },
              style = colorMap[props.color] || colorMap.default;
            return "\n      background-color: "
              .concat(style.bg, ";\n      color: ")
              .concat(style.color, ";\n      border-color: ")
              .concat(props.bordered ? style.border : "transparent", ";\n    ");
          }
        ),
        StyledTagClose = styled_components_browser_esm.Ay.button(
          _templateObject2 ||
            (_templateObject2 = (0, taggedTemplateLiteral.A)([
              "\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  transition: opacity 0.2s ease;\n  width: 14px;\n  height: 14px;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n",
            ]))
        ),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        _excluded = ["children", "color", "closable", "onClose", "size", "bordered"],
        CloseIcon = function CloseIcon() {
          return (0, jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, jsx_runtime.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
              (0, jsx_runtime.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
            ],
          });
        },
        TxTag = function TxTag(_ref) {
          var children = _ref.children,
            _ref$color = _ref.color,
            color = void 0 === _ref$color ? "default" : _ref$color,
            _ref$closable = _ref.closable,
            closable = void 0 !== _ref$closable && _ref$closable,
            onClose = _ref.onClose,
            _ref$size = _ref.size,
            size = void 0 === _ref$size ? "medium" : _ref$size,
            _ref$bordered = _ref.bordered,
            bordered = void 0 !== _ref$bordered && _ref$bordered,
            rest = (0, objectWithoutProperties.A)(_ref, _excluded);
          return (0, jsx_runtime.jsxs)(
            StyledTag,
            (0, objectSpread2.A)(
              (0, objectSpread2.A)({ color, size, bordered, closable }, rest),
              {},
              {
                children: [
                  children,
                  closable &&
                    (0, jsx_runtime.jsx)(StyledTagClose, {
                      onClick: function handleClose(e) {
                        e.stopPropagation(), onClose && onClose(e);
                      },
                      type: "button",
                      children: (0, jsx_runtime.jsx)(CloseIcon, {}),
                    }),
                ],
              }
            )
          );
        };
      TxTag.defaultProps = { color: "default", closable: !1, size: "medium", bordered: !1 };
      const tx_tag = TxTag;
      TxTag.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "TxTag",
        props: {
          color: {
            defaultValue: { value: '"default"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"default"', computed: !1 },
                { value: '"primary"', computed: !1 },
                { value: '"success"', computed: !1 },
                { value: '"warning"', computed: !1 },
                { value: '"danger"', computed: !1 },
                { value: '"info"', computed: !1 },
              ],
            },
            required: !1,
          },
          closable: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          size: {
            defaultValue: { value: '"medium"', computed: !1 },
            description: "",
            type: {
              name: "enum",
              value: [
                { value: '"small"', computed: !1 },
                { value: '"medium"', computed: !1 },
                { value: '"large"', computed: !1 },
              ],
            },
            required: !1,
          },
          bordered: {
            defaultValue: { value: "false", computed: !1 },
            description: "",
            type: { name: "bool" },
            required: !1,
          },
          children: { description: "", type: { name: "node" }, required: !1 },
          onClose: { description: "", type: { name: "func" }, required: !1 },
        },
      };
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
