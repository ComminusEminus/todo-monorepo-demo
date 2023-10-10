import {ITodoList, ITodoListContainer } from '@core/entities'
import { Model } from 'mongoose'

export class DeleteListService{
    listContainer: Model<ITodoListContainer>
    listModel: Model<ITodoList>
    constructor(listContainer: Model<ITodoListContainer>, listModel: Model<ITodoList> ){
        this.listContainer = listContainer;
        this.listModel = listModel
    }

    public async execute(listId: string, userId: string){
        await this.listModel.deleteOne({_id: listId})   
        
        await this.listContainer.updateOne({userId: userId}, { $pull: {listItems: listId}})
    }

}