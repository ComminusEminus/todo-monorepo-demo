"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOpenNewListForm = void 0;
var _contexts = require("@ui/contexts");
var _entities = require("@core/entities");
var useOpenNewListForm = function useOpenNewListForm() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch,
    state = _useUIContext.state;
  var formType = state.formType;
  var openNewListFormHandler = function openNewListFormHandler() {
    if (formType === _entities.FormType.NEW_TODOLIST) {
      return;
    }
    dispatch({
      type: _entities.UIACTIONS.SELECT_FORM_TYPE,
      payload: _entities.FormType.NEW_TODOLIST
    });
  };
  return {
    openNewListFormHandler: openNewListFormHandler,
    formType: formType
  };
};
exports.useOpenNewListForm = useOpenNewListForm;