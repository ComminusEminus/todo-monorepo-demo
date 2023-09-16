import { useUIContext } from '@ui/contexts'
import { UIACTIONS } from '@core/entities'
import React, { useState, useEffect } from 'react'
import { useCreateNewUserProfileApi } from '../api/use-create-new-user-profile-api'

export interface IUseCreateNewUserUI{
    pageDisplayHandler: () => void;
}

export const useCreateNewUserUI = ({pageDisplayHandler}: IUseCreateNewUserUI) => {
    const { dispatch, state } = useUIContext()

    const { createNewUserApiHandler, requestState } = useCreateNewUserProfileApi()
    const { loading, error, returnValue } = requestState;
    const { message, error: err } = returnValue

    useEffect(() => {
        if (message === 'ok') {
            pageDisplayHandler()
        }
    }, [returnValue])

    return {
        requestState, 
        createNewUserApiHandler
    }
}