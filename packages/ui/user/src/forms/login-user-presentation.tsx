import React from 'react'
import {useLoginUserForm} from '@ui/user'
import {Input} from '@design/input'
import {Form} from '@design/form'



export const LoginUserPresentation = () => {
    const {onSubmit, register} = useLoginUserForm()
    return(
        <Form onSubmit = {onSubmit}>
            <Input {...register("userName")} placeholder="Enter Username"  /> 
            <Input {...register("password")} placeholder="Enter Password"  /> 
        </Form>
    )
}