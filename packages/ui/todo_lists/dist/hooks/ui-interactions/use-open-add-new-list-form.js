"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOpenAddNewListForm = void 0;
var _contexts = require("@ui/contexts");
var _entities = require("@core/entities");
var useOpenAddNewListForm = function useOpenAddNewListForm() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch,
    state = _useUIContext.state;
  var formType = state.formType;
  var openAddNewListFormHandler = function openAddNewListFormHandler() {
    if (formType === _entities.FormType.NEW_TODOLIST) {
      dispatch({
        type: _entities.UIACTIONS.SELECT_FORM_TYPE,
        payload: null
      });
    } else {
      dispatch({
        type: _entities.UIACTIONS.SELECT_FORM_TYPE,
        payload: _entities.FormType.NEW_TODOLIST
      });
    }
  };
  return {
    openAddNewListFormHandler: openAddNewListFormHandler,
    state: state
  };
};
exports.useOpenAddNewListForm = useOpenAddNewListForm;