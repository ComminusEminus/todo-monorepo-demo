"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createUserPresentation = require("./create-user-presentation");
Object.keys(_createUserPresentation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createUserPresentation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createUserPresentation[key];
    }
  });
});
var _loginUserPresentation = require("./login-user-presentation");
Object.keys(_loginUserPresentation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _loginUserPresentation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _loginUserPresentation[key];
    }
  });
});
var _useCreateNewUserForm = require("./use-create-new-user-form");
Object.keys(_useCreateNewUserForm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useCreateNewUserForm[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useCreateNewUserForm[key];
    }
  });
});
var _useLoginUserForm = require("./use-login-user-form");
Object.keys(_useLoginUserForm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useLoginUserForm[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useLoginUserForm[key];
    }
  });
});