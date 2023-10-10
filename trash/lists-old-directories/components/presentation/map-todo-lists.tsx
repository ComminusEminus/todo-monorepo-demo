import React from 'react'
import {ListsItem} from './lists-item'
import {ITodoList} from '@core/entities'

interface ITodoLists{
    lists: ITodoList[];
}


export const MapTodoLists = (props: ITodoLists) => {
    return(
        <>
            {
                props.lists.map((listDescription: ITodoList) => {
                    
                    return(
                        <ListsItem item = {listDescription} key = {listDescription._id} />                   
                    )
                })
            }
        </>
    )
    
}