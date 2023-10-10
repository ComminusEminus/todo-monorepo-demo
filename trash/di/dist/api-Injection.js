"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userModel = exports.updateUserApi = exports.updateListItemApi = exports.listModel = exports.listItemModel = exports.listContainerModel = exports.getTodoListByIdApi = exports.getListItemByIdApi = exports.getAllTodoListApi = exports.findUserApi = exports.deleteListItemApi = exports.deleteListApi = exports.createNewUserApi = exports.addnewListItemApi = exports.addNewListApi = void 0;
var _domainLogic = require("@core/domain-logic");
var _data = require("@core/data");
var _models = require("@core/models");
//Model Config 
var listItemModel = new _data.ModelRepository(_models.TodoListItem);
exports.listItemModel = listItemModel;
var listModel = new _data.ModelRepository(_models.TodoList);
exports.listModel = listModel;
var listContainerModel = new _data.ModelRepository(_models.TodoListContainer);
exports.listContainerModel = listContainerModel;
var userModel = new _data.ModelRepository(_models.User);

//todolistitem api config
exports.userModel = userModel;
var addnewListItemApi = new _domainLogic.AddNewListItemApiUseCase(listItemModel, listModel);
exports.addnewListItemApi = addnewListItemApi;
var deleteListItemApi = new _domainLogic.DeleteListItemApiUseCase(listItemModel, listModel);
exports.deleteListItemApi = deleteListItemApi;
var getListItemByIdApi = new _domainLogic.GetListItemByIdApiUseCase(listItemModel);
exports.getListItemByIdApi = getListItemByIdApi;
var updateListItemApi = new _domainLogic.UpdateListItemApiUseCase(listItemModel);

//todolist api config
exports.updateListItemApi = updateListItemApi;
var addNewListApi = new _domainLogic.AddNewListApiUseCase(listContainerModel, listModel);
exports.addNewListApi = addNewListApi;
var deleteListApi = new _domainLogic.DeleteListApiUseCase(listContainerModel, listModel);
exports.deleteListApi = deleteListApi;
var getAllTodoListApi = new _domainLogic.GetAllTodoListsApiUseCase(listContainerModel);
exports.getAllTodoListApi = getAllTodoListApi;
var getTodoListByIdApi = new _domainLogic.GetTodoListByIdApiUseCase(listModel);

//user api config
exports.getTodoListByIdApi = getTodoListByIdApi;
var createNewUserApi = new _domainLogic.CreateNewUserApiUseCase(userModel, listContainerModel);
exports.createNewUserApi = createNewUserApi;
var findUserApi = new _domainLogic.FindUserApiUseCase(userModel);
exports.findUserApi = findUserApi;
var updateUserApi = new _domainLogic.UpdateUserProfileApiUseCase(userModel);
exports.updateUserApi = updateUserApi;