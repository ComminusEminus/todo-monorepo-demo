import React from 'react'
import { Container } from '@design/container'
import { useListsContext, useUIContext } from '@ui/contexts'
import {Text} from '@design/text'
import styled, { useTheme, css } from 'styled-components'

interface ITodoListBackground {
    children?: JSX.Element | JSX.Element[] | string;
    listId?: string;
}

export const ListsBackground = (props: ITodoListBackground) => {
    const { dispatch, state } = useUIContext()
    const { selectedTodoListId } = state

    const { dispatch: listsDispatch, state: listsState } = useListsContext()
    const { listsData } = listsState
    
    const theme = useTheme()

    if (!listsData) {
        return (
            <Container 
                flexDirection = { 'column'} 
                background = { theme.colors.neutral.surface } 
                width = {'100%'}
                height = {'100%'}
            >
                <Text text={"Loading Lists Data"} color={theme.colors.neutral.onBackground} fontSize={'xs'} fontFamily={'Albert_Sans'} />
            </Container >
       )
    }else{
        return (
            <Container 
                background={selectedTodoListId === listsData._id ? theme.colors.neutral.surface : theme.colors.neutral.surfaceLow}
                width = {'100%'}
                height = {'fit-content'}
                justifyContent = {'space-between'}
                alignItems = {'center'}
                pl = {'10%'}
            >
                {props.children}
            </Container>
        )
    }

}