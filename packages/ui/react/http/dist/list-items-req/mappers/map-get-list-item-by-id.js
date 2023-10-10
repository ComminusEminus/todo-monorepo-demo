"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapGetListItemByIdResponse = void 0;
var _entities = require("@core/entities");
var mapGetListItemByIdResponse = function mapGetListItemByIdResponse(response) {
  var data = response.data;
  var listItem = data.listItem;
  var mappedResponse = function mappedResponse(listItem) {
    var completeState = listItem.complete == _entities.CompleteState.COMPLETED ? _entities.CompleteState.COMPLETED : _entities.CompleteState.INCOMPLETE;
    return {
      _id: listItem._id,
      title: listItem.title,
      description: listItem.description,
      complete: completeState
    };
  };
  return mappedResponse;
};
exports.mapGetListItemByIdResponse = mapGetListItemByIdResponse;