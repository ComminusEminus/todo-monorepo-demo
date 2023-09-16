import { Router } from 'express';
import {addNewTodoList, deleteTodoList, getTodoListById, getAllTodoLists} from '@api/controllers'
import {URLS} from '@core/entities'
import {verifyToken} from '@api/middlewares'

export const todoListRouter = Router()

todoListRouter.post("/" + URLS.LIST_ADD, verifyToken, addNewTodoList)
todoListRouter.post("/" + URLS.LIST_DELETE, verifyToken, deleteTodoList)
todoListRouter.post("/" + URLS.LIST_GETBYID, verifyToken, getTodoListById)
todoListRouter.get("/" + URLS.LIST_ALL, verifyToken, getAllTodoLists)
    

