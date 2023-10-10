import React, {useState} from 'react'
import {createNewUser} from '@ui/config'
import {IUpdateListItemResponseDTO} from '@core/entities'

export const useCreateNewUserProfileApi = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState<IUpdateListItemResponseDTO>({message: undefined, error: undefined})

    const createNewUserApiHandler = async (firstName: string, lastName: string, userName: string, password: string) => {
        setLoading(true)

        try{
            const response = await createNewUser.execute(firstName, lastName, userName, password)
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
    
    return {createNewUserApiHandler, requestState} as const 
}