"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginUserContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LoginUserContainer = function LoginUserContainer(props) {
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_container.Container, {
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
exports.LoginUserContainer = LoginUserContainer;