"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardCenterPanel = void 0;
var _react = _interopRequireDefault(require("react"));
var _common = require("@reactui/common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DashboardCenterPanel = function DashboardCenterPanel(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_common.Container, {
    flexGrow: '1',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    height: '25vh'
  }, children);
};
exports.DashboardCenterPanel = DashboardCenterPanel;