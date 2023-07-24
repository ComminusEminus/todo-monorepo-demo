export interface IMapNewTodoList{
    listData: INewTodoList;
    userId: string;
}

interface INewTodoList{
    title: string;
}
export const mapNewTodoList = (body: IMapNewTodoList) => {
    const {listData, userId} = body;
    return{
        title: listData.title,
        userId: userId
    }
}

interface IMapTodoListDeleteRequest{
    listId: string;
    userId: string;
}

export const mapTodoListDeleteRequest = (body: IMapTodoListDeleteRequest) => {
    return{
        listId: body.listId,
        userId: body.userId
    }
}

interface IFindListByIdRequest{
    listId: string;
}
export const mapFindListByIdRequest = (body: IFindListByIdRequest) =>{
    return{
        listId: body.listId,
    }
}

interface IGetAllTodoLists{
    userId: string;
}

export const mapGetAllTodoListsRequest = (body: IGetAllTodoLists) => {
    return{
        userId: body.userId
    }
}