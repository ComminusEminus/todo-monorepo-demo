import React from 'react'
import {LabelStyle} from './Label.style'

interface LabelProps{
    children?: string;
    htmlFor?: string;
}


export const Label = (props: LabelProps) => {
    return(
        <LabelStyle htmlFor = {props.htmlFor} >
            {props.children}
        </LabelStyle>
    )
}