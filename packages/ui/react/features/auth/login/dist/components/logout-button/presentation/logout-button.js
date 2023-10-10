"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _icons = require("@design/icons");
var _common = require("@reactui/common");
var _useLogoutUserUi2 = require("../hooks/use-logout-user-ui");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LogoutButton = function LogoutButton() {
  var _useLogoutUserUi = (0, _useLogoutUserUi2.useLogoutUserUi)(),
    requestState = _useLogoutUserUi.requestState,
    logoutApiHandler = _useLogoutUserUi.logoutApiHandler;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_common.SvgButton, {
    viewBox: _icons.LogoutStyle.viewBox,
    iconWidth: _icons.LogoutStyle.width,
    iconHeight: _icons.LogoutStyle.height,
    path: _icons.LogoutStyle.path,
    type: 'button',
    fill: theme.colors.primary.base,
    onClick: logoutApiHandler
  });
};
exports.LogoutButton = LogoutButton;