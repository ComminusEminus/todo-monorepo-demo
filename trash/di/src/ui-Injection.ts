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
} from '@core/domain-logic'
import {
    HttpClientRepository,
    TodoListRepository,
    UserRepository,
    TodoListItemRepository
} from '@core/data'

//http client config
const httpClientInstance = new HttpClientRepository('http://localhost:3000/')
//repo config
const todoListRepositoryInstance = new TodoListRepository(httpClientInstance);
const userRepositoryInstance = new UserRepository(httpClientInstance);
const todolistItemRepositoryInstance = new TodoListItemRepository(httpClientInstance);
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