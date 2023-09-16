"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectListButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _useSelectTodolistUi = require("../../hooks/ui-interactions/use-select-todolist-ui");
var _styledComponents = require("styled-components");
var _text = require("@design/text");
var _buttons = require("@design/buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SelectListButton = function SelectListButton() {
  var _useSelectTodoListUI = (0, _useSelectTodolistUi.useSelectTodoListUI)(),
    selectListForDetailViewHandler = _useSelectTodoListUI.selectListForDetailViewHandler,
    resultValues = _useSelectTodoListUI.resultValues;
  var listsData = resultValues.listsData,
    selectedTodoListId = resultValues.selectedTodoListId;
  var theme = (0, _styledComponents.useTheme)();
  if (listsData) {
    return /*#__PURE__*/_react["default"].createElement(_buttons.TextButton, {
      width: '100%',
      onClick: function onClick() {
        return selectListForDetailViewHandler(listsData._id);
      },
      color: theme.colors.neutral.onBackground,
      text: listsData.title,
      buttonStateWidth: '100%',
      textAlign: 'start'
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
exports.SelectListButton = SelectListButton;