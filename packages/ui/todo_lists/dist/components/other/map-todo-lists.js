"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapTodoLists = void 0;
var _react = _interopRequireDefault(require("react"));
var _listsItem = require("./lists-item");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MapTodoLists = function MapTodoLists(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.lists.map(function (listDescription) {
    return /*#__PURE__*/_react["default"].createElement(_listsItem.ListsItem, {
      item: listDescription,
      key: listDescription._id
    });
  }));
};
exports.MapTodoLists = MapTodoLists;