import {
    GetTodoListItemByIdUseCase,
    AddNewListItemUseCase,
    AddNewTodoListUseCase,
    CreateNewUserUseCase,
    DeleteListItemUseCase,
    DeleteTodoListUseCase,
    GetTodoListByIdUseCase,
    LoginUserUseCase,
    LogoutUserUseCase,
    UpdateListItemUseCase,
    UpdateUserProfileUseCase,
    GetAllTodoListsUseCase,
    VerifyUserLoginUseCase
    
} from '@core/ui-domain-logic'
import {AxiosRepository} from './repositories/axios-repo'
import {TodoListItemRepository} from './repositories/todolist-item-repo-imp'
import {TodoListRepository} from './repositories/todolist-repo-imp'
import {UserRepository} from './repositories/user-repo-imp'

//http client config
const axiosInstance = new AxiosRepository(`http://localhost:${process.env.API_PORT}` || 'http://localhost:3000/')
//repo config
const todoListRepositoryInstance = new TodoListRepository(axiosInstance);
const userRepositoryInstance = new UserRepository(axiosInstance);
const todolistItemRepositoryInstance = new TodoListItemRepository(axiosInstance);
//todoList config
const addNewTodoList = new AddNewTodoListUseCase(todoListRepositoryInstance)
const deleteTodoList = new DeleteTodoListUseCase(todoListRepositoryInstance)
const getAllTodoLists = new GetAllTodoListsUseCase(todoListRepositoryInstance)
const getTodoListById = new GetTodoListByIdUseCase(todoListRepositoryInstance)
//todoListItems config
const addNewListItem = new AddNewListItemUseCase(todolistItemRepositoryInstance)
const deleteListItem = new DeleteListItemUseCase(todolistItemRepositoryInstance)
const updateListItem = new UpdateListItemUseCase(todolistItemRepositoryInstance)
const getTodoListItemById = new GetTodoListItemByIdUseCase(todolistItemRepositoryInstance)
//user config
const logoutUser = new LogoutUserUseCase(userRepositoryInstance)
const updateUserProfile = new UpdateUserProfileUseCase(userRepositoryInstance)
const loginUser = new LoginUserUseCase(userRepositoryInstance)
const createNewUser = new CreateNewUserUseCase(userRepositoryInstance)
const verifyLogin = new VerifyUserLoginUseCase(userRepositoryInstance)

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
    createNewUser,
    verifyLogin
}