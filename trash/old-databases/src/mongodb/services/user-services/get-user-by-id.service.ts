import {IUser } from '@core/entities'
import { Model } from 'mongoose'

export class GetUserByIdService{
    user:  Model<IUser>
    
    constructor(user:  Model<IUser> ){
        this.user = user
    
    }

    public async execute(id: string): Promise<IUser | null>{
        const user: IUser | null = await this.user.findById(id);
        
        return user
        
    }

}