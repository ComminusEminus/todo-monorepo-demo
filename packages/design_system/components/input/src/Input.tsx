import React, {InputHTMLAttributes, ChangeEventHandler} from 'react'
import styled from 'styled-components'

import {InputStyle} from './Input.style'
import {Fieldset} from '@design/fieldset'


export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
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


export const Input = (props: InputProps): JSX.Element => {
    if(props.error){
        return(
            <>
                <InputStyle 
                    type = {props.type}
                    id = {props.id}
                    name = {props.name}
                    required = {props.required || false}
                    minLength = {props.minLength}
                    maxLength = {props.maxLength}
                    placeholder = {props.placeholder}
                    value = {props.value}
                    onChange = {props.onChange}
                    {...props.register(props.name)}
                />    
                <span>{props.error}</span>
            </>
        )
    }else{
        return(
            <InputStyle 
                    type = {props.type}
                    id = {props.id}
                    name = {props.name}
                    required = {props.required || false}
                    minLength = {props.minLength}
                    maxLength = {props.maxLength}
                    size = {props.size}
                    placeholder = {props.placeholder}
                    value = {props.value}
                    onChange = {props.onChange}
                    {...props.register(props.name)}
                />    
        )
    }
    
}





