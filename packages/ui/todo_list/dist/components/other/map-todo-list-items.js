"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapTodoListItems = void 0;
var _react = _interopRequireDefault(require("react"));
var _listItem = require("./list-item");
var _text = require("@design/text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MapTodoListItems = function MapTodoListItems(props) {
  console.log(props.list);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !props.list && /*#__PURE__*/_react["default"].createElement(_text.Text, {
    text: '...Loading'
  }), props.list && props.list.map(function (listItem) {
    return /*#__PURE__*/_react["default"].createElement(_listItem.ListItem, {
      item: listItem,
      key: listItem._id
    });
  }));
};
exports.MapTodoListItems = MapTodoListItems;