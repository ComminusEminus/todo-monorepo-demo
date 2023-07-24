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
    viewTodoListItem = _useUIContext.viewTodoListItem,
    userProfile = _useUIContext.userProfile;
  var _useDisplayListItemDe = (0, _useDisplayListitemDetails.useDisplayListItemDetails)(),
    handler = _useDisplayListItemDe.handler,
    displayItem = _useDisplayListItemDe.displayItem;
  (0, _react.useEffect)(function () {
    if (!userProfile) {
      return;
    }
    if (!viewTodoListItem) {
      return;
    }
    handler(viewTodoListItem);
  }, [viewTodoListItem]);
  return {
    displayItem: displayItem
  };
};
exports.useDisplayListItemDetailsUI = useDisplayListItemDetailsUI;