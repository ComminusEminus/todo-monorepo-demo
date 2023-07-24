import React from 'react'
import {useTheme} from 'styled-components'
import {CreateUserPresentation} from '../forms/index'
import {LoginUserContainer} from '../components/login-user-container'

export const CreateNewUserView = () => {
    const theme = useTheme()
    return(
        <LoginUserContainer>
            <CreateUserPresentation />
        </LoginUserContainer>
    )
}