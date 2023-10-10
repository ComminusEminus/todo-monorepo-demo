"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginView = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _common = require("@reactui/common");
var _loginUserFormPresentation = require("../components/login-form/presentation/login-user-form-presentation");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LoginView = function LoginView() {
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_common.LoginLayout, null, /*#__PURE__*/_react["default"].createElement(_loginUserFormPresentation.LoginUserFormPresentation, null), /*#__PURE__*/_react["default"].createElement(_common.LoginPageSwitchButton, null));
};
exports.LoginView = LoginView;