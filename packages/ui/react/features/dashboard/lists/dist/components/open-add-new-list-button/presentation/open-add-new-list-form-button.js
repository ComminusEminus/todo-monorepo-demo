"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenAddNewListFormButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _common = require("@reactui/common");
var _useOpenAddNewListFormHandler = require("../hooks/use-open-add-new-list-form-handler");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var OpenAddNewListFormButton = function OpenAddNewListFormButton() {
  var _useOpenAddNewListFor = (0, _useOpenAddNewListFormHandler.useOpenAddNewListFormHandler)(),
    openAddNewListFormHandler = _useOpenAddNewListFor.openAddNewListFormHandler,
    state = _useOpenAddNewListFor.state;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_common.Button, {
    size: 'sm',
    type: 'button',
    color: theme.colors.secondary.onBase,
    buttonStyle: 'tertiary',
    text: 'Add',
    onClick: openAddNewListFormHandler
  });
};
exports.OpenAddNewListFormButton = OpenAddNewListFormButton;