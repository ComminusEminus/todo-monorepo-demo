"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _forms = require("@design/forms");
var _FormSubmissionButton = require("./FormSubmissionButton");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Form = function Form(props) {
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_forms.FormStyle, {
    onSubmit: props.onSubmit
  }, props.children, /*#__PURE__*/_react["default"].createElement(_FormSubmissionButton.FormSubmissionButton, {
    justifyButton: props.justifyButton,
    alignButton: props.alignButton
  }));
};
exports.Form = Form;