import mongoose, { Schema, Model, Document, Types } from 'mongoose';
import {ITodoListContainer} from '@core/entities'

export interface IListContainerSchema extends Document {
    userId: string;
    todoLists: Types.ObjectId[];
}

export type IListContainerInput = {
    userId: IListContainerSchema['userId']
}

export const todoListContainerSchema = new Schema(
    {
        userId: {
            type: Schema.Types.String,
            required: true,
        },
        todoLists:[ 
            {
                type: Schema.Types.ObjectId,
                ref: 'TodoList'
            }
        ]
    }
)

export const ListContainer: Model<ITodoListContainer> = mongoose.model<ITodoListContainer>('TodoListContainer', todoListContainerSchema);

