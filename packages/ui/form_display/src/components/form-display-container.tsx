import React from 'react'
import {Container} from '@design/container'
import {useFormDisplay} from '../hooks/use-form-display'
import {FormType} from '@core/entities'
import {AddNewTodoListItemFormPresentation} from '@ui/todo-list'
import {AddNewTodoListFormPresentation} from '@ui/todo-lists'
import {useTheme} from 'styled-components'
import { Text } from '@design/text'

export const FormDisplayContainer = () => {
    const {formType} = useFormDisplay()
    const theme = useTheme()

    if(formType === FormType.NEW_TODOLIST_ITEM){
        return(
            <Container
                background = {theme.colors.neutral.surface}
                height = {'100%'}
                width = {'100%'}
                elevation = {'md'}
                pt = {'10px'}
                pb = {'10px'}
                pr = {'10px'}
                pl = {'10px'}
                flexDirection = {'column'}
                justifyContent = {'center'}
                alignItems = {'flex-start'}
            >
                <Text text = {'Add New Todo List'} color = {'theme.colors.neutral.onSurface'} fontSize={theme.space.md} fontFamily={'Albert_Sans'} />
                <AddNewTodoListItemFormPresentation />
            </Container>
        )
    }else if(formType === FormType.NEW_TODOLIST){
        return(
            <Container
                background = {theme.colors.neutral.surface}
                height = {'100%'}
                width = {'100%'}
                elevation = {'md'}
                pt = {'10px'}
                pb = {'10px'}
                pr = {'10px'}
                pl = {'10px'}
                flexDirection = {'column'}
                justifyContent = {'center'}
                alignItems = {'flex-start'}
            >
                <Text text = {'Add New List Item'} color = {'theme.colors.neutral.onSurface'} fontSize={theme.space.md} fontFamily={'Albert_Sans'} />
                <AddNewTodoListFormPresentation />
            </Container>
        )
    }else{
        return(
            <Container 
                background = {theme.colors.neutral.surface}
                height = {'25%'}
                width = {'25%'}
            />
        )
    }
}