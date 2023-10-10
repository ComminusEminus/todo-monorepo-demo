"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapAddNewList = void 0;
var mapAddNewList = function mapAddNewList(response) {
  var data = response.data;
  var message = data.message,
    error = data.error;
  console.log('map add new list response ' + message);
  if (!message) {
    throw new Error('add new listitem returned no message');
  }
  return {
    message: message,
    error: error
  };
};
exports.mapAddNewList = mapAddNewList;