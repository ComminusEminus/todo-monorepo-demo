"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteListItemButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _icons = require("@design/icons");
var _common = require("@reactui/common");
var _useDeleteListItemHandler = require("../hooks/use-delete-list-item-handler");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DeleteListItemButton = function DeleteListItemButton() {
  var _useDeleteListItemHan = (0, _useDeleteListItemHandler.useDeleteListItemHandler)(),
    deleteListItemHandler = _useDeleteListItemHan.deleteListItemHandler;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_common.SvgButton, {
    viewBox: _icons.DeleteIconStyle.viewBox,
    iconWidth: _icons.DeleteIconStyle.width,
    iconHeight: _icons.DeleteIconStyle.height,
    path: _icons.DeleteIconStyle.path,
    type: 'button',
    fill: 'red',
    onClick: function onClick() {
      return deleteListItemHandler();
    }
  });
};
exports.DeleteListItemButton = DeleteListItemButton;