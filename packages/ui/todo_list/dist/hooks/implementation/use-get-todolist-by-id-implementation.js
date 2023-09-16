"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetTodoListByIdImplementation = void 0;
var _useGetTodolistById = require("../api/use-get-todolist-by-id");
var _react = require("react");
var useGetTodoListByIdImplementation = function useGetTodoListByIdImplementation(_ref) {
  var selectedTodoListId = _ref.selectedTodoListId,
    updateTodoListItems = _ref.updateTodoListItems;
  var _useGetTodoListById = (0, _useGetTodolistById.useGetTodoListById)(),
    getTodoListApiHandler = _useGetTodoListById.getTodoListApiHandler,
    todoListApiState = _useGetTodoListById.todoListApiState;
  (0, _react.useEffect)(function () {
    if (selectedTodoListId) {
      console.log('executing useGetTodoListByIdImplementation: updating selected todolist');
      getTodoListApiHandler(selectedTodoListId);
    }
  }, [selectedTodoListId, updateTodoListItems]);
  return {
    todoListApiState: todoListApiState
  };
};

/*

useEffect(() => {
        if(selectedTodoListId && selectedTodoListId !== null || selectedTodoListId && selectedTodoListId !== null && updateTodoListItems){
            console.log('executing useGetTodoListByIdImplementation: updating selected todolist')
            getTodoListApiHandler(selectedTodoListId)
        }   
    }, [selectedTodoListId, updateTodoListItems])
    

*/
exports.useGetTodoListByIdImplementation = useGetTodoListByIdImplementation;