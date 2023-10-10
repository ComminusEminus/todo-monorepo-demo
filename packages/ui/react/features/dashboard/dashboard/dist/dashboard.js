"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dashboard = void 0;
var _react = _interopRequireDefault(require("react"));
var _lists = require("@reactui/lists");
var _listItems = require("@reactui/list-items");
var _login = require("@reactui/login");
var _dashboardContainer = require("./dashboard-container");
var _dashboardToolbar = require("./dashboard-toolbar");
var _dashboardListPanel = require("./dashboard-list-panel");
var _dashboardCenterPanel = require("./dashboard-center-panel");
var _contexts = require("@reactui/contexts");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Dashboard = function Dashboard() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_dashboardToolbar.DashboardToolBar, {
    children: /*#__PURE__*/_react["default"].createElement(_login.LogoutButton, null)
  }), /*#__PURE__*/_react["default"].createElement(_dashboardContainer.DashboardContainer, null, /*#__PURE__*/_react["default"].createElement(_contexts.AllListsProvider, null, /*#__PURE__*/_react["default"].createElement(_dashboardListPanel.DashboardListPanel, {
    children: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_lists.ListsView, null), /*#__PURE__*/_react["default"].createElement(_lists.AddNewListFormDisplay, null))
  })), /*#__PURE__*/_react["default"].createElement(_dashboardCenterPanel.DashboardCenterPanel, {
    children: /*#__PURE__*/_react["default"].createElement(_listItems.ListDetailView, null)
  }), /*#__PURE__*/_react["default"].createElement(_contexts.SelectedListProvider, null, /*#__PURE__*/_react["default"].createElement(_dashboardListPanel.DashboardListPanel, {
    children: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_listItems.ListItemView, null), /*#__PURE__*/_react["default"].createElement(_listItems.AddNewListItemFormDisplay, null))
  }))));
};
exports.Dashboard = Dashboard;