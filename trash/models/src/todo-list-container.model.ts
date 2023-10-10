import mongoose, { Schema, Model, Document, Types } from 'mongoose';

//removed 'extends Document' from interface

export interface ITodoListContainerDocument extends Document{
    userId: string;
    todoLists: Types.ObjectId[];
}

export type ITodoListContainerInput = {
    userId: ITodoListContainerDocument['userId']
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

export const TodoListContainer: Model<ITodoListContainerDocument> = mongoose.model<ITodoListContainerDocument>('TodoListContainer', todoListContainerSchema);

