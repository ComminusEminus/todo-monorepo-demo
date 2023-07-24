import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import {mapNewUser} from '@api/services'
import {User} from '@api/models'

export const createNewUser = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const mappedRequest = mapNewUser(body);
    const newUser = new User(
        {
            firstName: mappedRequest.firstName, 
            lastName: mappedRequest.lastName, 
            userName: mappedRequest.userName , 
            password: mappedRequest.password 
        })
    
    try{
        await newUser.save()
        res.send('ok')
    }catch(err){
        res.send('err: ' + err)
    }

}


export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
        'login',
        {session: false},
        async (err: object, user: object) => {
            try {
            if (err || !user) {
                const error = new Error('An error occurred.');

                return next(error);
            }
            req.login(
                user,
                { session: false },
                async (err) => {
                    if (err){
                        res.send('err: ' + err)
                    }
                    if(process.env.SECRET_KEY){
                        const token = jwt.sign( user, process.env.SECRET_KEY);
                        return res.json({ user, token });
                    }else{
                        return res.json({message: 'no key available'})
                    }
                }
                );
            } catch (err) {
                res.send('err: ' + err);
            }
            }
        )(req, res, next);
    
}


export const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
    req.logout(function(err: object) {
        if (err) { return next(err); }
        res.send('ok');
    });
}

export const updateUserProfile = async (req: Request, res: Response, next: NextFunction) => {

}