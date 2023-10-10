"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapCreateNewListRequest = void 0;
var mapCreateNewListRequest = function mapCreateNewListRequest(body) {
  var title = body.title;
  var error = false;
  if (!title) {
    error = true;
  }
  return {
    title: title,
    error: error
  };
};
exports.mapCreateNewListRequest = mapCreateNewListRequest;