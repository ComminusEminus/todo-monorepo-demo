import React from 'react'
import {useSelectTodoListItem} from '../hooks/index'
import {Container} from '@design/container'
import {Text} from '@design/text'

import styled, {useTheme, css} from 'styled-components'

export const SelectListItemButton = () => {
    const {selectHandler, originalState} = useSelectTodoListItem()

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