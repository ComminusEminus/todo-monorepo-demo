import React from 'react'
import {Container} from '@reactui/common'

export interface IDashboardCenterPanel{
    children: JSX.Element[] | JSX.Element
}


export const DashboardCenterPanel = ({children}: IDashboardCenterPanel) => {
    return(
        <Container
            flexGrow = {'1'}
            flexDirection = {'column'}
            justifyContent = {'center'}
            alignItems = {'center'}
            width = {'100%'}
            height = {'100%'}
            pr = {'10px'}
            pl = {'10px'}
            pt = {'10px'}
            pb = {'10px'}
        >
            {children}
        </Container>
    )
}


