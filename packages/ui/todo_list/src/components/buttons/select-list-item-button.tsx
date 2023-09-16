import React from 'react'
import {useSelectTodoListItem} from '../../hooks/ui-interactions/use-select-todolist-item'
import {Container} from '@design/container'
import {Text} from '@design/text'
import {ButtonProps, ButtonStyle} from '@design/buttons'
import styled, {useTheme, css} from 'styled-components'
import {SelectButton} from '@ui/common'
import {TextButton} from '@design/buttons'

export const SelectListItemButton = () => {
    const {selectListItemForDetailViewHandler, resultValues} = useSelectTodoListItem()
    const {listItemData} = resultValues

    const theme = useTheme()
    if(listItemData){
        return(
            <TextButton 
                color = {theme.colors.neutral.onSurface} 
                text = {listItemData.title}
                onClick = {() => selectListItemForDetailViewHandler(listItemData._id)}
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
