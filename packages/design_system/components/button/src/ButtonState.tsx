import * as React from "react";
import {ButtonStateStyle} from './ButtonState.style'

interface ButtonStateProps {
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