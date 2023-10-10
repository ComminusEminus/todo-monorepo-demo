import React, { useState, useEffect } from 'react'

import { useUIContext, UIACTIONS } from '@reactui/contexts';
import { useLoginUserApi } from '@reactui/http'

export const useLoginUserUI = () => {
    const { dispatch, state } = useUIContext()
    const { loginApiHandler, requestState } = useLoginUserApi()
    const { returnValue } = requestState
    const { message, error: err } = returnValue

    useEffect(() => {
        if (message === 'ok') {

            dispatch({ type: UIACTIONS.LOGGED_IN , payload: null })
            
        }
    }, [returnValue])

    return {
        loginApiHandler, requestState
    }
}


