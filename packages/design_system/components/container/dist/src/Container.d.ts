import React from 'react';
import { ContainerStyleProps } from './Container.style';
export interface ContainerProps extends ContainerStyleProps {
    onClick?: any;
    children?: JSX.Element | JSX.Element[] | string;
}
export declare const Container: (props: ContainerProps) => React.JSX.Element;
//# sourceMappingURL=Container.d.ts.map