import React, {useState} from 'react'
import { IAddNewTodoListItemFormResponse, IAddNewListItemResponseDTO } from '@core/entities'
import { addNewListItem } from '@ui/config'
import {mapAddNewListItem} from './mappers/map-add-new-list-item'

export const useAddNewTodoListItemApi = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState<IAddNewListItemResponseDTO>({message: undefined, error: undefined})

    const addNewTodoListItemApiHandler = async (formResponse: IAddNewTodoListItemFormResponse, selectedTodoListId: string) => {
        
        setLoading(true)
        try {
            const response = await addNewListItem.execute(selectedTodoListId, formResponse)
            setLoading(false)
            const {message, error} = mapAddNewListItem(response)
            setReturnValue((returnValue: IAddNewListItemResponseDTO) => { 
                return {
                    ...returnValue, 
                    message: message 
                }
            })
        } catch(err) {
            setLoading(false)
            setReturnValue((returnValue: IAddNewListItemResponseDTO) => { 
                return {
                    ...returnValue, 
                    error: err 
                }
            })
        }
    }
    const addNewTodoListApiState = {
        returnValue,
        loading
    }
    return {
        addNewTodoListItemApiHandler,
        addNewTodoListApiState
    }
}
