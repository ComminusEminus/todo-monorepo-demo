import {logoutUser} from '@core/di'
import { UIACTIONS } from '@core/entities'
import {useUIContext} from '@ui/contexts';
import React, {useState, useEffect} from 'react'
import {IUpdateListItemResponseDTO} from '@core/entities'

export const useLogoutUser = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState<IUpdateListItemResponseDTO>({message: undefined, error: undefined})
    
    const logoutApiHandler = async () => {
        try{
            const response = await logoutUser.execute()
            const {data} = response
            setLoading(false)
            const {message, error}: IUpdateListItemResponseDTO = data
            setReturnValue((returnValue) => ({...returnValue, message: message}))
            
        }catch(err){
            setLoading(false)
            setError(true)
            setReturnValue((returnValue) => ({...returnValue, error: err}))
        }
    }

    const requestState = {
        loading, error, returnValue
    }

    return {logoutApiHandler, requestState} as const;
}