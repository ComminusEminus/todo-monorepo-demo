"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompleteListItemButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../hooks/index");
var _entities = require("@core/entities");
var _buttons = require("@design/buttons");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CompleteListItemButton = function CompleteListItemButton() {
  var _useCompleteTodoListI = (0, _index.useCompleteTodoListItemUI)(),
    completeState = _useCompleteTodoListI.completeState,
    completeHandler = _useCompleteTodoListI.completeHandler;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
    size: 'sm',
    type: 'button',
    color: theme.colors.secondary.onBase,
    buttonStyle: completeState === _entities.ListItemStatus.INCOMPLETE ? 'secondary' : 'success',
    text: completeState === _entities.ListItemStatus.INCOMPLETE ? _entities.ListItemStatus.INCOMPLETE : _entities.ListItemStatus.COMPLETED,
    onClick: completeHandler
  });
};
exports.CompleteListItemButton = CompleteListItemButton;