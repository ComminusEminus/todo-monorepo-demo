"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListBackground = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _Container = require("../../base/container/Container");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ListBackground = function ListBackground(_ref) {
  var selectedId = _ref.selectedId,
    currentId = _ref.currentId,
    children = _ref.children;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_Container.Container, {
    background: selectedId === currentId ? theme.colors.neutral.surface : theme.colors.neutral.surfaceLow,
    width: '100%',
    height: 'fit-content',
    justifyContent: 'space-between',
    alignItems: 'center',
    pl: '10%'
  }, children);
};
exports.ListBackground = ListBackground;