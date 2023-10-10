import {useAddNewTodoListFormHook} from '../form-hooks/use-addnew-todo-list-form-hook'
import {Form, Input, Fieldset} from '@reactui/common'
import React from 'react'

export const AddNewTodoListFormPresentation = () => {
    const {onSubmit, register, errors, addNewListApiState} = useAddNewTodoListFormHook()
    return(
        <Form onSubmit = {onSubmit} justifyButton = {'flex-end'} alignButton = {'center'}> 
            <Fieldset>
                <Input id = {'new-list-title'} register = {register} name = {'title'} placeholder="Enter Title" /> 
            </Fieldset>
        </Form>
    )
}