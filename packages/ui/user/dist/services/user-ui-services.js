"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapUserProfileForLoginUI = exports.mapUserProfile = exports.mapLoginResponse = void 0;
var mapUserProfile = function mapUserProfile(response) {
  var data = response.data;
  var mappedResponse = data.map(function (user) {
    var _id = user._id,
      userName = user.userName,
      firstName = user.firstName,
      lastName = user.lastName;
    return {
      id: _id,
      userName: userName,
      firstName: firstName,
      lastName: lastName
    };
  });
  return mappedResponse[0];
};
exports.mapUserProfile = mapUserProfile;
var mapLoginResponse = function mapLoginResponse(response) {
  var data = response.data;
  var user = data.user,
    token = data.token,
    message = data.message,
    error = data.error;
  return {
    message: message,
    error: error
  };
};
exports.mapLoginResponse = mapLoginResponse;
var mapUserProfileForLoginUI = function mapUserProfileForLoginUI(input) {
  if (!input) {
    throw new Error('Map User Profile for Login UI is missing input data');
  }
  var _id = input._id,
    userName = input.userName,
    firstName = input.firstName,
    lastName = input.lastName;
  return {
    _id: _id,
    userName: userName,
    firstName: firstName,
    lastName: lastName
  };
};
exports.mapUserProfileForLoginUI = mapUserProfileForLoginUI;