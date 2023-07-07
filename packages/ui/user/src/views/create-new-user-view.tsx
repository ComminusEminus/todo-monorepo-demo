import React from 'react'
import {useTheme} from 'styled-components'
import {LoginUserContainer, CreateUserPresentation} from '@ui/user'

export const CreateNewUserView = () => {
    const theme = useTheme()
    return(
        <LoginUserContainer>
            <CreateUserPresentation />
        </LoginUserContainer>
    )
}