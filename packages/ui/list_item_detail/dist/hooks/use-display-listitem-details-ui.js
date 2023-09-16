"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDisplayListItemDetailsUI = void 0;
var _useDisplayListitemDetails = require("./use-display-listitem-details");
var _contexts = require("@ui/contexts");
var _react = require("react");
var useDisplayListItemDetailsUI = function useDisplayListItemDetailsUI() {
  var _useUIContext = (0, _contexts.useUIContext)(),
    state = _useUIContext.state,
    dispatch = _useUIContext.dispatch;
  var _useDisplayListItemDe = (0, _useDisplayListitemDetails.useDisplayListItemDetails)(),
    fetchListItemDetails = _useDisplayListItemDe.fetchListItemDetails,
    displayItem = _useDisplayListItemDe.displayItem;
  var selectedTodoListItemId = state.selectedTodoListItemId;
  (0, _react.useEffect)(function () {
    if (!selectedTodoListItemId) {
      return;
    }
    fetchListItemDetails(selectedTodoListItemId);
  }, [selectedTodoListItemId]);
  return {
    displayItem: displayItem
  };
};
exports.useDisplayListItemDetailsUI = useDisplayListItemDetailsUI;