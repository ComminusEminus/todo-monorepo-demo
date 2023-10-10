import React from 'react'
import {useCreateNewUserFormHook} from '../form-hook/use-create-new-user-form-hook'
import {Form, Input, Fieldset} from '@reactui/common'

//add errors and loading state
export interface ICreateUserPresentation{
    useSwitchPageHandler: () => void;
}

export const CreateUserPresentation = ({useSwitchPageHandler}: ICreateUserPresentation) => {
    const {onSubmit, register, errors, requestState} = useCreateNewUserFormHook({useSwitchPageHandler})
    const {loading, error, returnValue} = requestState
    
    return(
        <Form onSubmit = {onSubmit} justifyButton = {'flex-end'} alignButton = {'center'}>
            <Fieldset>
                <Input id = {'firstName-input'} register = {register} name = {"firstName"} placeholder="Enter First Name"  /> 
    
                <Input id = {'lastName-input'} register = {register} name = {"lastName"} placeholder="Enter Last Name"  /> 

                <Input id = {'userName-input'} register = {register} name = {"userName"} placeholder="Enter Username"  /> 

                <Input id = {'password-input'} register = {register} name = {"password"} placeholder="Enter Password"  /> 

            </Fieldset>
 
        </Form>
    )
}