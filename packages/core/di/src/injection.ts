import * as UC from '@core/domain-logic'
import {
    HttpClientRepository,
    TodoListRepository,
    UserRepository,
    TodoListItemRepository
} from '@core/data'

//repo & http client config
const httpClientInstance = new HttpClientRepository('http://localhost:3000/')
const todoListRepositoryInstance = new TodoListRepository(httpClientInstance);
const userRepositoryInstance = new UserRepository(httpClientInstance);
const todolistItemRepositoryInstance = new TodoListItemRepository(httpClientInstance);
//todoList config
const addNewTodoList = new UC.AddNewTodoListUseCase(todoListRepositoryInstance)
const deleteTodoList = new UC.DeleteTodoListUseCase(todoListRepositoryInstance)
const getAllTodoLists = new UC.GetAllTodoListsUseCase(todoListRepositoryInstance)
const getTodoListById = new UC.GetTodoListByIdUseCase(todoListRepositoryInstance)
//todoListItems config
const addNewListItem = new UC.AddNewListItemUseCase(todolistItemRepositoryInstance)
const deleteListItem = new UC.DeleteListItemUseCase(todolistItemRepositoryInstance)
const updateListItem = new UC.UpdateListItemUseCase(todolistItemRepositoryInstance)
const getTodoListItemById = new UC.GetTodoListItemByIdUseCase(todolistItemRepositoryInstance)
//user config
const logoutUser = new UC.LogoutUserUseCase(userRepositoryInstance)
const updateUserProfile = new UC.UpdateUserProfileUseCase(userRepositoryInstance)
const loginUser = new UC.LoginUserUseCase(userRepositoryInstance)
const createNewUser = new UC.CreateNewUserUseCase(userRepositoryInstance)

export {
    getTodoListItemById,
    addNewListItem,
    addNewTodoList,
    deleteListItem,
    deleteTodoList,
    getTodoListById,
    updateListItem,
    getAllTodoLists,
    logoutUser,
    updateUserProfile,
    loginUser,
    createNewUser
}