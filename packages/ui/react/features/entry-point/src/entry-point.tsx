import React from 'react'
import {Dashboard} from '@reactui/dashboard'
import {AuthView} from '@reactui/auth'
import {useLoginHook} from './hooks/use-login-hook'

export const EntryPoint = () => {
    const {loginState} = useLoginHook()
    return(
        <>
            {
                !loginState ? <AuthView /> : <Dashboard />
            }            
        </>
    )    
       
}






