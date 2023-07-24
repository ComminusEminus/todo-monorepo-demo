import mongoose, { Model, Document, Types } from 'mongoose';
export interface ITodoListsDocument extends Document {
    userId: string;
    todoLists: Types.ObjectId[];
}
export type ITodoListsInput = {
    userId: ITodoListsDocument['userId'];
};
export declare const todoListsSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
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
export declare const TodoLists: Model<ITodoListsDocument>;
