"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = exports.todoListRouter = exports.listItemRouter = void 0;
var _express = require("express");
var _verifyToken = require("./middlewares/verify-token");
var _apiDomainLogic = require("@core/api-domain-logic");
var _databases = require("@storage/databases");
//todolistitem api config
var createNewListItemApi = new _apiDomainLogic.CreateNewListItemApiUseCase(_databases.createNewListItem);
var deleteListItemApi = new _apiDomainLogic.DeleteListItemApiUseCase(_databases.deleteListItem);
var getListItemByIdApi = new _apiDomainLogic.GetListItemByIdApiUseCase(_databases.getListItemById);
var updateListItemApi = new _apiDomainLogic.UpdateListItemApiUseCase(_databases.upDateListItem);
var listItemRouter = (0, _express.Router)();
exports.listItemRouter = listItemRouter;
listItemRouter.post("/create", _verifyToken.verifyToken, function (req, res) {
  return createNewListItemApi.execute(req, res);
});
listItemRouter.post("/delete", _verifyToken.verifyToken, function (req, res) {
  return deleteListItemApi.execute(req, res);
});
listItemRouter.post("/getById", _verifyToken.verifyToken, function (req, res) {
  return getListItemByIdApi.execute(req, res);
});
listItemRouter.post("/update", _verifyToken.verifyToken, function (req, res) {
  return updateListItemApi.execute(req, res);
});

//todolist api config
var createNewListApi = new _apiDomainLogic.CreateNewListApiUseCase(_databases.createNewList);
var deleteListApi = new _apiDomainLogic.DeleteListApiUseCase(_databases.deleteList);
var getAllListsApi = new _apiDomainLogic.GetAllListsApiUseCase(_databases.getAllLists);
var getTodoListByIdApi = new _apiDomainLogic.GetListByIdApiUseCase(_databases.getListById);
var todoListRouter = (0, _express.Router)();
exports.todoListRouter = todoListRouter;
todoListRouter.post("/create", _verifyToken.verifyToken, function (req, res) {
  return createNewListApi.execute(req, res);
});
todoListRouter.post("/delete", _verifyToken.verifyToken, function (req, res) {
  return deleteListApi.execute(req, res);
});
todoListRouter.post("/getAll", _verifyToken.verifyToken, function (req, res) {
  return getAllListsApi.execute(req, res);
});
todoListRouter.post("/getById", _verifyToken.verifyToken, function (req, res) {
  return getTodoListByIdApi.execute(req, res);
});

//user api config
var createNewUserApi = new _apiDomainLogic.CreateNewUserApiUseCase(_databases.createNewUser);
var loginUserApi = new _apiDomainLogic.LoginUserApiUseCase(_databases.loginUser);
var updateUserApi = new _apiDomainLogic.UpdateUserProfileApiUseCase(_databases.updateUserProfile);
var logoutUserApi = new _apiDomainLogic.LogoutUserApiUseCase();
var verifyLogin = new _apiDomainLogic.VerifyUserLoginApiUseCase();
var userRouter = (0, _express.Router)();
exports.userRouter = userRouter;
userRouter.post("/create", function (req, res) {
  return createNewUserApi.execute(req, res);
});
userRouter.post("/login", function (req, res) {
  return loginUserApi.execute(req, res);
});
userRouter.post("/update", _verifyToken.verifyToken, function (req, res) {
  return updateUserApi.execute(req, res);
});
userRouter.post("/logout", _verifyToken.verifyToken, function (req, res) {
  return logoutUserApi.execute(req, res);
});
userRouter.post("/verify", function (req, res) {
  return verifyLogin.execute(req, res);
});