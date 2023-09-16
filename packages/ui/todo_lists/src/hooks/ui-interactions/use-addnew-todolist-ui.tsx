import {useUIContext} from '@ui/contexts'
import {UIACTIONS} from '@core/entities'
import {FormType} from '@core/entities'

export const useOpenNewListForm = () => {
    const {dispatch, state} = useUIContext()
    const {formType} = state
    
    const openNewListFormHandler = () => {
        if(formType === FormType.NEW_TODOLIST){
            return;
        }
        
        dispatch({type:UIACTIONS.SELECT_FORM_TYPE, payload: FormType.NEW_TODOLIST})
    }

    return {openNewListFormHandler, formType} as const
}
