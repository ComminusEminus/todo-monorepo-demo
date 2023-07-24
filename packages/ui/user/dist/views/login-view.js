"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginView = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _index = require("../forms/index");
var _loginUserContainer = require("../components/login-user-container");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LoginView = function LoginView() {
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_loginUserContainer.LoginUserContainer, null, /*#__PURE__*/_react["default"].createElement(_index.LoginUserPresentation, null));
};
exports.LoginView = LoginView;