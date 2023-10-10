"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthView = void 0;
var _react = _interopRequireDefault(require("react"));
var _contexts = require("@reactui/contexts");
var _loginContainer = require("./login-container");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var AuthView = function AuthView() {
  return /*#__PURE__*/_react["default"].createElement(_contexts.LoginProvider, null, /*#__PURE__*/_react["default"].createElement(_loginContainer.LoginContainer, null));
};
exports.AuthView = AuthView;