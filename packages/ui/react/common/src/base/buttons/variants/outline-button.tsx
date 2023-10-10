import React from "react";
import {ButtonStateStyle, OutlineButtonStyle } from '@design/buttons'
import {ButtonProps} from '../interfaces/IButtonProps'


export const OutlineButton = (props: ButtonProps)  => {
    
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
            <OutlineButtonStyle  
               type = {props.type}
               onClick = {props.onClick}
               size = {props.size}
               buttonStyle = {props.buttonStyle}
               value = {props.value}
               border = {props.border}
            >
                {props.text}
            </OutlineButtonStyle>
        </ButtonStateStyle>

    )
}

