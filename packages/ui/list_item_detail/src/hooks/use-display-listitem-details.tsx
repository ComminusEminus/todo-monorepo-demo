import React, { useState} from 'react'
import {getTodoListItemById} from '@core/di'
import {ITodoListItem} from '@core/entities'
import {mapListItemDetailView} from '../services/list-detail-services'



export const useDisplayListItemDetails = () => {
    const [displayItem, setDisplayItem] = useState<ITodoListItem | undefined>(undefined)
    
    const handler = async (listItemId: string) => {
        try{
            const response = await getTodoListItemById.execute(listItemId)
            const mappedResponse = mapListItemDetailView(response);
            setDisplayItem(mappedResponse);
        }catch(err){
            console.log('An error occured retrieviing list item by id')
        }
    }

    

    return {handler, displayItem} as const 
}



