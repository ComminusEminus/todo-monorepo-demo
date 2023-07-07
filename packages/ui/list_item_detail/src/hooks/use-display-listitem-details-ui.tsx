import {useDisplayListItemDetails} from '@ui/display-list-item'
import {useUIContext} from '@ui/contexts';
import React, {useEffect, useState, useRef} from 'react'
import {ITodoListItem} from '@core/entities'

export const useDisplayListItemDetailsUI = () => {
    const {viewTodoListItem, userProfile} = useUIContext()
    const {handler, displayItem} = useDisplayListItemDetails()

    useEffect(() => {
        if(!userProfile){
            return;
        }
        if(!viewTodoListItem){
            return;
        }
        handler(viewTodoListItem, userProfile.id)
        
    },[viewTodoListItem])

    return {displayItem} as const 
}