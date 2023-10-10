"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _authView = require("./auth-view");
Object.keys(_authView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _authView[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _authView[key];
    }
  });
});
var _loginContainer = require("./login-container");
Object.keys(_loginContainer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _loginContainer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _loginContainer[key];
    }
  });
});