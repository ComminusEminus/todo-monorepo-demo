"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateNewUserView = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _createUserFormPresentation = require("../components/create-new-user-form/presentation/create-user-form-presentation");
var _common = require("@reactui/common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CreateNewUserView = function CreateNewUserView() {
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_common.LoginLayout, null, /*#__PURE__*/_react["default"].createElement(_createUserFormPresentation.CreateUserFormPresentation, null), /*#__PURE__*/_react["default"].createElement(_common.LoginPageSwitchButton, null));
};
exports.CreateNewUserView = CreateNewUserView;