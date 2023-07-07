import React from 'react'
import {useGetTodoListById, ITodoListItemDescription, ListItem} from '@ui/todo-list'

interface ITodoListItems{
    list: ITodoListItemDescription[];
}

export const MapTodoListItems = (props:ITodoListItems)=> {
    
    return(
        <>
            {
            props.list.map((listItem: ITodoListItemDescription, index: number) => {
                return (
                    <ListItem item = {listItem} key = {index} />
                )
            })
        }
        </>
    )
    
}