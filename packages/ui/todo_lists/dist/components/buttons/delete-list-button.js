"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteListButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _useDeleteTodolistUi = require("../../hooks/ui-interactions/use-delete-todolist-ui");
var _common = require("@ui/common");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DeleteListButton = function DeleteListButton() {
  var _useDeleteTodoListUI = (0, _useDeleteTodolistUi.useDeleteTodoListUI)(),
    visibilityState = _useDeleteTodoListUI.visibilityState,
    visibilityHandler = _useDeleteTodoListUI.visibilityHandler,
    deleteListApiState = _useDeleteTodoListUI.deleteListApiState;
  return /*#__PURE__*/_react["default"].createElement(_common.DeleteButton, {
    onClick: visibilityHandler
  });
};
exports.DeleteListButton = DeleteListButton;