"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenFormButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _buttons = require("@design/buttons");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var OpenFormButton = function OpenFormButton(props) {
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
    size: 'sm',
    type: 'button',
    color: theme.colors.secondary.onBase,
    buttonStyle: 'tertiary',
    text: 'Add',
    onClick: function onClick() {
      return props.onClick();
    }
  });
};
exports.OpenFormButton = OpenFormButton;