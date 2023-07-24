"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapUserProfile = void 0;
var mapUserProfile = function mapUserProfile(response) {
  var mappedResponse = response.data.map(function (user) {
    return {
      id: user.id,
      userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName
    };
  });
  return mappedResponse[0];
};
exports.mapUserProfile = mapUserProfile;