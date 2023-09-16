import React from 'react'
import { useDisplayListItemDetailsUI } from '../hooks/use-display-listitem-details-ui'
import { Container } from '@design/container'
import { Text } from '@design/text'
import { useTheme } from 'styled-components'
import {ITodoListItem} from '@core/entities'

export interface IDisplayListItemDetails{
    displayItem: ITodoListItem
}

export const DisplayListItemDetails = ({displayItem}: IDisplayListItemDetails) => {
    const theme = useTheme()
    console.log(displayItem)
    return (
        <Container
            flexDirection={'column'}
            alignItems = {'flex-start'}
            justifyContent = {'flex-start'}
            background={theme.colors.neutral.surface}
            height={'100%'}
            width={'100%'}
            elevation={'sm'}
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