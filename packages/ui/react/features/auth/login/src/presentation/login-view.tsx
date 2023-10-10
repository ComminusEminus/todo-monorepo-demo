import React from 'react'
import {useTheme} from 'styled-components'
import {LoginLayout} from '@reactui/common'
import {LoginViewTitleContainer} from './login-view-title-container'
import {CreateAccountOptionContainer} from './create-account-option-container'
import {LoginUserFormPresentation} from '../components/login-form/presentation/login-user-form-presentation'

export const LoginView = () => {
    const theme = useTheme()
    return(
        <LoginLayout>
            <LoginViewTitleContainer />
            <LoginUserFormPresentation />
            <CreateAccountOptionContainer />
        </LoginLayout>
    )
}

