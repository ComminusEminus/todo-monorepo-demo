import React from 'react'
import {useAddNewTodoListItemForm} from './use-addnew-todo-list-item-form'
import {Input} from '@design/input'
import {Form} from '@design/forms'



export const AddNewTodoListItemForm = () => {
    const {onSubmit, register, handleSubmit} = useAddNewTodoListItemForm()
    return(
        <Form handleSubmit = {handleSubmit} onSubmit = {onSubmit}>
            <Input register = {register} name = {'title'} placeholder="Enter Title" /> 
            <Input register = {register} name = {'description'} placeholder="Enter Description"  /> 
        </Form>
    )
}