import React from 'react'
import {useTheme} from 'styled-components'
import {LoginUserContainer, LoginUserPresentation} from '@ui/user'

export const LoginView = () => {
    const theme = useTheme()
    return(
        <LoginUserContainer>
            <LoginUserPresentation />
        </LoginUserContainer>
    )
}