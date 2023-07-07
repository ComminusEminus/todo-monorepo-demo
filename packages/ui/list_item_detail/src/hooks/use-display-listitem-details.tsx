import React, { useState} from 'react'
import {getTodoListItemById} from '@core/di'
import {ITodoListItem} from '@core/entities'
import {mapListItemDetailView, IMapListItemDetailView} from '@ui/list-item-detail'



export const useDisplayListItemDetails = () => {
    const [displayItem, setDisplayItem] = useState<IMapListItemDetailView | undefined>(undefined)
    
    const handler = async (listItemId: string, profileId: string) => {
        try{
            const response = await getTodoListItemById.execute(listItemId, profileId)
            const mappedResponse = mapListItemDetailView(response);
            setDisplayItem(mappedResponse);
        }catch(err){
            console.log('An error occured retrieviing list item by id')
        }
    }

    

    return {handler, displayItem} as const 
}



