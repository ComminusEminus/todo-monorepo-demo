import React from 'react'
import {useSelectTodoListItem} from '@ui/todo-list'
import {Container} from '@design/container'
import {Text} from '@design/text'
import {useListItemContext} from '@ui/contexts'
import styled, {useTheme, css} from 'styled-components'

export const SelectListItemButton = () => {
    const {selectHandler} = useSelectTodoListItem()
    const {originalState} = useListItemContext()
    const theme = useTheme()
    if(originalState){
        return(
            <Container onClick = {selectHandler} flexDirection = {'column'}>
                <Text text = {originalState.title} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Barlow'}/>
            </Container>
        )
    }else{
        return(
            <Text text = {'...Loading'} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Barlow'}/>
        )
    }

}