import React from 'react'
import {Container} from '@design/container'
import {LoginView} from '@ui/user'
import styled, {useTheme, css} from 'styled-components'

export const LoginPage = () => {
    const theme = useTheme()
    return(
        <Container  
            background = {theme.colors.primary.base}
            width = {'100%'}
            height = {'100%'}
        >
            <LoginView />
        </Container>

    )
}