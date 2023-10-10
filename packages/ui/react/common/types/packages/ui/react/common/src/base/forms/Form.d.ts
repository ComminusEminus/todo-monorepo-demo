/// <reference types="react" />
import { IFormSubmissionButton } from './FormSubmissionButton';
export interface IFormProps extends IFormSubmissionButton {
    defaultValues?: any;
    children?: JSX.Element | JSX.Element[];
    buttonLabel?: string;
    onSubmit?: any;
    handleSubmit?: any;
    register?: any;
    className?: string;
}
export declare const Form: (props: IFormProps) => JSX.Element;
