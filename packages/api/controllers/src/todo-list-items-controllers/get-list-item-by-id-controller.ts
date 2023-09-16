import { Request, Response, NextFunction } from 'express';

import {mapFindByIdRequest} from '@api/services'

import { ITodoListItem, Responses, IGetListItemByIdResponseDTO } from '@core/entities'

import {TodoListItem} from '@api/models'

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