import React from 'react'
import {ListItem} from './list-item'
import {ITodoListItemDescription} from '@core/entities'
import {Text} from '@design/text'

interface ITodoListItems{
    list?: ITodoListItemDescription[];
}

export const MapTodoListItems = (props:ITodoListItems)=> {
    
    return(
        <>
            {
                !props.list && <Text text = {'...Loading'} />
            }
            {
                props.list && props.list.map((listItem: ITodoListItemDescription, index: number) => {
                    return (
                        <ListItem item = {listItem} key = {index} />
                    )
                })
        }
        </>
    )
    
}