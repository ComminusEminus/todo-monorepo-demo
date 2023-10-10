import React, {useEffect} from 'react'
import {useUIContext} from '@reactui/contexts';
import {useGetListItemById} from '@reactui/http'

export const useGetListItemByIdUi = () => {
    const {state, dispatch} = useUIContext()
    const {selectedTodoListItemId} = state
   
    const {getListItemByIdApiHandler, getListItemApiState} = useGetListItemById()
    

    useEffect(() => {
        if(selectedTodoListItemId){
            getListItemByIdApiHandler(getListItemByIdApiHandler)
        }
    }, [selectedTodoListItemId])

    return {
        getListItemApiState
    }
}

