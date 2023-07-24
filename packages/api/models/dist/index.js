"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _todoListItemModel = require("./todo-list-item.model.js");
Object.keys(_todoListItemModel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _todoListItemModel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _todoListItemModel[key];
    }
  });
});
var _todoListModel = require("./todo-list.model.js");
Object.keys(_todoListModel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _todoListModel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _todoListModel[key];
    }
  });
});
var _todoListsModel = require("./todo-lists.model.js");
Object.keys(_todoListsModel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _todoListsModel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _todoListsModel[key];
    }
  });
});
var _userModel = require("./user.model.js");
Object.keys(_userModel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _userModel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userModel[key];
    }
  });
});