"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapNewUser = void 0;
var mapNewUser = function mapNewUser(body) {
  return {
    firstName: body.firstName,
    lastName: body.lastName,
    userName: body.userName,
    password: body.password
  };
};
exports.mapNewUser = mapNewUser;