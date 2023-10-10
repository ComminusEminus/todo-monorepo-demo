import React, {useState} from 'react'
import {deleteTodoList} from '@ui/config'
import {IUpdateListItemResponseDTO} from '@core/entities'

export const useDeleteTodoListApi = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState<IUpdateListItemResponseDTO>({message: undefined, error: undefined})

    const deleteListApiHandler = async (list_Id: string) => {
        setLoading(true)
       
        try{
            const response = await deleteTodoList.execute(list_Id);
            setLoading(false)
            const {data} = response
            const {error, message} = data
            setReturnValue((prevState: IUpdateListItemResponseDTO) => {
                return {
                    ...prevState,    
                    message: message
                }
            })
        }catch(err){

            setLoading(false)
            setReturnValue((prevState: IUpdateListItemResponseDTO) => {
                return {
                    ...prevState,    
                    error: err
                }
            })

        }
    }

    const deleteListApiState = {loading, returnValue}

    return {deleteListApiHandler, deleteListApiState} as const 
}
