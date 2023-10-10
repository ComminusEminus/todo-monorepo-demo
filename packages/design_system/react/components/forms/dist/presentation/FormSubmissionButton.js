"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormSubmissionButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _buttons = require("@design/buttons");
var _container = require("@design/container");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FormSubmissionButton = ({
  justifyButton,
  alignButton
}) => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_container.Container, {
    justifyContent: justifyButton,
    alignItems: alignButton,
    width: '100%'
  }, /*#__PURE__*/_react.default.createElement(_buttons.OutlineButton, {
    type: "submit",
    alignSelf: "flex-start",
    buttonStyle: "success",
    text: "Submit",
    size: "sm",
    color: theme.colors.neutral.onBackground,
    buttonStateWidth: "100%",
    width: "100%"
  }));
};
exports.FormSubmissionButton = FormSubmissionButton;