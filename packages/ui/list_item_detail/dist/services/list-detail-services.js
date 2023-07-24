"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapListItemDetailView = void 0;
var mapListItemDetailView = function mapListItemDetailView(response) {
  var data = response.data;
  var mappedResponse = response.data.map(function (list) {
    return {
      id: list.id,
      title: list.title,
      description: list.description,
      complete: list.complete
    };
  });
  return mappedResponse[0];
};
exports.mapListItemDetailView = mapListItemDetailView;