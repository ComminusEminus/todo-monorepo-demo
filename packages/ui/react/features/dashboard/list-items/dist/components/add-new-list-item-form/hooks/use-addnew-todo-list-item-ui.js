"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAddNewTodoListItemUI = void 0;
var _react = require("react");
var _entities = require("@core/entities");
var _http = require("@reactui/http");
var _contexts = require("@reactui/contexts");
var _useOpenNewListItemFormHandler = require("../../open-add-new-list-item-form/hooks/use-open-new-list-item-form-handler");
var useAddNewTodoListItemUI = function useAddNewTodoListItemUI() {
  var _useSelectedListConte = (0, _contexts.useSelectedListContext)(),
    dispatch = _useSelectedListConte.dispatch;
  var _useAddNewTodoListIte = (0, _http.useAddNewTodoListItemApi)(),
    addNewTodoListItemApiHandler = _useAddNewTodoListIte.addNewTodoListItemApiHandler,
    addNewTodoListApiState = _useAddNewTodoListIte.addNewTodoListApiState;
  var returnValue = addNewTodoListApiState.returnValue,
    loading = addNewTodoListApiState.loading;
  var message = returnValue.message,
    error = returnValue.error;
  var _useOpenAddNewListIte = (0, _useOpenNewListItemFormHandler.useOpenAddNewListItemFormHandler)(),
    openAddNewListItemFormHandler = _useOpenAddNewListIte.openAddNewListItemFormHandler;
  (0, _react.useEffect)(function () {
    if (message === 'ok') {
      dispatch({
        type: _entities.SELECTED_LIST_ACTIONS.UPDATE_LIST,
        payload: null
      });
      openAddNewListItemFormHandler();
    }
  }, [message]);
  return {
    addNewTodoListItemApiHandler: addNewTodoListItemApiHandler,
    addNewTodoListApiState: addNewTodoListApiState
  };
};
exports.useAddNewTodoListItemUI = useAddNewTodoListItemUI;