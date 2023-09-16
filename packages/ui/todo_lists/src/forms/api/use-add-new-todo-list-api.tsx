import React, {useState} from 'react'
import {IAddNewListResponseDTO, IAddNewTodoListFormResponse} from '@core/entities'
import {addNewTodoList} from '@core/di'
import {mapAddNewTodoListResponse} from '../../services/todolists-ui-services'

export const useAddNewTodoListApi = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<any>(null)
    const [returnValue, setReturnValue] = useState<IAddNewListResponseDTO>({message: undefined, error: undefined})

    const addNewTodoListApiHandler = async ({title}: IAddNewTodoListFormResponse) => {
        console.log('executing api handler')
        setLoading(true)
        
        try{
            setLoading(false)
            const response =  await addNewTodoList.execute({title})    
            const mappedResponse = mapAddNewTodoListResponse(response)
            setReturnValue({...mappedResponse})
        }catch(err){
            setLoading(false)
            setErrorMessage(err)
            throw new Error('Use add new todo list item form had the following error: ' + err)
        }
    }

    const addNewListApiState = {
        returnValue, 
        errorMessage,
        loading
    }
    
    return{
        addNewTodoListApiHandler,
        addNewListApiState
    }
}