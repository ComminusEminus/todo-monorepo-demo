import React from 'react'
import {FieldsetStyle} from './Fieldset.style'

interface FieldSetProps{
    children?: JSX.Element | JSX.Element[] | string; 
}
export const Fieldset = (props: FieldSetProps): JSX.Element => {
    return(
        <FieldsetStyle >
            {props.children}
        </FieldsetStyle>

    )
}
