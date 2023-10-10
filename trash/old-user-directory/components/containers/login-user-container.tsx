import React from 'react'
import {Container} from '@reactui/common'
import {useTheme} from 'styled-components'

interface ILoginUserContainer{
    children: JSX.Element | JSX.Element[];
}

export const LoginUserContainer = (props: ILoginUserContainer) => {
    const theme = useTheme()

    return(
        <Container 
            pt = {'sm'}
            pb = {'sm'}
            pl = {'sm'}
            pr = {'sm'}
            height = {'25%'}
            width = {'25%'}
            background = {theme.colors.neutral.surface}
            flexDirection = {'column'}
            justifyContent = {'center'}
            alignItems = {'center'}
        >
           {props.children}
        </Container>
    )
}