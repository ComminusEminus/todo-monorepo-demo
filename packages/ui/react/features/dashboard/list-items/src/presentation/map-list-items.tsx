import React from 'react'
import {useTheme} from 'styled-components'
import {ITodoListItem} from '@core/entities'
import {Text} from '@reactui/common'
import {useSelectedListContext} from '@reactui/contexts'
import {ListItem} from './list-item'

export interface IMapListItems{
    filteredList: any;
}


export const MapListItems = ({filteredList}:IMapListItems)=> {
    const theme = useTheme()
    
    if(!filteredList){
        return(
            <Text text = {'No List Selected'} color = {theme.colors.neutral.onBackground} fontSize = {theme.space.md} fontFamily = {'Albert_Sans'} />
        )
    }else if(filteredList.length > 0){
        return(
            filteredList.map((listItem: ITodoListItem) => {
                return (
                    <ListItem item = {listItem} key = {listItem._id} />
                )
            })
        )
    }else{
        return(
            <Text text = {'No Todo Items in List'} color = {theme.colors.neutral.onBackground} fontSize = {theme.space.md} fontFamily = {'Albert_Sans'} />
        )
    }
}

