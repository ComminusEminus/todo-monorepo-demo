
import {  IUser } from '@core/entities'
import { Model} from 'mongoose'

import crypto from 'crypto';

export class LoginUserService{
    user:  Model<IUser>
    
    constructor(user:  Model<IUser> ){
        this.user = user
    
    }

    public async execute(username: string, password: string): Promise<IUser | null>{
        const user: IUser | null = await this.user.findOne({ userName: username });

        if(!user){
            return null
        }
        
        if(!user.salt || !user.hash){
            return null
        }
        
        const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, `sha512`).toString(`hex`);
        
        if(user.hash !== hash){
            return null
        }
        
        return user

    }

}


