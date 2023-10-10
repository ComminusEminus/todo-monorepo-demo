"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemViewHook = exports.ListItemView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = require("styled-components");
var _common = require("@reactui/common");
var _filterListButtonGroup = require("../components/filter-list-button-group/presentation/filter-list-button-group");
var _openAddNewTodoListItemFormButton = require("../components/open-add-new-list-item-form/presentation/open-add-new-todo-list-item-form-button");
var _mapListItems = require("./map-list-items");
var _contexts = require("@reactui/contexts");
var _entities = require("@core/entities");
var _fliterList = require("../components/filter-list-button-group/helpers/fliter-list");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } //import {ListItemViewHook} from './hooks/list-item-view-hook'
var ListItemView = function ListItemView() {
  var theme = (0, _styledComponents.useTheme)();
  var _ListItemViewHook = ListItemViewHook(),
    filterListHandler = _ListItemViewHook.filterListHandler,
    filterListState = _ListItemViewHook.filterListState,
    filteredList = _ListItemViewHook.filteredList;
  return /*#__PURE__*/_react["default"].createElement(_common.ListContainer, {
    listTitle: 'Todo List Items',
    listMap: /*#__PURE__*/_react["default"].createElement(_mapListItems.MapListItems, {
      filteredList: filteredList
    }),
    footerOptions: /*#__PURE__*/_react["default"].createElement(_openAddNewTodoListItemFormButton.OpenAddNewTodoListItemFormButton, null),
    titleOptions: /*#__PURE__*/_react["default"].createElement(_filterListButtonGroup.FilterListButtonGroup, {
      filterListHandler: filterListHandler,
      filterListState: filterListState
    })
  });
};
exports.ListItemView = ListItemView;
var ListItemViewHook = function ListItemViewHook() {
  var _useSelectedListConte = (0, _contexts.useSelectedListContext)(),
    state = _useSelectedListConte.state,
    dispatch = _useSelectedListConte.dispatch;
  var selectedList = state.selectedList;
  var _useState = (0, _react.useState)(_entities.Filter.ALL_LIST_ITEMS),
    _useState2 = _slicedToArray(_useState, 2),
    filterListState = _useState2[0],
    setFilterListState = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredList = _useState4[0],
    setFilteredList = _useState4[1];
  (0, _react.useEffect)(function () {
    if (selectedList) {
      (0, _fliterList.filterList)({
        filterListState: filterListState,
        setFilteredList: setFilteredList,
        selectedList: selectedList
      });
    }
  }, [selectedList]);
  var filterListHandler = function filterListHandler(filterString) {
    setFilterListState(filterString);
  };
  return {
    filterListHandler: filterListHandler,
    filterListState: filterListState,
    filteredList: filteredList
  };
};
exports.ListItemViewHook = ListItemViewHook;