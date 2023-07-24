import React from 'react'
import {Container} from '@design/container'
import {useFormDisplay} from '../hooks/use-form-display'
import {FormType} from '@core/entities'
import {AddNewTodoListItemForm} from '@ui/todo-list'
import {AddNewTodoListForm} from '@ui/todo-lists'
import {useTheme} from 'styled-components'

export const FormDisplayContainer = () => {
    const {formsState} = useFormDisplay()
    const theme = useTheme()

    if(formsState === FormType.NEW_TODOLIST){
        return(
            <Container
                background = {theme.colors.neutral.surface}
                height = {'25%'}
                width = {'25%'}
                elevation = {'sm'}
            >
                <AddNewTodoListItemForm />
            </Container>
        )
    }else if(formsState === FormType.NEW_TODOLIST_ITEM){
        return(
            <Container
                background = {theme.colors.neutral.surface}
                height = {'25%'}
                width = {'25%'}
                elevation = {'sm'}
            >
                <AddNewTodoListForm />
            </Container>
        )
    }else{
        return(
            <Container 
                background = {theme.colors.neutral.surface}
                height = {'25%'}
                width = {'25%'}
                elevation = {'sm'}
            />
        )
    }
}