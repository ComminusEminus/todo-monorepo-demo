import { ITodoListItem, ITodoList} from '@core/entities'
import mongoose, { Model} from 'mongoose'

export class CreateNewListItemService{
    listItemModel: Model<ITodoListItem>
    listModel: Model<ITodoList>
    constructor(listItemModel: Model<ITodoListItem>, listModel: Model<ITodoList> ){
        this.listItemModel = listItemModel;
        this.listModel = listModel
    }

    public async execute(title: string, description: string, listId: string){
        const newTodoListItem: ITodoListItem | null = await this.listItemModel.create({title: title, description: description})   
        
        await this.listModel.updateOne({_id: listId}, { $addToSet: { listItems: [newTodoListItem._id] } })
    }

}