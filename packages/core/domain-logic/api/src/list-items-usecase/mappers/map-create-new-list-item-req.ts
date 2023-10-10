import mongoose from 'mongoose'
import {IAddNewTodoListItemRequestDTO} from '@core/entities'


export const mapCreateNewListItemRequest  = (body: IAddNewTodoListItemRequestDTO) => {
    const {title, description, listId} = body

    let error = false;

    if(!title || !description || !listId){
    
        error = true;

    }

    //const mongooseListId = new mongoose.Types.ObjectId(listId)
    
    return{
        title: title,
        description: description,
        listId: listId,
        error: error
    }
}

