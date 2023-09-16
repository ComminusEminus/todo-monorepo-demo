"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisibilityState = exports.USER_STATUS = exports.URLS = exports.UIACTIONS = exports.Responses = exports.LIST_ITEM_ACTIONS = exports.LISTS_ACTIONS = exports.FormType = exports.Filter = exports.CompleteState = void 0;
var CompleteState = /*#__PURE__*/function (CompleteState) {
  CompleteState["COMPLETED"] = "COMPLETED";
  CompleteState["INCOMPLETE"] = "INCOMPLETE";
  return CompleteState;
}({});
exports.CompleteState = CompleteState;
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
var VisibilityState = /*#__PURE__*/function (VisibilityState) {
  VisibilityState["VISIBLE"] = "VISIBLE";
  VisibilityState["INVISIBLE"] = "INVISIBLE";
  return VisibilityState;
}({});
exports.VisibilityState = VisibilityState;
var Responses = /*#__PURE__*/function (Responses) {
  Responses["OK"] = "ok";
  Responses["MISSING_DATA"] = "Missing data from request";
  Responses["DBERROR"] = "An error occured perfoming database action";
  Responses["NO_USER"] = "User not found";
  Responses["EMPTY"] = "";
  return Responses;
}({});
exports.Responses = Responses;
var LISTS_ACTIONS = /*#__PURE__*/function (LISTS_ACTIONS) {
  LISTS_ACTIONS["UPDATE_VISIBILITY_STATE"] = "UPDATE_VISIBILITY_STATE";
  LISTS_ACTIONS["ADD_LIST_DATA"] = "ADD_LIST_DATA";
  return LISTS_ACTIONS;
}({});
exports.LISTS_ACTIONS = LISTS_ACTIONS;
var LIST_ITEM_ACTIONS = /*#__PURE__*/function (LIST_ITEM_ACTIONS) {
  LIST_ITEM_ACTIONS["UPDATE_COMPLETE_STATE"] = "UPDATE_COMPLETE_STATE";
  LIST_ITEM_ACTIONS["UPDATE_VISIBILITY_STATE"] = "UPDATE_VISIBILITY_STATE";
  LIST_ITEM_ACTIONS["ADD_LIST_ITEM_DATA"] = "ADD_LIST_ITEM_DATA";
  LIST_ITEM_ACTIONS["SET_COMPLETE_STATE"] = "SET_COMPLETE_STATE";
  return LIST_ITEM_ACTIONS;
}({});
exports.LIST_ITEM_ACTIONS = LIST_ITEM_ACTIONS;
var UIACTIONS = /*#__PURE__*/function (UIACTIONS) {
  UIACTIONS["SELECT_FORM_TYPE"] = "SELECT_FORM_TYPE";
  UIACTIONS["SELECT_TODO_LIST_ITEM_BY_ID"] = "SELECT_TODO_LIST_ITEM_BY_ID";
  UIACTIONS["SELECT_TODO_LIST_BY_ID"] = "SELECT_TODO_LIST_BY_ID";
  UIACTIONS["UPDATE_TODO_LIST"] = "UPDATE_TODO_LIST";
  UIACTIONS["UPDATE_TODO_LIST_ITEMS"] = "UPDATE_TODO_LIST_ITEMS";
  UIACTIONS["UPDATE_USER_STATUS"] = "UPDATE_USER_STATUS";
  UIACTIONS["LOGGED_IN"] = "LOGGED_IN";
  UIACTIONS["LOGGED_OUT"] = "LOGGED_OUT";
  return UIACTIONS;
}({});
exports.UIACTIONS = UIACTIONS;
var URLS = /*#__PURE__*/function (URLS) {
  URLS["LIST_ITEM_ADD"] = "listItem/add";
  URLS["LIST_ITEM_DELETE"] = "listItem/delete";
  URLS["LIST_ITEM_GETBYID"] = "listItem/getById";
  URLS["LIST_ITEM_UPDATE"] = "listItem/update";
  URLS["LIST_ADD"] = "list/add";
  URLS["LIST_DELETE"] = "list/delete";
  URLS["LIST_ALL"] = "list/all";
  URLS["LIST_GETBYID"] = "list/getById";
  URLS["USER_CREATE"] = "user/createUser";
  URLS["USER_LOGIN"] = "user/login";
  URLS["USER_LOGOUT"] = "user/logout";
  URLS["USER_UPDATE"] = "user/update";
  return URLS;
}({});
exports.URLS = URLS;
var USER_STATUS = /*#__PURE__*/function (USER_STATUS) {
  USER_STATUS["LOGGED_IN"] = "LOGGED_IN";
  USER_STATUS["LOGGED_OUT"] = "LOGGED_OUT";
  return USER_STATUS;
}({});
exports.USER_STATUS = USER_STATUS;