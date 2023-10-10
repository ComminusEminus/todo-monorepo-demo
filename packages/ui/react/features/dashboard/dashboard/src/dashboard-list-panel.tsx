import React from 'react'
import {Container} from '@reactui/common'


export interface IDashboardListPanel{
    children: JSX.Element[] | JSX.Element
}



export const DashboardListPanel = ({children}: IDashboardListPanel) => {
    return(
        <Container
            flexGrow = {'1'}
            flexDirection = {'column'}
            justifyContent = {'flex-start'}
            alignItems = {'center'}
            width = {'100%'}
            height = {'100%'}
        >
            {children}
        </Container>
    )
}
