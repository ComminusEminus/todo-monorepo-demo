"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserProfile = exports.updateListItem = exports.logoutUser = exports.loginUser = exports.getTodoListItemById = exports.getTodoListById = exports.getAllTodoLists = exports.deleteTodoList = exports.deleteListItem = exports.createNewUser = exports.addNewTodoList = exports.addNewListItem = void 0;
var _domainLogic = require("@core/domain-logic");
var _data = require("@core/data");
//repo & http client config
var httpClientInstance = new _data.HttpClientRepository('http://localhost:3000/');
var todoListRepositoryInstance = new _data.TodoListRepository(httpClientInstance);
var userRepositoryInstance = new _data.UserRepository(httpClientInstance);
var todolistItemRepositoryInstance = new _data.TodoListItemRepository(httpClientInstance);
//todoList config
var addNewTodoList = new _domainLogic.AddNewTodoListUseCase(todoListRepositoryInstance);
exports.addNewTodoList = addNewTodoList;
var deleteTodoList = new _domainLogic.DeleteTodoListUseCase(todoListRepositoryInstance);
exports.deleteTodoList = deleteTodoList;
var getAllTodoLists = new _domainLogic.GetAllTodoListsUseCase(todoListRepositoryInstance);
exports.getAllTodoLists = getAllTodoLists;
var getTodoListById = new _domainLogic.GetTodoListByIdUseCase(todoListRepositoryInstance);
//todoListItems config
exports.getTodoListById = getTodoListById;
var addNewListItem = new _domainLogic.AddNewListItemUseCase(todolistItemRepositoryInstance);
exports.addNewListItem = addNewListItem;
var deleteListItem = new _domainLogic.DeleteListItemUseCase(todolistItemRepositoryInstance);
exports.deleteListItem = deleteListItem;
var updateListItem = new _domainLogic.UpdateListItemUseCase(todolistItemRepositoryInstance);
exports.updateListItem = updateListItem;
var getTodoListItemById = new _domainLogic.GetTodoListItemByIdUseCase(todolistItemRepositoryInstance);
//user config
exports.getTodoListItemById = getTodoListItemById;
var logoutUser = new _domainLogic.LogoutUserUseCase(userRepositoryInstance);
exports.logoutUser = logoutUser;
var updateUserProfile = new _domainLogic.UpdateUserProfileUseCase(userRepositoryInstance);
exports.updateUserProfile = updateUserProfile;
var loginUser = new _domainLogic.LoginUserUseCase(userRepositoryInstance);
exports.loginUser = loginUser;
var createNewUser = new _domainLogic.CreateNewUserUseCase(userRepositoryInstance);
exports.createNewUser = createNewUser;