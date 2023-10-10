import { useRef, useEffect } from 'react'
import {useDeleteTodoListApi} from '@reactui/http'
import { UIACTIONS} from '@core/entities'

export interface IUserDeleteTodoListImplementation{
    dispatch: any
}

export const useDeleteListUi = ({dispatch}: IUserDeleteTodoListImplementation) => {
    

    const {deleteListApiHandler, deleteListApiState} = useDeleteTodoListApi()
    const {returnValue} = deleteListApiState
    const {message} = returnValue
    const isMounted = useRef<true | false>(false);
    
    useEffect(() => {
        if(message === 'ok'){
            dispatch({type: UIACTIONS.UPDATE_TODO_LIST, payload: undefined})
        }
        
       
    }, [message])

    return{deleteListApiState, deleteListApiHandler}
}
