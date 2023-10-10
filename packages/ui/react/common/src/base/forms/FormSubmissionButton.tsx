import React from 'react'
import {useTheme} from 'styled-components'
import {OutlineButton} from '../buttons/variants/outline-button'
import {Container} from '../container/Container'

export interface IFormSubmissionButton{
    justifyButton: string;
    alignButton: string;
}
export const FormSubmissionButton = ({justifyButton, alignButton}: IFormSubmissionButton): JSX.Element => {
    const theme = useTheme()
    return(
        <Container
                justifyContent = {justifyButton}
                alignItems = {alignButton}
                width = {'100%'}
            > 
            <OutlineButton 
                type = 'submit'
                alignSelf = 'flex-start'
                buttonStyle = 'success'
                text = 'Submit'
                size = 'sm'
                color = {theme.colors.neutral.onBackground}
                buttonStateWidth = '100%'
                width = '100%'
            />
        </Container>
    )

}
