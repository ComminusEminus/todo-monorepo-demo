import React from 'react'
import { Form, Input, Fieldset } from '@reactui/common'
import { useAddNewTodoListFormHook } from '../hooks/use-addnew-todo-list-form-hook'

export const AddNewTodoListFormPresentation = () => {
    const { onSubmit, register, errors, addNewListApiState } = useAddNewTodoListFormHook()
    return (
        <Form onSubmit={onSubmit} justifyButton={'flex-end'} alignButton={'center'}>
            <Fieldset>
                <Input id={'new-list-title'} register={register} name={'title'} placeholder="Enter Title" />
            </Fieldset>
        </Form>
    )
}