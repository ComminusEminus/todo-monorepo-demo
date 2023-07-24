import {useDeleteTodoListItem} from './use-delete-todolist-items'
import {useRef, useEffect} from 'react'
import {useListItemContext} from '@ui/contexts'
import {Visibility} from '@core/entities'


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

    return {visibilityState, visibilityHandler}  
}