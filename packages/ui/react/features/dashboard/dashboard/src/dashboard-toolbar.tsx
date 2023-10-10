import React from 'react'
import {Container} from '@reactui/common'
import {useTheme} from 'styled-components'

export interface IDashboardToolbar{
    children: JSX.Element[] | JSX.Element
}

export const DashboardToolBar = ({children}: IDashboardToolbar) => {
    const theme = useTheme()

    return(
        <Container
            width = {'100%'}
            flexGrow = {'0'}
            alignItems = {'center'}
            justifyContent = {'flex-end'}
            pt = {'5px'}
            pb = {'5px'}
            pl = {'5px'}
            pr = {'5px'}
            background = {theme.colors.neutral.surfaceLow}
        >
            {children}
        </Container>
    )
}



