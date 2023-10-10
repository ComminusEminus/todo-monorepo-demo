"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAddNewTodoListUI = void 0;
var _react = require("react");
var _entities = require("@core/entities");
var _http = require("@reactui/http");
var _useOpenAddNewListFormHandler = require("../../open-add-new-list-button/hooks/use-open-add-new-list-form-handler");
var _contexts = require("@reactui/contexts");
var useAddNewTodoListUI = function useAddNewTodoListUI() {
  var _useAddNewTodoListApi = (0, _http.useAddNewTodoListApi)(),
    addNewTodoListApiHandler = _useAddNewTodoListApi.addNewTodoListApiHandler,
    addNewListApiState = _useAddNewTodoListApi.addNewListApiState;
  var returnValue = addNewListApiState.returnValue,
    loading = addNewListApiState.loading;
  var message = returnValue.message,
    error = returnValue.error;
  var _useAllListsContext = (0, _contexts.useAllListsContext)(),
    allListsDispatch = _useAllListsContext.dispatch,
    allListsState = _useAllListsContext.state;
  var _useOpenAddNewListFor = (0, _useOpenAddNewListFormHandler.useOpenAddNewListFormHandler)(),
    openAddNewListFormHandler = _useOpenAddNewListFor.openAddNewListFormHandler,
    state = _useOpenAddNewListFor.state;
  (0, _react.useEffect)(function () {
    if (message === 'ok') {
      allListsDispatch({
        type: _entities.ALL_LISTS_ACTIONS.UPDATE_ALL_LISTS,
        payload: ''
      });
      openAddNewListFormHandler();
    }
  }, [message]);
  return {
    addNewTodoListApiHandler: addNewTodoListApiHandler,
    addNewListApiState: addNewListApiState
  };
};
exports.useAddNewTodoListUI = useAddNewTodoListUI;