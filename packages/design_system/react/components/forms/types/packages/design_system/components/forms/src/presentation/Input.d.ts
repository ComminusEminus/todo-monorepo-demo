import React, { InputHTMLAttributes, ChangeEventHandler } from 'react';
import { LabelProps } from './Label';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, LabelProps {
    border?: string;
    type?: React.HTMLInputTypeAttribute;
    id?: string;
    name?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    placeholder?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    label?: string;
    error?: string;
    register?: any;
}
export declare const Input: (props: InputProps) => JSX.Element;
