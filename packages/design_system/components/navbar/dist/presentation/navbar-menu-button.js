"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBarMenuButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _buttons = require("@design/buttons");
var _icons = require("@design/icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NavBarMenuButton = ({
  sheetHandler
}) => {
  return /*#__PURE__*/_react.default.createElement(_buttons.SvgButton, {
    text: 'Button',
    size: 'sm',
    buttonStyle: 'primary',
    viewBox: _icons.HamburgerIconStyle.viewBox,
    iconWidth: _icons.HamburgerIconStyle.width,
    iconHeight: _icons.HamburgerIconStyle.height,
    path: _icons.HamburgerIconStyle.path,
    fill: '#000000',
    onClick: () => sheetHandler()
  });
};
exports.NavBarMenuButton = NavBarMenuButton;