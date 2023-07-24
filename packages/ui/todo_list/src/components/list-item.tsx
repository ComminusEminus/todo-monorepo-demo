import React from 'react'
import {ListItemProvider} from '@ui/contexts'
import {
    TodoListItemState,
    TodoListItemBackground,
    SelectListItemButton,
    CompleteListItemButton,
    DeleteListItemButton,
} from '../index'

import {ITodoListItemDescription} from '@core/entities'

export interface IListItem{
    item: ITodoListItemDescription;
}

export const ListItem = (props: IListItem): JSX.Element => {
    return(
        <ListItemProvider listItem = {props.item}>
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