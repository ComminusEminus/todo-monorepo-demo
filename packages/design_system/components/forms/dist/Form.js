"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _Form = require("./Form.style");
var _buttons = require("@design/buttons");
var _container = require("@design/container");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Form = _ref => {
  let {
    children,
    onSubmit
  } = _ref;
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_Form.FormStyle, {
    onSubmit: onSubmit
  }, children, /*#__PURE__*/_react.default.createElement(_container.Container, {
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_buttons.OutlineButton, {
    type: "submit",
    alignSelf: "flex-start",
    buttonStyle: "success",
    children: "Submit",
    size: "sm",
    color: theme.colors.neutral.onBackground,
    buttonStateWidth: "100%",
    width: "100%"
  })));
};
exports.Form = Form;