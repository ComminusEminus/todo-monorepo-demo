"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DashboardToolBar = void 0;
var _react = _interopRequireDefault(require("react"));
var _common = require("@reactui/common");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DashboardToolBar = function DashboardToolBar(_ref) {
  var children = _ref.children;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_common.Container, {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    pt: '5px',
    pb: '5px',
    pl: '5px',
    pr: '5px',
    background: theme.colors.neutral.surfaceLow
  }, children);
};
exports.DashboardToolBar = DashboardToolBar;