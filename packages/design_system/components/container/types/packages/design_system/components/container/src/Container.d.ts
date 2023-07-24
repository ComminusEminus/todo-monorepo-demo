/// <reference types="react" />
import { ContainerStyleProps } from './Container.style';
export interface ContainerProps extends ContainerStyleProps {
    onClick?: any;
    children?: JSX.Element | JSX.Element[] | string;
}
export declare const Container: (props: ContainerProps) => import("react/jsx-runtime").JSX.Element;
