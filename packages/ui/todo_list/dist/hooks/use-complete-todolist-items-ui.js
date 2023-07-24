"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCompleteTodoListItemUI = void 0;
var _react = require("react");
var _useCompleteTodolistItems = require("./use-complete-todolist-items");
var _entities = require("@core/entities");
var _contexts = require("@ui/contexts");
var useCompleteTodoListItemUI = function useCompleteTodoListItemUI() {
  var _useCompleteTodoListI = (0, _useCompleteTodolistItems.useCompleteTodoListItem)(),
    apiHandler = _useCompleteTodoListI.apiHandler;
  var _useListItemContext = (0, _contexts.useListItemContext)(),
    setCompleteState = _useListItemContext.setCompleteState,
    completeState = _useListItemContext.completeState,
    originalState = _useListItemContext.originalState;
  var isMounted = (0, _react.useRef)(false);
  var completeHandler = function completeHandler() {
    if (originalState) {
      if (originalState.complete === _entities.ListItemStatus.COMPLETED) {
        setCompleteState === null || setCompleteState === void 0 ? void 0 : setCompleteState(_entities.ListItemStatus.INCOMPLETE);
      } else if (originalState.complete === _entities.ListItemStatus.INCOMPLETE) {
        setCompleteState === null || setCompleteState === void 0 ? void 0 : setCompleteState(_entities.ListItemStatus.COMPLETED);
      }
    }
  };
  (0, _react.useEffect)(function () {
    if (isMounted.current && originalState && completeState) {
      apiHandler(originalState, completeState);
    } else {
      isMounted.current = true;
    }
  }, [completeState]);
  return {
    completeState: completeState,
    completeHandler: completeHandler
  };
};
exports.useCompleteTodoListItemUI = useCompleteTodoListItemUI;