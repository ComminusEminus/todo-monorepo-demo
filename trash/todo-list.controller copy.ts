import { Request, Response, NextFunction } from 'express';
import {
    mapGetAllTodoListsRequest, 
    mapFindListByIdRequest, 
    mapNewTodoList, 
    mapTodoListDeleteRequest
} from '@api/services'
import {TodoList, TodoLists} from '@api/models'
import {
    IGetAllListsResponseDTO, 
    IGetListByIdResponseDTO, 
    ITodoList, 
    ITodoLists, 
    Responses, 
    IAddNewListResponseDTO, 
    IDeleteListResponseDTO 
} from '@core/entities'

export const addNewTodoList = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    
    const mappedRequest = mapNewTodoList(body);
    
    const {title, userId, error} = mappedRequest
    
    if (error) {
        
        const missingDataResponse: IAddNewListResponseDTO = {message: Responses.MISSING_DATA}
        
        res.status(418).send(missingDataResponse)

    }
    
    try{
        const newTodoList = await TodoList.create({title: title})

        await TodoLists.updateOne({userId: userId}, { $push: { todoLists: newTodoList._id } })

        const successAddNewListResponse :IAddNewListResponseDTO = {message: Responses.OK}

        res.status(200).send(successAddNewListResponse)
    }catch(err){
        const errorAddTodoListResponse: IAddNewListResponseDTO = {message: Responses.DBERROR, error: err}

        res.status(418).send(errorAddTodoListResponse)
    }
}


export const deleteTodoList = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    
    const mappedRequest = mapTodoListDeleteRequest(body);
    
    const {listId, userId, error} = mappedRequest

    if (error) {
        
        const missingDataResponse: IDeleteListResponseDTO = {message: Responses.MISSING_DATA}
        
        res.status(418).json(missingDataResponse)

    }

    try{
        TodoList.deleteOne({_id: listId})

        TodoLists.updateOne({userId: userId}, { $pull: { todoLists: listId } })

        const successDeleteListResponse : IDeleteListResponseDTO = {message: Responses.OK}

        res.json(successDeleteListResponse)
    }catch(err){
        res.json('err: ' + err)
    }
}


export const getTodoListById = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    
    const mappedRequest = mapFindListByIdRequest(body);
    
    const {listId, error} = mappedRequest

    if (error) {
        
        const missingDataResponse: IGetListByIdResponseDTO = {message: Responses.MISSING_DATA}
        
        res.status(418).json(missingDataResponse)

    }
    
    try{
        const requestedList:  ITodoList | null = await TodoList.findById(listId)

        const successGetTodoListItemResponse: IGetListByIdResponseDTO = {list: requestedList}

        res.json(successGetTodoListItemResponse)

    }catch(err){
        const errorDeleteTodoListResponse: IGetListByIdResponseDTO = {message: Responses.DBERROR, error: err}

        res.json(errorDeleteTodoListResponse)
    }
}

export const getAllTodoLists = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;

    const mappedRequest = mapGetAllTodoListsRequest(body)

    const {userId, error} = mappedRequest
    
    if (error) {
        
        const missingDataResponse: IGetAllListsResponseDTO = {message: Responses.MISSING_DATA}
        
        res.status(418).json(missingDataResponse)

    }

    try{
        const allLists: ITodoLists | null = await TodoLists.findOne({userId: userId})

        const successGetAllTodoListResponse: IGetAllListsResponseDTO = {lists: allLists}

        res.json(successGetAllTodoListResponse)

    }catch(err){

        const errorGetAllTodoListsResponse: IGetAllListsResponseDTO = {message: Responses.DBERROR, error: err}

        res.json(errorGetAllTodoListsResponse)

    }
}