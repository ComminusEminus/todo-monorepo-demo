"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginPage = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _user = require("@ui/user");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LoginPage = function LoginPage() {
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_container.Container, {
    background: theme.colors.primary.base,
    width: '100%',
    height: '100%'
  }, /*#__PURE__*/_react["default"].createElement(_user.LoginView, null));
};
exports.LoginPage = LoginPage;