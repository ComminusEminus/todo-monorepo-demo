"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUserPageButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _buttons = require("@design/buttons");
var _styledComponents = require("styled-components");
var _container = require("@design/container");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var CreateUserPageButton = function CreateUserPageButton(_ref) {
  var pageDisplayHandler = _ref.pageDisplayHandler;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_container.Container, {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
    size: 'sm',
    text: 'Click Here',
    buttonStyle: 'primary',
    onClick: pageDisplayHandler
  }));
};
exports.CreateUserPageButton = CreateUserPageButton;