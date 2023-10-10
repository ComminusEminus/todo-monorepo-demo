"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _Text = require("../../base/text/Text");
var _Container = require("../../base/container/Container");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ListContainer = function ListContainer(_ref) {
  var listTitle = _ref.listTitle,
    listMap = _ref.listMap,
    footerOptions = _ref.footerOptions,
    titleOptions = _ref.titleOptions;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Container.Container, {
    background: theme.colors.neutral.background,
    width: '100%',
    height: '55vh',
    display: 'block'
  }, /*#__PURE__*/_react["default"].createElement(_Container.Container, {
    background: theme.colors.neutral.background,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }, /*#__PURE__*/_react["default"].createElement(_Text.Text, {
    text: listTitle,
    color: 'theme.colors.neutral.onSurface',
    fontSize: theme.space.lg,
    fontFamily: 'Albert_Sans'
  })), /*#__PURE__*/_react["default"].createElement(_Container.Container, {
    background: theme.colors.neutral.background,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }, titleOptions), /*#__PURE__*/_react["default"].createElement(_Container.Container, {
    flexGrow: '1',
    background: theme.colors.neutral.background,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    width: '100%',
    height: '54vh',
    overflowy: 'scroll',
    overflowx: 'hidden',
    mt: '25px'
  }, listMap), /*#__PURE__*/_react["default"].createElement(_Container.Container, {
    pt: '35px',
    flexGrow: '0',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    background: theme.colors.neutral.surface
  }, footerOptions)));
};
exports.ListContainer = ListContainer;