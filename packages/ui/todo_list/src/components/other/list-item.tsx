import React from 'react'
import {ListItemProvider} from '@ui/contexts'
import {TodoListItemState} from '../containers/list-item-state-wrapper'
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
            <TodoListItemState>
                <TodoListItemBackground>
                    <SelectListItemButton />
                    <CompleteListItemButton />
                    <DeleteListItemButton />
                </TodoListItemBackground>
            </TodoListItemState>
        </ListItemProvider>
    )
    
}