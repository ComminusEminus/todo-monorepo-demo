"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDeleteTodoListItemsImplementation = void 0;
var _react = require("react");
var _useDeleteTodolistItems = require("../api/use-delete-todolist-items");
var _entities = require("@core/entities");
var useDeleteTodoListItemsImplementation = function useDeleteTodoListItemsImplementation(_ref) {
  var listItemData = _ref.listItemData,
    selectedTodoListId = _ref.selectedTodoListId,
    visibilityState = _ref.visibilityState;
  var _useDeleteTodoListIte = (0, _useDeleteTodolistItems.useDeleteTodoListItem)(),
    deleteListItemApiHandler = _useDeleteTodoListIte.deleteListItemApiHandler,
    deleteApiState = _useDeleteTodoListIte.deleteApiState;
  var isMounted = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (isMounted.current) {
      if (listItemData && selectedTodoListId && visibilityState === _entities.VisibilityState.INVISIBLE) {
        deleteListItemApiHandler(listItemData._id, selectedTodoListId);
      } else {
        throw new Error("Userprofile listItemData or selected todolist id is missing data");
      }
    } else {
      isMounted.current = true;
    }
  }, [visibilityState]);
  return {
    deleteApiState: deleteApiState
  };
};
exports.useDeleteTodoListItemsImplementation = useDeleteTodoListItemsImplementation;