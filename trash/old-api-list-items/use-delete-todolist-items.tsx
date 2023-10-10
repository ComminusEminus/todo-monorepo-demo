import React, { useState } from 'react'
import { useUIContext, useListItemContext } from '@ui/contexts';
import { deleteListItem } from '@core/di'
import { IUpdateListItemResponseDTO, UIACTIONS } from '@core/entities'

export const useDeleteTodoListItem = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState<IUpdateListItemResponseDTO>({ message: undefined, error: undefined })
    const [error, setError] = useState<boolean>(false)

    const deleteListItemApiHandler = async (listItem_id: string, list_id: string) => {
        setLoading(true)
        try {
            const response = await deleteListItem.execute(listItem_id, list_id);
            setLoading(false)
            const { data } = response
            const { error, message }: IUpdateListItemResponseDTO = data
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

    const deleteApiState = { loading, error, returnValue }
    return { deleteListItemApiHandler, deleteApiState }
}