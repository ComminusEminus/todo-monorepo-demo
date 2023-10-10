import { useUIContext } from '@ui/contexts'
import { ITodoListItem } from '@core/entities'
import { mapToListDescription } from '../../services/todolist-ui-services'
import { getTodoListById} from '@core/di'
import {IGetListByIdResponseDTO} from '@core/entities'
import { useEffect, useState } from 'react'

export interface IMappedListResponse{
    message?: string;
    error?: string; 
    list?: ITodoListItem[] | [];
}


export const useGetTodoListById = () => {
    const [returnValue, setReturnValue] = useState<IMappedListResponse>({ message: undefined, error: undefined, list: undefined })
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)


    const getTodoListApiHandler = async (selectedTodoListId: string) => {
        if (!selectedTodoListId) {
            throw new Error('getTodoListAPiHandler is missing selectedTodoListId')
        }

        setLoading(true)

        try {
            console.log(selectedTodoListId)
            const response = await getTodoListById.execute(selectedTodoListId)
            console.log('raw response')
            console.log(response)
            setLoading(false)
            const mappedResponse = mapToListDescription(response)
            console.log(mappedResponse)
            const {message, error, list} = mappedResponse
            setReturnValue((returnValue) => ({ ...returnValue, message: message, list: list }))
        } catch (err: any) {
            const errMessage = `${err}`
            console.log(errMessage)
            setLoading(false)
            setError(true)
            setReturnValue((returnValue) => ({ ...returnValue, error: errMessage }))
        }
    }

    const todoListApiState = { loading, error, returnValue }

    return { getTodoListApiHandler, todoListApiState }
}