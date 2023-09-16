"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOpenAddNewListItemForm = void 0;
var _contexts = require("@ui/contexts");
var _entities = require("@core/entities");
var useOpenAddNewListItemForm = function useOpenAddNewListItemForm() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch,
    state = _useUIContext.state;
  var formType = state.formType;
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
    state: state
  };
};
exports.useOpenAddNewListItemForm = useOpenAddNewListItemForm;