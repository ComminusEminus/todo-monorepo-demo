import {ITodoListContainer, IUser } from '@core/entities'
import { Model } from 'mongoose'

export class CreateNewUserService{
    user:  Model<IUser>
    listContainer: Model<ITodoListContainer>
    
    constructor(user:  Model<IUser>, listContainer: Model<ITodoListContainer> ){
        this.user = user
        this.listContainer = listContainer
    }

    public async execute(firstName: string, lastName: string, userName: string, password: string){
        const newUser = await this.user.create(
            {
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password
            }
        )
        await this.listContainer.create({ userId: newUser._id })
    }

}