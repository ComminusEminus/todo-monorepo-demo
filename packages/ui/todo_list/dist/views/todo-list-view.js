"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoListView = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _index = require("../components/index");
var _styledComponents = require("styled-components");
var _text = require("@design/text");
var _useFilterTodolistItems = require("../hooks/ui-interactions/use-filter-todolist-items");
var _filterListButtonGroup = require("../components/buttons/filter-list-button-group");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TodoListView = function TodoListView() {
  var theme = (0, _styledComponents.useTheme)();
  var _useFilterTodoListIte = (0, _useFilterTodolistItems.useFilterTodoListItems)(),
    filterListHandler = _useFilterTodoListIte.filterListHandler,
    filteredList = _useFilterTodoListIte.filteredList,
    filterListState = _useFilterTodoListIte.filterListState;
  return /*#__PURE__*/_react["default"].createElement(_container.Container, {
    background: theme.colors.neutral.background,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
    text: 'Todo List Items',
    color: 'theme.colors.neutral.onSurface',
    fontSize: theme.space.lg,
    fontFamily: 'Albert_Sans'
  }), /*#__PURE__*/_react["default"].createElement(_filterListButtonGroup.FilterListButtonGroup, {
    filterListHandler: filterListHandler,
    filterListState: filterListState
  }), /*#__PURE__*/_react["default"].createElement(_index.TodoListItemContainer, {
    filteredList: filteredList
  }));
};
exports.TodoListView = TodoListView;