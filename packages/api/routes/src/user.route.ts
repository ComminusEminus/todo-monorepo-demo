import {createNewUser, loginUser, logoutUser, updateUserProfile} from '@api/controllers'
import { Router } from 'express';
import passport from 'passport';

export const userRouter = Router()

userRouter.post('/createUser', passport.authenticate('signup', { session: false }), createNewUser)
userRouter.post('/login', loginUser)
userRouter.post('/logout', logoutUser)
userRouter.post('/updateProfile', updateUserProfile)




