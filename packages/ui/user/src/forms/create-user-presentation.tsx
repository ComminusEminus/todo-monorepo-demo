import React from 'react'
import {useCreateNewUserForm} from './index'
import {Input} from '@design/input'
import {Form} from '@design/forms'

export const CreateUserPresentation = () => {
    const {onSubmit, register} = useCreateNewUserForm()
    return(
        <Form onSubmit = {onSubmit}>
            <Input register = {register} name = {"firstName"} placeholder="Enter First Name"  /> 
 
            <Input register = {register} name = {"lastName"} placeholder="Enter Last Name"  /> 
 
            <Input register = {register} name = {"userName"} placeholder="Enter Username"  /> 
 
            <Input register = {register} name = {"password"} placeholder="Enter Password"  /> 
 
        </Form>
    )
}