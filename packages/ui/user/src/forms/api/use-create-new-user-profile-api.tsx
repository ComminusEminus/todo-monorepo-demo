import {createNewUser} from '@core/di'
import React, {useState, useEffect} from 'react'
import {IUpdateListItemResponseDTO} from '@core/entities'

export const useCreateNewUserProfileApi = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState<IUpdateListItemResponseDTO>({message: undefined, error: undefined})

    const createNewUserApiHandler = async (firstName: string, lastName: string, userName: string, password: string) => {
        setLoading(true)

        try{
            const response = await createNewUser.execute(firstName, lastName, userName, password)
            const {data} = response
            setLoading(false)
            const {message, error}: IUpdateListItemResponseDTO = data
            setReturnValue((returnValue) => ({...returnValue, message: message}))
            console.log('create new user: ' + message)
        }catch(err){
            setLoading(false)
            setError(true)
            setReturnValue((returnValue) => ({...returnValue, error: err}))
        }
    }
    const requestState = {
        loading, error, returnValue
    }
    
    return {createNewUserApiHandler, requestState} as const 
}