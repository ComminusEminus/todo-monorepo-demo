"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _todoListItemController = require("./todo-list-item.controller.js");
Object.keys(_todoListItemController).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _todoListItemController[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _todoListItemController[key];
    }
  });
});
var _todoListController = require("./todo-list.controller.js");
Object.keys(_todoListController).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _todoListController[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _todoListController[key];
    }
  });
});
var _userController = require("./user.controller.js");
Object.keys(_userController).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userController[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userController[key];
    }
  });
});