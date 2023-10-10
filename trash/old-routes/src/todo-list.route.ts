import { Router } from 'express';
import {
    createNewListApi,
    deleteListApi,
    getAllListsApi,
    getTodoListByIdApi
} from '@api/controllers'
import {verifyToken} from '@api/middlewares'

export const todoListRouter = Router()

todoListRouter.post("/create", verifyToken, (req, res) => createNewListApi.execute(req, res))
todoListRouter.post("/delete", verifyToken, (req, res) => deleteListApi.execute(req, res))
todoListRouter.post("/getAll", verifyToken, (req, res) => getAllListsApi.execute(req, res))
todoListRouter.get("/getById", verifyToken, (req, res) => getTodoListByIdApi.execute(req, res))
    

