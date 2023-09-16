import { useRef, useEffect } from 'react'
import {useDeleteTodoListApi} from '../api/use-delete-todolist'
import {ITodoList, IMappedUserProfile, VisibilityState} from '@core/entities'

export interface IUserDeleteTodoListImplementation{
    listId?: string,
    visibilityState?: string | null
}

export const useDeleteTodoListImplementation = ({listId, visibilityState}: IUserDeleteTodoListImplementation) => {
    

    const {deleteListApiHandler, deleteListApiState} = useDeleteTodoListApi()
    const {returnValue} = deleteListApiState
    const {message} = returnValue
    const isMounted = useRef<true | false>(false);
    
    useEffect(() => {
        
        
        if(isMounted.current){
            if(listId && visibilityState === VisibilityState.INVISIBLE){
                console.log('deleteTodolistImplementation executed')
                deleteListApiHandler(listId)    
            }
            
        }else{
            isMounted.current = true 
        }
    }, [visibilityState])

    return{deleteListApiState, deleteListApiHandler}
}
