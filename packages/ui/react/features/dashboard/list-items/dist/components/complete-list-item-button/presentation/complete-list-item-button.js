"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompleteListItemButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _entities = require("@core/entities");
var _icons = require("@design/icons");
var _common = require("@reactui/common");
var _useCompleteListItemHandler = require("../hooks/use-complete-list-item-handler");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CompleteListItemButton = function CompleteListItemButton() {
  var _useCompleteListItemH = (0, _useCompleteListItemHandler.useCompleteListItemHandler)(),
    listItemData = _useCompleteListItemH.listItemData,
    completeHandler = _useCompleteListItemH.completeHandler,
    completeApiState = _useCompleteListItemH.completeApiState;
  var theme = (0, _styledComponents.useTheme)();
  if (!listItemData) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  }
  return /*#__PURE__*/_react["default"].createElement(_common.SvgButton, {
    viewBox: _icons.CompleteIconStyle.viewBox,
    iconWidth: _icons.CompleteIconStyle.width,
    iconHeight: _icons.CompleteIconStyle.height,
    path: _icons.CompleteIconStyle.path,
    type: 'button',
    fill: listItemData.complete === _entities.CompleteState.INCOMPLETE ? theme.colors.semantic.error : theme.colors.semantic.success,
    onClick: completeHandler
  });
};
exports.CompleteListItemButton = CompleteListItemButton;