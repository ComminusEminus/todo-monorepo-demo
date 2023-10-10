"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _AnimationWrapper = require("./AnimationWrapper.style");
Object.keys(_AnimationWrapper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _AnimationWrapper[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _AnimationWrapper[key];
    }
  });
});