"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useCreateNewUserProfile = require("./use-create-new-user-profile");
Object.keys(_useCreateNewUserProfile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useCreateNewUserProfile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useCreateNewUserProfile[key];
    }
  });
});
var _useLogoutUser = require("./use-logout-user");
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