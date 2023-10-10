"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListDetailView = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("styled-components");
var _common = require("@reactui/common");
var _useGetListItemByIdUi2 = require("../hooks/use-get-list-item-by-id-ui");
var _listItemDetail = require("./list-item-detail");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ListDetailView = function ListDetailView() {
  var theme = (0, _styledComponents.useTheme)();
  var _useGetListItemByIdUi = (0, _useGetListItemByIdUi2.useGetListItemByIdUi)(),
    displayItem = _useGetListItemByIdUi.displayItem;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, displayItem && /*#__PURE__*/_react["default"].createElement(_common.Container, {
    background: theme.colors.neutral.background,
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    mb: '5vh'
  }, /*#__PURE__*/_react["default"].createElement(_listItemDetail.ListItemDetail, {
    displayItem: displayItem
  })));
};
exports.ListDetailView = ListDetailView;