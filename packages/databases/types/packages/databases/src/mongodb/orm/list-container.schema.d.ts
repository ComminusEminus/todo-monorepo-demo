import mongoose, { Model, Document, Types } from 'mongoose';
import { ITodoListContainer } from '@core/entities';
export interface IListContainerSchema extends Document {
    userId: string;
    todoLists: Types.ObjectId[];
}
export type IListContainerInput = {
    userId: IListContainerSchema['userId'];
};
export declare const todoListContainerSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId: string;
    todoLists: Types.ObjectId[];
}, mongoose.Document<unknown, {}, {
    userId: string;
    todoLists: Types.ObjectId[];
}> & {
    userId: string;
    todoLists: Types.ObjectId[];
} & {
    _id: Types.ObjectId;
}>;
export declare const ListContainer: Model<ITodoListContainer>;
