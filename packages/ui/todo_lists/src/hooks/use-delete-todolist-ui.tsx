import {useRef, useEffect} from 'react'
import {useDeleteTodoListHandler} from '@ui/todo-lists'
import {Visibility} from '@core/entites'
import {useListsContext} from '@ui/contexts'

export const useDeleteTodoListUI = () => {
    const {visibilityState, setVisibilityState, originalState} = useListsContext()
    const {apiHandler} = useDeleteTodoListHandler()
    const isMounted = useRef<false | true>(false)

    const visibilityHandler = () => {
        setVisibilityState?.(Visibility.INVISIBLE)
    }

    useEffect(() => {
        if(!originalState){
            return;
        }
        if(isMounted.current){
            apiHandler(originalState.id)
        }else{
            isMounted.current = true 
        }
    }, [visibilityState])


    return {visibilityState, visibilityHandler} as const;
}