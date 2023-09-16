import React from 'react'
import {useLoginUserFormHook} from '../form-hook/use-login-user-form-hook'
import {Form, Input, Fieldset} from '@design/forms'


//add loading states from request state 
export interface ILoginUserPresentation{
    updateLoginRequestState: ()=> void
}

export const LoginUserPresentation = () => {
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