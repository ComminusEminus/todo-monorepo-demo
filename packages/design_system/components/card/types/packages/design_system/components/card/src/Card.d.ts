/// <reference types="react" />
import { CardStyleProps } from './Card.style';
interface CardProps extends CardStyleProps {
    headline?: string;
    subHeader?: string;
    content?: string;
    actionComponents?: JSX.Element | JSX.Element[];
}
export declare const Card: (props: CardProps) => JSX.Element;
export {};
