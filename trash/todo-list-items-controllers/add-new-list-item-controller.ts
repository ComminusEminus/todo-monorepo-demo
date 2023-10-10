import { Request, Response, NextFunction } from 'express';

import {mapNewTodoListItem} from '@api/services'

import { ITodoListItem, Responses, IAddNewListItemResponseDTO } from '@core/entities'

import {TodoListItem, TodoList} from '@api/models'

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