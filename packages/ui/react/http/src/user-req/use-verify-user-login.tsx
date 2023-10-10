import React, {useState, Dispatch, SetStateAction} from 'react'
import {Responses} from '@core/entities'
import {verifyLogin} from '@ui/config'

export interface IUseVerifyLogin{
    verifyLoginHandler: () => {};
    requestState: any;
}

export const useVerifyLogin = (): IUseVerifyLogin => {
    const [loading, setLoading] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState<{message: Responses | undefined, error: any}>({message: undefined, error: undefined})

    const verifyLoginHandler = async () => {
        try{
            const response = await verifyLogin.execute()
            const {data} = response
            setLoading(false)
            const {message, error} = data 
            setReturnValue((returnValue) => ({...returnValue, message: message}))


        }catch(err){
            setLoading(false)
            setReturnValue((returnValue) => ({...returnValue, error: err}))
        }
    }

    const resetStateHandler = () => {
        setReturnValue((returnValue) => ({...returnValue, message: undefined}))
    }

    const requestState = {
        loading, returnValue, resetStateHandler
    }

    return {verifyLoginHandler, requestState} as const
}