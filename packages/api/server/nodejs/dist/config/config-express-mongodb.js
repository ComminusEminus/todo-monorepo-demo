"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expressMongoDbServer = void 0;
var _express = _interopRequireDefault(require("express"));
var _expressServer = require("../repositories/express-server");
var _databases = require("@storage/databases");
var _config = require("@api/config");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var expressMongoDbServer = new _expressServer.ExpressServer(_express["default"], _databases.mongoDatabaseConnection, _config.listItemRouter, _config.todoListRouter, _config.userRouter);
exports.expressMongoDbServer = expressMongoDbServer;