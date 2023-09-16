import {createNewUser, loginUser, logoutUser, updateUserProfile} from '@api/controllers'
import { Router } from 'express';
import {URLS} from '@core/entities'
import {verifyToken} from '@api/middlewares'

export const userRouter = Router()

userRouter.post("/" + URLS.USER_CREATE, createNewUser)
userRouter.post("/" + URLS.USER_LOGIN, loginUser)
userRouter.post("/" + URLS.USER_LOGOUT, verifyToken, logoutUser)
userRouter.post("/" + URLS.USER_UPDATE, verifyToken, updateUserProfile)
