import { Request, Response, NextFunction } from 'express';

import {mapDeleteRequest} from '@api/services'

import { Responses, IDeleteListItemResponseDTO } from '@core/entities'

import {TodoListItem, TodoList} from '@api/models'

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