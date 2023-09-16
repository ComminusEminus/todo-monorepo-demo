import React from 'react'
import {ListItem} from './list-item'
import {ITodoListItem} from '@core/entities'
import {Text} from '@design/text'

interface ITodoListItems{
    list?: ITodoListItem[];
}

export const MapTodoListItems = (props:ITodoListItems)=> {
    console.log(props.list)
    return(
        <>
            {
                !props.list && <Text text = {'...Loading'} />
            }
            {
                props.list && props.list.map((listItem: ITodoListItem) => {
                    return (
                        <ListItem item = {listItem} key = {listItem._id} />
                    )
                })
        }
        </>
    )
    
}