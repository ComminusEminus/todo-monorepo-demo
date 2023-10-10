"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormDisplayContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _Container = require("../../base/container/Container");
var _Text = require("../../base/text/Text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FormDisplayContainer = function FormDisplayContainer(_ref) {
  var title = _ref.title,
    formComponent = _ref.formComponent;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Container.Container, {
    background: theme.colors.neutral.surface,
    height: '100%',
    width: '100%',
    pt: '10px',
    pb: '10px',
    pr: '10px',
    pl: '10px',
    justifyContent: 'center',
    alignItems: 'center'
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    text: title,
    color: 'theme.colors.neutral.onSurface',
    fontSize: theme.space.md,
    fontFamily: 'Albert_Sans'
  })), /*#__PURE__*/_react["default"].createElement(_Container.Container, {
    background: theme.colors.neutral.surface,
    height: '100%',
    width: '100%',
    elevation: 'md',
    pt: '10px',
    pb: '10px',
    pr: '10px',
    pl: '10px',
    justifyContent: 'center',
    alignItems: 'center'
  }, formComponent));
};
exports.FormDisplayContainer = FormDisplayContainer;