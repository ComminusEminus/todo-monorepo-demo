import { Request, Response, NextFunction } from 'express';
import {
    mapNewTodoListItem, 
    mapDeleteRequest, 
    mapFindByIdRequest, 
    mapUpdateListItem
} from '@api/services'
import {TodoListItem, TodoList} from '@api/models'
import {
    ITodoListItem, 
    Responses, 
    IAddNewListItemResponseDTO, 
    IDeleteListItemResponseDTO, 
    IGetListItemByIdResponseDTO, 
    IUpdateListItemResponseDTO
} from '@core/entities'


export const addNewListItem = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    
    const mappedRequest = mapNewTodoListItem(body);

    const {title, description, listId, error} = mappedRequest

    if (error) {
        
        const missingDataResponse: IAddNewListItemResponseDTO = {message: Responses.MISSING_DATA}
        
        res.status(418).json(missingDataResponse)

    }
    
    try{

        const newTodoListItem: ITodoListItem | null = await TodoListItem.create({title: title, description: description})   

        await TodoList.updateOne({_id: listId}, { $addToSet: { listItems: [newTodoListItem._id] } })

        const successAddNewListItemResponse :IAddNewListItemResponseDTO = {message: Responses.OK}

        res.status(200).send(successAddNewListItemResponse)

    }catch(err){

        const errorAddNewLIstItemResponse :IAddNewListItemResponseDTO = {message: Responses.DBERROR, error: err}
        
        res.json(errorAddNewLIstItemResponse)
    }
}


export const deleteListItem = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
   
    const mappedRequest = mapDeleteRequest(body);
   
    const {listId, listItemId, error} = mappedRequest;

    if (error) {
        
        const missingDataResponse: IDeleteListItemResponseDTO = {message: Responses.MISSING_DATA}
        
        res.status(418).json(missingDataResponse)

    }
    
    try{
        await TodoListItem.deleteOne({_id: listItemId})

        await TodoList.updateOne({_id: listId}, { $pull: { listItems: listItemId } })

        const successDeleteListItemResponse : IDeleteListItemResponseDTO = {message: Responses.OK}

        res.status(200).send(successDeleteListItemResponse)

    }catch(err){

        const errorDeleteListItemResponse: IDeleteListItemResponseDTO = {message: Responses.DBERROR, error: err}

        res.json(errorDeleteListItemResponse)
    }
}

export const getTodoListItemById = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    
    const mappedRequest = mapFindByIdRequest(body);
    
    const {id, error} = mappedRequest;

    if (error) {
        
        const missingDataResponse: IGetListItemByIdResponseDTO = {message: Responses.MISSING_DATA}
        
        res.status(418).json(missingDataResponse)

    }
    
    try{
        const requestedListItem: ITodoListItem | null = await TodoListItem.findById(id)

        const successGetTodoListItemResponse: IGetListItemByIdResponseDTO = {listItem: requestedListItem}

        res.json(successGetTodoListItemResponse)
        
    }catch(err){
        const errorRetrievingTodoListItemResponse: IGetListItemByIdResponseDTO = {message: Responses.DBERROR, error: err}

        res.json({errorRetrievingTodoListItemResponse})
    }
}

export const updateListItem = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;

    const mappedRequest = mapUpdateListItem(body);
    
    const {_id, title, description, complete, error} = mappedRequest

    if (error) {
        
        const missingDataResponse: IUpdateListItemResponseDTO = {message: Responses.MISSING_DATA}
        
        res.status(418).json(missingDataResponse)

    }

    try{

        await TodoListItem.updateOne(
            {
                _id: _id
            }, 
            {
                title: title, 
                description: description, 
                complete: complete
            }
        )

        const successUpdateListItemResponse: IUpdateListItemResponseDTO = {message: Responses.OK}

        res.json(successUpdateListItemResponse)

    }catch(err){
        const errorUpdateListItemResponse :IUpdateListItemResponseDTO = {message: Responses.DBERROR, error: err}

        res.json(errorUpdateListItemResponse)
    }
    
}


