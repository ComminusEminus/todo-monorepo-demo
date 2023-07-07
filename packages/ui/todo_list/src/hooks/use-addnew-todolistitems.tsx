import {useUIContext} from '@todo/ui-context';
import {FormType} from '@todo/constants'

export const useAddNewTodoListItem = () => {
    const {setFormsState} = useUIContext();

    const addNewListItemHandler = () => {
        setFormsState?.(FormType.NEW_TODOLIST_ITEM)
    }

    
    return {addNewListItemHandler} as const;
}
