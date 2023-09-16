"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useLogoutUser = require("./api/use-logout-user");
Object.keys(_useLogoutUser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useLogoutUser[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useLogoutUser[key];
    }
  });
});
var _useLogoutUserUpdateObserver = require("./ui-interactions/use-logout-user-update-observer");
Object.keys(_useLogoutUserUpdateObserver).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useLogoutUserUpdateObserver[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useLogoutUserUpdateObserver[key];
    }
  });
});
var _useSwitchPage = require("./ui-interactions/use-switch-page");
Object.keys(_useSwitchPage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useSwitchPage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useSwitchPage[key];
    }
  });
});