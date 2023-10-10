"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapLoginUser = void 0;
var mapLoginUser = function mapLoginUser(response) {
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
exports.mapLoginUser = mapLoginUser;