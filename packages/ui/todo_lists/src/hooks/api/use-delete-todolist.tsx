import React, {useState} from 'react'
import {deleteTodoList} from '@core/di'
import {IUpdateListItemResponseDTO} from '@core/entities'

export const useDeleteTodoListApi = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<any>(null)
    const [returnValue, setReturnValue] = useState<IUpdateListItemResponseDTO>({message: undefined, error: undefined})

    const deleteListApiHandler = async (list_Id: string) => {
        setLoading(true)
       
        try{
            const response = await deleteTodoList.execute(list_Id);
            setLoading(false)
            const {data} = response
            const {error, message} = data
            console.log('deleteListApiHandler executed')
            setReturnValue((prevState) => {
                return {
                    ...prevState,    
                    message: message
                }
            })
        }catch(err){
            //set up error boundary
            setLoading(false)
            setErrorMessage(err)
            setReturnValue((prevState) => {
                return {
                    ...prevState,    
                    error: err
                }
            })
            console.log('delete list handler has experianced an error: ' + err)
        }
    }

    const deleteListApiState = {loading, errorMessage, returnValue}

    return {deleteListApiHandler, deleteListApiState} as const 
}
