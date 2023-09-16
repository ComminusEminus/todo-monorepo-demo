import React from 'react'
import { IAddNewTodoListItemFormResponse, AddNewTodoListItemFormInputs} from '@core/entities'
import {useAddNewTodoListItemUI} from '../ui-interactions/use-addnew-todo-list-item-ui'
import { useUIContext } from '@ui/contexts';
import { useForm, Resolver } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
}).required();

export const useAddNewTodoListItemFormHook = () => {
    const { state } = useUIContext()
    const {selectedTodoListId} = state
    
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
