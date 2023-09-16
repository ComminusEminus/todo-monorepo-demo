import { config } from 'dotenv'
import { Request } from 'express';
import { Strategy } from 'passport-local';
import crypto from 'crypto';
import { User, IUserDocument } from '@api/models'
import passportJWT from 'passport-jwt'
import jwt from 'jsonwebtoken';
import env from 'dotenv'

env.config({path: '../../server/.env'})

export const verificationStrategy = new passportJWT.Strategy(
  {
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: passportJWT.ExtractJwt.fromBodyField('token')
  },
  async (token, done) => {
    try {
      return done(null, token.user);
    } catch (error) {
      done(error);
    }
  }
)


export const loginStrategy = new Strategy(
  async function verify(username, password, done) {
    try {
      const user: IUserDocument | null = await User.findOne({ userName: username });

      if (!user) {
        return done(null, false, { message: 'User not found' });
      }
      
      const validate = await user.isValidPassword(password);
      

      if (!validate) {
        return done(null, false, { message: 'Wrong Password' });
      }

      return done(null, user, { message: 'Logged in Successfully' });
    } catch (error) {
      return done(error);
    }
    



  }
)
