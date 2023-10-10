import React from 'react'
import {Form, Input, Fieldset} from '@reactui/common'
import {useLoginUserFormHook} from '../hooks/use-login-user-form-hook'

export const LoginUserFormPresentation = () => {
    const {onSubmit, register, requestState} = useLoginUserFormHook()
    return(
        <Form onSubmit = {onSubmit} justifyButton = {'flex-end'} alignButton = {'center'}>
            <Fieldset>
                <Input id = {'username-input'} register = {register} name = {"userName"} placeholder="Enter Username"  /> 
                <Input id = {'password-input'} register = {register} name = {"password"} placeholder="Enter Password"  /> 
            </Fieldset>
        </Form>
    )
}