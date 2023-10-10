import React from 'react'
import {TextStyle, TextStyleProps} from './Text.style'

export interface TextProps extends TextStyleProps{
    text?: string;
    color?: string;
    fontSize?: string;
    fontFamily?: 'Albert_Sans' | 'Barlow';
    fontWeight?: string;
}

export const Text = (props: TextProps) => {
    return(
        <TextStyle 
            color = {props.color}
            fontSize = {props.fontSize}
            fontFamily = {props.fontFamily}
            fontWeight = {props.fontWeight}
        >
            {props.text}
        </TextStyle>

    )
}
