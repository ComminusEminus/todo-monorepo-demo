"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _buttons = require("@design/buttons");
var _styledComponents = require("styled-components");
var _icons = require("@design/icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DeleteButton = function DeleteButton(props) {
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_buttons.SvgButton, {
    viewBox: _icons.DeleteIconStyle.viewBox,
    iconWidth: _icons.DeleteIconStyle.width,
    iconHeight: _icons.DeleteIconStyle.height,
    path: _icons.DeleteIconStyle.path,
    type: 'button',
    fill: 'red',
    onClick: function onClick() {
      return props.onClick();
    }
  });
};
exports.DeleteButton = DeleteButton;