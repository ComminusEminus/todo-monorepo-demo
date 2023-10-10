import React, {useState} from 'react'
import {IUpdateListItemResponseDTO} from '@core/entities'
import {logoutUser} from '@ui/config'

export const useLogoutUser = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState<IUpdateListItemResponseDTO>({message: undefined, error: undefined})
    
    const logoutApiHandler = async () => {
        try{
            const response = await logoutUser.execute()
            const {data} = response
            setLoading(false)
            const {message, error}: IUpdateListItemResponseDTO = data
            setReturnValue((returnValue: IUpdateListItemResponseDTO) => ({...returnValue, message: message}))
            
        }catch(err){
            setLoading(false)
            setReturnValue((returnValue: IUpdateListItemResponseDTO) => ({...returnValue, error: err}))
        }
    }

    const requestState = {
        loading, returnValue
    }

    return {logoutApiHandler, requestState} as const;
}