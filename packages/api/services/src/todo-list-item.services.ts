

interface INewTodoListItemBody{

    title: string;
    description:string;
    listId: string


}


export const mapNewTodoListItem  = (body: INewTodoListItemBody) => {
    
    return{
        title: body.title,
        description: body.description,
        listId: body.listId
    }
}

interface IMapDeleteRequest{
    listId: string;
    listItemId: string;
}

export const mapDeleteRequest = (body: IMapDeleteRequest) => {
    return{
        listId: body.listId,
        listItemId: body.listItemId,
    }
}

interface IFindByIdRequest{
    todoListItemId: string;
}

export const mapFindByIdRequest = (body: IFindByIdRequest) =>{
    return{
        todoListItemId: body.todoListItemId,
    }
}

interface IUpdateListItemBody{
    listItem: string;
    update: IMapUpdateListItem;
    userId: string;
}

export const mapUpdateListItemBody = (body: IUpdateListItemBody) => {
    return{
        listItem: body.listItem,
        update: body.update,
        userId: body.userId
    }
}

export interface IMapUpdateListItem{
    _id: string;
    title: string;
    description: string;
    complete: string;
}

export const mapUpdateListItem = (update: IMapUpdateListItem) => {
    return{
        _id: update._id,
        title: update.title,
        description: update.description,
        complete: update.complete
    }
}
