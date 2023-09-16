"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectTodoListUI = void 0;
var _contexts = require("@ui/contexts");
var _entities = require("@core/entities");
var useSelectTodoListUI = function useSelectTodoListUI() {
  var _useListsContext = (0, _contexts.useListsContext)(),
    state = _useListsContext.state;
  var listsData = state.listsData;
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch,
    uiState = _useUIContext.state;
  var selectedTodoListId = uiState.selectedTodoListId;
  var selectListForDetailViewHandler = function selectListForDetailViewHandler(id) {
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
    selectListForDetailViewHandler: selectListForDetailViewHandler,
    resultValues: resultValues
  };
};
exports.useSelectTodoListUI = useSelectTodoListUI;