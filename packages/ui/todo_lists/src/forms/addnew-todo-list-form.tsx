import {useAddNewTodoListForm} from '@ui/todo-lists'
import {Form} from '@design/form'
import {Input} from '@design/input'
import React from 'react'

export const AddNewTodoListForm = () => {
    const {onSubmit, register, handleSubmit} = useAddNewTodoListForm()
    return(
        <Form handleSubmit = {handleSubmit} onSubmit = {onSubmit}> 
            <Input {...register("title")} placeholder="Enter Title" /> 
        </Form>
    )
}