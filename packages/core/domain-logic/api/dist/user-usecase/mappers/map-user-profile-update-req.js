"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapUserProfileUpdateRequest = void 0;
var mapUserProfileUpdateRequest = function mapUserProfileUpdateRequest(body) {
  var _id = body._id,
    firstName = body.firstName,
    lastName = body.lastName,
    userName = body.userName,
    password = body.password;
  var error = false;
  if (!_id || !firstName || !lastName || !userName || !password) {
    error = true;
  }
  return {
    _id: _id,
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    password: password,
    error: error
  };
};
exports.mapUserProfileUpdateRequest = mapUserProfileUpdateRequest;