import {
    createNewUserApi,
    loginUserApi,
    updateUserApi,
    logoutUserApi
} from '@api/controllers'
import { Router } from 'express';
import {verifyToken} from '@api/middlewares'

export const userRouter = Router()

userRouter.post("/create", (req, res) => createNewUserApi.execute(req, res))
userRouter.post("/login", (req, res) => loginUserApi.execute(req, res))
userRouter.post("/update", verifyToken, (req, res) => updateUserApi.execute(req, res))
userRouter.post("/logout", verifyToken, (req, res) => logoutUserApi.execute(req, res))
