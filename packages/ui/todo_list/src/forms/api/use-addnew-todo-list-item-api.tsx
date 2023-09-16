import React, {useState} from 'react'
import { IAddNewTodoListItemFormResponse, IAddNewListItemResponseDTO } from '@core/entities'
import { addNewListItem } from '@core/di'
import {mapAddNewTodoListItemResponse} from '../../services/todolist-ui-services'

export const useAddNewTodoListItemApi = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<any>(null)
    const [returnValue, setReturnValue] = useState<IAddNewListItemResponseDTO>({message: undefined, error: undefined})

    const addNewTodoListItemApiHandler = async (data: IAddNewTodoListItemFormResponse, selectedTodoListId: string) => {
        
        setLoading(true)
        try {
            const response = await addNewListItem.execute(selectedTodoListId, data)
            setLoading(false)
            const mappedResponse = mapAddNewTodoListItemResponse(response)
            const {message, error} = mappedResponse 
            setReturnValue({...mappedResponse})
        } catch(err) {
            setLoading(false)
            setErrorMessage(err)
            throw new Error('Use add new todo list item form had the following error: ' + err)
        }
    }
    const addNewTodoListApiState = {
        returnValue,
        errorMessage,
        loading
    }
    return {
        addNewTodoListItemApiHandler,
        addNewTodoListApiState
    }
}
