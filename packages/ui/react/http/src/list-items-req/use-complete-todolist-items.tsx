import React, { useState } from 'react'
import { updateListItem } from '@ui/config'
import { ITodoListItem, CompleteState, IUpdateListItemResponseDTO } from '@core/entities'


export const useCompleteTodoListItem = () => {
    const [loading, setLoading] = useState<boolean>(false)
    
    const [returnValue, setReturnValue] = useState<IUpdateListItemResponseDTO>({ message: undefined, error: undefined })

    const updateTodoListItemCompleteStateApi = async (listItemData: ITodoListItem, newCompleteState: CompleteState) => {
        setLoading(true)
        const updatedListItem = Object.assign(listItemData, { complete: newCompleteState })
        try {
            const response = await updateListItem.execute(updatedListItem);
            const { data } = response
            setLoading(false)
            const { message, error }: IUpdateListItemResponseDTO = data
            setReturnValue((returnValue:IUpdateListItemResponseDTO) => { 
                return {
                    ...returnValue, 
                    message: message 
                }
            })


        } catch (err) {
            setLoading(false)
            setReturnValue((returnValue: IUpdateListItemResponseDTO) => { 
                return {
                    ...returnValue, 
                    error: err 
                }
            })


        }
    }

    const completeApiState = {
        loading, 
        returnValue
    }

    return { updateTodoListItemCompleteStateApi, completeApiState, setReturnValue };
} 