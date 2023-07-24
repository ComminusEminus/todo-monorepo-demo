"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _components = require("./components");
Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});
var _forms = require("./forms");
Object.keys(_forms).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _forms[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _forms[key];
    }
  });
});
var _hooks = require("./hooks");
Object.keys(_hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hooks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hooks[key];
    }
  });
});
var _views = require("./views");
Object.keys(_views).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _views[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _views[key];
    }
  });
});
var _userUiServices = require("./services/user-ui-services");
Object.keys(_userUiServices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userUiServices[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userUiServices[key];
    }
  });
});