"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _listsView = require("./presentation/lists-view");
Object.keys(_listsView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _listsView[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _listsView[key];
    }
  });
});
var _addnewTodoListFormPresentation = require("./components/add-new-list-form/presentation/addnew-todo-list-form-presentation");
Object.keys(_addnewTodoListFormPresentation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addnewTodoListFormPresentation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _addnewTodoListFormPresentation[key];
    }
  });
});
var _addNewListFormDisplay = require("./components/form-display/add-new-list-form-display");
Object.keys(_addNewListFormDisplay).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _addNewListFormDisplay[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _addNewListFormDisplay[key];
    }
  });
});