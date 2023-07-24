/// <reference types="react" />
export interface IFormProps {
    defaultValues?: any;
    children?: JSX.Element | JSX.Element[];
    buttonLabel?: string;
    onSubmit?: any;
    handleSubmit?: any;
    register?: any;
    className?: string;
}
export declare const Form: ({ children, onSubmit }: IFormProps) => JSX.Element;
