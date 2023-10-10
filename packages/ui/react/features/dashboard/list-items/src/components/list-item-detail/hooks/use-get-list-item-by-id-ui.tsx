import React, { useState } from 'react'
import { ITodoListItem } from '@core/entities'


export const useGetListItemByIdUi = () => {
    const [displayItem, setDisplayItem] = useState<ITodoListItem | undefined>(undefined)
    
    
   
    return {
        displayItem
    }
}
