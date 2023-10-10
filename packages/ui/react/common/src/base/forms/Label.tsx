import React from 'react'
import {LabelStyle} from '@design/forms'

export interface LabelProps{
    htmlFor?: string;
    labelText?: string;
}


export const Label = (props: LabelProps) => {
    return(
        <LabelStyle htmlFor = {props.htmlFor} >
            {props.labelText}    
        </LabelStyle>
    )
}