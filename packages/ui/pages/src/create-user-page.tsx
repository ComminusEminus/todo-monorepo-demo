import React from 'react'
import {Container} from '@design/container'
import {CreateNewUserView} from '@ui/user'
import styled, {useTheme, css} from 'styled-components'

export const CreateUserPage = () => {
    const theme = useTheme()
    return(
        <Container  
            background = {theme.colors.primary.base}
            width = {'100%'}
            height = {'100%'}
        >
            <CreateNewUserView />
        </Container>
    )
}