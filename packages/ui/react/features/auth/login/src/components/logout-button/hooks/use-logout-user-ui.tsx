import React, { useEffect } from 'react'

import { useUIContext, UIACTIONS } from '@reactui/contexts'
import { useLogoutUser } from '@reactui/http'

export const useLogoutUserUi = () => {
    const { dispatch, state } = useUIContext()

    const { logoutApiHandler, requestState } = useLogoutUser()
    const { loading, returnValue } = requestState;
    const { message, error: err } = returnValue

    useEffect(() => {
        if (message === 'ok') {
            dispatch({ type: UIACTIONS.LOGGED_IN, payload: '' })
        }
    }, [message])

    return {
        requestState,
        logoutApiHandler,
    }
}