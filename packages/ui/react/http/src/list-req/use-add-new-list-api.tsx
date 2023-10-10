import React, {useState} from 'react'
import {IAddNewListResponseDTO, IAddNewTodoListFormResponse} from '@core/entities'
import {addNewTodoList} from '@ui/config'
import {mapAddNewList} from './mappers/map-add-new-list'

export const useAddNewTodoListApi = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState<IAddNewListResponseDTO>({message: undefined, error: undefined})

    const addNewTodoListApiHandler = async ({title}: IAddNewTodoListFormResponse) => {
        setLoading(true)
        try{
            setLoading(false)
            const response =  await addNewTodoList.execute({title})
 
            const {message, error} = mapAddNewList(response)

            setReturnValue((returnValue: IAddNewListResponseDTO) => { 
                return {
                    ...returnValue, 
                    message: message 
                }
            })
        }catch(err){
            setLoading(false)
            setReturnValue((returnValue: IAddNewListResponseDTO) => { 
                return {
                    ...returnValue, 
                    error: err
                }
            })
        }
    }

    const addNewListApiState = {
        returnValue, 
        loading
    }
    
    return{
        addNewTodoListApiHandler,
        addNewListApiState
    }
}