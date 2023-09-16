"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelectTodoListItem = void 0;
var _contexts = require("@ui/contexts");
var _entities = require("@core/entities");
var useSelectTodoListItem = function useSelectTodoListItem() {
  var _useListItemContext = (0, _contexts.useListItemContext)(),
    state = _useListItemContext.state,
    dispatch = _useListItemContext.dispatch;
  var listItemData = state.listItemData;
  var _useUIContext = (0, _contexts.useUIContext)(),
    listsState = _useUIContext.state,
    listsDispatch = _useUIContext.dispatch;
  var selectedTodoListItemId = listsState.selectedTodoListItemId;
  var selectListItemForDetailViewHandler = function selectListItemForDetailViewHandler(id) {
    if (!listItemData) {
      throw new Error("List item data is empty");
    }
    if (selectedTodoListItemId === id) {
      console.log('item already selected');
    }
    listsDispatch({
      type: _entities.UIACTIONS.SELECT_TODO_LIST_ITEM_BY_ID,
      payload: id
    });
  };
  var resultValues = {
    listItemData: listItemData,
    selectedTodoListItemId: selectedTodoListItemId
  };
  return {
    selectListItemForDetailViewHandler: selectListItemForDetailViewHandler,
    resultValues: resultValues
  };
};
exports.useSelectTodoListItem = useSelectTodoListItem;