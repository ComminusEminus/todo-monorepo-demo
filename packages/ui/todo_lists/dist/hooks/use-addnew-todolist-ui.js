"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAddNewTodoListUI = void 0;
var _contexts = require("@ui/contexts");
var _entities = require("@core/entities");
var useAddNewTodoListUI = function useAddNewTodoListUI() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    formsState = _useUIContext.formsState,
    setFormsState = _useUIContext.setFormsState;
  var addNewTodoListHandler = function addNewTodoListHandler() {
    if (formsState === _entities.FormType.NEW_TODOLIST) {
      return;
    }
    setFormsState === null || setFormsState === void 0 ? void 0 : setFormsState(_entities.FormType.NEW_TODOLIST);
  };
  return {
    addNewTodoListHandler: addNewTodoListHandler
  };
};
exports.useAddNewTodoListUI = useAddNewTodoListUI;