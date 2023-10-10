"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormSubmissionButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _outlineButton = require("../buttons/variants/outline-button");
var _Container = require("../container/Container");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FormSubmissionButton = function FormSubmissionButton(_ref) {
  var justifyButton = _ref.justifyButton,
    alignButton = _ref.alignButton;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_Container.Container, {
    justifyContent: justifyButton,
    alignItems: alignButton,
    width: '100%'
  }, /*#__PURE__*/_react["default"].createElement(_outlineButton.OutlineButton, {
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