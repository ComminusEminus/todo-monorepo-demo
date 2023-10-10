import React from "react";
import {ButtonState} from '../state-wrapper/ButtonState'
import {ButtonProps} from '../interfaces/IButtonProps'
import { SvgButtonStyle } from "../style/SvgButton.style";
import {SvgIcon} from '@design/svgicon'

export interface ISvgButton extends ButtonProps{
    viewBox?: string;
    iconWidth?: string;
    iconHeight?: string;
    path?: string;
    fill?: string;
}

export const SvgButton = (props: ISvgButton)  => {
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
            <SvgButtonStyle  
               type = {props.type}
               onClick = {props.onClick}
               size = {props.size}
               width = {props.width}
               buttonStyle = {props.buttonStyle}
               display = {props.display}
               color = {props.color}
               height = {props.height}
            >
                <SvgIcon 
                    viewBox  = {props.viewBox}
                    width = {props.iconWidth}
                    height = {props.iconHeight}
                    path = {props.path}
                    fill = {props.fill}
                />
            </SvgButtonStyle>
        </ButtonState>
    )
}