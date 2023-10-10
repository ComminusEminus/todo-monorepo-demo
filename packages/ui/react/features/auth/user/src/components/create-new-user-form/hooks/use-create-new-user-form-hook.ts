import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {useCreateNewUserUI} from './use-create-new-user-ui'

export type FormValues = {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}

export interface ICreateUserResponse{
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}

export const schema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),
    lastName: yup.string().required(),
    firstName: yup.string().required(),
  }).required();


export const useCreateNewUserFormHook = () => {
    const {createNewUserApiHandler, requestState} = useCreateNewUserUI()

    const { register, 
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({resolver: yupResolver(schema)});

    const onSubmit = handleSubmit(async (data: ICreateUserResponse) => {
        const {firstName, lastName, userName, password} = data
        console.log('OnSubmit Create New User Handler')
        createNewUserApiHandler(firstName, lastName, userName, password)
        
    });

    return {onSubmit, register, errors, requestState}
}