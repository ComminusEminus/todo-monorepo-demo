import {useUIContext} from '@ui/contexts'
import {FormType} from '@core/entities'

export const useAddNewTodoListUI = () => {
    const {formsState, setFormsState} = useUIContext()
    
    const addNewTodoListHandler = () => {
        if(formsState === FormType.NEW_TODOLIST){
            return;
        }
        setFormsState?.(FormType.NEW_TODOLIST);
    }

    return {addNewTodoListHandler} as const
}
