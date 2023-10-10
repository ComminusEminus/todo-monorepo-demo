import React from 'react'
import {useTheme} from 'styled-components'
import {FormStyle} from '../style/Form.style'
import {OutlineButton} from '@design/buttons'
import {Container} from '@design/container'

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
