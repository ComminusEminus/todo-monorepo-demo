import mongoose from 'mongoose';
import { IAddNewTodoListItemRequestDTO, IDeleteListItemRequestDTO, IFindListItemByIdRequestDTO, IUpdateListItemRequestDTO } from '@core/entities';
export declare const mapNewTodoListItem: (body: IAddNewTodoListItemRequestDTO) => {
    title: string;
    description: string;
    listId: string;
    error: boolean;
};
export declare const mapDeleteRequest: (body: IDeleteListItemRequestDTO) => {
    listId: mongoose.Types.ObjectId;
    listItemId: mongoose.Types.ObjectId;
    error: boolean;
};
export declare const mapFindByIdRequest: (body: IFindListItemByIdRequestDTO) => {
    id: mongoose.Types.ObjectId;
    error: boolean;
};
export declare const mapUpdateListItem: (body: IUpdateListItemRequestDTO) => {
    _id: mongoose.Types.ObjectId;
    title: string;
    description: string;
    complete: string;
    error: boolean;
};
