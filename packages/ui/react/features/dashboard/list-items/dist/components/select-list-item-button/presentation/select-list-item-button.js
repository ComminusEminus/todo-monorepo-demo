"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectListItemButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _common = require("@reactui/common");
var _useSelectListItemHandler = require("../hooks/use-select-list-item-handler");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SelectListItemButton = function SelectListItemButton() {
  var _useSelectListItemHan = (0, _useSelectListItemHandler.useSelectListItemHandler)(),
    selectListItemHandler = _useSelectListItemHan.selectListItemHandler,
    resultValues = _useSelectListItemHan.resultValues;
  var listItemData = resultValues.listItemData;
  var theme = (0, _styledComponents.useTheme)();
  if (!listItemData) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  }
  return /*#__PURE__*/_react["default"].createElement(_common.TextButton, {
    color: theme.colors.neutral.onSurface,
    text: listItemData.title,
    onClick: function onClick() {
      return selectListItemHandler();
    },
    width: '100%',
    buttonStateWidth: '100%',
    textAlign: 'left'
  });
};
exports.SelectListItemButton = SelectListItemButton;