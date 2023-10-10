import { ITodoListItem, ITodoList } from '@core/entities'
import mongoose, { Model } from 'mongoose'

export class DeleteListItemService{
    listItemModel: Model<ITodoListItem>
    listModel: Model<ITodoList>
    constructor(listItemModel: Model<ITodoListItem>, listModel: Model<ITodoList> ){
        this.listItemModel = listItemModel;
        this.listModel = listModel
    }

    public async execute(listItemId: string, userId: string){
        await this.listItemModel.deleteOne({_id: listItemId})   
        
        await this.listModel.updateOne({_id: userId}, { $pull: {listItems: listItemId}})
    }

}
