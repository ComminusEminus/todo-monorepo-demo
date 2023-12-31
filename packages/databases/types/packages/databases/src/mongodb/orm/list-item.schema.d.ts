import mongoose, { Model } from 'mongoose';
import { ITodoListItem } from '@core/entities';
export type ITodoListItemInput = {
    title: ITodoListItem['title'];
    description: ITodoListItem['description'];
};
export type ITodoListItemReturn = {
    _id: ITodoListItem['_id'];
    title: ITodoListItem['title'];
    description: ITodoListItem['description'];
    complete: ITodoListItem['complete'];
};
export declare const todoListItemSchema: mongoose.Schema<ITodoListItem, mongoose.Model<ITodoListItem, any, any, any, mongoose.Document<unknown, any, ITodoListItem> & ITodoListItem & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ITodoListItem, mongoose.Document<unknown, {}, ITodoListItem> & ITodoListItem & Required<{
    _id: string;
}>>;
export declare const ListItem: Model<ITodoListItem>;
