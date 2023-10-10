import React from 'react'
import { Form, Input, Fieldset } from '@reactui/common'
import { useAddNewTodoListItemFormHandler } from '../hooks/use-addnew-todo-list-item-form-handler'

export const AddNewTodoListItemFormPresentation = () => {
    const { onSubmit, register, handleSubmit, errors, addNewTodoListApiState } = useAddNewTodoListItemFormHandler()
    return (
        <Form onSubmit={onSubmit} justifyButton={'flex-end'} alignButton={'center'}>
            <Fieldset>
                <Input id={'add-new-list-item-title'} register={register} name={'title'} placeholder="Enter Title" />
                <Input id={'add-new-list-item-description'} register={register} name={'description'} placeholder="Enter Description" />
            </Fieldset>
        </Form>
    )
}
