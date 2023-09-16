"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserView = void 0;
var _react = _interopRequireDefault(require("react"));
var _useSwitchPage2 = require("../hooks/ui-interactions/use-switch-page");
var _createNewUserView = require("./create-new-user-view");
var _loginView = require("./login-view");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var UserView = function UserView() {
  var _useSwitchPage = (0, _useSwitchPage2.useSwitchPage)(),
    pageDisplay = _useSwitchPage.pageDisplay,
    pageDisplayHandler = _useSwitchPage.pageDisplayHandler;
  if (pageDisplay === 'LOGIN_PAGE') {
    return /*#__PURE__*/_react["default"].createElement(_loginView.LoginView, {
      pageDisplayHandler: pageDisplayHandler
    });
  } else {
    return /*#__PURE__*/_react["default"].createElement(_createNewUserView.CreateNewUserView, {
      pageDisplayHandler: pageDisplayHandler
    });
  }
};
exports.UserView = UserView;