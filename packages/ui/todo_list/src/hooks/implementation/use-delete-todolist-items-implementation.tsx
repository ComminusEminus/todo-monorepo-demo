import { useRef, useEffect } from 'react'
import { useDeleteTodoListItemUI } from '../ui-interactions/use-delete-todolist-items-ui'
import { useDeleteTodoListItem } from '../api/use-delete-todolist-items'
import { useUIContext } from '@ui/contexts'
import {VisibilityState, ITodoListItem, IMappedUserProfile} from '@core/entities'

export interface IUseDeleteTodoListItemsImplementation{
    listItemData?: ITodoListItem | null,
    selectedTodoListId?: string | null,
//    userProfile?: IMappedUserProfile | null,
    visibilityState?: VisibilityState,

}

export const useDeleteTodoListItemsImplementation = ({listItemData, selectedTodoListId, visibilityState}: IUseDeleteTodoListItemsImplementation) => {

    const {deleteListItemApiHandler, deleteApiState} = useDeleteTodoListItem()
    
    const isMounted = useRef<false | true>(false);
    
    useEffect(() => {
        if(isMounted.current){
            if(listItemData && selectedTodoListId && visibilityState === VisibilityState.INVISIBLE){
                
                deleteListItemApiHandler(listItemData._id, selectedTodoListId)
            }else{
                throw new Error("Userprofile listItemData or selected todolist id is missing data");
            }
            
        }else{
            isMounted.current = true 
        }
    }, [visibilityState])
    return {
        deleteApiState
    }
}