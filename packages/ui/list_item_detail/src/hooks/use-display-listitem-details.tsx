import React, { useState} from 'react'
import {getTodoListItemById} from '@core/di'
import {ITodoListItem} from '@core/entities'
import {mapListItemDetailView} from '../services/list-detail-services'



export const useDisplayListItemDetails = () => {
    const [displayItem, setDisplayItem] = useState<ITodoListItem | undefined>(undefined)
    
    const fetchListItemDetails = async (listItemId: string) => {
        try{
            const response = await getTodoListItemById.execute(listItemId)
            //const mappedResponse = mapListItemDetailView(response);
            const {data} = response
            const {listItem} = data
            setDisplayItem(listItem);
        }catch(err){
            console.log('useDisplayListItemDetails error: ' + err)

        }
    }

    return {fetchListItemDetails, displayItem} as const 
}



