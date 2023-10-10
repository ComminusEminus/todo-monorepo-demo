import { Request, Response, NextFunction } from 'express';
import {mapNewTodoList} from '@api/services'
import {TodoList, TodoListContainer} from '@api/models'
import {Responses, IAddNewListResponseDTO, } from '@core/entities'
import {addNewListApi} from '@core/di'
import mongoose from 'mongoose'

export const addNewTodoList = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    
    const mappedRequest = mapNewTodoList(body);
    
    const {title, error} = mappedRequest
    //!!!have service turn req.user.id into mongoose.ObjectId type
    const id = new mongoose.Types.ObjectId(req.user._id) 



    if (error) {
        
        const missingDataResponse: IAddNewListResponseDTO = {message: Responses.MISSING_DATA}
        
        res.status(418).send(missingDataResponse)

    }
    
    try{
        
        const newTodoList = await TodoList.create({title: title})
        
        console.log(req.user)
        
        const todoListContainerDoc = await TodoListContainer.updateOne({userId: req.user._id}, { $push: { todoLists: [newTodoList._id] } })
        
        console.log(todoListContainerDoc)

        
        addNewListApi.execute(title, id)


        const successAddNewListResponse :IAddNewListResponseDTO = {message: Responses.OK}

        res.status(200).send(successAddNewListResponse)
    }catch(err){
        const errorAddTodoListResponse: IAddNewListResponseDTO = {message: Responses.DBERROR, error: err}
        console.log(err)
        res.status(418).send(errorAddTodoListResponse)
    }
}
