import {useUIContext} from '@ui/contexts';
import {FormType} from '@core/entities'

export const useAddNewTodoListItem = () => {
    const {setFormsState} = useUIContext();

    const addNewListItemHandler = () => {
        setFormsState?.(FormType.NEW_TODOLIST_ITEM)
    }

    
    return {addNewListItemHandler};
}
