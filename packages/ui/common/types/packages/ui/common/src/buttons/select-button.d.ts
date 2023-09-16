import React from 'react';
import { ButtonProps } from '@design/buttons';
export declare const SelectListButtonStyle: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, import("packages/design_system/components/button/types/packages/design_system/components/button/src/interfaces/IButtonStyleProps").ButtonStyleProps & ButtonProps, never>;
export interface ISelectListButton {
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
    borderRadius?: string;
    elevation?: string;
    buttonStateWidth?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
    background?: string;
    fontFamily?: string;
}
export declare const SelectButton: (props: ISelectListButton) => import("react/jsx-runtime").JSX.Element;
