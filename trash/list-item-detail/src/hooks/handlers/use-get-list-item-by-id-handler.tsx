import React, { useState, useEffect} from 'react'
import {ITodoListItem} from '@core/entities'
import {useGetListItemByIdUi} from '../ui-interaction/use-get-list-item-by-id-ui'

export const useGetListItemByIdHandler = () => {
    const [displayItem, setDisplayItem] = useState<ITodoListItem | undefined>(undefined)
    const {getListItemApiState} = useGetListItemByIdUi()
    const {returnValue} = getListItemApiState
    const {message, listItem, loading} = returnValue

    useEffect(() => {
        if(message === 'ok'){
            setDisplayItem(listItem)
        }
    }, [message])

    return {
        loading,
        displayItem
    }
}
