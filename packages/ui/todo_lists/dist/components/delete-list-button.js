"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteListButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _useDeleteTodolistUi = require("../hooks/use-delete-todolist-ui");
var _buttons = require("@design/buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DeleteListButton = function DeleteListButton() {
  var _useDeleteTodoListUI = (0, _useDeleteTodolistUi.useDeleteTodoListUI)(),
    visibilityState = _useDeleteTodoListUI.visibilityState,
    visibilityHandler = _useDeleteTodoListUI.visibilityHandler;
  return /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
    size: 'sm',
    type: 'button',
    text: 'Delete',
    onClick: visibilityHandler
  });
};
exports.DeleteListButton = DeleteListButton;