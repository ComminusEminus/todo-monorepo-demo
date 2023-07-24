"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterListButtonGroup = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = require("../hooks/index");
var _buttons = require("@design/buttons");
var _container = require("@design/container");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _mapTodoListItems = require("./map-todo-list-items");
var _entities = require("@core/entities");
var _templateObject;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FilterButtonStyle = (0, _styledComponents["default"])(_buttons.ButtonStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var FilterButton = function FilterButton(props) {
  return /*#__PURE__*/_react["default"].createElement(FilterButtonStyle, {
    type: props.type,
    buttonStyle: props.buttonStyle,
    value: props.value,
    onClick: function onClick() {
      return props.onClick;
    }
  }, props.text);
};
var FilterListButtonGroup = function FilterListButtonGroup(props) {
  var _useFilterTodoListIte = (0, _index.useFilterTodoListItems)(props.list),
    filterListHandler = _useFilterTodoListIte.filterListHandler,
    filteredList = _useFilterTodoListIte.filteredList;
  var theme = (0, _styledComponents.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_container.Container, null, /*#__PURE__*/_react["default"].createElement(FilterButton, {
    size: 'sm',
    type: 'button',
    buttonStyle: 'primary',
    text: 'All',
    value: _entities.Filter.ALL_LIST_ITEMS,
    onClick: function onClick() {
      return filterListHandler;
    }
  }), /*#__PURE__*/_react["default"].createElement(FilterButton, {
    size: 'sm',
    type: 'button',
    buttonStyle: 'primary',
    text: 'Complete',
    value: _entities.Filter.COMPLETE_LIST_ITEMS,
    onClick: function onClick() {
      return filterListHandler;
    }
  }), /*#__PURE__*/_react["default"].createElement(FilterButton, {
    size: 'sm',
    type: 'button',
    buttonStyle: theme.colors.primary.base,
    text: 'Incomplete',
    value: _entities.Filter.INCOMPLETE_LIST_ITEMS,
    onClick: function onClick() {
      return filterListHandler;
    }
  })), /*#__PURE__*/_react["default"].createElement(_mapTodoListItems.MapTodoListItems, {
    list: filteredList
  }));
};
exports.FilterListButtonGroup = FilterListButtonGroup;