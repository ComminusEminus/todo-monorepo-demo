"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenAddNewTodoListItemFormButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _common = require("@reactui/common");
var _useOpenNewListItemFormHandler = require("../hooks/use-open-new-list-item-form-handler");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var OpenAddNewTodoListItemFormButton = function OpenAddNewTodoListItemFormButton() {
  var theme = (0, _styledComponents.useTheme)();
  var _useOpenAddNewListIte = (0, _useOpenNewListItemFormHandler.useOpenAddNewListItemFormHandler)(),
    openAddNewListItemFormHandler = _useOpenAddNewListIte.openAddNewListItemFormHandler;
  return /*#__PURE__*/_react["default"].createElement(_common.Button, {
    size: 'sm',
    type: 'button',
    color: theme.colors.secondary.onBase,
    buttonStyle: 'tertiary',
    text: 'Add',
    onClick: openAddNewListItemFormHandler
  });
};
exports.OpenAddNewTodoListItemFormButton = OpenAddNewTodoListItemFormButton;