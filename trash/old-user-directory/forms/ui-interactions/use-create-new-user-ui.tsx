import { useUIContext } from '@reactui/contexts'
import React, {useEffect } from 'react'
import { useCreateNewUserProfileApi } from '@reactui/http'

export interface IUseCreateNewUserUI{
    pageSwitchHandler: () => void;
}

export const useCreateNewUserUI = ({pageSwitchHandler}: IUseCreateNewUserUI) => {
    const { dispatch, state } = useUIContext()

    const { createNewUserApiHandler, requestState } = useCreateNewUserProfileApi()
    const { loading, error, returnValue } = requestState;
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