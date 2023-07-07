import * as UC from '@todo/domain-logic';
import { AxiosHttpClient, TodoListRepoImp, UserRepoImp, TodoListItemRepoImp } from '@todo/data';
//repo & http client config
const httpClient = new AxiosHttpClient('http://localhost:3000/');
const todoListRepo = new TodoListRepoImp(httpClient);
const userRepo = new UserRepoImp(httpClient);
const todolistItemRepo = new TodoListItemRepoImp(httpClient);
//todoList config
const addNewTodoList = new UC.AddNewTodoListUseCase(todoListRepo);
const deleteTodoList = new UC.DeleteTodoListUseCase(todoListRepo);
const getAllTodoLists = new UC.GetAllTodoListsUseCase(todoListRepo);
const getTodoListById = new UC.GetTodoListByIdUseCase(todoListRepo);
//todoListItems config
const addNewListItem = new UC.AddNewListItemUseCase(todolistItemRepo);
const deleteListItem = new UC.DeleteListItemUseCase(todolistItemRepo);
const updateListItem = new UC.UpdateListItemUseCase(todolistItemRepo);
const getTodoListItemById = new UC.GetTodoListItemByIdUseCase(todolistItemRepo);
//user config
const logoutUser = new UC.LogoutUserUseCase(userRepo);
const updateUserProfile = new UC.UpdateUserProfileUseCase(userRepo);
const loginUser = new UC.LoginUserUseCase(userRepo);
const createNewUser = new UC.CreateNewUserUseCase(userRepo);
export { getTodoListItemById, addNewListItem, addNewTodoList, deleteListItem, deleteTodoList, getTodoListById, updateListItem, getAllTodoLists, logoutUser, updateUserProfile, loginUser, createNewUser };
//# sourceMappingURL=injection.js.map