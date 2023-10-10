"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapListItems = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _common = require("@reactui/common");
var _listItem = require("./list-item");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var MapListItems = function MapListItems(_ref) {
  var filteredList = _ref.filteredList;
  var theme = (0, _styledComponents.useTheme)();
  if (!filteredList) {
    return /*#__PURE__*/_react["default"].createElement(_common.Text, {
      text: 'No List Selected',
      color: theme.colors.neutral.onBackground,
      fontSize: theme.space.md,
      fontFamily: 'Albert_Sans'
    });
  } else if (filteredList.length > 0) {
    return filteredList.map(function (listItem) {
      return /*#__PURE__*/_react["default"].createElement(_listItem.ListItem, {
        item: listItem,
        key: listItem._id
      });
    });
  } else {
    return /*#__PURE__*/_react["default"].createElement(_common.Text, {
      text: 'No Todo Items in List',
      color: theme.colors.neutral.onBackground,
      fontSize: theme.space.md,
      fontFamily: 'Albert_Sans'
    });
  }
};
exports.MapListItems = MapListItems;