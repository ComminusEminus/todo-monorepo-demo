"use strict";

var _configExpressMongodb = require("./config/config-express-mongodb");
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config({
  path: '../../../.env'
});
_configExpressMongodb.expressMongoDbServer.listen();
_configExpressMongodb.expressMongoDbServer.connectdb();