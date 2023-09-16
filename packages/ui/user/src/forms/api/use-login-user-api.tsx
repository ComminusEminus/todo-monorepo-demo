import {loginUser} from '@core/di'
import React, {useState} from 'react'
import {ILoginUserResponseDTO} from '@core/entities'
import {mapLoginResponse} from '../../services/user-ui-services'

export const useLoginUserApi = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState< ILoginUserResponseDTO>({message:undefined, error:undefined})
    
    const loginApiHandler = async (userProfile_userName: string, password: string) => {
        
        try{
            const response = await loginUser.execute(userProfile_userName, password)
            
            setLoading(false)
            const mappedResponse = mapLoginResponse(response)
            console.log(mappedResponse)
            setReturnValue(prevState => {
                return {...prevState, message: mappedResponse.message}
            })
            
        }catch(err){
            console.log(err)
            setLoading(false)
            setError(true)
            setReturnValue(prevState => {
                return {...prevState, error: err}
            })
        }
    }
    
    const requestState = {
        loading, error, returnValue
    }
    console.log('useLoginUserApi: ')
    console.log(requestState)
    return {loginApiHandler, requestState} as const;
}