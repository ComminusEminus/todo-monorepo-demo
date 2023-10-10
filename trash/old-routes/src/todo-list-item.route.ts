import {
    createNewListItemApi,
    deleteListItemApi,
    getListItemByIdApi,
    updateListItemApi,
} from '@api/controllers'

import { Router } from 'express';
import {verifyToken} from '@api/middlewares'

export const listItemRouter = Router()

listItemRouter.post("/create", verifyToken, (req, res) => createNewListItemApi.execute(req, res))
listItemRouter.post("/delete", verifyToken, (req, res) => deleteListItemApi.execute(req, res))
listItemRouter.post("/getById", verifyToken, (req, res) => getListItemByIdApi.execute(req, res))
listItemRouter.post("/update", verifyToken, (req, res) => updateListItemApi.execute(req, res))


