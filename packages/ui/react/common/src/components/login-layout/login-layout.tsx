import React from 'react'
import {useTheme} from 'styled-components'
import {Container} from '../../base/container/Container'

interface ILoginLayout{
    children: JSX.Element | JSX.Element[];
}

export const LoginLayout = (props: ILoginLayout) => {
    const theme = useTheme()

    return(
        <Container 
            pt = {'sm'}
            pb = {'sm'}
            pl = {'sm'}
            pr = {'sm'}
            height = {'25%'}
            width = {'100%'}
            background = {theme.colors.neutral.surface}
            justifyContent = {'center'}
            alignItems = {'center'}
        >
            <Container 
                pt = {'sm'}
                pb = {'sm'}
                pl = {'sm'}
                pr = {'sm'}
                height = {'100%'}
                maxWidth = {'33vw'}
                background = {theme.colors.neutral.surface}
                flexDirection = {'column'}
                justifyContent = {'center'}
                alignItems = {'center'}
            >
                {props.children}
            </Container>   
        </Container>
    )
}