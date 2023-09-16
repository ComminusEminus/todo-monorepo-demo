import { Request, Response, NextFunction } from 'express';
import {
    mapFindListByIdRequest, 
    mapNewTodoList, 
    mapTodoListDeleteRequest
} from '@api/services'
import {TodoList, TodoListContainer} from '@api/models'
import {
    IGetAllListsResponseDTO, 
    IGetListByIdResponseDTO, 
    ITodoList, 
    ITodoLists, 
    Responses, 
    IAddNewListResponseDTO, 
    IDeleteListResponseDTO 
} from '@core/entities'

//Verify after compilation of middlewares package that req.user knows that it has an _id prop

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