import { Request, Response, NextFunction } from 'express';
const jwt = require("jsonwebtoken");
import env from 'dotenv'
import {getUserById} from '@storage/databases'

env.config({path: '../../../../../../.env'})

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const {token} = req.cookies;

    if(!token){
        res.json({message:'Token is either missing or expired'})
    }

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY, function(err: any, decoded: any) {
        if(err){
            res.json({message:'Token is invalid'})
        }    
        return decoded
    });
    console.log(decodedToken)


    try{
        console.log('inside try catch block verified token')
        const userCheck = await getUserById.execute(decodedToken.id)
        
        if(!userCheck){
            throw new Error('Invalid user or user does not exist')
        }

        req.user = userCheck
        
    }catch(err){
        
        res.json({message: err})
    
    }

    next();
}