/// <reference types="react" />
import { ButtonStyleProps } from './Button.style';
interface ButtonProps extends ButtonStyleProps {
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
export type { ButtonProps };
export declare function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
export declare const OutlineButton: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const TextButton: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const SvgButton: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
