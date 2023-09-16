import {useDisplayListItemDetails} from './use-display-listitem-details'
import {useUIContext} from '@ui/contexts';
import React, {useEffect, useState, useRef} from 'react'
import {ITodoListItem} from '@core/entities'

export const useDisplayListItemDetailsUI = () => {
    const {state, dispatch} = useUIContext()
    const {fetchListItemDetails, displayItem} = useDisplayListItemDetails()
    const {selectedTodoListItemId} = state
    useEffect(() => {
        if(!selectedTodoListItemId){
            return;
        }
        fetchListItemDetails(selectedTodoListItemId)
        
    },[selectedTodoListItemId])

    return {displayItem} as const 
}