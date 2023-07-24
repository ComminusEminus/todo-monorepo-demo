"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListsItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _contexts = require("@ui/contexts");
var _index = require("./index");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ListsItem = function ListsItem(props) {
  return /*#__PURE__*/_react["default"].createElement(_contexts.ListsProvider, {
    list: props.item
  }, /*#__PURE__*/_react["default"].createElement(_index.ListsStateWrapper, null, /*#__PURE__*/_react["default"].createElement(_index.TodoListsBackground, {
    listId: props.item.id
  }, /*#__PURE__*/_react["default"].createElement(_index.SelectListButton, null), /*#__PURE__*/_react["default"].createElement(_index.DeleteListButton, null))));
};
exports.ListsItem = ListsItem;