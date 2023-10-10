import { IUser } from '@core/entities'
import { Model} from 'mongoose'

export class UpdateUserProfileService{
    user: Model<IUser>
    
    constructor(user:  Model<IUser> ){
        this.user = user
    
    }

    public async execute(_id: string, firstName: string, lastName:string, userName:string, password: string){
        this.user.updateOne(
            {
                _id : _id
            },
            {
                
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password

            });
    }

}