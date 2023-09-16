"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteTodoListImplementation = void 0;
var _react = require("react");
var _useDeleteTodolist = require("../api/use-delete-todolist");
var _entities = require("@core/entities");
var useDeleteTodoListImplementation = function useDeleteTodoListImplementation(_ref) {
  var listId = _ref.listId,
    visibilityState = _ref.visibilityState;
  var _useDeleteTodoListApi = (0, _useDeleteTodolist.useDeleteTodoListApi)(),
    deleteListApiHandler = _useDeleteTodoListApi.deleteListApiHandler,
    deleteListApiState = _useDeleteTodoListApi.deleteListApiState;
  var returnValue = deleteListApiState.returnValue;
  var message = returnValue.message;
  var isMounted = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (isMounted.current) {
      if (listId && visibilityState === _entities.VisibilityState.INVISIBLE) {
        console.log('deleteTodolistImplementation executed');
        deleteListApiHandler(listId);
      }
    } else {
      isMounted.current = true;
    }
  }, [visibilityState]);
  return {
    deleteListApiState: deleteListApiState,
    deleteListApiHandler: deleteListApiHandler
  };
};
exports.useDeleteTodoListImplementation = useDeleteTodoListImplementation;