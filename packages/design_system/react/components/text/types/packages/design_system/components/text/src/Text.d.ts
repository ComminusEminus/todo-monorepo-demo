import { TextStyleProps } from './Text.style';
export interface TextProps extends TextStyleProps {
    text?: string;
    color?: string;
    fontSize?: string;
    fontFamily?: 'Albert_Sans' | 'Barlow';
    fontWeight?: string;
}
export declare const Text: (props: TextProps) => import("react/jsx-runtime").JSX.Element;
