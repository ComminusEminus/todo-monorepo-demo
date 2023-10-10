"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useListsContext = exports.Lists_DefaultContextState = exports.ListsProvider = exports.ListsContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _listsInterfaces = require("../interfaces/lists-interfaces");
var _listsReducer = require("../reducers/lists-reducer");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Lists_DefaultContextState = {
  state: _listsReducer.Lists_DefaultState,
  dispatch: function dispatch(value) {
    return null;
  }
};
exports.Lists_DefaultContextState = Lists_DefaultContextState;
var ListsContext = /*#__PURE__*/(0, _react.createContext)(Lists_DefaultContextState);
exports.ListsContext = ListsContext;
var useListsContext = function useListsContext() {
  var _useContext = (0, _react.useContext)(ListsContext),
    state = _useContext.state,
    dispatch = _useContext.dispatch;
  return {
    state: state,
    dispatch: dispatch
  };
};
exports.useListsContext = useListsContext;
var ListsProvider = function ListsProvider(_ref) {
  var children = _ref.children,
    list = _ref.list,
    _ref$defaultState = _ref.defaultState,
    defaultState = _ref$defaultState === void 0 ? _listsReducer.Lists_DefaultState : _ref$defaultState;
  var _useReducer = (0, _react.useReducer)(_listsReducer.listsReducer, _listsReducer.Lists_DefaultState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  (0, _react.useEffect)(function () {
    dispatch({
      type: _listsInterfaces.LISTS_ACTIONS.ADD_LIST_DATA,
      payload: list
    });
  }, []);
  return /*#__PURE__*/_react["default"].createElement(ListsContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, children);
};
exports.ListsProvider = ListsProvider;