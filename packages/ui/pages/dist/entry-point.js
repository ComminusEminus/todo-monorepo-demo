"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntryPoint = void 0;
var _react = _interopRequireDefault(require("react"));
var _contexts = require("@ui/contexts");
var _loginPage = require("./login-page");
var _dashboard = require("./dashboard");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var EntryPoint = function EntryPoint() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    userProfile = _useUIContext.userProfile;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !userProfile && /*#__PURE__*/_react["default"].createElement(_loginPage.LoginPage, null), userProfile && /*#__PURE__*/_react["default"].createElement(_dashboard.Dashboard, null));
};
exports.EntryPoint = EntryPoint;