import React, {useState} from 'react'
import {loginUser} from '@ui/config'
import {ILoginUserResponseDTO} from '@core/entities'


export const useLoginUserApi = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState< ILoginUserResponseDTO>({message:undefined, error:undefined})
    
    const loginApiHandler = async (userProfile_userName: string, password: string) => {
        
        try{
            const response = await loginUser.execute(userProfile_userName, password)
            setLoading(false)
            const {data} = response
            const {message, error} = data
            setReturnValue((prevState: ILoginUserResponseDTO) => {
                return {...prevState, message: message}
            })
            
        }catch(err){
            setLoading(false)
            setReturnValue((prevState: ILoginUserResponseDTO) => {
                return {...prevState, error: err}
            })
        }
    }
    
    const requestState = {
        loading, returnValue
    }

    return {loginApiHandler, requestState} as const;
}