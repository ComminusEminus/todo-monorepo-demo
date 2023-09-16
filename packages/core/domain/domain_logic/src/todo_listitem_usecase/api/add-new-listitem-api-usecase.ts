import {IModelRepository} from '@core/abstractions'
import { ITodoListItem, ITodoList, Responses, IAddNewListItemResponseDTO } from '@core/entities'
import { Model, Document, UpdateWriteOpResult, HydratedDocument } from 'mongoose'
export class AddNewListItemApiUseCase{
    listItemModel: IModelRepository<ITodoListItem>
    listModel: IModelRepository<ITodoList>
    constructor(listItemModel: IModelRepository<ITodoListItem>, listModel: IModelRepository<ITodoList> ){
        this.listItemModel = listItemModel;
        this.listModel = listModel
    }

    public async execute(title: string, description: string, listId: string){
        const newTodoListItem: HydratedDocument<ITodoListItem> = await this.listItemModel.create({title: title, description: description})   
        
        await this.listModel.updateOneAdd(listId, [newTodoListItem._id])
    }

}