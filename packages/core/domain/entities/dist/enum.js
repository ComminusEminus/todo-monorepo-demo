"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Visibility = exports.ListItemStatus = exports.FormType = exports.Filter = void 0;
var ListItemStatus = /*#__PURE__*/function (ListItemStatus) {
  ListItemStatus["COMPLETED"] = "COMPLETED";
  ListItemStatus["INCOMPLETE"] = "INCOMPLETE";
  return ListItemStatus;
}({});
exports.ListItemStatus = ListItemStatus;
var Filter = /*#__PURE__*/function (Filter) {
  Filter["ALL_LIST_ITEMS"] = "ALL_LIST_ITEMS";
  Filter["COMPLETE_LIST_ITEMS"] = "COMPLETE_LIST_ITEMS";
  Filter["INCOMPLETE_LIST_ITEMS"] = "INCOMPLETE_LIST_ITEMS";
  return Filter;
}({});
exports.Filter = Filter;
var FormType = /*#__PURE__*/function (FormType) {
  FormType["NEW_TODOLIST"] = "NEW_TODOLIST";
  FormType["NEW_TODOLIST_ITEM"] = "NEW_TODOLIST_ITEM";
  return FormType;
}({});
exports.FormType = FormType;
var Visibility = /*#__PURE__*/function (Visibility) {
  Visibility["VISIBLE"] = "VISIBLE";
  Visibility["INVISIBLE"] = "INVISIBLE";
  return Visibility;
}({});
exports.Visibility = Visibility;