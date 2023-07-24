import {ITodoList} from './todolist'

export interface ITodoLists{
    userId: string;
    todoLists?: ITodoList[];
}

export interface IRequestListsResponse{
    data: ITodoList[];
}

export interface ITodoListAsListDescription{
    id: string;
    title: string;
}

