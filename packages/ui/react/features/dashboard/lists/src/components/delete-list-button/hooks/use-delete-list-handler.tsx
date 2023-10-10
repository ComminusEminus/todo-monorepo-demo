import React from 'react'
import { useListsContext, useAllListsContext } from '@reactui/contexts'
import { useDeleteListUi } from './use-delete-list-ui'

export const useDeleteListHandler = () => {
    const { state } = useListsContext()
    const { listsData } = state;

    

    const { dispatch } = useAllListsContext()


    const { deleteListApiState, deleteListApiHandler } = useDeleteListUi({ dispatch })

    const deleteListHandler = async () => {
        if(!listsData){
            return 
        }
        deleteListApiHandler(listsData._id)
    }



    return { deleteListHandler, deleteListApiState } as const;
}

