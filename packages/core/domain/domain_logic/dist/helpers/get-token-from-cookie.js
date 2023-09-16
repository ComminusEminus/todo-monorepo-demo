"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTokenFromCookie = void 0;
var getToken = function getToken() {
  var _document$cookie$spli;
  var token = (_document$cookie$spli = document.cookie.split("; ").find(function (row) {
    return row.startsWith("token=");
  })) === null || _document$cookie$spli === void 0 ? void 0 : _document$cookie$spli.split("=")[1];
  return token;
};
var getTokenFromCookie = function getTokenFromCookie() {
  var _document$cookie$spli2;
  var token = (_document$cookie$spli2 = document.cookie.split("; ").find(function (row) {
    return row.startsWith("token=");
  })) === null || _document$cookie$spli2 === void 0 ? void 0 : _document$cookie$spli2.split("=")[1];
  return token;
};
exports.getTokenFromCookie = getTokenFromCookie;