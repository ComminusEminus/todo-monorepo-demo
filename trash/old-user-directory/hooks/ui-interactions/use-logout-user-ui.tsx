import {useUIContext} from '@reactui/contexts'
import { UIACTIONS } from '@core/entities'
import React, {useState, useEffect} from 'react'
import {useLogoutUser} from '@reactui/http'

export const useLogoutUserUi = () => {
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