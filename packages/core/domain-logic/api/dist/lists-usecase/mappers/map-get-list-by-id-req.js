"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapGetListByIdRequest = void 0;
var mapGetListByIdRequest = function mapGetListByIdRequest(body) {
  var listId = body.listId;
  var error = false;
  if (!listId) {
    error = true;
  }
  return {
    listId: listId,
    error: error
  };
};
exports.mapGetListByIdRequest = mapGetListByIdRequest;