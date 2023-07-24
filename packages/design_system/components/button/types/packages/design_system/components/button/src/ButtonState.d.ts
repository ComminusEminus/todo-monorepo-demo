/// <reference types="react" />
import { ButtonStateStyleProps } from './ButtonState.style';
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
export type { ButtonStateProps };
export declare function ButtonState(props: ButtonStateProps): import("react/jsx-runtime").JSX.Element;
