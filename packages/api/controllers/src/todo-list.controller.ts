import { Request, Response, NextFunction } from 'express';
import {mapGetAllTodoListsRequest, mapFindListByIdRequest, mapNewTodoList, mapTodoListDeleteRequest} from '@api/services'
import {TodoList, TodoLists} from '@api/models'


export const addNewTodoList = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const mappedRequest = mapNewTodoList(body);
    const newTodoList = new TodoList({title: mappedRequest.title})
    
    try{
        await newTodoList.save()
        await TodoLists.updateOne({userId: mappedRequest.userId}, { $push: { todoLists: newTodoList._id } })
        res.send('ok')
    }catch(err){
        res.send('err: ' + err)
    }
}

export const deleteTodoList = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const mappedRequest = mapTodoListDeleteRequest(body);

    try{
        TodoList.deleteOne({_id: mappedRequest.listId})
        TodoLists.updateOne({userId: mappedRequest.userId}, { $pull: { todoLists: mappedRequest.listId } })
        res.send('ok')
    }catch(err){
        res.send('err: ' + err)
    }
}

export const getTodoListById = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const mappedRequest = mapFindListByIdRequest(body);
    const requestedListItem = await TodoList.findById(mappedRequest.listId)
    
    try{
        res.send(requestedListItem)
    }catch(err){
        res.send('err: ' + err)
    }
}

export const getAllTodoLists = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const mappedRequest = mapGetAllTodoListsRequest(body)
    const allLists = await TodoLists.find({userId: mappedRequest.userId}).populate('todoLists')

    try{
        res.send(allLists)
    }catch(err){
        res.send('err: ' + err)
    }
}