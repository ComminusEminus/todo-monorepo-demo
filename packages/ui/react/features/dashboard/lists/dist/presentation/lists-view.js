"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListsView = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _common = require("@reactui/common");
var _openAddNewListFormButton = require("../components/open-add-new-list-button/presentation/open-add-new-list-form-button");
var _mapLists = require("./map-lists");
var _listsViewHook = require("./hooks/lists-view-hook");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ListsView = function ListsView() {
  var theme = (0, _styledComponents.useTheme)();
  var _ListsViewHook = (0, _listsViewHook.ListsViewHook)(),
    getAllTodoListsApiState = _ListsViewHook.getAllTodoListsApiState;
  var returnValue = getAllTodoListsApiState.returnValue;
  var lists = returnValue.lists;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_common.ListContainer, {
    listTitle: 'Todo Lists',
    listMap: /*#__PURE__*/_react["default"].createElement(_mapLists.MapLists, {
      allLists: lists
    }),
    footerOptions: /*#__PURE__*/_react["default"].createElement(_openAddNewListFormButton.OpenAddNewListFormButton, null)
  }));
};
exports.ListsView = ListsView;