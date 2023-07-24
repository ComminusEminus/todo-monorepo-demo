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
var _todoListView = require("./views/todo-list-view");
Object.keys(_todoListView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _todoListView[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _todoListView[key];
    }
  });
});
var _todolistUiServices = require("./services/todolist-ui-services");
Object.keys(_todolistUiServices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _todolistUiServices[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _todolistUiServices[key];
    }
  });
});