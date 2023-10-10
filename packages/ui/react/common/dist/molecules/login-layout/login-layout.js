"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginLayout = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _Container = require("../../base/container/Container");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LoginLayout = function LoginLayout(props) {
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_Container.Container, {
    pt: 'sm',
    pb: 'sm',
    pl: 'sm',
    pr: 'sm',
    height: '25%',
    width: '25%',
    background: theme.colors.neutral.surface,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }, props.children);
};
exports.LoginLayout = LoginLayout;