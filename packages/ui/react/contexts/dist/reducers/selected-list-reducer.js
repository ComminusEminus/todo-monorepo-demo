"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedListReducer = exports.SelectedList_DefaultState = void 0;
var _selectedListInterfaces = require("../interfaces/selected-list-interfaces");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SelectedList_DefaultState = {
  selectedList: null,
  filteredList: null,
  update: false
};
exports.SelectedList_DefaultState = SelectedList_DefaultState;
var selectedListReducer = function selectedListReducer(state, action) {
  switch (action.type) {
    case _selectedListInterfaces.SELECTED_LIST_ACTIONS.UPDATE_SELECTED_LIST:
      console.log('inside update selectedlist');
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedList: action.payload
      });
    case _selectedListInterfaces.SELECTED_LIST_ACTIONS.UPDATE_FILTERED_LIST:
      return _objectSpread(_objectSpread({}, state), {}, {
        filteredList: action.payload
      });
    case _selectedListInterfaces.SELECTED_LIST_ACTIONS.UPDATE_LIST:
      return _objectSpread(_objectSpread({}, state), {}, {
        update: !state.update
      });
    default:
      return state;
  }
};
exports.selectedListReducer = selectedListReducer;