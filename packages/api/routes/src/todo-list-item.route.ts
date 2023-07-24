import {addNewListItem, deleteListItem, getTodoListItemById, updateListItem} from '@api/controllers'
import * as todoList from '@api/controllers'
import * as user from '@api/controllers'
import passport from 'passport';
import { Router } from 'express';


export const listItemRouter = Router()
listItemRouter.post('/add',addNewListItem)
listItemRouter.post('/delete',deleteListItem)
listItemRouter.get('/getById',getTodoListItemById)
listItemRouter.put('/update',updateListItem)


