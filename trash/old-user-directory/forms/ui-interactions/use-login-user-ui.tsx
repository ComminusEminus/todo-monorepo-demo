import React, {useState, useEffect} from 'react'
import {useLoginUserApi} from '@reactui/http'
import {UIACTIONS} from '@core/entities'
import {useUIContext} from '@reactui/contexts';

export const useLoginUserUI = () => {
    const {dispatch, state} = useUIContext()
    const {loginApiHandler, requestState} = useLoginUserApi()
    const {returnValue, error} = requestState
    const {message, error: err} = returnValue    

    useEffect(() => {
        if(message === 'ok'){
            console.log('loginUserUI message ok executed')
            dispatch({type:UIACTIONS.LOGGED_IN, payload: ''})
            localStorage.setItem('loggedIn', 'TRUE')
        }
    }, [returnValue])

    return {
        loginApiHandler, requestState
    }
}


