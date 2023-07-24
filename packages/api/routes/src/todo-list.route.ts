import { Router } from 'express';
import {addNewTodoList, deleteTodoList, getTodoListById, getAllTodoLists} from '@api/controllers'


export const todoListRouter = Router()

todoListRouter.post('/add', addNewTodoList)
todoListRouter.post('/delete', deleteTodoList)
todoListRouter.get('/getById', getTodoListById)
todoListRouter.get('/all', getAllTodoLists)
    

