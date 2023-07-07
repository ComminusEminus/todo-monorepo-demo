import React from 'react'
import {useUIContext} from '@ui/contexts'
import {LoginPage} from './login-page'
import {Dashboard} from './dashboard'


export const EntryPoint = () => {
    const {userProfile} = useUIContext()
    return(
        <>
            {
                !userProfile && (
                    <LoginPage />
                )
            }
            {
                userProfile && (
                    <Dashboard />
                )
            }
        </>
    )
}