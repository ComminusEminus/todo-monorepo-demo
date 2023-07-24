"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteTodoListItemUI = void 0;
var _useDeleteTodolistItems = require("./use-delete-todolist-items");
var _react = require("react");
var _contexts = require("@ui/contexts");
var _entities = require("@core/entities");
var useDeleteTodoListItemUI = function useDeleteTodoListItemUI() {
  var _useListItemContext = (0, _contexts.useListItemContext)(),
    visibilityState = _useListItemContext.visibilityState,
    setVisibilityState = _useListItemContext.setVisibilityState,
    originalState = _useListItemContext.originalState;
  var _useDeleteTodoListIte = (0, _useDeleteTodolistItems.useDeleteTodoListItem)(),
    apiHandler = _useDeleteTodoListIte.apiHandler;
  var isMounted = (0, _react.useRef)(false);
  var visibilityHandler = function visibilityHandler() {
    setVisibilityState === null || setVisibilityState === void 0 ? void 0 : setVisibilityState(_entities.Visibility.INVISIBLE);
  };
  (0, _react.useEffect)(function () {
    if (isMounted.current && originalState) {
      apiHandler(originalState.id);
    } else {
      isMounted.current = true;
    }
  }, [visibilityState]);
  return {
    visibilityState: visibilityState,
    visibilityHandler: visibilityHandler
  };
};
exports.useDeleteTodoListItemUI = useDeleteTodoListItemUI;