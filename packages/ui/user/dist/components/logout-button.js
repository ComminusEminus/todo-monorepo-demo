"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _buttons = require("@design/buttons");
var _styledComponents = require("styled-components");
var _icons = require("@design/icons");
var _useLogoutUserUpdateObserver = require("../hooks/ui-interactions/use-logout-user-update-observer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LogoutButton = function LogoutButton() {
  var _useLogoutUserUpdateO = (0, _useLogoutUserUpdateObserver.useLogoutUserUpdateObserver)(),
    requestState = _useLogoutUserUpdateO.requestState,
    logoutApiHandler = _useLogoutUserUpdateO.logoutApiHandler;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_buttons.SvgButton, {
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