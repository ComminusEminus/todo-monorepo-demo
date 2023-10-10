import React from "react";
import { ButtonStateStyle, ButtonStyle} from '@design/buttons'
import { ButtonProps } from '../interfaces/IButtonProps'


export function Button(props: ButtonProps) {
    return (
        <ButtonStateStyle
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
        </ButtonStateStyle>

    )
}
