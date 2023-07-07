import React from 'react'
import {useAddNewTodoListItemForm} from './use-addnew-todo-list-item-form'
import {Input, Form} from '@design/monorepo'



export const AddNewTodoListItemForm = () => {
    const {onSubmit, register, handleSubmit} = useAddNewTodoListItemForm()
    return(
        <Form handleSubmit = {handleSubmit} onSubmit = {onSubmit}>
            <Input {...register("title")} placeholder="Enter Title" /> 
            <Input {...register("description")} placeholder="Enter Description"  /> 
        </Form>
    )
}