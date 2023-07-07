import React from 'react'
import {ListItemProvider} from '@ui/contexts'
import {
    TodoListItemState,
    TodoListItemBackground,
    SelectListItemButton,
    CompleteListItemButton,
    DeleteListItemButton,
    ITodoListItemDescription
} from '@ui/todo-list'

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