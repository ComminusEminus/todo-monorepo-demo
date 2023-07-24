import {useRef, useEffect} from 'react'
import {useCompleteTodoListItem} from './use-complete-todolist-items'
import {ListItemStatus} from '@core/entities'
import {useListItemContext} from '@ui/contexts'
import {ITodoListItem} from '@core/entities'

export const useCompleteTodoListItemUI = () => {
    const {apiHandler} = useCompleteTodoListItem()
    const {setCompleteState, completeState, originalState} = useListItemContext()
    
    const isMounted = useRef<true | false>(false);
    
    
    const completeHandler = () => {
        if(originalState){
            if(originalState.complete === ListItemStatus.COMPLETED){
                setCompleteState?.(ListItemStatus.INCOMPLETE)
            }else if(originalState.complete === ListItemStatus.INCOMPLETE){
                setCompleteState?.(ListItemStatus.COMPLETED)
            }
        }
    }

    useEffect(() => {
        if(isMounted.current && originalState && completeState){
            
            apiHandler(originalState, completeState)
        }else{
            isMounted.current = true 
        }
    }, [completeState])
    

    return {completeState, completeHandler} 
}
