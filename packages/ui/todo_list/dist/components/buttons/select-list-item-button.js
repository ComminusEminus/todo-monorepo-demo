"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectListItemButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _useSelectTodolistItem = require("../../hooks/ui-interactions/use-select-todolist-item");
var _text = require("@design/text");
var _styledComponents = require("styled-components");
var _buttons = require("@design/buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SelectListItemButton = function SelectListItemButton() {
  var _useSelectTodoListIte = (0, _useSelectTodolistItem.useSelectTodoListItem)(),
    selectListItemForDetailViewHandler = _useSelectTodoListIte.selectListItemForDetailViewHandler,
    resultValues = _useSelectTodoListIte.resultValues;
  var listItemData = resultValues.listItemData;
  var theme = (0, _styledComponents.useTheme)();
  if (listItemData) {
    return /*#__PURE__*/_react["default"].createElement(_buttons.TextButton, {
      color: theme.colors.neutral.onSurface,
      text: listItemData.title,
      onClick: function onClick() {
        return selectListItemForDetailViewHandler(listItemData._id);
      },
      width: '100%',
      buttonStateWidth: '100%',
      textAlign: 'left'
    });
  } else {
    return /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: '...Loading',
      color: theme.colors.neutral.onBackground,
      fontSize: 'xs',
      fontFamily: 'Barlow'
    });
  }
};
exports.SelectListItemButton = SelectListItemButton;