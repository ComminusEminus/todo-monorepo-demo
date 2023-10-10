import React from "react";
import {ButtonState} from '../state-wrapper/ButtonState'
import {ButtonProps} from '../interfaces/IButtonProps'
import {TextButtonStyle} from '../style/TextButton.style'

export const TextButton = (props: ButtonProps)  => {
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
        </ButtonState>

    )
}
