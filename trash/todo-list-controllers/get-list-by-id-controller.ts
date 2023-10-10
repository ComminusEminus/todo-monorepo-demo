import { Request, Response, NextFunction } from 'express';
import {mapFindListByIdRequest} from '@api/services'
import {TodoList} from '@api/models'
import {IGetListByIdResponseDTO, ITodoList, Responses} from '@core/entities'

export const getTodoListById = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    
    const mappedRequest = mapFindListByIdRequest(body);
    
    const {listId, error} = mappedRequest

    if (error) {
        
        const missingDataResponse: IGetListByIdResponseDTO = {message: Responses.MISSING_DATA}
        
        res.status(418).json(missingDataResponse)

    }
    
    try{
        const requestedList:  ITodoList | null = await TodoList.findById(listId).populate('listItems')

        const successGetTodoListItemResponse: IGetListByIdResponseDTO = {list: requestedList, message: Responses.OK, error: ''}

        res.json(successGetTodoListItemResponse)

    }catch(err){
        const errorDeleteTodoListResponse: IGetListByIdResponseDTO = {message: Responses.DBERROR, error: err}

        res.json(errorDeleteTodoListResponse)
    }
}