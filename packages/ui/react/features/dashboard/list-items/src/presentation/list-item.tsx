import React from 'react'
import {ITodoListItem} from '@core/entities'
import {ListItemProvider, useUIContext} from '@reactui/contexts'
import { ListBackground } from '@reactui/common'
import {SelectListItemButton} from '../components/select-list-item-button/presentation/select-list-item-button'
import {CompleteListItemButton} from '../components/complete-list-item-button/presentation/complete-list-item-button'
import {DeleteListItemButton} from '../components/delete-list-item-button/presentation/delete-list-item-button'

export interface IListItem{
    item: ITodoListItem;
}

export const ListItem = ({item}: IListItem): JSX.Element => {
    const { state } = useUIContext()
    const { selectedTodoListItemId } = state

    return(
        <ListItemProvider listItem = {item}>
            <ListBackground selectedId = {selectedTodoListItemId} currentId = {item._id}>
                <SelectListItemButton />
                <CompleteListItemButton />
                <DeleteListItemButton />
            </ListBackground>
        </ListItemProvider>
    )
    
}