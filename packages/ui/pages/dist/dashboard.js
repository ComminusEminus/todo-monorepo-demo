"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dashboard = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _todoLists = require("@ui/todo-lists");
var _todoList = require("@ui/todo-list");
var _listItemDetail = require("@ui/list-item-detail");
var _formDisplay = require("@ui/form-display");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Dashboard = function Dashboard() {
  return /*#__PURE__*/_react["default"].createElement(_container.Container, {
    justifyContent: 'space-evenly'
  }, /*#__PURE__*/_react["default"].createElement(_container.Container, {
    flexGrow: 0
  }, /*#__PURE__*/_react["default"].createElement(_todoLists.TodoListsView, null)), /*#__PURE__*/_react["default"].createElement(_container.Container, {
    flexGrow: 1,
    flexDirection: 'column'
  }, /*#__PURE__*/_react["default"].createElement(_listItemDetail.ListDetailView, null), /*#__PURE__*/_react["default"].createElement(_formDisplay.FormDisplayView, null)), /*#__PURE__*/_react["default"].createElement(_container.Container, {
    flexGrow: 0
  }, /*#__PURE__*/_react["default"].createElement(_todoList.TodoListView, null)));
};
exports.Dashboard = Dashboard;