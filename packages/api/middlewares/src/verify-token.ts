import { Request, Response, NextFunction } from 'express';
const jwt = require("jsonwebtoken");
import env from 'dotenv'
import { User, IUserDocument } from '@api/models'


env.config({path: '../../server/.env'})

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const {token} = req.cookies;

    let verifiedToken;
    let userVerified = null;

    if(!token){
        res.json({message:'Token is either missing or expired'})
    }

    try{
        
        const decoded = jwt.verify(token, 'TOPSY_CRETS');
        verifiedToken = decoded

    }catch{
        
        res.json({message:'Token is invalid'})
    
    }

    try{
        
        const userCheck: IUserDocument | null = await User.findOne({ _id: verifiedToken.id });    
        userVerified = userCheck
    } catch(err) {
        res.json({message:'Invalid user or user does not exist'})
    }

    if(userVerified){

        req.user = userVerified

    }

    next();
}