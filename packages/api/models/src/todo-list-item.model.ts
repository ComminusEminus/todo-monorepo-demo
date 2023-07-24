import mongoose, { Schema, Model, Document } from 'mongoose';
import {ITodoListItem, ListItemStatus} from '@core/entities'

//export interface ITodoListItem extends Document{}

export type ITodoListItemInput = {
    title:ITodoListItem['title']
    description:ITodoListItem['description']
}


export const todoListItemSchema = new Schema<ITodoListItem>(
    {
        title: {
            type: Schema.Types.String,
            required: true,
        },
        description: {
            type: Schema.Types.String,
            required: true,
        },
        complete: {
            type: Schema.Types.String,
            required: true,
            default: ListItemStatus.INCOMPLETE
        }
    }
)

export const TodoListItem: Model<ITodoListItem> = mongoose.model<ITodoListItem>('TodoListItem', todoListItemSchema);