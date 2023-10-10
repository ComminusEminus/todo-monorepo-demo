"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBarBottom = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _NavBar = require("../style/NavBar.style");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NavBarBottom = props => {
  return /*#__PURE__*/_react.default.createElement(_NavBar.NavBarStyle, {
    position: "bottom",
    elevation: props.elevation
  }, /*#__PURE__*/_react.default.createElement(_container.Container, {
    pt: "12px",
    pb: "16px",
    justifyContent: "space-around",
    children: props.children
  }));
};
exports.NavBarBottom = NavBarBottom;