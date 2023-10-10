/// <reference types="react" />
import { ContainerStyleProps } from '@design/container';
export interface ContainerProps extends ContainerStyleProps {
    onClick?: any;
    children?: JSX.Element | JSX.Element[] | string;
}
