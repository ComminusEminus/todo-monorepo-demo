import React from 'react'
import {ListsItem} from './index'
import {ITodoListAsListDescription} from '@core/entities'

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