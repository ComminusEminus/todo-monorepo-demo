import React from 'react'
import {useLoginUserForm} from './index'
import {Input} from '@design/input'
import {Form} from '@design/forms'



export const LoginUserPresentation = () => {
    const {onSubmit, register} = useLoginUserForm()
    return(
        <Form onSubmit = {onSubmit}>
            <Input register = {register} name = {"userName"} placeholder="Enter Username"  /> 
            <Input register = {register} name = {"password"} placeholder="Enter Password"  /> 
        </Form>
    )
}