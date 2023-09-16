/// <reference types="react" />
import { SideSheetStyleProps } from './SideSheet.style';
export interface SideSheetProps extends SideSheetStyleProps {
    children?: string[] | JSX.Element | JSX.Element[];
    sheetHandler?: () => void;
    animateState?: 'animateOpen' | 'animateClose' | 'static';
    scrimType?: "TINTED";
}
export declare const SideSheet: (props: SideSheetProps) => import("react/jsx-runtime").JSX.Element;
