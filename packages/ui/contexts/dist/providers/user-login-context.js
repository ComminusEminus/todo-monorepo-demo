"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUserLoginContext = exports.UserLoginProvider = exports.UserLoginDefaultState = exports.UserLoginContext = void 0;
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
/*

export const UserLoginDefaultState: IUserLoginDefaultState = {
    loggedIn: USER_STATUS.LOGGED_OUT
}

export const userLoginReducer = (state: IUserLoginDefaultState, action: ILoginAction): IUserLoginDefaultState => {
    
    switch(action.type){
        case LOGINACTIONS.LOGIN_USER :
            return{...state, loggedIn: USER_STATUS.LOGGED_IN}   
        case LOGINACTIONS.LOGOUT_USER :
            return{...state, loggedIn: USER_STATUS.LOGGED_OUT}  
        default: 
            return state;
    }
}
//------------

export interface IUserLoginContextState {
    state: IUserLoginDefaultState;
    dispatch: Dispatch<ILoginAction>;
}
export const UserLoginDefaultContextState: IUserLoginContextState = {
    state: UserLoginDefaultState,
    dispatch: (value: ILoginAction) => null
}
    
export interface IUserLoginProvider {
    children?: JSX.Element | JSX.Element[]
}

export const UserLoginContext = createContext<IUserLoginContextState>(UserLoginDefaultContextState);

export const useUserLoginContext = () => {
    const { state, dispatch} = useContext<IUserLoginContextState>(UserLoginContext)
    return { state, dispatch }
}*/

var UserLoginDefaultState = {
  loggedIn: _entities.USER_STATUS.LOGGED_OUT,
  setLoggedIn: function setLoggedIn() {}
};
exports.UserLoginDefaultState = UserLoginDefaultState;
var UserLoginContext = /*#__PURE__*/(0, _react.createContext)(UserLoginDefaultState);
exports.UserLoginContext = UserLoginContext;
var useUserLoginContext = function useUserLoginContext() {
  var context = (0, _react.useContext)(UserLoginContext);
  return context;
};
exports.useUserLoginContext = useUserLoginContext;
var UserLoginProvider = function UserLoginProvider(_ref) {
  var children = _ref.children;
  //const [state, dispatch] = useReducer(userLoginReducer, UserLoginDefaultState)
  var _useState = (0, _react.useState)(_entities.USER_STATUS.LOGGED_OUT),
    _useState2 = _slicedToArray(_useState, 2),
    loggedIn = _useState2[0],
    setLoggedIn = _useState2[1];
  console.log(loggedIn);
  return /*#__PURE__*/_react["default"].createElement(UserLoginContext.Provider, {
    value: {
      loggedIn: loggedIn,
      setLoggedIn: setLoggedIn
    }
  }, children);
};
exports.UserLoginProvider = UserLoginProvider;