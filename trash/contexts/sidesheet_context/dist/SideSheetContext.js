"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSideSheetContext = exports.SideSheetProvider = exports.SideSheetContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useOpenCloseController = require("@design/useOpenCloseController");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const defaultState = {
  sheetHandler: undefined,
  animateState: undefined
};
const SideSheetContext = /*#__PURE__*/_react.default.createContext(defaultState);
exports.SideSheetContext = SideSheetContext;
const useSideSheetContext = () => {
  const {
    ...value
  } = (0, _react.useContext)(SideSheetContext);
  return {
    ...value
  };
};
exports.useSideSheetContext = useSideSheetContext;
const SideSheetProvider = props => {
  const {
    sheetHandler,
    animateState
  } = (0, _useOpenCloseController.useOpenCloseController)();
  return /*#__PURE__*/_react.default.createElement(SideSheetContext.Provider, {
    value: {
      sheetHandler,
      animateState
    }
  }, props.children);
};
exports.SideSheetProvider = SideSheetProvider;