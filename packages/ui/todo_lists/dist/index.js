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
var _todoListsView = require("./views/todo-lists-view");
Object.keys(_todoListsView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _todoListsView[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _todoListsView[key];
    }
  });
});
var _todolistsUiServices = require("./services/todolists-ui-services");
Object.keys(_todolistsUiServices).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _todolistsUiServices[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _todolistsUiServices[key];
    }
  });
});