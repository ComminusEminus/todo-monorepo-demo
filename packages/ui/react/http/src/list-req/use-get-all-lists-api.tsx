import React, {useState} from 'react'
import {getAllTodoLists} from '@ui/config'
import {  ITodoList, Responses, IHttpResponse} from '@core/entities'
import {mapGetAllListsResponse} from './mappers/map-get-all-lists-res'

export interface IGetAllTodoListsApiReturnValue{
    message?: Responses,
    error?: any,
    lists?: ITodoList[]
}

export const useGetAllTodoListsApi = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState<IGetAllTodoListsApiReturnValue>({ message: undefined, error: undefined, lists: undefined })
    
    const getAllTodoListsApiHandler = async () => {
        setLoading(true)
        
        try{
            const response: IHttpResponse = await getAllTodoLists.execute()
            
            setLoading(false)
            
            const {lists, message, error}= mapGetAllListsResponse(response)
           
            setReturnValue((returnValue) => ({ ...returnValue, message: message, lists: lists }))
        }catch(err){
            setLoading(false)
            setReturnValue((returnValue) => ({ ...returnValue, error: err }))
        }
    }
    
    const getAllTodoListsApiState = {returnValue, loading}
    
    return {getAllTodoListsApiHandler, getAllTodoListsApiState} 
}