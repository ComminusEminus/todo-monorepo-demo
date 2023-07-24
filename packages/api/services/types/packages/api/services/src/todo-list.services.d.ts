export interface IMapNewTodoList {
    listData: INewTodoList;
    userId: string;
}
interface INewTodoList {
    title: string;
}
export declare const mapNewTodoList: (body: IMapNewTodoList) => {
    title: string;
    userId: string;
};
interface IMapTodoListDeleteRequest {
    listId: string;
    userId: string;
}
export declare const mapTodoListDeleteRequest: (body: IMapTodoListDeleteRequest) => {
    listId: string;
    userId: string;
};
interface IFindListByIdRequest {
    listId: string;
}
export declare const mapFindListByIdRequest: (body: IFindListByIdRequest) => {
    listId: string;
};
interface IGetAllTodoLists {
    userId: string;
}
export declare const mapGetAllTodoListsRequest: (body: IGetAllTodoLists) => {
    userId: string;
};
export {};
