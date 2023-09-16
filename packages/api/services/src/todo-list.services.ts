import mongoose from 'mongoose'
import {
    IAddNewListRequestDTO,
    IDeleteListRequestDTO,
    IFindListByIdRequestDTO,
    IGetAllTodoListsRequestDTO
} from '@core/entities'

export const mapNewTodoList = (body: IAddNewListRequestDTO) => {
    const {title} = body

    let error = false;

    if(!title){
        error = true;
    }

    return{
        title: title,
        error: error
    }
}


export const mapTodoListDeleteRequest = (body: IDeleteListRequestDTO) => {
    const {listId} = body;

    let error = false;

    if(!listId){
        error = true;
    }


    const mongooseListId = new mongoose.Types.ObjectId(listId)

    return{
        listId: mongooseListId,        
        error: error
    }
}

export const mapFindListByIdRequest = (body: IFindListByIdRequestDTO) =>{
    const {listId} = body;
    console.log(`mapFindListByIdRequest-todo-list-services: body(below): `)
    console.log(body)
    let error = false;

    if(!listId){
        error = true;
    }

    const mongooseListId = new mongoose.Types.ObjectId(listId)
    return{
        listId: mongooseListId,
        error: error
    }
}
