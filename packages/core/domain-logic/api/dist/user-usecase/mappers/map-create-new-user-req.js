"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapCreateNewUserRequest = void 0;
var mapCreateNewUserRequest = function mapCreateNewUserRequest(body) {
  var firstName = body.firstName,
    lastName = body.lastName,
    userName = body.userName,
    password = body.password;
  var error = false;
  if (!firstName || !lastName || !userName || !password) {
    error = true;
  }
  return {
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    password: password,
    error: error
  };
};
exports.mapCreateNewUserRequest = mapCreateNewUserRequest;