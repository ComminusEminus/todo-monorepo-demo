"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginPageSwitchButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _contexts = require("@reactui/contexts");
var _Container = require("../../base/container/Container");
var _button = require("../../base/buttons/variants/button");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LoginPageSwitchButton = function LoginPageSwitchButton() {
  var _useLoginContext = (0, _contexts.useLoginContext)(),
    pageSwitchHandler = _useLoginContext.pageSwitchHandler;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_Container.Container, {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_button.Button, {
    size: 'sm',
    text: 'Click Here',
    buttonStyle: 'primary',
    onClick: pageSwitchHandler
  }));
};
exports.LoginPageSwitchButton = LoginPageSwitchButton;