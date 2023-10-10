import * as React from "react";
import {ButtonStateStyleProps} from '@design/buttons'

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
