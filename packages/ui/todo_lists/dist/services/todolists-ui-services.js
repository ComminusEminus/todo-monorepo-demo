"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapToListsDescription = void 0;
var mapToListsDescription = function mapToListsDescription(response) {
  var mappedResponse = response.data.map(function (list) {
    return {
      id: list.id,
      title: list.title
    };
  });
  return mappedResponse;
};
exports.mapToListsDescription = mapToListsDescription;