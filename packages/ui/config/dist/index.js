"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyLogin = exports.updateUserProfile = exports.updateListItem = exports.logoutUser = exports.loginUser = exports.getTodoListItemById = exports.getTodoListById = exports.getAllTodoLists = exports.deleteTodoList = exports.deleteListItem = exports.createNewUser = exports.addNewTodoList = exports.addNewListItem = void 0;
var _uiDomainLogic = require("@core/ui-domain-logic");
var _axiosRepo = require("./repositories/axios-repo");
var _todolistItemRepoImp = require("./repositories/todolist-item-repo-imp");
var _todolistRepoImp = require("./repositories/todolist-repo-imp");
var _userRepoImp = require("./repositories/user-repo-imp");
//http client config
var axiosInstance = new _axiosRepo.AxiosRepository("http://localhost:".concat(process.env.API_PORT) || 'http://localhost:3000/');
//repo config
var todoListRepositoryInstance = new _todolistRepoImp.TodoListRepository(axiosInstance);
var userRepositoryInstance = new _userRepoImp.UserRepository(axiosInstance);
var todolistItemRepositoryInstance = new _todolistItemRepoImp.TodoListItemRepository(axiosInstance);
//todoList config
var addNewTodoList = new _uiDomainLogic.AddNewTodoListUseCase(todoListRepositoryInstance);
exports.addNewTodoList = addNewTodoList;
var deleteTodoList = new _uiDomainLogic.DeleteTodoListUseCase(todoListRepositoryInstance);
exports.deleteTodoList = deleteTodoList;
var getAllTodoLists = new _uiDomainLogic.GetAllTodoListsUseCase(todoListRepositoryInstance);
exports.getAllTodoLists = getAllTodoLists;
var getTodoListById = new _uiDomainLogic.GetTodoListByIdUseCase(todoListRepositoryInstance);
//todoListItems config
exports.getTodoListById = getTodoListById;
var addNewListItem = new _uiDomainLogic.AddNewListItemUseCase(todolistItemRepositoryInstance);
exports.addNewListItem = addNewListItem;
var deleteListItem = new _uiDomainLogic.DeleteListItemUseCase(todolistItemRepositoryInstance);
exports.deleteListItem = deleteListItem;
var updateListItem = new _uiDomainLogic.UpdateListItemUseCase(todolistItemRepositoryInstance);
exports.updateListItem = updateListItem;
var getTodoListItemById = new _uiDomainLogic.GetTodoListItemByIdUseCase(todolistItemRepositoryInstance);
//user config
exports.getTodoListItemById = getTodoListItemById;
var logoutUser = new _uiDomainLogic.LogoutUserUseCase(userRepositoryInstance);
exports.logoutUser = logoutUser;
var updateUserProfile = new _uiDomainLogic.UpdateUserProfileUseCase(userRepositoryInstance);
exports.updateUserProfile = updateUserProfile;
var loginUser = new _uiDomainLogic.LoginUserUseCase(userRepositoryInstance);
exports.loginUser = loginUser;
var createNewUser = new _uiDomainLogic.CreateNewUserUseCase(userRepositoryInstance);
exports.createNewUser = createNewUser;
var verifyLogin = new _uiDomainLogic.VerifyUserLoginUseCase(userRepositoryInstance);
exports.verifyLogin = verifyLogin;