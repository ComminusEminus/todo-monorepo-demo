"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _apiConfig = require("./api-config");
Object.keys(_apiConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _apiConfig[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _apiConfig[key];
    }
  });
});