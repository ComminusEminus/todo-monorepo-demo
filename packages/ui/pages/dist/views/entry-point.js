"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntryPoint = void 0;
var _react = _interopRequireDefault(require("react"));
var _contexts = require("@ui/contexts");
var _dashboard = require("./dashboard");
var _user = require("@ui/user");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var EntryPoint = function EntryPoint() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    state = _useUIContext.state;
  var loggedIn = state.loggedIn;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, localStorage.getItem('loggedIn') && /*#__PURE__*/_react["default"].createElement(_dashboard.Dashboard, null), !localStorage.getItem('loggedIn') && /*#__PURE__*/_react["default"].createElement(_user.UserView, null));
};
exports.EntryPoint = EntryPoint;