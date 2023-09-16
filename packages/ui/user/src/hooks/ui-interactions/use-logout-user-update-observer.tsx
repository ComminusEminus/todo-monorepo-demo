import {useUIContext} from '@ui/contexts'
import { UIACTIONS } from '@core/entities'
import React, {useState, useEffect} from 'react'
import {useLogoutUser} from '../api/use-logout-user'

export const useLogoutUserUpdateObserver = () => {
    const {dispatch, state} = useUIContext()
    
    const {logoutApiHandler, requestState} = useLogoutUser()
    const {loading, error, returnValue} = requestState;
    const {message, error: err} = returnValue

    useEffect(() => {
        if(message === 'ok'){
            localStorage.removeItem('loggedIn')
            dispatch({type:UIACTIONS.LOGGED_IN, payload: ''})
        }
    }, [message])

    return{
        requestState, 
        logoutApiHandler,
    }
}