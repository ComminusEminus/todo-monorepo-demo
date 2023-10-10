import * as React from "react";
import { ButtonStateProps } from "../interfaces/IButtonStateProps";
import { ButtonStateStyle } from "@design/buttons";

export function ButtonState(props: ButtonStateProps){
    return(
        <ButtonStateStyle
            mt = {props.mt}
            mb = {props.mb}
            ml = {props.ml}
            mr = {props.mr} 
            borderRadius = {props.borderRadius}
            buttonStyle = {props.buttonStyle}
            elevation = {props.elevation}
            onClick = {props.onClick}
            buttonStateWidth = {props.buttonStateWidth}
            
            
        >
            {props.children}
        </ButtonStateStyle>
    )
}