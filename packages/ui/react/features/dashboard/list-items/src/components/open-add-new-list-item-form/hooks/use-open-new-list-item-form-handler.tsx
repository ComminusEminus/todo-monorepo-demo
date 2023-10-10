import React from 'react'
import { FormType } from '@core/entities'
import { useSelectedListContext, useUIContext,  UIACTIONS } from '@reactui/contexts';


export const useOpenAddNewListItemFormHandler = () => {
    const { dispatch, state } = useUIContext();
    const { formType } = state

    const { state: selectedListState } = useSelectedListContext()
    const {selectedList} = selectedListState
    
    const openAddNewListItemFormHandler = () => {
        console.log('openAddNewListItemFormHandler executed')
        if (formType === FormType.NEW_TODOLIST_ITEM) {
            dispatch({ type: UIACTIONS.SELECT_FORM_TYPE, payload: null })
        } else {
            dispatch({ type: UIACTIONS.SELECT_FORM_TYPE, payload: FormType.NEW_TODOLIST_ITEM })
        }

    }

    return { openAddNewListItemFormHandler, state, selectedList };
}
