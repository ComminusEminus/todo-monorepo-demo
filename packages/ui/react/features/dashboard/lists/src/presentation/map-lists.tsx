import React from 'react'
import { useTheme } from 'styled-components'
import { ITodoList } from '@core/entities'
import { useAllListsContext } from '@reactui/contexts'
import { Text } from '@reactui/common'
import { ListsItem } from './lists-item'


export interface IMapLists{
    allLists: any;
}

export const MapLists = ({allLists}: IMapLists) => {
    const theme = useTheme()


    if(!allLists){

        return(
                <Text 
                    text={'You currently have nothing Todo!'} 
                    color={theme.colors.neutral.onBackground} 
                    fontSize={'xs'} fontFamily={'Albert_Sans'} 
                />
        )
    }else{
        return(
            allLists.map((listDescription: ITodoList) => {
                return (
                    <ListsItem item={listDescription} key={listDescription._id} />
                )
            })
        )
          
    }

}