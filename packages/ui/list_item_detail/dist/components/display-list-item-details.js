"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayListItemDetails = void 0;
var _react = _interopRequireDefault(require("react"));
var _useDisplayListitemDetailsUi = require("../hooks/use-display-listitem-details-ui");
var _container = require("@design/container");
var _text = require("@design/text");
var _styledComponents = require("styled-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DisplayListItemDetails = function DisplayListItemDetails() {
  var _useDisplayListItemDe = (0, _useDisplayListitemDetailsUi.useDisplayListItemDetailsUI)(),
    displayItem = _useDisplayListItemDe.displayItem;
  var theme = (0, _styledComponents.useTheme)();
  if (!displayItem) {
    return /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: 'No Item Selected',
      color: theme.colors.neutral.onSurface,
      fontSize: 'xs',
      fontFamily: 'Barlow'
    });
  } else {
    return /*#__PURE__*/_react["default"].createElement(_container.Container, {
      flexDirection: 'column',
      background: theme.colors.neutral.surface,
      height: '25%',
      width: '25%',
      elevation: 'sm'
    }, /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: displayItem.title,
      color: theme.colors.neutral.onSurface,
      fontSize: 'xs',
      fontFamily: 'Barlow'
    }), /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: displayItem.description,
      color: theme.colors.neutral.onSurface,
      fontSize: 'xs',
      fontFamily: 'Barlow'
    }), /*#__PURE__*/_react["default"].createElement(_text.Text, {
      text: displayItem.complete,
      color: theme.colors.neutral.onSurface,
      fontSize: 'xs',
      fontFamily: 'Barlow'
    }));
  }
};
exports.DisplayListItemDetails = DisplayListItemDetails;