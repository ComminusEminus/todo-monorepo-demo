"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisibilityState = exports.Responses = exports.FormType = void 0;
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
  Responses["LOGGED_IN"] = "LOGGED_IN";
  Responses["INVALID"] = "INVALID";
  return Responses;
}({});
exports.Responses = Responses;