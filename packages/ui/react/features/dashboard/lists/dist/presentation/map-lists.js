"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapLists = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _common = require("@reactui/common");
var _listsItem = require("./lists-item");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MapLists = function MapLists(_ref) {
  var allLists = _ref.allLists;
  var theme = (0, _styledComponents.useTheme)();
  if (!allLists) {
    return /*#__PURE__*/_react["default"].createElement(_common.Text, {
      text: 'You currently have nothing Todo!',
      color: theme.colors.neutral.onBackground,
      fontSize: 'xs',
      fontFamily: 'Albert_Sans'
    });
  } else {
    return allLists.map(function (listDescription) {
      return /*#__PURE__*/_react["default"].createElement(_listsItem.ListsItem, {
        item: listDescription,
        key: listDescription._id
      });
    });
  }
};
exports.MapLists = MapLists;