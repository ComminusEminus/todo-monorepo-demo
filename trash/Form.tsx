import React from 'react'
import {useTheme} from 'styled-components'
import {FormStyle} from './Form.style'
import {OutlineButton} from '@design/buttons'
import {Container} from '@design/container'

export interface IFormProps {
    defaultValues?: any;
    children?: JSX.Element | JSX.Element[];
    buttonLabel?: string;
    onSubmit?: any;
    handleSubmit?: any;
    register?: any;
    className?: string;
  }


export const Form = ({children, onSubmit}: IFormProps): JSX.Element => {
    const theme = useTheme()
    return(
        <FormStyle onSubmit = {onSubmit}>
            {children}
            <Container
                justifyContent = 'center'
                alignItems = 'center'
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
        </FormStyle>
    )

}
