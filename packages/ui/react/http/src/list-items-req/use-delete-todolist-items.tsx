import React, { useState } from 'react'
import { deleteListItem } from '@ui/config'
import { IUpdateListItemResponseDTO } from '@core/entities'

export const useDeleteTodoListItem = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState<IUpdateListItemResponseDTO>({ message: undefined, error: undefined })
    

    const deleteListItemApiHandler = async (listItem_id: string, list_id: string) => {
        setLoading(true)
        try {
            const response = await deleteListItem.execute(listItem_id, list_id);
            setLoading(false)
            const { data } = response
            const { error, message }: IUpdateListItemResponseDTO = data
            setReturnValue((returnValue: IUpdateListItemResponseDTO) => { 
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

    const deleteApiState = { loading, returnValue }
    
    return { deleteListItemApiHandler, deleteApiState }
}