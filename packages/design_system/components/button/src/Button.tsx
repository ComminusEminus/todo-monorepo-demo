import React from "react";
import {ButtonState} from './ButtonState'
import {ButtonStyle, OutlineButtonStyle, TextButtonStyle, SvgButtonStyle, ButtonStyleProps} from './Button.style'

//-----------------Button Interface

interface ButtonProps extends ButtonStyleProps {
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
    borderRadius?: string;
    elevation?: string;
    buttonStateWidth?: string;
    type?: 'button' | 'submit'| 'reset'| undefined;
    onClick?: () => void;
    size?: string;
    alignSelf?: string;
    width?: string;
    children?: JSX.Element | JSX.Element[] | string;
    icon?: string;
    buttonStyle?: string;
    display?: string;
    color?: string;
    text?: string;
    value?: string;
}

export type{
    ButtonProps
}

//------------------Button

interface BaseButtonProps extends ButtonProps{
}
const ButtonBase = (props: BaseButtonProps) => {
    return(
        <ButtonStyle
            type = {props.type}
            onClick = {props.onClick}
            size = {props.size}
            width = {props.width}
            buttonStyle = {props.buttonStyle}
            display = {props.display}
            color = {props.color}
            value = {props.value}
        >
            {props.children}
        </ButtonStyle>
    )
}

export function Button(props: ButtonProps){
    
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
            <ButtonBase 
                type = {props.type}
                onClick = {props.onClick}
                size = {props.size}
                width = {props.width}
                buttonStyle = {props.buttonStyle}
                display = {props.display}
                color = {props.color}
            >
                {props.text}
            </ButtonBase>
        </ButtonState>

    )
}


//--------------------OutlineButton


interface OutlineButtonProps extends ButtonProps{
  
}
const OutlineButtonBase = (props: OutlineButtonProps) => {
    return(
        <OutlineButtonStyle
            type = {props.type}
            onClick = {props.onClick}
            size = {props.size}
            width = {props.width}
            buttonStyle = {props.buttonStyle}
            display = {props.display}
            color = {props.color}   
        >
            {props.children}
        </OutlineButtonStyle>
    )
}

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
            <OutlineButtonBase  
                type = {props.type}
                onClick = {props.onClick} 
                size = {props.size}
                width = {props.width}
                display = {props.display}
                color = {props.color}
            >
                {props.text}
            </OutlineButtonBase>
        </ButtonState>

    )
}

//---------------TextButton


interface TextButtonProps extends ButtonProps{
  
}
const TextButtonBase = (props: BaseButtonProps) => {
    return(
        <TextButtonStyle
            type = {props.type}
            onClick = {props.onClick}
            size = {props.size}
            width = {props.width}
            buttonStyle = {props.buttonStyle}
            display = {props.display}
            color = {props.color}
        >
            {props.children}
        </TextButtonStyle>
    )
}


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
                width = {props.width}
                display = {props.display}
                color = {props.color}
            >
                {props.text}
            </TextButtonStyle>
        </ButtonState>

    )
}


//---------------------SVGButton

interface SVGButtonProps extends ButtonProps{
  
}
const SVGButtonBase = (props: BaseButtonProps) => {
    return(
        <SvgButtonStyle
            type = {props.type}
            onClick = {props.onClick}
            size = {props.size}
            width = {props.width}
            buttonStyle = {props.buttonStyle}
            display = {props.display}
            color = {props.color}
        >
            {props.children}
        </SvgButtonStyle>
    )
}

export const SvgButton = (props: ButtonProps)  => {
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
            <SVGButtonBase  
                type = {props.type}
                onClick = {props.onClick} 
                size = {props.size}
                width = {props.width}
                display = {props.display}
                color = {props.color}
                children = {props.children}
            />
        </ButtonState>
    )
}