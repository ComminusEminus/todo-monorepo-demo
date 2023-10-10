"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapGetListByIdResponse = void 0;
var mapGetListByIdResponse = function mapGetListByIdResponse(response) {
  var data = response.data;
  var list = data.list,
    message = data.message,
    error = data.error;
  if (!list) {
    throw new Error('mapToListDescription cannot find todoListsItem data');
  }
  var listItems = list.listItems;
  if (listItems.length === 0) {
    var _mappedResponse = {
      list: [],
      message: message,
      error: error
    };
    return _mappedResponse;
  }
  var mappedList = listItems.map(function (list) {
    return {
      _id: list._id,
      title: list.title,
      description: list.description,
      complete: list.complete
    };
  });
  var mappedResponse = {
    list: mappedList,
    message: message,
    error: error
  };
  return mappedResponse;
};
exports.mapGetListByIdResponse = mapGetListByIdResponse;