import mongoose, { Schema, Model, Document } from 'mongoose';
import {ITodoListItem, CompleteState} from '@core/entities'

export type ITodoListItemInput = {
    title:ITodoListItem['title']
    description:ITodoListItem['description']
}

export type ITodoListItemReturn = {
    _id: ITodoListItem['_id']
    title: ITodoListItem['title']
    description: ITodoListItem['description']
    complete: ITodoListItem['complete']
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
            default: CompleteState.INCOMPLETE
        }
    }
)

export const ListItem: Model<ITodoListItem> = mongoose.model<ITodoListItem>('TodoListItem', todoListItemSchema);