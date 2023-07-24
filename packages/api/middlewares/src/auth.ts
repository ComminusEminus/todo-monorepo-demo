import {config} from 'dotenv'
import { Request } from 'express';
import {Strategy as LocalStrategy} from 'passport-local';
import {User, IUserDocument} from '@api/models'
import {Strategy as JWTstrategy} from 'passport-jwt'


export const loginStrategy = new LocalStrategy(
    async (usernameField, passwordField, cb) => {
      try {
        const user: IUserDocument | null = await User.findOne({ usernameField });

        if (!user) {
          return cb(null, false, { message: 'User not found' });
        }
        
        const validate = await user.isValidPassword(passwordField);

        if (!validate) {
          return cb(null, false, { message: 'Wrong Password' });
        }

        return cb(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return cb(error);
      }
    }
)

const cookieExtractor = function(req: Request) {
    var token = null;
    if (req && req.cookies)
    {
        token = req.cookies['jwt'];
    }
    return token;
};


export const verificationStrategy = new JWTstrategy(

    {
        secretOrKey: "tempKey",
        jwtFromRequest:  cookieExtractor
    },
    async (token, done) => {
        try {
            return done(null, token.user);
        } catch (error) {
            done(error);
        }
    }
)
