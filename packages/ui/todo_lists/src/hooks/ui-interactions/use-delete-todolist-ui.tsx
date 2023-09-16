import {useRef, useEffect} from 'react'
import {useDeleteTodoListApi} from '../api/use-delete-todolist'
import {useListsContext, useUIContext} from '@ui/contexts'
import {VisibilityState, UIACTIONS, LISTS_ACTIONS} from '@core/entities'
import {useDeleteTodoListImplementation} from '../implementation/use-delete-todolist-implementation'


export const useDeleteTodoListUI = () => {
    const {state, dispatch} = useListsContext()
    const {listsData, visibilityState} = state;

    const {dispatch: uiDispatch} = useUIContext()

    let listId
    if(listsData){
        listId = listsData._id
    }
    
    const {deleteListApiState, deleteListApiHandler} = useDeleteTodoListImplementation ({listId, visibilityState})
    
    const visibilityHandler = async () => {
        console.log('visibility handler executed')    
        dispatch({type: LISTS_ACTIONS.UPDATE_VISIBILITY_STATE, payload: ''})
        uiDispatch({type: UIACTIONS.UPDATE_TODO_LIST, payload: undefined})
    }    



    return {visibilityState, visibilityHandler, deleteListApiState} as const;
}

