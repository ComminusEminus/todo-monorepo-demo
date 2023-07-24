"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListsStateWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _animationwrapper = require("@design/animationwrapper");
var _contexts = require("@ui/contexts");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ListsStateWrapper = function ListsStateWrapper(props) {
  var _useListsContext = (0, _contexts.useListsContext)(),
    visibilityState = _useListsContext.visibilityState;
  if (visibilityState) {
    return /*#__PURE__*/_react["default"].createElement(_animationwrapper.DeleteItemAnimationWrapper, {
      animateState: visibilityState
    }, props.children);
  } else {
    return /*#__PURE__*/_react["default"].createElement("p", null, "Loading");
  }
};
exports.ListsStateWrapper = ListsStateWrapper;