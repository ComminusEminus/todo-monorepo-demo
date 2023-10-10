"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _contexts = require("@reactui/contexts");
var _user = require("@reactui/user");
var _login = require("@reactui/login");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LoginContainer = function LoginContainer() {
  var _useLoginContext = (0, _contexts.useLoginContext)(),
    pageDisplay = _useLoginContext.pageDisplay;
  if (pageDisplay === 'LOGIN_PAGE') {
    return /*#__PURE__*/_react["default"].createElement(_login.LoginView, null);
  } else {
    return /*#__PURE__*/_react["default"].createElement(_user.CreateNewUserView, null);
  }
};
exports.LoginContainer = LoginContainer;