"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapUpdateListItemRequest = void 0;
var mapUpdateListItemRequest = function mapUpdateListItemRequest(body) {
  var _id = body._id,
    title = body.title,
    description = body.description,
    complete = body.complete;
  var error = false;
  if (!_id || !title || !description || !complete) {
    error = true;
  }
  return {
    _id: _id,
    title: title,
    description: description,
    complete: complete,
    error: error
  };
};
exports.mapUpdateListItemRequest = mapUpdateListItemRequest;