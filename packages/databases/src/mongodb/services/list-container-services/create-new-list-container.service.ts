import { ITodoListContainer } from '@core/entities'
import { Model } from 'mongoose'

export class CreateNewListContainerService{
    listContainer: Model<ITodoListContainer>
    constructor(listContainer: Model<ITodoListContainer> ){
        this.listContainer = listContainer;
        
    }
    public async execute(userId: string){
        await this.listContainer.create({userId: userId})
    }

}