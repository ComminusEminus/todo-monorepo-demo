"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useAddnewTodolistUi = require("./ui-interactions/use-addnew-todolist-ui");
Object.keys(_useAddnewTodolistUi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useAddnewTodolistUi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useAddnewTodolistUi[key];
    }
  });
});
var _useDeleteTodolistUi = require("./ui-interactions/use-delete-todolist-ui");
Object.keys(_useDeleteTodolistUi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useDeleteTodolistUi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useDeleteTodolistUi[key];
    }
  });
});
var _useSelectTodolistUi = require("./ui-interactions/use-select-todolist-ui");
Object.keys(_useSelectTodolistUi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useSelectTodolistUi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useSelectTodolistUi[key];
    }
  });
});
var _useDeleteTodolist = require("./api/use-delete-todolist");
Object.keys(_useDeleteTodolist).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useDeleteTodolist[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useDeleteTodolist[key];
    }
  });
});
var _useGetallTodolistsState = require("./api/use-getall-todolists-state");
Object.keys(_useGetallTodolistsState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useGetallTodolistsState[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useGetallTodolistsState[key];
    }
  });
});
var _useUpdateTodoListsImplementation = require("./implementation/use-update-todo-lists-implementation");
Object.keys(_useUpdateTodoListsImplementation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useUpdateTodoListsImplementation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useUpdateTodoListsImplementation[key];
    }
  });
});
var _useDeleteTodolistImplementation = require("./implementation/use-delete-todolist-implementation");
Object.keys(_useDeleteTodolistImplementation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useDeleteTodolistImplementation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useDeleteTodolistImplementation[key];
    }
  });
});