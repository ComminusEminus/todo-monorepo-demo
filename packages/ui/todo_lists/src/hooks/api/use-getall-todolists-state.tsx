import {getAllTodoLists} from '@core/di'
import {mapToListsDescription} from '../../services/todolists-ui-services'
import { ITodoList, IGetAllTodoListsResponse, IHttpResponse} from '@core/entities'
import {useUIContext} from '@ui/contexts'
import React, {useState, useEffect} from 'react'


export const useGetAllTodoListsApi = () => {
    const [allTodoLists, setAllTodoLists] = useState<ITodoList[] | []>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<any>(null)

    const getAllTodoListsApiHandler = async () => {
        setLoading(true)
        
        try{
            const response: IHttpResponse = await getAllTodoLists.execute()
            setLoading(false)
            console.log(response)
            const mappedResponse: ITodoList[] | [] = mapToListsDescription(response)
            setAllTodoLists((allTodoLists) => ([...mappedResponse]))
        }catch(err){
            //set up error boundary
            setLoading(false)
            setErrorMessage(err)
            console.log('an error occured getting all todoLists: ' + err)
        }
    }
    
    const getAllTodoListsApiState = {allTodoLists, loading, errorMessage}

    return {getAllTodoListsApiHandler, getAllTodoListsApiState} as const 
}