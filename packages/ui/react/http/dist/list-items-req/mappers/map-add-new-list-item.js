"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapAddNewListItem = void 0;
var mapAddNewListItem = function mapAddNewListItem(response) {
  var data = response.data;
  var message = data.message,
    error = data.error;
  if (!message) {
    throw new Error('add new listitem returned no message');
  }
  return {
    message: message,
    error: error
  };
};
exports.mapAddNewListItem = mapAddNewListItem;