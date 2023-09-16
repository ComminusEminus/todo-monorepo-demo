"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListDetailView = void 0;
var _react = _interopRequireDefault(require("react"));
var _container = require("@design/container");
var _displayListItemDetails = require("../components/display-list-item-details");
var _styledComponents = require("styled-components");
var _useDisplayListitemDetailsUi = require("../hooks/use-display-listitem-details-ui");
var _text = require("@design/text");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ListDetailView = function ListDetailView() {
  var theme = (0, _styledComponents.useTheme)();
  var _useDisplayListItemDe = (0, _useDisplayListitemDetailsUi.useDisplayListItemDetailsUI)(),
    displayItem = _useDisplayListItemDe.displayItem;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, displayItem && /*#__PURE__*/_react["default"].createElement(_container.Container, {
    background: theme.colors.neutral.background,
    width: '100%',
    height: '100%',
    alignItems: 'flex-start'
  }, /*#__PURE__*/_react["default"].createElement(_displayListItemDetails.DisplayListItemDetails, {
    displayItem: displayItem
  })), !displayItem && /*#__PURE__*/_react["default"].createElement(_text.Text, {
    text: 'No Item Selected',
    color: theme.colors.neutral.onSurface,
    fontSize: 'xs',
    fontFamily: 'Barlow'
  }));
};
exports.ListDetailView = ListDetailView;