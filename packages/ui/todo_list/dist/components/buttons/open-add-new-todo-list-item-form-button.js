"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenAddNewTodoListItemFormButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _useOpenNewListItemForm = require("../../hooks/ui-interactions/use-open-new-list-item-form");
var _common = require("@ui/common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//!!!!!! Remove component
var OpenAddNewTodoListItemFormButton = function OpenAddNewTodoListItemFormButton() {
  var _useOpenAddNewListIte = (0, _useOpenNewListItemForm.useOpenAddNewListItemForm)(),
    openAddNewListItemFormHandler = _useOpenAddNewListIte.openAddNewListItemFormHandler,
    state = _useOpenAddNewListIte.state;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_common.OpenFormButton, {
    onClick: openAddNewListItemFormHandler
  });
};
exports.OpenAddNewTodoListItemFormButton = OpenAddNewTodoListItemFormButton;