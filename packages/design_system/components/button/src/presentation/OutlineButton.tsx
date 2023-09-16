import React from "react";
import {ButtonState} from '../state-wrapper/ButtonState'
import {ButtonProps} from '../interfaces/IButtonProps'
import {OutlineButtonStyle} from '../style/OutlineButton.style'

export const OutlineButton = (props: ButtonProps)  => {
    
    return (
        <ButtonState
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
        </ButtonState>

    )
}

