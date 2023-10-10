import mongoose from 'mongoose';
import { IAddNewListRequestDTO, IDeleteListRequestDTO, IFindListByIdRequestDTO } from '@core/entities';
export declare const mapNewTodoList: (body: IAddNewListRequestDTO) => {
    title: string;
    error: boolean;
};
export declare const mapTodoListDeleteRequest: (body: IDeleteListRequestDTO) => {
    listId: mongoose.Types.ObjectId;
    error: boolean;
};
export declare const mapFindListByIdRequest: (body: IFindListByIdRequestDTO) => {
    listId: mongoose.Types.ObjectId;
    error: boolean;
};
