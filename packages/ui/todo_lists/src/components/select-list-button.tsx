import React from 'react'
import {useSelectTodoList} from '@ui/todo-lists'
import {useTheme} from 'styled-components'
import {Text} from '@design/text'
import {Container} from '@design/container'
import {useListsContext} from '@ui/contexts'

export const SelectListButton = () => {
    const {selectTodoListHandler} = useSelectTodoList()
    const {originalState} = useListsContext()
    const theme = useTheme()
    if(originalState){
        return(
            <Container onClick = {selectTodoListHandler} flexDirection = {'column'}>
                <Text text = {originalState.title} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Barlow'}/>
            </Container>
        )
    }else{
        return(
            <Text text = {'...Loading'} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Barlow'}/>
        )
    }
}