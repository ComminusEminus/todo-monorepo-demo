"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapCreateNewListItemRequest = void 0;
var mapCreateNewListItemRequest = function mapCreateNewListItemRequest(body) {
  var title = body.title,
    description = body.description,
    listId = body.listId;
  var error = false;
  if (!title || !description || !listId) {
    error = true;
  }

  //const mongooseListId = new mongoose.Types.ObjectId(listId)

  return {
    title: title,
    description: description,
    listId: listId,
    error: error
  };
};
exports.mapCreateNewListItemRequest = mapCreateNewListItemRequest;