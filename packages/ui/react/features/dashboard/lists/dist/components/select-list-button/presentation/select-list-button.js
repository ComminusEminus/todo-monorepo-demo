"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectListButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _common = require("@reactui/common");
var _useSelectListHandler2 = require("../hooks/use-select-list-handler");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SelectListButton = function SelectListButton() {
  var _useSelectListHandler = (0, _useSelectListHandler2.useSelectListHandler)(),
    selectListHandler = _useSelectListHandler.selectListHandler,
    resultValues = _useSelectListHandler.resultValues;
  var listsData = resultValues.listsData,
    selectedTodoListId = resultValues.selectedTodoListId;
  var theme = (0, _styledComponents.useTheme)();
  if (listsData) {
    return /*#__PURE__*/_react["default"].createElement(_common.TextButton, {
      width: '100%',
      onClick: function onClick() {
        return selectListHandler(listsData._id);
      },
      color: theme.colors.neutral.onBackground,
      text: listsData.title,
      buttonStateWidth: '100%',
      textAlign: 'start'
    });
  } else {
    return /*#__PURE__*/_react["default"].createElement(_common.Text, {
      text: '...Loading',
      color: theme.colors.neutral.onBackground,
      fontSize: 'xs',
      fontFamily: 'Barlow'
    });
  }
};
exports.SelectListButton = SelectListButton;