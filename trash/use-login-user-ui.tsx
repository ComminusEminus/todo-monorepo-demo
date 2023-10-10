import {useUIContext} from '@reactui/contexts'
import { UIACTIONS } from '@core/entities'
import React, {useEffect} from 'react'
import {useLoginUserApi} from '@reactui/http'


export const useLoginUserUI = () => {
    const {dispatch, state} = useUIContext()
    const {userProfile, update} = state;
    
    const {loginApiHandler, requestState} = useLoginUserApi()
    const {loading, error, returnValue} = requestState;
    const {user, message, error: err} = returnValue

    useEffect(() => {
        if(user && !error){

            dispatch({type: UIACTIONS.UPDATE_USER_PROFILE, payload: user})

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