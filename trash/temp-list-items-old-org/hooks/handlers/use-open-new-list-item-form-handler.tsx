import React from 'react'
import {useUIContext} from '@ui/contexts';
import {FormType, UIACTIONS} from '@core/entities'

export const useOpenAddNewListItemFormHandler = () => {
    const {dispatch, state} = useUIContext();
    const {formType} = state
    const openAddNewListItemFormHandler = () => {
        console.log('openAddNewListItemFormHandler executed')
        if(formType === FormType.NEW_TODOLIST_ITEM){
            dispatch({type: UIACTIONS.SELECT_FORM_TYPE, payload: null})    
        }else{
            dispatch({type: UIACTIONS.SELECT_FORM_TYPE, payload: FormType.NEW_TODOLIST_ITEM})
        }

    }

    return {openAddNewListItemFormHandler, state};
}
