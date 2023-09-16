"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateNewUserView = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _index = require("../forms/index");
var _loginUserContainer = require("../components/login-user-container");
var _createUserPageButton = require("../components/create-user-page-button");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CreateNewUserView = function CreateNewUserView(_ref) {
  var pageDisplayHandler = _ref.pageDisplayHandler;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_loginUserContainer.LoginUserContainer, null, /*#__PURE__*/_react["default"].createElement(_index.CreateUserPresentation, {
    pageDisplayHandler: pageDisplayHandler
  }), /*#__PURE__*/_react["default"].createElement(_createUserPageButton.CreateUserPageButton, {
    pageDisplayHandler: pageDisplayHandler
  }));
};
exports.CreateNewUserView = CreateNewUserView;