"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _formDisplayContainer = require("./components/form-display-container");
Object.keys(_formDisplayContainer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formDisplayContainer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _formDisplayContainer[key];
    }
  });
});
var _useFormDisplay = require("./hooks/use-form-display");
Object.keys(_useFormDisplay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useFormDisplay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useFormDisplay[key];
    }
  });
});
var _formDisplayView = require("./views/form-display-view");
Object.keys(_formDisplayView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formDisplayView[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _formDisplayView[key];
    }
  });
});