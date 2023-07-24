import React from 'react'
import {useTheme} from 'styled-components'
import {LoginUserPresentation} from '../forms/index'
import {LoginUserContainer} from '../components/login-user-container'

export const LoginView = () => {
    const theme = useTheme()
    return(
        <LoginUserContainer>
            <LoginUserPresentation />
        </LoginUserContainer>
    )
}