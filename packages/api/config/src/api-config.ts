import { Router } from 'express';
import {verifyToken} from './middlewares/verify-token'

import {
    CreateNewListItemApiUseCase,
    DeleteListItemApiUseCase,
    GetListItemByIdApiUseCase,
    UpdateListItemApiUseCase,
    
    CreateNewListApiUseCase,
    DeleteListApiUseCase,
    GetAllListsApiUseCase,
    GetListByIdApiUseCase,
    
    CreateNewUserApiUseCase,
    LoginUserApiUseCase,
    UpdateUserProfileApiUseCase,
    LogoutUserApiUseCase,
    VerifyUserLoginApiUseCase
} from '@core/api-domain-logic'

import {
    createNewListItem,
    deleteListItem,
    getListItemById,
    upDateListItem,
    createNewList,
    deleteList,
    getListById,
    getAllLists,
    createNewUser,
    getUserById,
    loginUser,
    updateUserProfile,
    createNewListContainer
} from '@storage/databases'


//todolistitem api config
const createNewListItemApi = new CreateNewListItemApiUseCase(createNewListItem)
const deleteListItemApi = new DeleteListItemApiUseCase(deleteListItem)
const getListItemByIdApi = new GetListItemByIdApiUseCase(getListItemById)
const updateListItemApi = new UpdateListItemApiUseCase(upDateListItem)

const listItemRouter = Router()

listItemRouter.post("/create", verifyToken, (req, res) => createNewListItemApi.execute(req, res))
listItemRouter.post("/delete", verifyToken, (req, res) => deleteListItemApi.execute(req, res))
listItemRouter.post("/getById", verifyToken, (req, res) => getListItemByIdApi.execute(req, res))
listItemRouter.post("/update", verifyToken, (req, res) => updateListItemApi.execute(req, res))

//todolist api config
const createNewListApi = new CreateNewListApiUseCase(createNewList)
const deleteListApi = new DeleteListApiUseCase(deleteList)
const getAllListsApi = new GetAllListsApiUseCase(getAllLists)
const getTodoListByIdApi = new GetListByIdApiUseCase(getListById)

const todoListRouter = Router()

todoListRouter.post("/create", verifyToken, (req, res) => createNewListApi.execute(req, res))
todoListRouter.post("/delete", verifyToken, (req, res) => deleteListApi.execute(req, res))
todoListRouter.post("/getAll", verifyToken, (req, res) => getAllListsApi.execute(req, res))
todoListRouter.post("/getById", verifyToken, (req, res) => getTodoListByIdApi.execute(req, res))


//user api config
const createNewUserApi = new CreateNewUserApiUseCase(createNewUser)
const loginUserApi = new LoginUserApiUseCase(loginUser)
const updateUserApi = new UpdateUserProfileApiUseCase(updateUserProfile)
const logoutUserApi = new LogoutUserApiUseCase()
const verifyLogin = new VerifyUserLoginApiUseCase()

const userRouter = Router()

userRouter.post("/create", (req, res) => createNewUserApi.execute(req, res))
userRouter.post("/login", (req, res) => loginUserApi.execute(req, res))
userRouter.post("/update", verifyToken, (req, res) => updateUserApi.execute(req, res))
userRouter.post("/logout", verifyToken, (req, res) => logoutUserApi.execute(req, res))
userRouter.post("/verify", (req, res) => verifyLogin.execute(req, res))


export {
    listItemRouter,
    userRouter,
    todoListRouter
}

