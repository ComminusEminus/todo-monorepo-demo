"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAddNewTodoListUI = void 0;
var _react = require("react");
var _entities = require("@core/entities");
var _useAddNewTodoListApi2 = require("../api/use-add-new-todo-list-api");
var _contexts = require("@ui/contexts");
var useAddNewTodoListUI = function useAddNewTodoListUI() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    dispatch = _useUIContext.dispatch;
  var _useAddNewTodoListApi = (0, _useAddNewTodoListApi2.useAddNewTodoListApi)(),
    addNewTodoListApiHandler = _useAddNewTodoListApi.addNewTodoListApiHandler,
    addNewListApiState = _useAddNewTodoListApi.addNewListApiState;
  var returnValue = addNewListApiState.returnValue,
    errorMessage = addNewListApiState.errorMessage,
    loading = addNewListApiState.loading;
  var message = returnValue.message,
    error = returnValue.error;
  (0, _react.useEffect)(function () {
    if (message === 'ok') {
      console.log('executing use effect in ui dispatch');
      dispatch({
        type: _entities.UIACTIONS.SELECT_FORM_TYPE,
        payload: null
      });
      dispatch({
        type: _entities.UIACTIONS.UPDATE_TODO_LIST,
        payload: undefined
      });
    }
  }, [returnValue]);
  return {
    addNewTodoListApiHandler: addNewTodoListApiHandler,
    addNewListApiState: addNewListApiState
  };
};
exports.useAddNewTodoListUI = useAddNewTodoListUI;