import { Request, Response, NextFunction } from 'express';
import {mapNewTodoListItem, mapDeleteRequest, mapFindByIdRequest, mapUpdateListItemBody, mapUpdateListItem} from '@api/services'
import {TodoListItem, TodoList} from '@api/models'


export const addNewListItem = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const mappedRequest = mapNewTodoListItem(body);
    const {title, description, listId} = mappedRequest
    

    try{
        const newTodoListItem = await TodoListItem.create({title: title, description: description})
        await TodoList.updateOne({id: listId}, { $push: { listItems: newTodoListItem.id } })
        res.send('ok')
    }catch(err){
        res.send('err: ' + err)
    }
}

export const deleteListItem = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const mappedRequest = mapDeleteRequest(body);

    try{
        await TodoListItem.deleteOne({_id: mappedRequest.listItemId})
        await TodoList.updateOne({_id: mappedRequest.listId}, { $pull: { listItems: mappedRequest.listItemId } })
        res.send('ok')
    }catch(err){
        res.send('err: ' + err)
    }
}

export const getTodoListItemById = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const mappedRequest = mapFindByIdRequest(body);
    const requestedListItem = await TodoListItem.findById(mappedRequest.todoListItemId)

    try{
        res.send(requestedListItem)
    }catch(err){
        res.send('err: ' + err)
    }
}


export const updateListItem = async (req: Request, res: Response, next: NextFunction) => {
    const {body} = req;
    const mappedRequest = mapUpdateListItemBody(body);
    const update = mapUpdateListItem(mappedRequest.update)
    
    try{
        await TodoListItem.updateOne(
            {
                _id: mappedRequest.listItem
            }, 
            {
                title: update.title, 
                description: update.description, 
                complete: update.complete
            }
        )
        res.send('ok')
    }catch(err){
        res.send('err: ' + err)
    }
    
}


