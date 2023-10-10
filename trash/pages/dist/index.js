"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _dashboard = require("./views/dashboard");
Object.keys(_dashboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dashboard[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dashboard[key];
    }
  });
});
var _entryPoint = require("./views/entry-point");
Object.keys(_entryPoint).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _entryPoint[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _entryPoint[key];
    }
  });
});