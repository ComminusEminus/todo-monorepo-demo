"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAddNewTodoListItemUI = void 0;
var _react = require("react");
var _entities = require("@core/entities");
var _useAddnewTodoListItemApi = require("../api/use-addnew-todo-list-item-api");
var _contexts = require("@ui/contexts");
var useAddNewTodoListItemUI = function useAddNewTodoListItemUI() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch;
  var _useAddNewTodoListIte = (0, _useAddnewTodoListItemApi.useAddNewTodoListItemApi)(),
    addNewTodoListItemApiHandler = _useAddNewTodoListIte.addNewTodoListItemApiHandler,
    addNewTodoListApiState = _useAddNewTodoListIte.addNewTodoListApiState;
  var returnValue = addNewTodoListApiState.returnValue,
    errorMessage = addNewTodoListApiState.errorMessage,
    loading = addNewTodoListApiState.loading;
  var message = returnValue.message,
    error = returnValue.error;
  (0, _react.useEffect)(function () {
    if (message === 'ok') {
      console.log('executing use add new todo list item dispatch');
      dispatch({
        type: _entities.UIACTIONS.SELECT_FORM_TYPE,
        payload: null
      });
      dispatch({
        type: _entities.UIACTIONS.UPDATE_TODO_LIST_ITEMS,
        payload: null
      });
    }
  }, [returnValue]);
  return {
    addNewTodoListItemApiHandler: addNewTodoListItemApiHandler,
    addNewTodoListApiState: addNewTodoListApiState
  };
};
exports.useAddNewTodoListItemUI = useAddNewTodoListItemUI;