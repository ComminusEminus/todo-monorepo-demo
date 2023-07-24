"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _contexts = require("@ui/contexts");
var _index = require("../index");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ListItem = function ListItem(props) {
  return /*#__PURE__*/_react["default"].createElement(_contexts.ListItemProvider, {
    listItem: props.item
  }, /*#__PURE__*/_react["default"].createElement(_index.TodoListItemState, null, /*#__PURE__*/_react["default"].createElement(_index.TodoListItemBackground, null, /*#__PURE__*/_react["default"].createElement(_index.SelectListItemButton, null), /*#__PURE__*/_react["default"].createElement(_index.CompleteListItemButton, null), /*#__PURE__*/_react["default"].createElement(_index.DeleteListItemButton, null))));
};
exports.ListItem = ListItem;