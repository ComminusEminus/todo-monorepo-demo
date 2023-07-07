import React from 'react'
import {useDisplayListItemDetailsUI} from '@ui/list-item'
import {Container} from '@design/container'
import {Text} from '@design/text'
import {useTheme} from 'styled-components'


export const DisplayListItemDetails = () => {
    const {displayItem} = useDisplayListItemDetailsUI()
    const theme = useTheme()
    if(!displayItem){
        return(
            <Text text = {'No Item Selected'} color = {theme.colors.neutral.onSurface} fontSize = {'xs'} fontFamily = {'Barlow'}/>
        )
    }else{
        return(
            <Container
                flexDirection = {'column'}
                background = {theme.colors.neutral.surface}
                height = {'25%'}
                width = {'25%'}
                elevation = {'sm'}
            >
                <Text text = {displayItem.title} color = {theme.colors.neutral.onSurface} fontSize = {'xs'} fontFamily = {'Barlow'}/>
                <Text text = {displayItem.description} color = {theme.colors.neutral.onSurface} fontSize = {'xs'} fontFamily = {'Barlow'}/>
                <Text text = {displayItem.complete} color = {theme.colors.neutral.onSurface} fontSize = {'xs'} fontFamily = {'Barlow'}/>
            </Container>
        )
    }
}