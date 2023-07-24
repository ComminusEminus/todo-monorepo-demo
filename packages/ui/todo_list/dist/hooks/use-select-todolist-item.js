"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectTodoListItem = void 0;
var _contexts = require("@ui/contexts");
var useSelectTodoListItem = function useSelectTodoListItem() {
  var _useListItemContext = (0, _contexts.useListItemContext)(),
    setViewTodoListItem = _useListItemContext.setViewTodoListItem,
    viewTodoListItem = _useListItemContext.viewTodoListItem,
    originalState = _useListItemContext.originalState;
  var selectHandler = function selectHandler() {
    if (!originalState) {
      return;
    }
    if (viewTodoListItem === originalState.id) {
      return;
    }
    setViewTodoListItem === null || setViewTodoListItem === void 0 ? void 0 : setViewTodoListItem(originalState.id);
  };
  return {
    selectHandler: selectHandler,
    originalState: originalState
  };
};
exports.useSelectTodoListItem = useSelectTodoListItem;