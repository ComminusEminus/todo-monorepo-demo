import React from 'react'
import {Container} from '@reactui/common'



export interface IDashboardContainer{
    children: JSX.Element[] | JSX.Element
}
export const DashboardContainer = ({children}: IDashboardContainer) => {
    return(
        <Container
            flexGrow = {'2'}
            justifyContent = {'flex-start'}
            alignItems = {'flex-start'}
            pt = {'5px'}
            pb = {'5px'}
            pl = {'5px'}
            pr = {'5px'}
            height = {'80vh'}
        >
            {children}
        </Container>
    )
}

