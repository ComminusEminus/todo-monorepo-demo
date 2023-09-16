import React, { useEffect, useState } from 'react'
import { useUIContext } from '@ui/contexts'
import { getTokenFromCookie } from '@core/domain-logic'

export const useSetCredentialsState = () => {
    const { state, dispatch } = useUIContext()
    const { userProfile } = state
    const [tokenState, setTokenState] = useState<boolean | null>(false)

    useEffect(() => {
        if (userProfile) {
            
            const token = getTokenFromCookie()
            
            if(token){
                setTokenState(true)
            }
            
        }
    }, [userProfile])

    return {
        userProfile, tokenState
    }

}