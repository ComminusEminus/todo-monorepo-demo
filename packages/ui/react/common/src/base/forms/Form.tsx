import React from 'react'
import {useTheme} from 'styled-components'
import {FormStyle} from '@design/forms'
import {FormSubmissionButton, IFormSubmissionButton} from './FormSubmissionButton'

export interface IFormProps extends IFormSubmissionButton{
    defaultValues?: any;
    children?: JSX.Element | JSX.Element[];
    buttonLabel?: string;
    onSubmit?: any;
    handleSubmit?: any;
    register?: any;
    className?: string;
  }


export const Form = (props: IFormProps): JSX.Element => {
    const theme = useTheme()
    return(
        <FormStyle onSubmit = {props.onSubmit}>
            {props.children}
            <FormSubmissionButton justifyButton = {props.justifyButton} alignButton = {props.alignButton} />
        </FormStyle>
    )

}
