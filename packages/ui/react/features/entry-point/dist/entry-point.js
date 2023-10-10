"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntryPoint = void 0;
var _react = _interopRequireDefault(require("react"));
var _dashboard = require("@reactui/dashboard");
var _auth = require("@reactui/auth");
var _useLoginHook2 = require("./hooks/use-login-hook");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var EntryPoint = function EntryPoint() {
  var _useLoginHook = (0, _useLoginHook2.useLoginHook)(),
    loginState = _useLoginHook.loginState;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !loginState ? /*#__PURE__*/_react["default"].createElement(_auth.AuthView, null) : /*#__PURE__*/_react["default"].createElement(_dashboard.Dashboard, null));
};
exports.EntryPoint = EntryPoint;