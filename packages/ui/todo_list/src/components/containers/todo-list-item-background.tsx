import React from 'react'
import {Container} from '@design/container'
import {useListItemContext, useUIContext} from '@ui/contexts'
import {useTheme} from 'styled-components'
import {Text} from '@design/text'
interface ITodoListItemBackground{
    children?: JSX.Element | JSX.Element[] | string;
}

export const TodoListItemBackground = (props: ITodoListItemBackground) => {
    const theme = useTheme()
    
    const {state} = useListItemContext()
    const {listItemData} = state 
    
    const {state: uiState} = useUIContext()
    const {selectedTodoListItemId} = uiState

    if(listItemData){
        return(
            <Container 
                background = {selectedTodoListItemId === listItemData._id ? theme.colors.neutral.surface : theme.colors.neutral.surfaceLow}
                width = {'100%'}
                height = {'fit-content'}
                justifyContent = {'space-between'}
                alignItems = {'center'}
                pl = {'10%'}
            >
                {props.children}
            </Container>
        )
    }else{
        return(
            <Container 
                flexDirection = { 'column'} 
                background = { theme.colors.neutral.surface } 
                width = {'100%'}
                height = {'fit-content'}
                justifyContent = {'flex-start'}
                alignItems = {'center'}
                pl = {'10%'}
            >
                <Text text={"Loading Lists Data"} color={theme.colors.neutral.onBackground} fontSize={'xs'} fontFamily={'Albert_Sans'} />
            </Container >
        )
    }
}