import { ButtonProps } from '../interfaces/IButtonProps';
export interface ISvgButton extends ButtonProps {
    viewBox?: string;
    iconWidth?: string;
    iconHeight?: string;
    path?: string;
    fill?: string;
}
export declare const SvgButton: (props: ISvgButton) => import("react/jsx-runtime").JSX.Element;
