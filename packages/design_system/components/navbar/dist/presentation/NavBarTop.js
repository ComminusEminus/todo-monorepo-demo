"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBarTop = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _NavBar = require("../style/NavBar.style");
var _styledComponents = require("styled-components");
var _navbarMenuButton = require("./navbar-menu-button");
var _useopenclosecontroller = require("@design/useopenclosecontroller");
var _sidesheet = require("@design/sidesheet");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NavBarTop = props => {
  const {
    sheetHandler,
    animateState
  } = (0, _useopenclosecontroller.useOpenCloseController)();
  const theme = (0, _styledComponents.useTheme)();
  console.log(animateState);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_NavBar.NavBarStyle, {
    elevation: props.elevation,
    background: theme.colors.neutral.surface
  }, /*#__PURE__*/_react.default.createElement(_container.Container, {
    pt: "12px",
    pb: "16px",
    pl: "8px",
    pr: "8px"
  }, /*#__PURE__*/_react.default.createElement(_container.Container, {
    flexShrink: 2,
    flexGrow: 1,
    justifyContent: 'flex-start',
    children: /*#__PURE__*/_react.default.createElement(_navbarMenuButton.NavBarMenuButton, {
      sheetHandler: () => sheetHandler()
    })
  }), /*#__PURE__*/_react.default.createElement(_container.Container, {
    flexShrink: 1,
    flexGrow: 2,
    children: props.logo
  })), /*#__PURE__*/_react.default.createElement(_sidesheet.SideSheet, {
    children: props.menuItems,
    sheetHandler: () => sheetHandler(),
    animateState: animateState
  })));
};
exports.NavBarTop = NavBarTop;