import React from 'react'
import {ListItemProvider} from '@reactui/contexts'
import {TodoListItemBackground} from '../containers/todo-list-item-background'
import {SelectListItemButton} from '../buttons/select-list-item-button'
import {CompleteListItemButton} from '../buttons/complete-list-item-button'
import {DeleteListItemButton} from '../buttons/delete-list-item-button'
import {ITodoListItem} from '@core/entities'

export interface IListItem{
    item: ITodoListItem;
}

export const ListItem = ({item}: IListItem): JSX.Element => {
    return(
        <ListItemProvider listItem = {item}>
            <TodoListItemBackground>
                <SelectListItemButton />
                <CompleteListItemButton />
                <DeleteListItemButton />
            </TodoListItemBackground>
        </ListItemProvider>
    )
    
}