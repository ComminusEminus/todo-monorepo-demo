"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBarLayoutTop = exports.NavBarLayoutBottom = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NavBarLayoutTop = props => {
  return /*#__PURE__*/_react.default.createElement(_container.Container, {
    pt: "12px",
    pb: "16px",
    pl: "8px",
    pr: "8px"
  }, /*#__PURE__*/_react.default.createElement(_container.Container, {
    flexShrink: 2,
    flexGrow: 1,
    justifyContent: 'flex-start',
    children: props.menuButton
  }), /*#__PURE__*/_react.default.createElement(_container.Container, {
    flexShrink: 1,
    flexGrow: 2,
    children: props.logo
  }));
};
exports.NavBarLayoutTop = NavBarLayoutTop;
const NavBarLayoutBottom = props => {
  return /*#__PURE__*/_react.default.createElement(_container.Container, {
    pt: "12px",
    pb: "16px",
    justifyContent: "space-around",
    children: props.children
  });
};
exports.NavBarLayoutBottom = NavBarLayoutBottom;