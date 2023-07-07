import * as React from 'react'
import {useUIContext} from '@todo/ui-context';
import {deleteListItem} from '@todo/di'


export const useDeleteTodoListItem = () => {
    const {setUpdate, userProfile, viewTodoList} = useUIContext()
    
    const apiHandler = async (listItemId: string) => {
        if(!userProfile || !viewTodoList){
            return;
        }
        try{
            const response = await deleteListItem.execute(listItemId, viewTodoList);
            setUpdate?.(`${listItemId} todo list item has been deleted`)
        }catch{
            //set up error boundary
            console.log('An error occured deleting list item')
        }
    }
    return {apiHandler} as const 
}