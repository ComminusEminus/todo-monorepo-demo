import mongoose, { Model, Types } from 'mongoose';
import { ITodoList } from '@core/entities';
export type ITodoListInput = {
    title: ITodoList['title'];
};
export declare const todoListSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    listItems: Types.ObjectId[];
    _id?: Types.ObjectId | undefined;
}, mongoose.Document<unknown, {}, {
    title: string;
    listItems: Types.ObjectId[];
    _id?: Types.ObjectId | undefined;
}> & {
    title: string;
    listItems: Types.ObjectId[];
    _id?: Types.ObjectId | undefined;
} & Required<{
    _id: Types.ObjectId;
}>>;
export declare const TodoList: Model<ITodoList>;
