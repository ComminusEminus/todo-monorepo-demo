import React from 'react'
import { FormType } from '@core/entities'
import {UIACTIONS} from '@reactui/contexts'
import { useUIContext } from '@reactui/contexts';

export const useOpenAddNewListFormHandler = () => {
    const { dispatch, state } = useUIContext();
    const { formType } = state

    const openAddNewListFormHandler = () => {
        if (formType === FormType.NEW_TODOLIST) {
            dispatch({ type: UIACTIONS.SELECT_FORM_TYPE, payload: null })
        } else {
            dispatch({ type: UIACTIONS.SELECT_FORM_TYPE, payload: FormType.NEW_TODOLIST })
        }

    }

    return { openAddNewListFormHandler, state };
}
