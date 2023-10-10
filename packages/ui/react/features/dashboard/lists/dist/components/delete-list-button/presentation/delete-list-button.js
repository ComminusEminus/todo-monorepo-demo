"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteListButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _common = require("@reactui/common");
var _icons = require("@design/icons");
var _useDeleteListHandler2 = require("../hooks/use-delete-list-handler");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DeleteListButton = function DeleteListButton() {
  var _useDeleteListHandler = (0, _useDeleteListHandler2.useDeleteListHandler)(),
    deleteListHandler = _useDeleteListHandler.deleteListHandler,
    deleteListApiState = _useDeleteListHandler.deleteListApiState;
  return /*#__PURE__*/_react["default"].createElement(_common.SvgButton, {
    viewBox: _icons.DeleteIconStyle.viewBox,
    iconWidth: _icons.DeleteIconStyle.width,
    iconHeight: _icons.DeleteIconStyle.height,
    path: _icons.DeleteIconStyle.path,
    type: 'button',
    fill: 'red',
    onClick: function onClick() {
      return deleteListHandler();
    }
  });
};
exports.DeleteListButton = DeleteListButton;