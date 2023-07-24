"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAddNewTodoListItem = void 0;
var _contexts = require("@ui/contexts");
var _entities = require("@core/entities");
var useAddNewTodoListItem = function useAddNewTodoListItem() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    setFormsState = _useUIContext.setFormsState;
  var addNewListItemHandler = function addNewListItemHandler() {
    setFormsState === null || setFormsState === void 0 ? void 0 : setFormsState(_entities.FormType.NEW_TODOLIST_ITEM);
  };
  return {
    addNewListItemHandler: addNewListItemHandler
  };
};
exports.useAddNewTodoListItem = useAddNewTodoListItem;