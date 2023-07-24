"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteListItemButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../hooks/index");
var _buttons = require("@design/buttons");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DeleteListItemButton = function DeleteListItemButton() {
  var _useDeleteTodoListIte = (0, _index.useDeleteTodoListItemUI)(),
    visibilityState = _useDeleteTodoListIte.visibilityState,
    visibilityHandler = _useDeleteTodoListIte.visibilityHandler;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
    size: 'sm',
    type: 'button',
    text: 'Delete',
    onClick: visibilityHandler
  });
};
exports.DeleteListItemButton = DeleteListItemButton;