import React, {useEffect, useState} from 'react'
import {useTheme} from 'styled-components'
import {FormType} from '@core/entities'
import {FormDisplayContainer} from '@reactui/common'
import {useUIContext} from '@reactui/contexts'
import {AddNewTodoListItemFormPresentation} from '../add-new-list-item-form/presentation/addnew-todo-list-item-form-presentation'


export const AddNewListItemFormDisplay = () => {
    const {state} = useUIContext()
    const {formType} = state

    const theme = useTheme()

    if(formType === FormType.NEW_TODOLIST_ITEM){
        return(
            <>
                <FormDisplayContainer title = {'Add New Todo List Item'} formComponent = {<AddNewTodoListItemFormPresentation />} />
            </>
        )
    }else{
        return(
            <>
            </>
        )
    }
}