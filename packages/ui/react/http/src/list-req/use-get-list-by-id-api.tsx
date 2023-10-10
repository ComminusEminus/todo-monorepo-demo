import { getTodoListById} from '@ui/config'
import {Responses, ITodoListItem} from '@core/entities'
import { useState } from 'react'
import {mapGetListByIdResponse} from './mappers/map-get-list-by-id-res'

export interface IGetListByIdReturnValue{
    message?: Responses,
    error?: any,
    list?: ITodoListItem[]
}

export const useGetTodoListById = () => {
    const [returnValue, setReturnValue] = useState<IGetListByIdReturnValue>({ message: undefined, error: undefined, list: undefined })
    const [loading, setLoading] = useState<boolean>(false)


    const getTodoListApiHandler = async (selectedTodoListId: string) => {
        if (!selectedTodoListId) {
            throw new Error('getTodoListAPiHandler is missing selectedTodoListId')
        }

        setLoading(true)

        try {
            const response = await getTodoListById.execute(selectedTodoListId)
            setLoading(false)
            const {message, error, list} = mapGetListByIdResponse(response)

            setReturnValue((returnValue) => ({ ...returnValue, message: message, list: list }))
        } catch (err) {
            setLoading(false)
            setReturnValue((returnValue) => ({ ...returnValue, error: err }))
        }
    }

    const todoListApiState = { loading, returnValue }

    return { getTodoListApiHandler, todoListApiState }
}