"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _common = require("@reactui/common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DashboardContainer = function DashboardContainer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_common.Container, {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    pt: '5px',
    pb: '5px',
    pl: '5px',
    pr: '5px',
    height: '100vh'
  }, children);
};
exports.DashboardContainer = DashboardContainer;