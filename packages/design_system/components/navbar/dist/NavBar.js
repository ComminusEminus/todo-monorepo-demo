"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBarTopButton = exports.NavBarTop = exports.NavBarBottom = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _NavBar = require("./NavBar.style");
var _NavBarLayout = require("./NavBarLayout");
var _icons = require("@design/icons");
var _buttons = require("@design/buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NavBarTopButton = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_buttons.SvgButton, {
    elevation: "xs",
    onClick: props.onClick,
    children: /*#__PURE__*/_react.default.createElement(_icons.HamburgerIcon, {
      iconSize: theme.space.lg,
      fill: theme.colors.neutral.onBackground
    })
  });
};
exports.NavBarTopButton = NavBarTopButton;
const NavBarTop = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_NavBar.NavBarStyle, {
    elevation: props.elevation,
    background: theme.colors.neutral.surface
  }, /*#__PURE__*/_react.default.createElement(_NavBarLayout.NavBarLayoutTop, {
    menuButton: /*#__PURE__*/_react.default.createElement(NavBarTopButton, {
      onClick: props.onClick
    })
  }));
};
exports.NavBarTop = NavBarTop;
const NavBarBottom = props => {
  const theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react.default.createElement(_NavBar.NavBarStyle, {
    position: "bottom",
    elevation: props.elevation
  }, /*#__PURE__*/_react.default.createElement(_NavBarLayout.NavBarLayoutBottom, {
    children: props.children
  }));
};
exports.NavBarBottom = NavBarBottom;