import React, {useState, useEffect} from 'react'
import {useUserLoginContext} from '@ui/contexts'
import {ILoginUserResponseDTO} from '@core/entities'
import {useLoginUserApi} from '../api/use-login-user-api'
import {USER_STATUS} from '@core/entities'

export const useLoginUserUI = () => {
    const {loggedIn, setLoggedIn} = useUserLoginContext()
    const {loginApiHandler, requestState} = useLoginUserApi()
    const {returnValue, error} = requestState
    const {message, error: err} = returnValue

    useEffect(() => {
        if(message === 'ok'){
            setLoggedIn(USER_STATUS.LOGGED_IN)
            console.log('set logged into true')
        }
    }, [returnValue])

    return {
        loginApiHandler, requestState
    }
}