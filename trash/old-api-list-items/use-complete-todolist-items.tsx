import React, { useState } from 'react'
import { useUIContext } from '@ui/contexts';
import { updateListItem } from '@core/di'
import { ITodoListItem, UIACTIONS } from '@core/entities'
import { IUser, CompleteState, IUpdateListItemResponseDTO, Responses } from '@core/entities'


export const useCompleteTodoListItem = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState<IUpdateListItemResponseDTO>({ message: undefined, error: undefined })
    const [error, setError] = useState<boolean>(false)

    const updateTodoListItemCompleteStateApi = async (listItemData: ITodoListItem, newCompleteState: CompleteState) => {
        setLoading(true)
        const updatedListItem = Object.assign(listItemData, { complete: newCompleteState })
        try {
            const response = await updateListItem.execute(updatedListItem);
            const { data } = response
            console.log(data)
            setLoading(false)
            const { message, error }: IUpdateListItemResponseDTO = data
            setReturnValue((returnValue) => { 
                return {
                    ...returnValue, 
                    message: message 
                }
            })


        } catch (err) {
            const errMessage = `${err}`
            setLoading(false)
            setError(true)
            setReturnValue((returnValue) => { 
                return {
                    ...returnValue, 
                    error: err 
                }
            })


        }
    }

    const completeApiState = {
        loading, returnValue, error
    }

    return { updateTodoListItemCompleteStateApi, completeApiState, setReturnValue };
} 