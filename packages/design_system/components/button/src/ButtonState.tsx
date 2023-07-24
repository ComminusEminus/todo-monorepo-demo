import * as React from "react";
import {ButtonStateStyle, ButtonStateStyleProps} from './ButtonState.style'

interface ButtonStateProps extends ButtonStateStyleProps {
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
    borderRadius?: string;
    buttonStyle?: string;
    elevation?: string;
    onClick?: () => {};
    buttonStateWidth?: string;
    children: JSX.Element | JSX.Element[];
}

export type{
    ButtonStateProps
}
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