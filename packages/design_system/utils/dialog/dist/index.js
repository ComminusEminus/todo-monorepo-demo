"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Dialog = require("./Dialog");
Object.keys(_Dialog).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Dialog[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Dialog[key];
    }
  });
});
var _Dialog2 = require("./Dialog.style");
Object.keys(_Dialog2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Dialog2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Dialog2[key];
    }
  });
});