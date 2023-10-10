import React, {useEffect} from 'react'
import { useAllListsContext } from '@reactui/contexts'
import { useGetAllTodoListsApi } from '@reactui/http'



export const ListsViewHook = () => {
    const { getAllTodoListsApiHandler, getAllTodoListsApiState } = useGetAllTodoListsApi()
    const { returnValue } = getAllTodoListsApiState
    const { lists, message } = returnValue

    const {state, dispatch} = useAllListsContext()
    const {update} = state

    useEffect(() => {
        getAllTodoListsApiHandler()
    }, [update])

    return {getAllTodoListsApiState}
}