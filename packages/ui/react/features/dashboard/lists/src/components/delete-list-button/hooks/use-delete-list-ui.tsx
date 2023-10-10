import { useEffect } from 'react'

import { useDeleteTodoListApi } from '@reactui/http'
import { ALL_LISTS_ACTIONS } from '@reactui/contexts'

export interface IUserDeleteTodoListImplementation {
    dispatch: any
}

export const useDeleteListUi = ({ dispatch }: IUserDeleteTodoListImplementation) => {
    const { deleteListApiHandler, deleteListApiState } = useDeleteTodoListApi()
    const { returnValue } = deleteListApiState
    const { message } = returnValue

    useEffect(() => {
        if (message === 'ok') {
            dispatch({ type: ALL_LISTS_ACTIONS.UPDATE_ALL_LISTS, payload: undefined })
        }


    }, [message])

    return { deleteListApiState, deleteListApiHandler }
}
