"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFilterTodoListItems = void 0;
var _react = require("react");
var _todolistUiServices = require("../services/todolist-ui-services");
var _entities = require("@core/entities");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var useFilterTodoListItems = function useFilterTodoListItems(list) {
  //    const {todoList, setDisplayListItem} = useListContext()
  var _useState = (0, _react.useState)(_entities.Filter.ALL_LIST_ITEMS),
    _useState2 = _slicedToArray(_useState, 2),
    filterListState = _useState2[0],
    setFilterListState = _useState2[1];
  var _useState3 = (0, _react.useState)(list),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredList = _useState4[0],
    setFilteredList = _useState4[1];
  (0, _react.useEffect)(function () {
    if (list === undefined) {
      return;
    }
    if (filterListState === _entities.Filter.ALL_LIST_ITEMS) {
      setFilteredList === null || setFilteredList === void 0 ? void 0 : setFilteredList(list);
    } else if (filterListState === _entities.Filter.COMPLETE_LIST_ITEMS) {
      setFilteredList === null || setFilteredList === void 0 ? void 0 : setFilteredList((0, _todolistUiServices.filterCompletedListItems)(list));
    } else if (filterListState === _entities.Filter.INCOMPLETE_LIST_ITEMS) {
      setFilteredList === null || setFilteredList === void 0 ? void 0 : setFilteredList((0, _todolistUiServices.filterIncompleteListItems)(list));
    }
  }, [filterListState]);
  var filterListHandler = function filterListHandler(e) {
    var filter = e.target.value;
    setFilterListState(filter);
  };
  return {
    filterListHandler: filterListHandler,
    filteredList: filteredList
  };
};
exports.useFilterTodoListItems = useFilterTodoListItems;