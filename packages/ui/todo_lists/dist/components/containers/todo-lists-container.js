"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoListsContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _mapTodoLists = require("../other/map-todo-lists");
var _text = require("@design/text");
var _container = require("@design/container");
var _styledComponents = require("styled-components");
var _common = require("@ui/common");
var _useOpenAddNewListForm = require("../../hooks/ui-interactions/use-open-add-new-list-form");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TodoListsContainer = function TodoListsContainer(_ref) {
  var allTodoLists = _ref.allTodoLists,
    loading = _ref.loading,
    errorMessage = _ref.errorMessage;
  var theme = (0, _styledComponents.useTheme)();
  var _useOpenAddNewListFor = (0, _useOpenAddNewListForm.useOpenAddNewListForm)(),
    openAddNewListFormHandler = _useOpenAddNewListFor.openAddNewListFormHandler,
    state = _useOpenAddNewListFor.state;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, allTodoLists.length == 0 && /*#__PURE__*/_react["default"].createElement(_container.Container, {
    flexGrow: '1',
    flexDirection: 'column',
    background: theme.colors.neutral.surface,
    border: "2.5px solid ".concat(theme.colors.neutral.onBackground)
  }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
    text: 'You currently have nothing Todo!',
    color: theme.colors.neutral.onBackground,
    fontSize: 'xs',
    fontFamily: 'Albert_Sans'
  })), allTodoLists.length > 0 && /*#__PURE__*/_react["default"].createElement(_container.Container, {
    flexGrow: '1',
    background: theme.colors.neutral.background,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    overflow: 'scroll'
  }, /*#__PURE__*/_react["default"].createElement(_mapTodoLists.MapTodoLists, {
    lists: allTodoLists
  })), /*#__PURE__*/_react["default"].createElement(_container.Container, {
    flexGrow: '0',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    background: theme.colors.neutral.surface
  }, /*#__PURE__*/_react["default"].createElement(_common.OpenFormButton, {
    onClick: openAddNewListFormHandler
  })));
};
exports.TodoListsContainer = TodoListsContainer;