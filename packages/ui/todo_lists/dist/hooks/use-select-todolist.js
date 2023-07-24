"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectTodoList = void 0;
var _contexts = require("@ui/contexts");
var useSelectTodoList = function useSelectTodoList() {
  var _useListsContext = (0, _contexts.useListsContext)(),
    setViewTodoList = _useListsContext.setViewTodoList,
    viewTodoList = _useListsContext.viewTodoList,
    originalState = _useListsContext.originalState;
  var selectTodoListHandler = function selectTodoListHandler() {
    if (!originalState) {
      return;
    }
    if (viewTodoList === originalState.id) {
      return;
    } else {
      setViewTodoList === null || setViewTodoList === void 0 ? void 0 : setViewTodoList(originalState.id);
    }
  };
  return {
    selectTodoListHandler: selectTodoListHandler
  };
};
exports.useSelectTodoList = useSelectTodoList;