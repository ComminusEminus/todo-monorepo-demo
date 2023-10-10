"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListsItem = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _contexts = require("@reactui/contexts");
var _common = require("@reactui/common");
var _selectListButton = require("../components/select-list-button/presentation/select-list-button");
var _deleteListButton = require("../components/delete-list-button/presentation/delete-list-button");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ListsItem = function ListsItem(_ref) {
  var item = _ref.item;
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch,
    state = _useUIContext.state;
  var selectedTodoListId = state.selectedTodoListId;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_contexts.ListsProvider, {
    list: item
  }, /*#__PURE__*/_react["default"].createElement(_common.ListBackground, {
    selectedId: selectedTodoListId,
    currentId: item._id
  }, /*#__PURE__*/_react["default"].createElement(_selectListButton.SelectListButton, null), /*#__PURE__*/_react["default"].createElement(_deleteListButton.DeleteListButton, null)));
};
exports.ListsItem = ListsItem;