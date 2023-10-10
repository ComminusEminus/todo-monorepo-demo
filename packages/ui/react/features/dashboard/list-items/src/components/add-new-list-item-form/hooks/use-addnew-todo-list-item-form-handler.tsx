import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, Resolver } from "react-hook-form";
import { IAddNewTodoListItemFormResponse, AddNewTodoListItemFormInputs } from '@core/entities'
import { useUIContext } from '@reactui/contexts';
import { useAddNewTodoListItemUI } from './use-addnew-todo-list-item-ui'

const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
}).required();

export const useAddNewTodoListItemFormHandler = () => {
    const { state } = useUIContext()
    const { selectedTodoListId } = state

    const { addNewTodoListItemApiHandler, addNewTodoListApiState } = useAddNewTodoListItemUI()

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddNewTodoListItemFormInputs>({ resolver: yupResolver(schema) });

    const onSubmit = handleSubmit(async (data: IAddNewTodoListItemFormResponse) => {
        if (!selectedTodoListId) {
            throw new Error('Use add new todo list item form is missing data')
        }
        
        addNewTodoListItemApiHandler(data, selectedTodoListId)
    });

    return { onSubmit, register, handleSubmit, errors, addNewTodoListApiState }
}
