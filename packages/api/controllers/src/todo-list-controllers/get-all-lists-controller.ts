import { Request, Response, NextFunction } from 'express';
import {TodoListContainer} from '@api/models'
import {IGetAllListsResponseDTO, ITodoLists, Responses} from '@core/entities'

export const getAllTodoLists = async (req: Request, res: Response, next: NextFunction) => {

    let id;

    if(req.user){
        id = req.user._id
    }

    try{
        const allLists: ITodoLists | null = await TodoListContainer.findOne({userId: id}).populate('todoLists')
        
        const successGetAllTodoListResponse: IGetAllListsResponseDTO = {lists: allLists, message: Responses.OK, error: ''}
        console.log(successGetAllTodoListResponse)
        res.json(successGetAllTodoListResponse)

    }catch(err){

        const errorGetAllTodoListsResponse: IGetAllListsResponseDTO = {message: Responses.DBERROR, error: err}

        res.json(errorGetAllTodoListsResponse)

    }
}