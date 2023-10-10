import React from 'react'
import {useListsContext, useUIContext} from '@ui/contexts'
import {useDeleteListUi} from '../ui-interactions/use-delete-list-ui'

export const useDeleteListHandler = () => {
    const {state} = useListsContext()
    const {listsData} = state;
    const {_id} = listsData
    
    const {dispatch} = useUIContext()


    const {deleteListApiState, deleteListApiHandler} = useDeleteListUi({dispatch})
    
    const deleteListHandler = async () => {
        deleteListApiHandler(_id)
    }    



    return {deleteListHandler, deleteListApiState} as const;
}

