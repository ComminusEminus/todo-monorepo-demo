import {useUIContext} from '@ui/contexts'
import { UIACTIONS } from '@core/entities'
import React, {useState, useEffect} from 'react'
import {useLoginUserApi} from '../api/use-login-user-api'
import {mapUserProfileForLoginUI} from '../../services/user-ui-services'

export const useLoginUserUI = () => {
    const {dispatch, state} = useUIContext()
    const {userProfile, update} = state;
    
    const {loginApiHandler, requestState} = useLoginUserApi()
    const {loading, error, returnValue} = requestState;
    const {user, message, error: err} = returnValue

    useEffect(() => {
        if(user && !error){
            const mappedUserProfile = mapUserProfileForLoginUI(user)

            dispatch({type: UIACTIONS.UPDATE_USER_PROFILE, payload:mappedUserProfile})

            //localStorage.setItem(mappedUserProfile._id, token)
        }
    }, [returnValue])
    
    return{
        requestState, 
        loginApiHandler,
        update,
        userProfile
    }
}