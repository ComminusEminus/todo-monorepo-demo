"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;
var _controllers = require("@api/controllers");
var _express = require("express");
var _entities = require("@core/entities");
var _middlewares = require("@api/middlewares");
var userRouter = (0, _express.Router)();
exports.userRouter = userRouter;
userRouter.post("/" + _entities.URLS.USER_CREATE, _controllers.createNewUser);
userRouter.post("/" + _entities.URLS.USER_LOGIN, _controllers.loginUser);
userRouter.post("/" + _entities.URLS.USER_LOGOUT, _middlewares.verifyToken, _controllers.logoutUser);
userRouter.post("/" + _entities.URLS.USER_UPDATE, _middlewares.verifyToken, _controllers.updateUserProfile);