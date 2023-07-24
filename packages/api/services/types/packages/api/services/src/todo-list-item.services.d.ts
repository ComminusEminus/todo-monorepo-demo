interface INewTodoListItemBody {
    title: string;
    description: string;
    listId: string;
}
export declare const mapNewTodoListItem: (body: INewTodoListItemBody) => {
    title: string;
    description: string;
    listId: string;
};
interface IMapDeleteRequest {
    listId: string;
    listItemId: string;
}
export declare const mapDeleteRequest: (body: IMapDeleteRequest) => {
    listId: string;
    listItemId: string;
};
interface IFindByIdRequest {
    todoListItemId: string;
}
export declare const mapFindByIdRequest: (body: IFindByIdRequest) => {
    todoListItemId: string;
};
interface IUpdateListItemBody {
    listItem: string;
    update: IMapUpdateListItem;
    userId: string;
}
export declare const mapUpdateListItemBody: (body: IUpdateListItemBody) => {
    listItem: string;
    update: IMapUpdateListItem;
    userId: string;
};
export interface IMapUpdateListItem {
    _id: string;
    title: string;
    description: string;
    complete: string;
}
export declare const mapUpdateListItem: (update: IMapUpdateListItem) => {
    _id: string;
    title: string;
    description: string;
    complete: string;
};
export {};
