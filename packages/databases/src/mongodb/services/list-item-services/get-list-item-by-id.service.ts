import { ITodoListItem } from '@core/entities'
import { Model } from 'mongoose'

export class GetListItemByIdService{
    listItemModel: Model<ITodoListItem>
    constructor(listItemModel: Model<ITodoListItem> ){
        this.listItemModel = listItemModel;

    }

    public async execute(id: string): Promise<ITodoListItem | null>{
        const requestedListItem: ITodoListItem | null = await this.listItemModel.findById(id)

        return requestedListItem

    }

}