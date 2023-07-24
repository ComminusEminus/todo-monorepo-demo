"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteTodoListUI = void 0;
var _react = require("react");
var _index = require("./index");
var _entities = require("@core/entities");
var _contexts = require("@ui/contexts");
var useDeleteTodoListUI = function useDeleteTodoListUI() {
  var _useListsContext = (0, _contexts.useListsContext)(),
    visibilityState = _useListsContext.visibilityState,
    setVisibilityState = _useListsContext.setVisibilityState,
    originalState = _useListsContext.originalState;
  var _useDeleteTodoListHan = (0, _index.useDeleteTodoListHandler)(),
    apiHandler = _useDeleteTodoListHan.apiHandler;
  var isMounted = (0, _react.useRef)(false);
  var visibilityHandler = function visibilityHandler() {
    setVisibilityState === null || setVisibilityState === void 0 ? void 0 : setVisibilityState(_entities.Visibility.INVISIBLE);
  };
  (0, _react.useEffect)(function () {
    if (!originalState) {
      return;
    }
    if (isMounted.current) {
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
exports.useDeleteTodoListUI = useDeleteTodoListUI;