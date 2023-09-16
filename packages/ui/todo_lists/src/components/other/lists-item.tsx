import React from 'react'
import {ListsProvider} from '@ui/contexts'
import { ListsStateWrapper} from '../containers/lists-state-wrapper'
import { TodoListsBackground} from '../containers/todo-lists-background'
import { SelectListButton} from '../buttons/select-list-button'
import { DeleteListButton} from '../buttons/delete-list-button'
import {ITodoList} from '@core/entities'

export interface IListsItem{
    item: ITodoList;
}

export const ListsItem = (props: IListsItem) => {
    const {item} = props
    
    return(
        <ListsProvider list = {item}>
            <ListsStateWrapper>
                <TodoListsBackground listId = {item._id}>
                    <SelectListButton />
                    <DeleteListButton />
                </TodoListsBackground>
            </ListsStateWrapper>
        </ListsProvider>
    )
    
}