"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useListItemContext = exports.ListItemProvider = exports.ListItemContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _entities = require("@core/entities");
var _uiContext = require("./ui-context.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var defaultState = {
  originalState: {
    id: '',
    title: '',
    description: '',
    complete: _entities.ListItemStatus.INCOMPLETE
  },
  setCompleteState: function setCompleteState() {
    return null;
  },
  completeState: undefined,
  visibilityState: undefined,
  setVisibilityState: function setVisibilityState() {
    return null;
  },
  setViewTodoListItem: function setViewTodoListItem() {
    return null;
  },
  viewTodoListItem: undefined
};
var ListItemContext = /*#__PURE__*/(0, _react.createContext)(defaultState);
exports.ListItemContext = ListItemContext;
var useListItemContext = function useListItemContext() {
  var _useContext = (0, _react.useContext)(ListItemContext),
    value = _extends({}, (_objectDestructuringEmpty(_useContext), _useContext));
  return _objectSpread({}, value);
};
exports.useListItemContext = useListItemContext;
var ListItemProvider = function ListItemProvider(props) {
  var _useState = (0, _react.useState)(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    originalState = _useState2[0],
    setOriginalState = _useState2[1];
  var _useUIContext = (0, _uiContext.useUIContext)(),
    setViewTodoListItem = _useUIContext.setViewTodoListItem,
    viewTodoListItem = _useUIContext.viewTodoListItem;
  var _useState3 = (0, _react.useState)(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    completeState = _useState4[0],
    setCompleteState = _useState4[1];
  var _useState5 = (0, _react.useState)(_entities.Visibility.VISIBLE),
    _useState6 = _slicedToArray(_useState5, 2),
    visibilityState = _useState6[0],
    setVisibilityState = _useState6[1];
  (0, _react.useEffect)(function () {
    if (props.listItem) {
      setOriginalState === null || setOriginalState === void 0 ? void 0 : setOriginalState(props.listItem);
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (props.listItem) {
      setCompleteState === null || setCompleteState === void 0 ? void 0 : setCompleteState(props.listItem.complete);
    }
  }, []);
  return /*#__PURE__*/_react["default"].createElement(ListItemContext.Provider, {
    value: {
      setCompleteState: setCompleteState,
      completeState: completeState,
      originalState: originalState,
      visibilityState: visibilityState,
      setVisibilityState: setVisibilityState,
      setViewTodoListItem: setViewTodoListItem,
      viewTodoListItem: viewTodoListItem
    }
  }, props.children);
};
exports.ListItemProvider = ListItemProvider;