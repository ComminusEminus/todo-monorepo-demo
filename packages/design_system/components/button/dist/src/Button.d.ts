import React from "react";
export interface ButtonProps {
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
    borderRadius?: string;
    elevation?: string;
    buttonStateWidth?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
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
export declare function Button(props: ButtonProps): React.JSX.Element;
export declare const OutlineButton: (props: ButtonProps) => React.JSX.Element;
export declare const TextButton: (props: ButtonProps) => React.JSX.Element;
export declare const SvgButton: (props: ButtonProps) => React.JSX.Element;
//# sourceMappingURL=Button.d.ts.map