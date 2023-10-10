"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _dashboard = require("./dashboard");
Object.keys(_dashboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dashboard[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dashboard[key];
    }
  });
});
var _dashboardCenterPanel = require("./dashboard-center-panel");
Object.keys(_dashboardCenterPanel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dashboardCenterPanel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dashboardCenterPanel[key];
    }
  });
});
var _dashboardContainer = require("./dashboard-container");
Object.keys(_dashboardContainer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dashboardContainer[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dashboardContainer[key];
    }
  });
});
var _dashboardListPanel = require("./dashboard-list-panel");
Object.keys(_dashboardListPanel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dashboardListPanel[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dashboardListPanel[key];
    }
  });
});
var _dashboardToolbar = require("./dashboard-toolbar");
Object.keys(_dashboardToolbar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _dashboardToolbar[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dashboardToolbar[key];
    }
  });
});