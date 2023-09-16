import { Request, Response, NextFunction } from 'express';

import {mapUpdateListItem} from '@api/services'

import {Responses, IUpdateListItemResponseDTO } from '@core/entities'

import {TodoListItem} from '@api/models'


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
