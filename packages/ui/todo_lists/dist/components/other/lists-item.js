"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListsItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _contexts = require("@ui/contexts");
var _listsStateWrapper = require("../containers/lists-state-wrapper");
var _todoListsBackground = require("../containers/todo-lists-background");
var _selectListButton = require("../buttons/select-list-button");
var _deleteListButton = require("../buttons/delete-list-button");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ListsItem = function ListsItem(props) {
  var item = props.item;
  return /*#__PURE__*/_react["default"].createElement(_contexts.ListsProvider, {
    list: item
  }, /*#__PURE__*/_react["default"].createElement(_listsStateWrapper.ListsStateWrapper, null, /*#__PURE__*/_react["default"].createElement(_todoListsBackground.TodoListsBackground, {
    listId: item._id
  }, /*#__PURE__*/_react["default"].createElement(_selectListButton.SelectListButton, null), /*#__PURE__*/_react["default"].createElement(_deleteListButton.DeleteListButton, null))));
};
exports.ListsItem = ListsItem;