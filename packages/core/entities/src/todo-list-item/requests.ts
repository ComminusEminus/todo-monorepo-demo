export interface IAddNewTodoListItemRequestDTO{
    title: string;
    description:string;
    listId: string;
}
export interface IDeleteListItemRequestDTO{
    listId: string;
    listItemId: string;
}
export interface IFindListItemByIdRequestDTO{
    listItemId: string;
}
export interface IUpdateListItemRequestDTO{
    _id: string;
    title: string;
    description: string;
    complete: string;
}