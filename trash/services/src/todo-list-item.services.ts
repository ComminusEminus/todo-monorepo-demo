import mongoose from 'mongoose'
import {
    IAddNewTodoListItemRequestDTO,
    IDeleteListItemRequestDTO,
    IFindListItemByIdRequestDTO,
    IUpdateListItemRequestDTO,
} from '@core/entities'


export const mapNewTodoListItem  = (body: IAddNewTodoListItemRequestDTO) => {
    const {title, description, listId} = body

    let error = false;

    if(!title || !description || !listId){
    
        error = true;

    }

    const mongooseListId = new mongoose.Types.ObjectId(listId)
    
    return{
        title: title,
        description: description,
        listId: listId,
        error: error
    }
}

export const mapDeleteRequest = (body: IDeleteListItemRequestDTO) => {
    const {listId, listItemId} = body;

    let error = false;

    if(!listId || !listItemId){
    
        error = true;

    }


    const mongooseListId = new mongoose.Types.ObjectId(listId)

    const mongooseListItemId = new mongoose.Types.ObjectId(listItemId)

    return{
        listId: mongooseListId,
        listItemId: mongooseListItemId,
        error: error
    }
}

export const mapFindByIdRequest = (body: IFindListItemByIdRequestDTO) =>{
    const {listItemId} = body
    
    let error = false;

    if(!listItemId){
    
        error = true;

    }

    const mongooseListItemId = new mongoose.Types.ObjectId(listItemId)

    return{
        id: mongooseListItemId,
        error: error
    }
}

export const mapUpdateListItem = (body: IUpdateListItemRequestDTO) => {
    const {_id, title, description, complete} = body

    let error = false;

    if(!_id || !title || !description || !complete){
    
        error = true;

    }

    const mongooseId = new mongoose.Types.ObjectId(_id)
    return{
        _id: mongooseId,
        title: title,
        description: description,
        complete: complete,   
        error: error
    }
}


