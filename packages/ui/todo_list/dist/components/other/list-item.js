"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _contexts = require("@ui/contexts");
var _listItemStateWrapper = require("../containers/list-item-state-wrapper");
var _todoListItemBackground = require("../containers/todo-list-item-background");
var _selectListItemButton = require("../buttons/select-list-item-button");
var _completeListItemButton = require("../buttons/complete-list-item-button");
var _deleteListItemButton = require("../buttons/delete-list-item-button");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ListItem = function ListItem(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/_react["default"].createElement(_contexts.ListItemProvider, {
    listItem: item
  }, /*#__PURE__*/_react["default"].createElement(_listItemStateWrapper.TodoListItemState, null, /*#__PURE__*/_react["default"].createElement(_todoListItemBackground.TodoListItemBackground, null, /*#__PURE__*/_react["default"].createElement(_selectListItemButton.SelectListItemButton, null), /*#__PURE__*/_react["default"].createElement(_completeListItemButton.CompleteListItemButton, null), /*#__PURE__*/_react["default"].createElement(_deleteListItemButton.DeleteListItemButton, null))));
};
exports.ListItem = ListItem;