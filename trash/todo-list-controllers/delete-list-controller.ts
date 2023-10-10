import { Request, Response, NextFunction } from 'express';
import {mapTodoListDeleteRequest} from '@api/services'
import {TodoList, TodoListContainer} from '@api/models'
import { Responses, IDeleteListResponseDTO } from '@core/entities'

export const deleteTodoList = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    
    const mappedRequest = mapTodoListDeleteRequest(body);
    
    const {listId, error} = mappedRequest

    let id;

    if(req.user){
        id = req.user._id
    }

    if (error) {
        
        const missingDataResponse: IDeleteListResponseDTO = {message: Responses.MISSING_DATA}
        
        res.status(418).json(missingDataResponse)

    }

    try{
        console.log('deleteTodoList executed')
        await TodoList.deleteOne({_id: listId})

        await TodoListContainer.updateOne({userId: id}, { $pull: { todoLists: listId } })

        const successDeleteListResponse : IDeleteListResponseDTO = {message: Responses.OK}

        res.json(successDeleteListResponse)

    }catch(err){

        res.json('err: ' + err)
        
    }
}