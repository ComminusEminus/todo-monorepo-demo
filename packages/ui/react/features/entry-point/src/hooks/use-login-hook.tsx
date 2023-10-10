import React, {useState, useEffect} from 'react'
import {useVerifyLoginHandler} from './use-verify-login-handler'
import { Responses } from '@core/entities'

export const useLoginHook = () => {
    const [loginState, setLoginState] = useState<string | undefined>(undefined)

    const {requestState, resetStateHandler} = useVerifyLoginHandler()
    const {returnValue, loading} = requestState
    const {message} = returnValue


    useEffect(() => {
        if(message == Responses.LOGGED_IN){
            setLoginState(Responses.LOGGED_IN)
        }else{
            setLoginState(undefined)
        }

    }, [message])

    return {loginState}
}
