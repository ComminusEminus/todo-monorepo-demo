"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserProfile = exports.updateListItem = exports.logoutUser = exports.loginUser = exports.getTodoListItemById = exports.getTodoListById = exports.getAllTodoLists = exports.deleteTodoList = exports.deleteListItem = exports.createNewUser = exports.addNewTodoList = exports.addNewListItem = void 0;
var UC = _interopRequireWildcard(require("@core/domain-logic"));
var _data = require("@core/data");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//repo & http client config
var httpClientInstance = new _data.HttpClientRepository('http://localhost:3000/');
var todoListRepositoryInstance = new _data.TodoListRepository(httpClientInstance);
var userRepositoryInstance = new _data.UserRepository(httpClientInstance);
var todolistItemRepositoryInstance = new _data.TodoListItemRepository(httpClientInstance);
//todoList config
var addNewTodoList = new UC.AddNewTodoListUseCase(todoListRepositoryInstance);
exports.addNewTodoList = addNewTodoList;
var deleteTodoList = new UC.DeleteTodoListUseCase(todoListRepositoryInstance);
exports.deleteTodoList = deleteTodoList;
var getAllTodoLists = new UC.GetAllTodoListsUseCase(todoListRepositoryInstance);
exports.getAllTodoLists = getAllTodoLists;
var getTodoListById = new UC.GetTodoListByIdUseCase(todoListRepositoryInstance);
//todoListItems config
exports.getTodoListById = getTodoListById;
var addNewListItem = new UC.AddNewListItemUseCase(todolistItemRepositoryInstance);
exports.addNewListItem = addNewListItem;
var deleteListItem = new UC.DeleteListItemUseCase(todolistItemRepositoryInstance);
exports.deleteListItem = deleteListItem;
var updateListItem = new UC.UpdateListItemUseCase(todolistItemRepositoryInstance);
exports.updateListItem = updateListItem;
var getTodoListItemById = new UC.GetTodoListItemByIdUseCase(todolistItemRepositoryInstance);
//user config
exports.getTodoListItemById = getTodoListItemById;
var logoutUser = new UC.LogoutUserUseCase(userRepositoryInstance);
exports.logoutUser = logoutUser;
var updateUserProfile = new UC.UpdateUserProfileUseCase(userRepositoryInstance);
exports.updateUserProfile = updateUserProfile;
var loginUser = new UC.LoginUserUseCase(userRepositoryInstance);
exports.loginUser = loginUser;
var createNewUser = new UC.CreateNewUserUseCase(userRepositoryInstance);
exports.createNewUser = createNewUser;