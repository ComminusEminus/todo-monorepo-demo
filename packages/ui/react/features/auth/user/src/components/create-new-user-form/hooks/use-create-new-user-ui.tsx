import React, { useEffect } from 'react'
import { useCreateNewUserProfileApi } from '@reactui/http'
import { useLoginContext } from '@reactui/contexts'



export const useCreateNewUserUI = () => {
    const { pageSwitchHandler } = useLoginContext()

    const { createNewUserApiHandler, requestState } = useCreateNewUserProfileApi()
    const { loading, returnValue } = requestState;
    const { message, error: err } = returnValue

    useEffect(() => {
        if (message === 'ok') {
            pageSwitchHandler()
        }
    }, [returnValue])

    return {
        requestState,
        createNewUserApiHandler
    }
}