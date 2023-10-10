"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectListHandler = void 0;
var _entities = require("@core/entities");
var _contexts = require("@reactui/contexts");
var useSelectListHandler = function useSelectListHandler() {
  var _useListsContext = (0, _contexts.useListsContext)(),
    state = _useListsContext.state;
  var listsData = state.listsData;
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch,
    uiState = _useUIContext.state;
  var selectedTodoListId = uiState.selectedTodoListId;
  var selectListHandler = function selectListHandler(id) {
    if (selectedTodoListId == id) {
      console.log('Item already selected');
    }
    dispatch({
      type: _entities.UIACTIONS.SELECT_TODO_LIST_BY_ID,
      payload: id
    });
  };
  var resultValues = {
    listsData: listsData,
    selectedTodoListId: selectedTodoListId
  };
  return {
    selectListHandler: selectListHandler,
    resultValues: resultValues
  };
};
exports.useSelectListHandler = useSelectListHandler;