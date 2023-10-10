import React from "react";
import { IButtonStyleProps } from "@design/buttons";

interface ButtonProps extends IButtonStyleProps {
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
    id?: string;
    border?: string;
    background?: string;
    textAlign?: string;
    justifyContent?: string;
    alignItems?: string;
}

export type{
    ButtonProps
}
