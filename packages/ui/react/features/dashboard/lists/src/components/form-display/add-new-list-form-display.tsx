import React, {useEffect, useState} from 'react'
import {useTheme} from 'styled-components'
import {FormType} from '@core/entities'
import {FormDisplayContainer} from '@reactui/common'
import {useUIContext} from '@reactui/contexts'

import {AddNewTodoListFormPresentation} from '../add-new-list-form/presentation/addnew-todo-list-form-presentation'




export const AddNewListFormDisplay = () => {
    const {state} = useUIContext()
    const {formType} = state

    const theme = useTheme()

    if(formType === FormType.NEW_TODOLIST){
        return(
            <>
                <FormDisplayContainer title = {'Add New Todo List'} formComponent = {<AddNewTodoListFormPresentation />} />
            </>
        )
    }else{
        return(
            <>
            </>
        )
    }
}