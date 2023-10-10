"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapUserProfileUpdateRequest = exports.mapUserProfileRequest = exports.mapUserLoginRequest = void 0;
var mapUserProfileRequest = function mapUserProfileRequest(body) {
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
exports.mapUserProfileRequest = mapUserProfileRequest;
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