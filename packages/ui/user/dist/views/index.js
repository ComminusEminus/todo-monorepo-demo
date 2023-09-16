"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createNewUserView = require("./create-new-user-view");
Object.keys(_createNewUserView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createNewUserView[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createNewUserView[key];
    }
  });
});
var _loginView = require("./login-view");
Object.keys(_loginView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _loginView[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _loginView[key];
    }
  });
});
var _userView = require("./user-view");
Object.keys(_userView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userView[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userView[key];
    }
  });
});