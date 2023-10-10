import React from "react";
import {ButtonStateStyle, TextButtonStyle} from '@design/buttons'
import {ButtonProps} from '../interfaces/IButtonProps'


export const TextButton = (props: ButtonProps)  => {
    return (
        <ButtonStateStyle
            mt = {props.mt}
            mb = {props.mb}
            ml = {props.ml}
            mr = {props.mr} 
            borderRadius = {props.borderRadius}
            elevation = {props.elevation}
            buttonStateWidth = {props.buttonStateWidth}
        >
            <TextButtonStyle  
                type = {props.type}
                onClick = {props.onClick}
                size = {props.size}
                buttonStyle = {props.buttonStyle}
                value = {props.value}
                width = {props.width}
                color = {props.color}
                textAlign = {props.textAlign}
            >
                {props.text}
            </TextButtonStyle>
        </ButtonStateStyle>

    )
}
