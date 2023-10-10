"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapUserLoginRequest = void 0;
var mapUserLoginRequest = function mapUserLoginRequest(body) {
  var username = body.username,
    password = body.password;
  var error = false;
  if (!username || !password) {
    error = true;
  }
  return {
    username: username,
    password: password,
    error: error
  };
};
exports.mapUserLoginRequest = mapUserLoginRequest;