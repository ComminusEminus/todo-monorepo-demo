"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteListItemButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _useDeleteTodolistItemsUi = require("../../hooks/ui-interactions/use-delete-todolist-items-ui");
var _styledComponents = require("styled-components");
var _common = require("@ui/common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DeleteListItemButton = function DeleteListItemButton() {
  var _useDeleteTodoListIte = (0, _useDeleteTodolistItemsUi.useDeleteTodoListItemUI)(),
    visibilityHandler = _useDeleteTodoListIte.visibilityHandler;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_common.DeleteButton, {
    onClick: visibilityHandler
  });
};
exports.DeleteListItemButton = DeleteListItemButton;