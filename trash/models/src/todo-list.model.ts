import mongoose, { Schema, Model, Document, Types } from 'mongoose';
import {ITodoList} from '@core/entities'

export type ITodoListInput = {
    title: ITodoList['title'];
}

export const todoListSchema = new Schema(
    {
        title:{
            type: Schema.Types.String,
            required: true,
        },
        listItems:[
            {
                type: Schema.Types.ObjectId,
                ref: 'TodoListItem'
            }
        ]
    }
)

export const TodoList: Model<ITodoList> = mongoose.model<ITodoList>('TodoList', todoListSchema);