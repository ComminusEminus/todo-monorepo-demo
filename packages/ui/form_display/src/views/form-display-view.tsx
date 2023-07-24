import React from 'react'
import {Container} from '@design/container'
import {FormDisplayContainer} from '../components/form-display-container'
import {useTheme} from 'styled-components'

export const FormDisplayView = () => {
    const theme = useTheme()
    return(
        <Container 
            background = {theme.colors.neutral.background}
            width = {'100%'}
            height = {'100%'}
        >
            <FormDisplayContainer />
        </Container>
    )
}