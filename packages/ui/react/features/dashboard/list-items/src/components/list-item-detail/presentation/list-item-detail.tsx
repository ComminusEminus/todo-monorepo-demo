import React from 'react'
import { useTheme } from 'styled-components'
import {ITodoListItem} from '@core/entities'
import { Text, Container } from '@reactui/common'

export interface IDisplayListItemDetails{
    displayItem: ITodoListItem
}

export const ListItemDetail = ({displayItem}: IDisplayListItemDetails) => {
    const theme = useTheme()
    
    return (
        <Container
            flexDirection={'column'}
            alignItems = {'flex-start'}
            justifyContent = {'flex-start'}
            background={theme.colors.neutral.surface}
            height={'100%'}
            width={'100%'}
            
            pr = {'10px'}
            pl = {'10px'}
            pt = {'15px'}
            pb = {'15px'}
        >
            <Text text={displayItem.title} color={theme.colors.neutral.onSurface} fontSize={theme.space.md} fontFamily={'Albert_Sans'} />
            <Text text={displayItem.description} color={theme.colors.neutral.onSurface} fontSize={theme.space.sm} fontFamily={'Barlow'} />
            <Text text={displayItem.complete} color={theme.colors.neutral.onSurface} fontSize={theme.space.sm} fontFamily={'Barlow'} />
        </Container>
    )
}