import {useAddNewTodoListForm} from './index'
import {Form} from '@design/forms'
import {Input} from '@design/input'
import React from 'react'

export const AddNewTodoListForm = () => {
    const {onSubmit, register, handleSubmit} = useAddNewTodoListForm()
    return(
        <Form handleSubmit = {handleSubmit} onSubmit = {onSubmit}> 
            <Input register = {register} name = {'Title'} placeholder="Enter Title" /> 
        </Form>
    )
}