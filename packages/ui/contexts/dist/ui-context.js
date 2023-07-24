"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUIContext = exports.UIProvider = exports.UIContext = void 0;
var _react = _interopRequireWildcard(require("react"));
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
  addNewListItemForm: undefined,
  setAddNewListItemForm: function setAddNewListItemForm() {
    return null;
  },
  update: undefined,
  setUpdate: function setUpdate() {
    return null;
  },
  userProfile: undefined,
  setUserProfile: function setUserProfile() {
    return null;
  },
  viewTodoList: undefined,
  viewTodoListItem: undefined,
  setViewTodoListItem: function setViewTodoListItem() {
    return null;
  },
  setViewTodoList: function setViewTodoList() {
    return null;
  },
  formsState: undefined,
  setFormsState: function setFormsState() {
    return null;
  }
};
var UIContext = /*#__PURE__*/(0, _react.createContext)(defaultState);
exports.UIContext = UIContext;
var useUIContext = function useUIContext() {
  var _useContext = (0, _react.useContext)(UIContext),
    value = _extends({}, (_objectDestructuringEmpty(_useContext), _useContext));
  return _objectSpread({}, value);
};
exports.useUIContext = useUIContext;
var UIProvider = function UIProvider(props) {
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    addNewListItemForm = _useState2[0],
    setAddNewListItemForm = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    update = _useState4[0],
    setUpdate = _useState4[1];
  var _useState5 = (0, _react.useState)(undefined),
    _useState6 = _slicedToArray(_useState5, 2),
    userProfile = _useState6[0],
    setUserProfile = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    viewTodoList = _useState8[0],
    setViewTodoList = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    viewTodoListItem = _useState10[0],
    setViewTodoListItem = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    formsState = _useState12[0],
    setFormsState = _useState12[1];
  return /*#__PURE__*/_react["default"].createElement(UIContext.Provider, {
    value: {
      addNewListItemForm: addNewListItemForm,
      setAddNewListItemForm: setAddNewListItemForm,
      update: update,
      setUpdate: setUpdate,
      userProfile: userProfile,
      setUserProfile: setUserProfile,
      viewTodoList: viewTodoList,
      viewTodoListItem: viewTodoListItem,
      setViewTodoListItem: setViewTodoListItem,
      setViewTodoList: setViewTodoList,
      formsState: formsState,
      setFormsState: setFormsState
    }
  }, props.children);
};
exports.UIProvider = UIProvider;