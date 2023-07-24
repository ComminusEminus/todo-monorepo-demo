import React from 'react'
import {ListsProvider} from '@ui/contexts'
import {
    ListsStateWrapper,
    TodoListsBackground,
    SelectListButton,
    DeleteListButton
} from './index'
import {ITodoListAsListDescription} from '@core/entities'

export interface IListsItem{
    item: ITodoListAsListDescription;
}

export const ListsItem = (props: IListsItem) => {
    
    return(
        <ListsProvider list = {props.item}>
            <ListsStateWrapper>
                <TodoListsBackground listId = {props.item.id}>
                    <SelectListButton />
                    <DeleteListButton />
                </TodoListsBackground>
            </ListsStateWrapper>
        </ListsProvider>
    )
    
}