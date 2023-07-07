import React from 'react'
import {useCreateNewUserForm} from '@ui/user'
import {Input} from '@design/input'
import {Form} from '@design/form'

export const CreateUserPresentation = () => {
    const {onSubmit, register} = useCreateNewUserForm()
    return(
        <Form onSubmit = {onSubmit}>
            <Input {...register("firstName")} placeholder="Enter First Name"  /> 
 
            <Input {...register("lastName")} placeholder="Enter Last Name"  /> 
 
            <Input {...register("userName")} placeholder="Enter Username"  /> 
 
            <Input {...register("password")} placeholder="Enter Password"  /> 
 
        </Form>
    )
}