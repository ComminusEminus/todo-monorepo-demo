import React from 'react'
import {ListsProvider} from '@ui/context'
import {
    ListsStateWrapper,
    TodoListsBackground,
    SelectListButton,
    DeleteListButton,
    ITodoListAsListDescription
} from '@ui/todo-lists'


export interface IListsItem{
    item?: ITodoListAsListDescription;
}

export const ListsItem = (props: IListsItem) => {
    return(
        <ListsProvider list = {props.item}>
            <ListsStateWrapper>
                <TodoListsBackground>
                    <SelectListButton />
                    <DeleteListButton />
                </TodoListsBackground>
            </ListsStateWrapper>
        </ListsProvider>
    )
    
}