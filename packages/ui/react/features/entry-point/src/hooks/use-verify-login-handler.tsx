import React, {useState, useEffect} from 'react'
import {useVerifyLogin} from '@reactui/http'
import { useUIContext } from '@reactui/contexts';


export const useVerifyLoginHandler = () => {
    const {verifyLoginHandler, requestState} = useVerifyLogin()
    const {loading, returnValue, resetStateHandler} =  requestState
    const [isMounted, setIsMounted] = useState<boolean>(false)

    const { dispatch, state } = useUIContext()
    const {loggedIn} =  state


    useEffect(() => {
        verifyLoginHandler()
    }, [loggedIn])

    return {requestState, resetStateHandler};
}

