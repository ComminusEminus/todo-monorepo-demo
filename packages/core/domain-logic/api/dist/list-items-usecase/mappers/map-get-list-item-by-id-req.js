"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapGetListItemByIdRequest = void 0;
var mapGetListItemByIdRequest = function mapGetListItemByIdRequest(body) {
  var listItemId = body.listItemId;
  var error = false;
  if (!listItemId) {
    error = true;
  }
  return {
    id: listItemId,
    error: error
  };
};
exports.mapGetListItemByIdRequest = mapGetListItemByIdRequest;