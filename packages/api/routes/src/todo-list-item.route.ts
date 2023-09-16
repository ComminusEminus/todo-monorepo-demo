import {addNewListItem, deleteListItem, getTodoListItemById, updateListItem} from '@api/controllers'
import { Router } from 'express';
import {URLS} from '@core/entities'
import {verifyToken} from '@api/middlewares'

export const listItemRouter = Router()

listItemRouter.post("/" + URLS.LIST_ITEM_ADD, verifyToken, addNewListItem)
listItemRouter.post("/" + URLS.LIST_ITEM_DELETE, verifyToken, deleteListItem)
listItemRouter.post("/" + URLS.LIST_ITEM_GETBYID, verifyToken, getTodoListItemById)
listItemRouter.post("/" + URLS.LIST_ITEM_UPDATE, verifyToken, updateListItem)


