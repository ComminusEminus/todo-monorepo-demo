"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompleteListItemButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _useCompleteTodolistItemsUi = require("../../hooks/ui-interactions/use-complete-todolist-items-ui");
var _entities = require("@core/entities");
var _buttons = require("@design/buttons");
var _styledComponents = require("styled-components");
var _icons = require("@design/icons");
var _text = require("@design/text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CompleteListItemButton = function CompleteListItemButton() {
  var _useCompleteTodoListI = (0, _useCompleteTodolistItemsUi.useCompleteTodoListItemUI)(),
    listItemData = _useCompleteTodoListI.listItemData,
    completeHandler = _useCompleteTodoListI.completeHandler,
    completeApiState = _useCompleteTodoListI.completeApiState;
  var theme = (0, _styledComponents.useTheme)();
  if (!listItemData) {
    return /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: '...Loading',
      color: theme.colors.neutral.onBackground,
      fontSize: theme.space.sm,
      fontFamily: 'Albert_Sans'
    });
  } else {
    return /*#__PURE__*/_react["default"].createElement(_buttons.SvgButton, {
      viewBox: _icons.CompleteIconStyle.viewBox,
      iconWidth: _icons.CompleteIconStyle.width,
      iconHeight: _icons.CompleteIconStyle.height,
      path: _icons.CompleteIconStyle.path,
      type: 'button',
      fill: listItemData.complete === _entities.CompleteState.INCOMPLETE ? theme.colors.semantic.error : theme.colors.semantic.success,
      onClick: completeHandler
    });
  }
};
exports.CompleteListItemButton = CompleteListItemButton;