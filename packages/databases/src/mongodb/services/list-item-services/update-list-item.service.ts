import { ITodoListItem } from '@core/entities'
import { Model} from 'mongoose'

export class UpdateListItemService{
    listItemModel: Model<ITodoListItem>
    constructor(listItemModel: Model<ITodoListItem> ){
        this.listItemModel = listItemModel;

    }

    public async execute(_id: string, title: string, description: string, complete: string){
        await this.listItemModel.updateOne(
            {
                _id: _id
            }, 
            {
                title: title, 
                description: description, 
                complete: complete
            }
        )
        
    }

}