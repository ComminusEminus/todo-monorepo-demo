import React, { useState} from 'react'
import {getTodoListItemById} from '@ui/config'
import {IGetListItemByIdResponseDTO} from '@core/entities'



export const useGetListItemById = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [returnValue, setReturnValue] = useState<IGetListItemByIdResponseDTO>({ listItem: undefined,message: undefined, error: undefined })
    
    const getListItemByIdApiHandler = async (listItemId: string) => {
        setLoading(true)
        try{
            const response = await getTodoListItemById.execute(listItemId)
            setLoading(false)
            const {data} = response
            const {listItem, message} = data
            
            setReturnValue((returnValue: IGetListItemByIdResponseDTO) => { 
                return {
                    ...returnValue, 
                    listItem: listItem,
                    message: message 
                }
            })
        }catch(err){
            setLoading(false)
            setReturnValue((returnValue: IGetListItemByIdResponseDTO) => { 
                return {
                    ...returnValue, 
                    error: err 
                }
            })
        }
    }
    const getListItemApiState = {
        loading, 
        returnValue
    }
    return {getListItemByIdApiHandler, getListItemApiState} as const 
}



