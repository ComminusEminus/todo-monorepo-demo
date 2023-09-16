import React from "react";
import { ButtonState } from '../state-wrapper/ButtonState'
import { ButtonProps } from '../interfaces/IButtonProps'
import { ButtonStyle } from '../style/Button.style'

export function Button(props: ButtonProps) {
    return (
        <ButtonState
            mt={props.mt}
            mb={props.mb}
            ml={props.ml}
            mr={props.mr}
            borderRadius={props.borderRadius}
            elevation={props.elevation}
            buttonStateWidth={props.buttonStateWidth}
        >
            <ButtonStyle
                type={props.type}
                onClick={props.onClick}
                size={props.size}
                buttonStyle={props.buttonStyle}
                value={props.value}
                textAlign = {props.textAlign}
                display = {props.display}
                justifyContent = {props.justifyContent}
                alignItems = {props.alignItems}
            >
                {props.text}
            </ButtonStyle>
        </ButtonState>

    )
}
