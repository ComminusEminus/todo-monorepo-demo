"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;
var _controllers = require("@api/controllers");
var _express = require("express");
var _passport = _interopRequireDefault(require("passport"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var userRouter = (0, _express.Router)();
exports.userRouter = userRouter;
userRouter.post('/createUser', _passport["default"].authenticate('signup', {
  session: false
}), _controllers.createNewUser);
userRouter.post('/login', _controllers.loginUser);
userRouter.post('/logout', _controllers.logoutUser);
userRouter.post('/updateProfile', _controllers.updateUserProfile);