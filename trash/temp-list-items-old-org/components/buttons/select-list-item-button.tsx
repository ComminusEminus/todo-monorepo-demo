import React from 'react'
import {useSelectListItemHandler} from '../../hooks/handlers/use-select-list-item-handler'
import {useTheme} from 'styled-components'
import {TextButton, Text} from '@reactui/buttons'

export const SelectListItemButton = () => {
    const {selectListItemHandler, resultValues} = useSelectListItemHandler()
    const {listItemData} = resultValues

    const theme = useTheme()
    if(listItemData){
        return(
            <TextButton 
                color = {theme.colors.neutral.onSurface} 
                text = {listItemData.title}
                onClick = {() => selectListItemHandler(listItemData._id)}
                width = {'100%'}
                buttonStateWidth = {'100%'}
                textAlign = {'left'}
                
            />
        )
    }else{
        return(
            <Text text = {'...Loading'} color = {theme.colors.neutral.onBackground} fontSize = {'xs'} fontFamily = {'Barlow'}/>
        )
    }

}
