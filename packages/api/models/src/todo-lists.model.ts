import mongoose, { Schema, Model, Document, Types } from 'mongoose';

export interface ITodoListsDocument extends Document {
    userId: string;
    todoLists: Types.ObjectId[];
}

export type ITodoListsInput = {
    userId: ITodoListsDocument['userId']
}

export const todoListsSchema = new Schema(
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

export const TodoLists: Model<ITodoListsDocument> = mongoose.model<ITodoListsDocument>('TodoLists', todoListsSchema);

