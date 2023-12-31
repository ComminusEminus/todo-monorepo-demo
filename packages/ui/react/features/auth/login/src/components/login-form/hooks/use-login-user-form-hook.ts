import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {useLoginUserUI} from './use-login-user-ui'

import * as yup from "yup";

type FormValues = {
    userName: string;
    password: string;
}

interface ILoginUserFormResponse{
    userName: string;
    password: string;
}

const schema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),
  }).required();


export const useLoginUserFormHook = () => {
    const {requestState, loginApiHandler} = useLoginUserUI()

    const { register, 
        handleSubmit,
        formState: {errors},
    } = useForm<FormValues>({resolver: yupResolver(schema)});

    const onSubmit = handleSubmit(async (data: ILoginUserFormResponse) => {
        await loginApiHandler(data.userName, data.password)
    });

    return {onSubmit, register, requestState}
}