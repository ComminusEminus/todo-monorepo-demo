import mongoose, { Model, Types } from 'mongoose';
export interface ITodoListContainerDocument {
    userId: string;
    todoLists: Types.ObjectId[];
}
export type ITodoListContainerInput = {
    userId: ITodoListContainerDocument['userId'];
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
export declare const TodoListContainer: Model<ITodoListContainerDocument>;
