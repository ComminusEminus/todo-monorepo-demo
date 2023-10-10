"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDeleteListItemRequest = void 0;
var mapDeleteListItemRequest = function mapDeleteListItemRequest(body) {
  var listId = body.listId,
    listItemId = body.listItemId;
  var error = false;
  if (!listId || !listItemId) {
    error = true;
  }

  //const mongooseListId = new mongoose.Types.ObjectId(listId)

  //const mongooseListItemId = new mongoose.Types.ObjectId(listItemId)

  return {
    listId: listId,
    listItemId: listItemId,
    error: error
  };
};
exports.mapDeleteListItemRequest = mapDeleteListItemRequest;