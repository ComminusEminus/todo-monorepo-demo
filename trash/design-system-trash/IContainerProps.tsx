import {ContainerStyleProps} from './IContainerStyleProps'

export interface ContainerProps extends ContainerStyleProps{
    onClick?: any;
    children?: JSX.Element | JSX.Element[] | string;
}

