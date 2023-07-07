import React from 'react'
import {ITodoListAsListDescription, ListsItem} from '@ui/todo-lists'


interface ITodoLists{
    lists: ITodoListAsListDescription[];
}


export const MapTodoLists = (props: ITodoLists) => {
    return(
        <>
            {
                props.lists.map((listDescription: ITodoListAsListDescription, index: number) => {
                    return(
                        <ListsItem item = {listDescription} key = {index} />                   
                    )
                })
            }
        </>
    )
    
}