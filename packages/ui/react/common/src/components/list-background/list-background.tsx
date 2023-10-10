import React from 'react'
import { useTheme } from 'styled-components'
import {Container } from '../../base/container/Container'

export interface IListItemBackground{
    selectedId?: string | null;
    currentId?: string;
    children?: JSX.Element | JSX.Element[] | string;
}

export const ListBackground = ({selectedId, currentId, children}:IListItemBackground) => {
    const theme = useTheme()
    return (
        <Container
            background={selectedId === currentId ? theme.colors.neutral.surface : theme.colors.neutral.surfaceLow}
            width={'100%'}
            maxHeight={'5vh'}
            justifyContent={'space-between'}
            alignItems={'center'}
            pl={'10%'}
        >
            {children}
        </Container>
    )
}