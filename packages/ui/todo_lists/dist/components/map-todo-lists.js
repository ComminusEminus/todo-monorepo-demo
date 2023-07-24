"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapTodoLists = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("./index");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MapTodoLists = function MapTodoLists(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.lists.map(function (listDescription, index) {
    return /*#__PURE__*/_react["default"].createElement(_index.ListsItem, {
      item: listDescription,
      key: index
    });
  }));
};
exports.MapTodoLists = MapTodoLists;