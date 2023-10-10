import mongoose from 'mongoose'
import {
    IAddNewTodoListItemRequestDTO,
    IDeleteListItemRequestDTO,
    IFindListItemByIdRequestDTO,
    IUpdateListItemRequestDTO,
} from '@core/entities'


export const mapDeleteListItemRequest = (body: IDeleteListItemRequestDTO) => {
    const {listId, listItemId} = body;

    let error = false;

    if(!listId || !listItemId){
    
        error = true;

    }


    //const mongooseListId = new mongoose.Types.ObjectId(listId)

    //const mongooseListItemId = new mongoose.Types.ObjectId(listItemId)

    return{
        listId: listId,
        listItemId: listItemId,
        error: error
    }
}
