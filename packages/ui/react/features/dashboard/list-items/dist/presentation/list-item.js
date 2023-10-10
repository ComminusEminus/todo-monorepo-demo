"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _contexts = require("@reactui/contexts");
var _common = require("@reactui/common");
var _selectListItemButton = require("../components/select-list-item-button/presentation/select-list-item-button");
var _completeListItemButton = require("../components/complete-list-item-button/presentation/complete-list-item-button");
var _deleteListItemButton = require("../components/delete-list-item-button/presentation/delete-list-item-button");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ListItem = function ListItem(_ref) {
  var item = _ref.item;
  var _useUIContext = (0, _contexts.useUIContext)(),
    state = _useUIContext.state;
  var selectedTodoListItemId = state.selectedTodoListItemId;
  return /*#__PURE__*/_react["default"].createElement(_contexts.ListItemProvider, {
    listItem: item
  }, /*#__PURE__*/_react["default"].createElement(_common.ListBackground, {
    selectedId: selectedTodoListItemId,
    currentId: item._id
  }, /*#__PURE__*/_react["default"].createElement(_selectListItemButton.SelectListItemButton, null), /*#__PURE__*/_react["default"].createElement(_completeListItemButton.CompleteListItemButton, null), /*#__PURE__*/_react["default"].createElement(_deleteListItemButton.DeleteListItemButton, null)));
};
exports.ListItem = ListItem;