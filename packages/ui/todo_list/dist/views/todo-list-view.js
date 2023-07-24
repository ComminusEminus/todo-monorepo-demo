"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoListView = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _index = require("../components/index");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TodoListView = function TodoListView() {
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_container.Container, {
    background: theme.colors.neutral.background,
    width: '100%',
    height: '100%'
  }, /*#__PURE__*/_react["default"].createElement(_index.TodoListItemContainer, null));
};
exports.TodoListView = TodoListView;