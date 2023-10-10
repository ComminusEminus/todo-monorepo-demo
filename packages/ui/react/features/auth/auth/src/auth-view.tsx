import React from 'react'
import {useTheme} from 'styled-components'
import {LoginProvider} from '@reactui/contexts'
import {LoginContainer} from './login-container'

export const AuthView = () => {
    return(
        <LoginProvider> 
            <LoginContainer />
        </LoginProvider>
    )
}