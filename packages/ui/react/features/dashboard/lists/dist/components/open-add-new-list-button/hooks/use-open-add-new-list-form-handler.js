"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOpenAddNewListFormHandler = void 0;
var _entities = require("@core/entities");
var _contexts = require("@reactui/contexts");
var useOpenAddNewListFormHandler = function useOpenAddNewListFormHandler() {
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
exports.useOpenAddNewListFormHandler = useOpenAddNewListFormHandler;