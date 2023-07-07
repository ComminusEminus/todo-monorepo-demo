import {useDeleteTodoListItem} from './use-delete-todolist-items'
import {useRef, useEffect} from 'react'
import {useListItemContext} from '@todo/ui-context'
import {Visibility} from '@todo/constants'


export const useDeleteTodoListItemUI = () => {
    const {visibilityState, setVisibilityState, originalState} = useListItemContext()
    const {apiHandler} = useDeleteTodoListItem()
    const isMounted = useRef<false | true>(false);
    

    const visibilityHandler = () => {
        setVisibilityState?.(Visibility.INVISIBLE)
    }

    useEffect(() => {
        if(isMounted.current && originalState){
            apiHandler(originalState.id)
        }else{
            isMounted.current = true 
        }
    }, [visibilityState])

    return {visibilityState, visibilityHandler} as const 
}