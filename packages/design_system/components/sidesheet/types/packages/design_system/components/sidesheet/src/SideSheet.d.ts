/// <reference types="react" />
import { SideSheetStyleProps } from './SideSheet.style';
export interface SideSheetProps extends SideSheetStyleProps {
    children?: JSX.Element | JSX.Element[];
    sheetHandler?: () => {};
    animateState?: 'animateOpen' | 'animateClose' | 'static';
    scrimType?: string;
}
export declare const SideSheet: (props: SideSheetProps) => import("react/jsx-runtime").JSX.Element;
