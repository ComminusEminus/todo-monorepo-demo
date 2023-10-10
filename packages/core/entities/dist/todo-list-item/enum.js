"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filter = exports.CompleteState = void 0;
var Filter = /*#__PURE__*/function (Filter) {
  Filter["ALL_LIST_ITEMS"] = "ALL_LIST_ITEMS";
  Filter["COMPLETE_LIST_ITEMS"] = "COMPLETE_LIST_ITEMS";
  Filter["INCOMPLETE_LIST_ITEMS"] = "INCOMPLETE_LIST_ITEMS";
  return Filter;
}({});
exports.Filter = Filter;
var CompleteState = /*#__PURE__*/function (CompleteState) {
  CompleteState["COMPLETED"] = "COMPLETED";
  CompleteState["INCOMPLETE"] = "INCOMPLETE";
  return CompleteState;
}({});
exports.CompleteState = CompleteState;