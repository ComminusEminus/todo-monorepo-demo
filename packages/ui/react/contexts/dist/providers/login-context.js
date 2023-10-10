"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSwitchPageHandler = exports.useLoginContext = exports.Login_Default_Context_State = exports.LoginProvider = exports.LoginContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _entities = require("@core/entities");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Login_Default_Context_State = {
  pageDisplay: _entities.PAGE_DISPLAY_STATE.LOGIN_PAGE,
  pageSwitchHandler: function pageSwitchHandler() {}
};
exports.Login_Default_Context_State = Login_Default_Context_State;
var LoginContext = /*#__PURE__*/(0, _react.createContext)(Login_Default_Context_State);
exports.LoginContext = LoginContext;
var useLoginContext = function useLoginContext() {
  var _useContext = (0, _react.useContext)(LoginContext),
    pageDisplay = _useContext.pageDisplay,
    pageSwitchHandler = _useContext.pageSwitchHandler;
  return {
    pageDisplay: pageDisplay,
    pageSwitchHandler: pageSwitchHandler
  };
};
exports.useLoginContext = useLoginContext;
var LoginProvider = function LoginProvider(_ref) {
  var children = _ref.children;
  var _useSwitchPageHandler = useSwitchPageHandler(),
    pageDisplay = _useSwitchPageHandler.pageDisplay,
    pageSwitchHandler = _useSwitchPageHandler.pageSwitchHandler;
  return /*#__PURE__*/_react["default"].createElement(LoginContext.Provider, {
    value: {
      pageDisplay: pageDisplay,
      pageSwitchHandler: pageSwitchHandler
    }
  }, children);
};
exports.LoginProvider = LoginProvider;
var useSwitchPageHandler = function useSwitchPageHandler() {
  var _useState = (0, _react.useState)('LOGIN_PAGE'),
    _useState2 = _slicedToArray(_useState, 2),
    pageDisplay = _useState2[0],
    setPageDisplay = _useState2[1];
  var pageSwitchHandler = function pageSwitchHandler() {
    if (pageDisplay === 'LOGIN_PAGE') {
      setPageDisplay('CREATE_NEW_PAGE');
    } else {
      setPageDisplay('LOGIN_PAGE');
    }
  };
  return {
    pageDisplay: pageDisplay,
    pageSwitchHandler: pageSwitchHandler
  };
};
exports.useSwitchPageHandler = useSwitchPageHandler;