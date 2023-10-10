import {ITodoList} from '../todo-list/entities'

export interface ITodoListContainer{
    userId: string;
    todoLists?: ITodoList[];
}

