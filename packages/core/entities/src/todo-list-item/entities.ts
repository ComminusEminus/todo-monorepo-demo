import {CompleteState} from './enum'

export interface ITodoListItem{
    _id: string;
    title: string;
    description: string;
    complete: CompleteState;
}