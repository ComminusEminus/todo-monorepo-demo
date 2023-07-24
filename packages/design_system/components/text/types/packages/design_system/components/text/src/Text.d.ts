import { TextStyleProps } from './Text.style';
export interface TextProps extends TextStyleProps {
    text?: string;
    color?: string;
    fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    fontFamily?: 'Albert-Sans' | 'Barlow';
    fontWeight?: string;
}
export declare const Text: (props: TextProps) => import("react/jsx-runtime").JSX.Element;
