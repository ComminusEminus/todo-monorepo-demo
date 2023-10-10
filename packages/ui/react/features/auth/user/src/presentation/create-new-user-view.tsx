import React from 'react'
import {useTheme} from 'styled-components'
import {CreateUserFormPresentation} from '../components/create-new-user-form/presentation/create-user-form-presentation'
import {LoginLayout} from '@reactui/common'
import {LoginOptionContainer} from './login-option-container'
import {CreateAccountTitleContainer} from './create-account-title-container'




export const CreateNewUserView = () => {
    const theme = useTheme()
    return(
        <LoginLayout>
            <CreateAccountTitleContainer />
            <CreateUserFormPresentation />
            <LoginOptionContainer />
        </LoginLayout>
    )
}

