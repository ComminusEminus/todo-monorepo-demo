import { Request, Response, NextFunction } from 'express';
import {mapNewTodoList} from '@api/services'
import {TodoList, TodoListContainer} from '@api/models'
import {Responses, IAddNewListResponseDTO, } from '@core/entities'


export const addNewTodoList = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    
    const mappedRequest = mapNewTodoList(body);
    
    const {title, error} = mappedRequest
    
    



    if (error) {
        
        const missingDataResponse: IAddNewListResponseDTO = {message: Responses.MISSING_DATA}
        
        res.status(418).send(missingDataResponse)

    }
    
    try{
        
        const newTodoList = await TodoList.create({title: title})
        
        console.log(req.user)
        
        const todoListContainerDoc = await TodoListContainer.updateOne({userId: req.user._id}, { $push: { todoLists: [newTodoList._id] } })
        
        console.log(todoListContainerDoc)

        const successAddNewListResponse :IAddNewListResponseDTO = {message: Responses.OK}

        res.status(200).send(successAddNewListResponse)
    }catch(err){
        const errorAddTodoListResponse: IAddNewListResponseDTO = {message: Responses.DBERROR, error: err}
        console.log(err)
        res.status(418).send(errorAddTodoListResponse)
    }
}
