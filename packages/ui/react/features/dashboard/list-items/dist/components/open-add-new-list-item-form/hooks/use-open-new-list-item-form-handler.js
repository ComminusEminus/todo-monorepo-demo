"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOpenAddNewListItemFormHandler = void 0;
var _entities = require("@core/entities");
var _contexts = require("@reactui/contexts");
var useOpenAddNewListItemFormHandler = function useOpenAddNewListItemFormHandler() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch,
    state = _useUIContext.state;
  var formType = state.formType;
  var _useSelectedListConte = (0, _contexts.useSelectedListContext)(),
    selectedListState = _useSelectedListConte.state;
  var selectedList = selectedListState.selectedList;
  var openAddNewListItemFormHandler = function openAddNewListItemFormHandler() {
    console.log('openAddNewListItemFormHandler executed');
    if (formType === _entities.FormType.NEW_TODOLIST_ITEM) {
      dispatch({
        type: _entities.UIACTIONS.SELECT_FORM_TYPE,
        payload: null
      });
    } else {
      dispatch({
        type: _entities.UIACTIONS.SELECT_FORM_TYPE,
        payload: _entities.FormType.NEW_TODOLIST_ITEM
      });
    }
  };
  return {
    openAddNewListItemFormHandler: openAddNewListItemFormHandler,
    state: state,
    selectedList: selectedList
  };
};
exports.useOpenAddNewListItemFormHandler = useOpenAddNewListItemFormHandler;