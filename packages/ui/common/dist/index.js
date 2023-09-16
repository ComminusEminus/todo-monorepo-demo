"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _deleteButton = require("./buttons/delete-button");
Object.keys(_deleteButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _deleteButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _deleteButton[key];
    }
  });
});
var _openFormButton = require("./buttons/open-form-button");
Object.keys(_openFormButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _openFormButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _openFormButton[key];
    }
  });
});
var _selectButton = require("./buttons/select-button");
Object.keys(_selectButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _selectButton[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _selectButton[key];
    }
  });
});